import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import type { UserId } from "@/lib/users";
import { defaultProfile, sanitizeProfile, sanitizeWeights } from "@/lib/settingsSchema";

export type StoredSettings = Record<string, unknown>;

const fileNameFor = (user: UserId) => `calor-settings-${user}.json`;

// The app used to keep a single shared settings file before per-user storage
// was introduced. Ziv was the sole user of that file, so his per-user reads
// fall back to it and self-heal by merging anything missing back in.
const legacyFileName = "calor-settings.json";
const legacyOwner: UserId = "ziv";
const defaultProfileJson = JSON.stringify(sanitizeProfile(defaultProfile));

async function canUseDirectory(path: string) {
  try {
    await mkdir(path, { recursive: true });
    await writeFile(join(path, ".write-test"), "ok");
    return true;
  } catch {
    return false;
  }
}

export async function getSettingsFilePath(user: UserId) {
  const preferred = process.env.DATA_DIR || "/data";
  if (await canUseDirectory(preferred)) {
    return join(preferred, fileNameFor(user));
  }

  const fallback = join(process.cwd(), ".data");
  await mkdir(fallback, { recursive: true });
  return join(fallback, fileNameFor(user));
}

async function readJsonFile(path: string): Promise<StoredSettings> {
  try {
    const raw = await readFile(path, "utf8");
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

export async function readSettings(user: UserId): Promise<StoredSettings> {
  const path = await getSettingsFilePath(user);
  const current = await readJsonFile(path);

  if (user !== legacyOwner) return current;

  const legacyPath = join(dirname(path), legacyFileName);
  const legacy = await readJsonFile(legacyPath);
  if (Object.keys(legacy).length === 0) return current;

  const currentWeights = sanitizeWeights((current as { weights?: Record<string, number> }).weights);
  const legacyWeights = sanitizeWeights((legacy as { weights?: Record<string, number> }).weights);
  const missingWeights = Object.keys(legacyWeights).filter((dateKey) => !(dateKey in currentWeights));

  const currentProfile = sanitizeProfile((current as { profile?: unknown }).profile as never);
  const legacyProfile = sanitizeProfile((legacy as { profile?: unknown }).profile as never);
  const currentProfileIsUntouched = JSON.stringify(currentProfile) === defaultProfileJson;
  const shouldRecoverProfile = currentProfileIsUntouched && JSON.stringify(legacyProfile) !== defaultProfileJson;

  if (missingWeights.length === 0 && !shouldRecoverProfile) return current;

  const recovered: StoredSettings = {
    profile: shouldRecoverProfile ? legacyProfile : currentProfile,
    weights: { ...legacyWeights, ...currentWeights },
  };

  await writeSettings(user, recovered);
  return recovered;
}

export async function writeSettings(user: UserId, settings: StoredSettings) {
  const path = await getSettingsFilePath(user);
  await mkdir(dirname(path), { recursive: true });

  const tempPath = `${path}.${process.pid}.${Date.now()}.tmp`;
  await writeFile(tempPath, JSON.stringify(settings, null, 2), "utf8");
  await rename(tempPath, path);
}

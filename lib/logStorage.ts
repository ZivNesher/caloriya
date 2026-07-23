import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import type { UserId } from "@/lib/users";

export type StoredLogs = Record<string, unknown>;

const fileNameFor = (user: UserId) => `calor-logs-${user}.json`;

// The app used to keep a single shared log file before per-user storage was
// introduced. Ziv was the sole user of that file, so his per-user reads fall
// back to it and self-heal by merging anything missing back in.
const legacyFileName = "calor-logs.json";
const legacyOwner: UserId = "ziv";

async function canUseDirectory(path: string) {
  try {
    await mkdir(path, { recursive: true });
    await writeFile(join(path, ".write-test"), "ok");
    return true;
  } catch {
    return false;
  }
}

export async function getDataFilePath(user: UserId) {
  const preferred = process.env.DATA_DIR || "/data";
  if (await canUseDirectory(preferred)) {
    return join(preferred, fileNameFor(user));
  }

  const fallback = join(process.cwd(), ".data");
  await mkdir(fallback, { recursive: true });
  return join(fallback, fileNameFor(user));
}

async function readJsonFile(path: string): Promise<StoredLogs> {
  try {
    const raw = await readFile(path, "utf8");
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

export async function readLogs(user: UserId): Promise<StoredLogs> {
  const path = await getDataFilePath(user);
  const current = await readJsonFile(path);

  if (user !== legacyOwner) return current;

  const legacyPath = join(dirname(path), legacyFileName);
  const legacy = await readJsonFile(legacyPath);
  const missingFromCurrent = Object.keys(legacy).filter((dateKey) => !(dateKey in current));

  if (missingFromCurrent.length === 0) return current;

  const recovered: StoredLogs = { ...legacy, ...current };
  await writeLogs(user, recovered);
  return recovered;
}

export async function writeLogs(user: UserId, logs: StoredLogs) {
  const path = await getDataFilePath(user);
  await mkdir(dirname(path), { recursive: true });

  const tempPath = `${path}.${process.pid}.${Date.now()}.tmp`;
  await writeFile(tempPath, JSON.stringify(logs, null, 2), "utf8");
  await rename(tempPath, path);

  return path;
}

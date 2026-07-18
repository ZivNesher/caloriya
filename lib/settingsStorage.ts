import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

export type StoredSettings = Record<string, unknown>;

const fileName = "calor-settings.json";

async function canUseDirectory(path: string) {
  try {
    await mkdir(path, { recursive: true });
    await writeFile(join(path, ".write-test"), "ok");
    return true;
  } catch {
    return false;
  }
}

export async function getSettingsFilePath() {
  const preferred = process.env.DATA_DIR || "/data";
  if (await canUseDirectory(preferred)) {
    return join(preferred, fileName);
  }

  const fallback = join(process.cwd(), ".data");
  await mkdir(fallback, { recursive: true });
  return join(fallback, fileName);
}

export async function readSettings(): Promise<StoredSettings> {
  const path = await getSettingsFilePath();

  try {
    const raw = await readFile(path, "utf8");
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

export async function writeSettings(settings: StoredSettings) {
  const path = await getSettingsFilePath();
  await mkdir(dirname(path), { recursive: true });

  const tempPath = `${path}.${process.pid}.${Date.now()}.tmp`;
  await writeFile(tempPath, JSON.stringify(settings, null, 2), "utf8");
  await rename(tempPath, path);
}

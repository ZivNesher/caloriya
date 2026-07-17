import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

export type StoredLogs = Record<string, unknown>;

const fileName = "calor-logs.json";

async function canUseDirectory(path: string) {
  try {
    await mkdir(path, { recursive: true });
    await writeFile(join(path, ".write-test"), "ok");
    return true;
  } catch {
    return false;
  }
}

export async function getDataFilePath() {
  const preferred = process.env.DATA_DIR || "/data";
  if (await canUseDirectory(preferred)) {
    return join(preferred, fileName);
  }

  const fallback = join(process.cwd(), ".data");
  await mkdir(fallback, { recursive: true });
  return join(fallback, fileName);
}

export async function readLogs(): Promise<StoredLogs> {
  const path = await getDataFilePath();

  try {
    const raw = await readFile(path, "utf8");
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

export async function writeLogs(logs: StoredLogs) {
  const path = await getDataFilePath();
  await mkdir(dirname(path), { recursive: true });

  const tempPath = `${path}.${process.pid}.${Date.now()}.tmp`;
  await writeFile(tempPath, JSON.stringify(logs, null, 2), "utf8");
  await rename(tempPath, path);

  return path;
}

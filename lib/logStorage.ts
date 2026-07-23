import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import type { UserId } from "@/lib/users";

export type StoredLogs = Record<string, unknown>;

const fileNameFor = (user: UserId) => `calor-logs-${user}.json`;

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

export async function readLogs(user: UserId): Promise<StoredLogs> {
  const path = await getDataFilePath(user);

  try {
    const raw = await readFile(path, "utf8");
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

export async function writeLogs(user: UserId, logs: StoredLogs) {
  const path = await getDataFilePath(user);
  await mkdir(dirname(path), { recursive: true });

  const tempPath = `${path}.${process.pid}.${Date.now()}.tmp`;
  await writeFile(tempPath, JSON.stringify(logs, null, 2), "utf8");
  await rename(tempPath, path);

  return path;
}

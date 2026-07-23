import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { readLogs, writeLogs } from "@/lib/logStorage";
import { isUserId, type UserId } from "@/lib/users";
import { cookieNameFor, verifySessionToken } from "@/lib/auth";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

async function authorize(request: Request): Promise<UserId | null> {
  const { searchParams } = new URL(request.url);
  const user = searchParams.get("user");
  if (!isUserId(user)) return null;

  const store = await cookies();
  const token = store.get(cookieNameFor(user))?.value;
  return verifySessionToken(user, token) ? user : null;
}

export async function GET(request: Request) {
  const user = await authorize(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const logs = await readLogs(user);
  return NextResponse.json({ logs });
}

export async function PUT(request: Request) {
  const user = await authorize(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const logs = (body as { logs?: unknown })?.logs;

  if (!logs || typeof logs !== "object" || Array.isArray(logs)) {
    return NextResponse.json({ error: "Invalid logs payload" }, { status: 400 });
  }

  await writeLogs(user, logs as Record<string, unknown>);
  return NextResponse.json({ ok: true });
}

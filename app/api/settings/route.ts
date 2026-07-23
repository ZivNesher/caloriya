import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { readSettings, writeSettings } from "@/lib/settingsStorage";
import { sanitizeSettings } from "@/lib/settingsSchema";
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

  const settings = sanitizeSettings(await readSettings(user));
  return NextResponse.json({ settings });
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

  const settings = (body as { settings?: unknown })?.settings;

  if (!settings || typeof settings !== "object" || Array.isArray(settings)) {
    return NextResponse.json({ error: "Invalid settings payload" }, { status: 400 });
  }

  const safeSettings = sanitizeSettings(settings);
  await writeSettings(user, safeSettings);
  return NextResponse.json({ ok: true, settings: safeSettings });
}

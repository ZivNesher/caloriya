import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { isUserId, userIds } from "@/lib/users";
import {
  cookieNameFor,
  createSessionToken,
  expectedPin,
  safeEqual,
  verifySessionToken,
  SESSION_MAX_AGE_SECONDS,
} from "@/lib/auth";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userParam = searchParams.get("user");
  const candidates = isUserId(userParam) ? [userParam] : userIds;

  const store = await cookies();
  for (const candidate of candidates) {
    const token = store.get(cookieNameFor(candidate))?.value;
    if (verifySessionToken(candidate, token)) {
      return NextResponse.json({ authenticated: true, user: candidate });
    }
  }

  return NextResponse.json({ authenticated: false });
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { pin, candidates } = (body ?? {}) as { pin?: unknown; candidates?: unknown };

  if (typeof pin !== "string" || !pin) {
    return NextResponse.json({ error: "חסר קוד" }, { status: 400 });
  }

  const candidateList = Array.isArray(candidates) ? candidates.filter(isUserId) : [];
  if (!candidateList.length) {
    return NextResponse.json({ error: "בקשה לא תקינה" }, { status: 400 });
  }

  for (const user of candidateList) {
    if (safeEqual(pin, expectedPin(user))) {
      const token = createSessionToken(user);
      const response = NextResponse.json({ ok: true, user });
      response.cookies.set(cookieNameFor(user), token, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: SESSION_MAX_AGE_SECONDS,
      });
      return response;
    }
  }

  return NextResponse.json({ error: "קוד שגוי" }, { status: 401 });
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const userParam = searchParams.get("user");
  const response = NextResponse.json({ ok: true });

  if (isUserId(userParam)) {
    response.cookies.delete(cookieNameFor(userParam));
  }

  return response;
}

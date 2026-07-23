import { createHmac, timingSafeEqual } from "node:crypto";
import { type UserId } from "./users";

const SECRET = process.env.AUTH_SECRET || "caloriya-dev-secret-change-me";

if (!process.env.AUTH_SECRET) {
  console.warn(
    "[auth] AUTH_SECRET is not set. Using an insecure default — set AUTH_SECRET in your Railway env vars.",
  );
}

export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

const fallbackPins: Record<UserId, string> = { ziv: "1234", mama: "5678" };

function sign(payload: string) {
  return createHmac("sha256", SECRET).update(payload).digest("base64url");
}

export function cookieNameFor(user: UserId) {
  return `calor-auth-${user}`;
}

export function createSessionToken(user: UserId) {
  const exp = Date.now() + SESSION_MAX_AGE_SECONDS * 1000;
  const payload = `${user}.${exp}`;
  return `${payload}.${sign(payload)}`;
}

export function verifySessionToken(user: UserId, token: string | undefined | null) {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 3) return false;

  const [tokenUser, expRaw, sig] = parts;
  if (tokenUser !== user) return false;

  const exp = Number(expRaw);
  if (!Number.isFinite(exp) || exp < Date.now()) return false;

  return safeEqual(sig, sign(`${tokenUser}.${expRaw}`));
}

export function expectedPin(user: UserId) {
  const fromEnv = process.env[`PIN_${user.toUpperCase()}`];
  return fromEnv && /^\d{4,8}$/.test(fromEnv) ? fromEnv : fallbackPins[user];
}

export function safeEqual(a: string, b: string) {
  const bufA = new Uint8Array(Buffer.from(a));
  const bufB = new Uint8Array(Buffer.from(b));
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

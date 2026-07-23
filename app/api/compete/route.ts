import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { readLogs } from "@/lib/logStorage";
import { readSettings } from "@/lib/settingsStorage";
import { sanitizeSettings } from "@/lib/settingsSchema";
import { userIds, users, type UserId } from "@/lib/users";
import { cookieNameFor, verifySessionToken } from "@/lib/auth";
import {
  calculateDailyTarget,
  emptyDay,
  getCurrentWeight,
  netCalories,
  toDateKey,
  totalCalories,
  weekKeys,
  workoutCalories,
  type Logs,
} from "@/lib/calorieMath";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

async function authorizedViewer(): Promise<UserId | null> {
  const store = await cookies();
  for (const user of userIds) {
    const token = store.get(cookieNameFor(user))?.value;
    if (verifySessionToken(user, token)) return user;
  }
  return null;
}

export async function GET() {
  const viewer = await authorizedViewer();
  if (!viewer) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const today = toDateKey(new Date());
  const days = weekKeys(today);

  const results = await Promise.all(
    userIds.map(async (id) => {
      const [rawLogs, rawSettings] = await Promise.all([readLogs(id), readSettings(id)]);
      const logs = rawLogs as Logs;
      const settings = sanitizeSettings(rawSettings);
      const currentWeight = getCurrentWeight(settings.weights, today, settings.profile.targetWeightKg);
      const goal = calculateDailyTarget(settings.profile, currentWeight);

      const daily = days.map((dateKey) => {
        const day = logs[dateKey] ?? emptyDay();
        const food = totalCalories(day);
        const workout = workoutCalories(day);
        const net = Math.max(0, netCalories(day));
        return {
          date: dateKey,
          net,
          food,
          workout,
          hasEntries: food > 0 || workout > 0,
        };
      });

      return {
        id,
        label: users[id].label,
        goal,
        today: daily.find((entry) => entry.date === today) ?? null,
        week: daily,
      };
    }),
  );

  return NextResponse.json({ today, days, viewer, users: results });
}

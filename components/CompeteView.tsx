"use client";

import { useEffect, useMemo, useState } from "react";
import { PageNav } from "@/components/PageNav";
import type { UserId } from "@/lib/users";

type DayStat = {
  date: string;
  net: number;
  food: number;
  workout: number;
  hasEntries: boolean;
};

type UserStat = {
  id: UserId;
  label: string;
  goal: number;
  today: DayStat | null;
  week: DayStat[];
};

type CompeteResponse = {
  today: string;
  days: string[];
  users: UserStat[];
};

const weekdayFormatter = new Intl.DateTimeFormat("he-IL", { weekday: "short" });
const dateFormatter = new Intl.DateTimeFormat("he-IL", { day: "numeric", month: "short" });

function fromDateKey(key: string) {
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function CompeteView() {
  const [data, setData] = useState<CompeteResponse | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const response = await fetch("/api/compete", { cache: "no-store" });
        if (!response.ok) throw new Error("failed");
        const payload = (await response.json()) as CompeteResponse;
        if (!cancelled) setData(payload);
      } catch {
        if (!cancelled) setError("לא הצלחנו לטעון את נתוני התחרות");
      }
    };

    void load();
    const interval = window.setInterval(load, 60_000);
    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, []);

  const score = useMemo(() => {
    if (!data || data.users.length !== 2) return null;
    const [a, b] = data.users;
    let winsA = 0;
    let winsB = 0;

    for (const dateKey of data.days) {
      if (dateKey > data.today) continue;
      const dayA = a.week.find((entry) => entry.date === dateKey);
      const dayB = b.week.find((entry) => entry.date === dateKey);
      if (!dayA?.hasEntries || !dayB?.hasEntries) continue;

      const pctA = dayA.net / a.goal;
      const pctB = dayB.net / b.goal;
      if (pctA < pctB) winsA += 1;
      else if (pctB < pctA) winsB += 1;
    }

    return { a: winsA, b: winsB };
  }, [data]);

  if (error) {
    return (
      <>
        <PageNav current="compete" />
        <main className="app-shell">
          <p className="pin-error">{error}</p>
        </main>
      </>
    );
  }

  if (!data) {
    return (
      <>
        <PageNav current="compete" />
        <main className="app-shell">
          <p className="pin-loading">טוען נתוני תחרות…</p>
        </main>
      </>
    );
  }

  const [userA, userB] = data.users;
  const leader =
    score && score.a !== score.b ? (score.a > score.b ? userA : userB) : null;

  return (
    <>
      <PageNav current="compete" />
      <main className="app-shell">
        <section className="topbar" aria-label="תחרות קלוריות">
          <div>
            <p className="eyebrow">קלורית · תחרות</p>
            <h1>מי מנצח השבוע?</h1>
            <p className="subline">{dateFormatter.format(fromDateKey(data.today))}</p>
          </div>
          {score ? (
            <div className="score-card">
              <div className="score-row">
                <span>{userA.label}</span>
                <span>{userB.label}</span>
              </div>
              <div className="score-numbers">
                <strong>{score.a}</strong>
                <span>:</span>
                <strong>{score.b}</strong>
              </div>
              <p className="score-note">
                {leader ? `${leader.label} מובילה/מוביל השבוע` : "תיקו מושלם עד כה"}
              </p>
            </div>
          ) : null}
        </section>

        <section className="compete-today">
          {data.users.map((user) => {
            const today = user.today;
            const net = today?.net ?? 0;
            const percent = user.goal > 0 ? Math.round((net / user.goal) * 100) : 0;
            const over = net > user.goal;

            return (
              <div key={user.id} className={over ? "compete-card over" : "compete-card"}>
                <span className="today-label">{user.label} · היום</span>
                <strong className="big">
                  {net.toLocaleString("he-IL")} <small>קק"ל</small>
                </strong>
                <div className="macro-track">
                  <span style={{ width: `${Math.min(100, percent)}%` }} />
                </div>
                <small className="today-remaining">
                  {percent}% מהיעד ({user.goal.toLocaleString("he-IL")} קק"ל)
                </small>
              </div>
            );
          })}
        </section>

        <section className="panel">
          <div className="panel-head">
            <div>
              <p className="eyebrow">שבוע</p>
              <h2>קלוריות יום־ביום</h2>
            </div>
          </div>
          <div className="compete-week">
            {data.days.map((dateKey) => {
              const dayA = userA.week.find((entry) => entry.date === dateKey);
              const dayB = userB.week.find((entry) => entry.date === dateKey);
              const isFuture = dateKey > data.today;
              const bothLogged = dayA?.hasEntries && dayB?.hasEntries;
              const winner =
                bothLogged && dayA && dayB
                  ? dayA.net / userA.goal < dayB.net / userB.goal
                    ? userA.id
                    : dayB.net / userB.goal < dayA.net / userA.goal
                      ? userB.id
                      : null
                  : null;

              return (
                <div key={dateKey} className={isFuture ? "compete-day future" : "compete-day"}>
                  <span className="compete-day-label">
                    {weekdayFormatter.format(fromDateKey(dateKey))} {fromDateKey(dateKey).getDate()}
                  </span>
                  <div className="compete-day-bars">
                    <div className="compete-bar-row">
                      <small className={winner === userA.id ? "winner" : ""}>{userA.label}</small>
                      <div className="week-bars-track">
                        <i
                          style={{
                            width: `${dayA && userA.goal > 0 ? Math.min(100, (dayA.net / userA.goal) * 100) : 0}%`,
                          }}
                        />
                      </div>
                      <strong>{dayA ? dayA.net.toLocaleString("he-IL") : "-"}</strong>
                    </div>
                    <div className="compete-bar-row">
                      <small className={winner === userB.id ? "winner" : ""}>{userB.label}</small>
                      <div className="week-bars-track">
                        <i
                          style={{
                            width: `${dayB && userB.goal > 0 ? Math.min(100, (dayB.net / userB.goal) * 100) : 0}%`,
                          }}
                        />
                      </div>
                      <strong>{dayB ? dayB.net.toLocaleString("he-IL") : "-"}</strong>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="helper">
            כל יום שבו שניכם רשמתם אכילה נספר לניקוד — הצד שהיה קרוב יותר ליעד שלו (באחוזים) זוכה בנקודה.
          </p>
        </section>
      </main>
    </>
  );
}

"use client";

import { useEffect, useState, type FormEvent } from "react";
import type { UserId } from "@/lib/users";

type Status = "checking" | "locked" | "unlocked";

export function PinGate({
  candidates,
  title,
  subtitle,
  children,
}: {
  candidates: UserId[];
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  const [status, setStatus] = useState<Status>("checking");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const check = async () => {
      for (const user of candidates) {
        try {
          const response = await fetch(`/api/auth?user=${user}`, { cache: "no-store" });
          const data = (await response.json()) as { authenticated?: boolean };
          if (data.authenticated) {
            if (!cancelled) setStatus("unlocked");
            return;
          }
        } catch {
          // try next candidate / fall through to locked
        }
      }
      if (!cancelled) setStatus("locked");
    };

    void check();
    return () => {
      cancelled = true;
    };
  }, [candidates]);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (!pin) return;

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin, candidates }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { error?: string };
        setError(data.error || "קוד שגוי");
        setPin("");
        return;
      }

      setStatus("unlocked");
    } catch {
      setError("שגיאת רשת, נסו שוב");
    } finally {
      setSubmitting(false);
    }
  };

  if (status === "unlocked") return <>{children}</>;

  if (status === "checking") {
    return (
      <main className="pin-shell">
        <p className="pin-loading">טוען…</p>
      </main>
    );
  }

  return (
    <main className="pin-shell">
      <form className="pin-card" onSubmit={submit}>
        <p className="eyebrow">קלורית</p>
        <h1>{title}</h1>
        <p className="subline">{subtitle}</p>
        <input
          type="password"
          inputMode="numeric"
          autoFocus
          maxLength={8}
          placeholder="קוד PIN"
          value={pin}
          onChange={(event) => setPin(event.target.value.replace(/\D/g, ""))}
          className="pin-input"
        />
        {error ? <p className="pin-error">{error}</p> : null}
        <button type="submit" className="primary" disabled={submitting || !pin}>
          {submitting ? "בודק…" : "כניסה"}
        </button>
      </form>
    </main>
  );
}

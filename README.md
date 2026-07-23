# caloriya

יומן קלוריות בעברית עם סריקת ברקוד ומאגר מוצרים ישראלי.

## Pages

- `/` — Ziv's calorie journal.
- `/mama` — Amit's ("Mama") calorie journal. Fully separate data from `/`.
- `/compete` — head-to-head view comparing both journals: today's calories, a
  weekly breakdown, and a running score for who stayed closer to their own
  daily goal each day.

Each page is protected by a 4-digit PIN, remembered on that device after the
first successful entry (stored as an HTTP-only cookie for ~1 year). The
`/compete` page unlocks with either person's PIN.

## Environment variables

| Variable      | Purpose                                                              | Default (insecure, dev-only) |
| ------------- | --------------------------------------------------------------------- | ----------------------------- |
| `PIN_ZIV`     | 4–8 digit PIN for Ziv's page                                          | `1234`                        |
| `PIN_MAMA`    | 4–8 digit PIN for Mama's page                                         | `5678`                        |
| `AUTH_SECRET` | Secret used to sign session cookies — set a long random string        | insecure built-in default     |
| `DATA_DIR`    | Directory for the persisted JSON data (Railway volume mount point)    | `/data`, falls back to `.data`|

Set `PIN_ZIV`, `PIN_MAMA`, and `AUTH_SECRET` in Railway's environment
variables before sharing the links — without them the app falls back to
insecure defaults.

## Data storage

Each user's logs and settings are stored in separate files:
`calor-logs-<user>.json` and `calor-settings-<user>.json`, under `DATA_DIR`.

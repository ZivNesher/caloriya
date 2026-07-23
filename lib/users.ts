export type UserId = "ziv" | "mama";

export type UserConfig = {
  id: UserId;
  label: string;
};

export const users: Record<UserId, UserConfig> = {
  ziv: { id: "ziv", label: "זיו" },
  mama: { id: "mama", label: "מאמא" },
};

export const userIds: UserId[] = ["ziv", "mama"];

export function isUserId(value: unknown): value is UserId {
  return value === "ziv" || value === "mama";
}

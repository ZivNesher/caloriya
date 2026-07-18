export type Profile = {
  name: string;
  heightCm: number;
  age: number;
  sex: "male" | "female";
  activity: number;
  targetWeightKg: number;
  weeklyLossKg: number;
};

export type Weights = Record<string, number>;

export type AppSettings = {
  profile: Profile;
  weights: Weights;
};

export const defaultProfile: Profile = {
  name: "",
  heightCm: 175,
  age: 35,
  sex: "male",
  activity: 1.35,
  targetWeightKg: 75,
  weeklyLossKg: 0.5,
};

const toNumber = (value: unknown) => {
  if (typeof value === "number") return value;
  if (typeof value !== "string") return Number.NaN;
  return Number(value.trim().replace(",", "."));
};

export const clampNumber = (value: unknown, fallback: number, min: number, max: number) => {
  const numberValue = toNumber(value);
  if (!Number.isFinite(numberValue)) return fallback;
  return Math.min(max, Math.max(min, numberValue));
};

export const sanitizeProfile = (profile?: Partial<Profile> | null): Profile => ({
  name: typeof profile?.name === "string" ? profile.name.slice(0, 80) : defaultProfile.name,
  heightCm: clampNumber(profile?.heightCm, defaultProfile.heightCm, 80, 250),
  age: Math.round(clampNumber(profile?.age, defaultProfile.age, 12, 120)),
  sex: profile?.sex === "female" ? "female" : "male",
  activity: clampNumber(profile?.activity, defaultProfile.activity, 1.1, 2.2),
  targetWeightKg: clampNumber(profile?.targetWeightKg, defaultProfile.targetWeightKg, 30, 300),
  weeklyLossKg: clampNumber(profile?.weeklyLossKg, defaultProfile.weeklyLossKg, 0, 1.5),
});

export const sanitizeWeights = (weights?: Weights | null): Weights =>
  Object.fromEntries(
    Object.entries(weights ?? {})
      .map(([date, value]) => [date, toNumber(value)] as const)
      .filter(([date, value]) => /^\d{4}-\d{2}-\d{2}$/.test(date) && Number.isFinite(value) && value > 0 && value < 400),
  );

export const sanitizeSettings = (settings?: unknown): AppSettings => {
  const source = settings && typeof settings === "object" && !Array.isArray(settings)
    ? settings as { profile?: Partial<Profile>; weights?: Weights }
    : {};

  return {
    profile: sanitizeProfile(source.profile),
    weights: sanitizeWeights(source.weights),
  };
};

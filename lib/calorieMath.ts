import type { Product } from "@/data/products";
import { clampNumber, defaultProfile, sanitizeProfile, type Profile, type Weights } from "@/lib/settingsSchema";

export type MealKey = "breakfast" | "lunch" | "dinner" | "night" | "snacks";

export type Entry = {
  id: string;
  product: Product;
  grams: number;
  amountLabel?: string;
  meal: MealKey;
  createdAt: string;
};

export type DayLog = Record<MealKey, Entry[]> & {
  workoutCalories?: number;
};

export type Logs = Record<string, DayLog>;

export const mealLabels: Record<MealKey, string> = {
  breakfast: "בוקר",
  lunch: "צהריים",
  dinner: "ערב",
  night: "לילה",
  snacks: "נשנושים",
};

export const mealOrder = Object.keys(mealLabels) as MealKey[];

export const emptyDay = (): DayLog => ({
  breakfast: [],
  lunch: [],
  dinner: [],
  night: [],
  snacks: [],
  workoutCalories: 0,
});

export const toDateKey = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const fromDateKey = (key: string) => {
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year, month - 1, day);
};

export const addDays = (dateKey: string, amount: number) => {
  const date = fromDateKey(dateKey);
  date.setDate(date.getDate() + amount);
  return toDateKey(date);
};

export const formatHebrewDate = (dateKey: string) =>
  new Intl.DateTimeFormat("he-IL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(fromDateKey(dateKey));

export const caloriesFor = (entry: Entry) =>
  Math.round((entry.product.caloriesPer100g * entry.grams) / 100);

export const macroFor = (entry: Entry, field: "protein" | "carbs" | "fat") => {
  const value = entry.product[field];
  return typeof value === "number" ? (value * entry.grams) / 100 : 0;
};

export function totalCalories(day: DayLog) {
  return mealOrder.reduce(
    (sum, meal) => sum + day[meal].reduce((mealSum, entry) => mealSum + caloriesFor(entry), 0),
    0,
  );
}

export function workoutCalories(day: DayLog) {
  return clampNumber(day.workoutCalories, 0, 0, 5000);
}

export function netCalories(day: DayLog) {
  return totalCalories(day) - workoutCalories(day);
}

export function weekKeys(selectedDate: string) {
  const base = fromDateKey(selectedDate);
  const day = base.getDay();
  base.setDate(base.getDate() - day);
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(base);
    date.setDate(base.getDate() + index);
    return toDateKey(date);
  });
}

export function getCurrentWeight(weights: Weights, selectedDate: string, fallback: number) {
  if (Number.isFinite(weights[selectedDate]) && weights[selectedDate] > 0) return weights[selectedDate];

  const latest = Object.entries(weights)
    .filter(([, value]) => Number.isFinite(value) && value > 0)
    .sort(([dateA], [dateB]) => dateB.localeCompare(dateA))[0];

  return latest?.[1] ?? clampNumber(fallback, defaultProfile.targetWeightKg, 30, 300);
}

export function calculateBmi(weightKg: number, heightCm: number) {
  const safeWeight = clampNumber(weightKg, defaultProfile.targetWeightKg, 30, 300);
  const safeHeight = clampNumber(heightCm, defaultProfile.heightCm, 80, 250);
  if (!safeWeight || !safeHeight) return 0;
  const heightM = safeHeight / 100;
  return safeWeight / (heightM * heightM);
}

export function calculateDailyTarget(profile: Profile, weightKg: number) {
  const safeProfile = sanitizeProfile(profile);
  const safeWeight = clampNumber(weightKg, safeProfile.targetWeightKg, 30, 300);
  const base =
    10 * safeWeight +
    6.25 * safeProfile.heightCm -
    5 * safeProfile.age +
    (safeProfile.sex === "male" ? 5 : -161);
  const maintenance = base * safeProfile.activity;
  const deficit = (safeProfile.weeklyLossKg * 7700) / 7;
  const floor = safeProfile.sex === "male" ? 1500 : 1200;

  return Math.max(floor, Math.round(maintenance - deficit));
}

export function bmiLabel(bmi: number) {
  if (!bmi) return "חסר נתון";
  if (bmi < 18.5) return "מתחת לנורמה";
  if (bmi < 25) return "בטווח תקין";
  if (bmi < 30) return "עודף משקל";
  return "השמנה";
}

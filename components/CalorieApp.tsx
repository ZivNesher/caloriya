"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { BarcodeFormat, BrowserMultiFormatOneDReader, type IScannerControls } from "@zxing/browser";
import { DecodeHintType } from "@zxing/library";
import { products, type Product } from "@/data/products";
import {
  defaultProfile,
  clampNumber,
  sanitizeProfile,
  sanitizeSettings,
  sanitizeWeights,
  type Profile,
  type Weights,
} from "@/lib/settingsSchema";

type MealKey = "breakfast" | "lunch" | "dinner" | "night" | "snacks";

type Entry = {
  id: string;
  product: Product;
  grams: number;
  amountLabel?: string;
  meal: MealKey;
  createdAt: string;
};

type DayLog = Record<MealKey, Entry[]>;
type Logs = Record<string, DayLog>;

const mealLabels: Record<MealKey, string> = {
  breakfast: "בוקר",
  lunch: "צהריים",
  dinner: "ערב",
  night: "לילה",
  snacks: "נשנושים",
};

const mealHints: Record<MealKey, string> = {
  breakfast: "קפה, יוגורט, ביצים, לחם",
  lunch: "מנה עיקרית ותוספות",
  dinner: "ארוחה קלה או מלאה",
  night: "מה שאוכלים אחרי שהיום כבר נגמר",
  snacks: "חטיפים, פירות, מתוקים",
};

const mealOrder = Object.keys(mealLabels) as MealKey[];
type UnitOption = {
  id: string;
  label: string;
  gramsPerUnit: number;
  defaultValue: number;
  quickValues: number[];
};

const gramUnits: UnitOption[] = [
  { id: "g", label: "גרם", gramsPerUnit: 1, defaultValue: 100, quickValues: [30, 50, 100, 150, 200, 250] },
];

const drinkUnits: UnitOption[] = [
  { id: "ml", label: "מ״ל", gramsPerUnit: 1, defaultValue: 250, quickValues: [100, 200, 250, 330, 500] },
  { id: "cup", label: "כוס", gramsPerUnit: 200, defaultValue: 1, quickValues: [1, 2, 3] },
  { id: "can", label: "פחית", gramsPerUnit: 330, defaultValue: 1, quickValues: [1, 2] },
  { id: "bottle", label: "בקבוק קטן", gramsPerUnit: 500, defaultValue: 1, quickValues: [1, 2] },
];

const alcoholUnits: UnitOption[] = [
  { id: "ml", label: "מ״ל", gramsPerUnit: 1, defaultValue: 150, quickValues: [40, 60, 150, 250, 330, 500] },
  { id: "shot", label: "שוט", gramsPerUnit: 40, defaultValue: 1, quickValues: [1, 2, 3] },
  { id: "wine-glass", label: "כוס יין", gramsPerUnit: 150, defaultValue: 1, quickValues: [1, 2] },
  { id: "cocktail-glass", label: "כוס קוקטייל", gramsPerUnit: 180, defaultValue: 1, quickValues: [1, 2] },
  { id: "beer-bottle", label: "בקבוק/פחית", gramsPerUnit: 330, defaultValue: 1, quickValues: [1, 2, 3] },
];

const breadSliceUnits: UnitOption[] = [
  { id: "slice", label: "פרוסה", gramsPerUnit: 30, defaultValue: 1, quickValues: [1, 2, 3, 4] },
  { id: "g", label: "גרם", gramsPerUnit: 1, defaultValue: 30, quickValues: [25, 30, 60, 90, 120] },
];

const lightBreadSliceUnits: UnitOption[] = [
  { id: "slice", label: "פרוסה", gramsPerUnit: 22, defaultValue: 2, quickValues: [1, 2, 3, 4] },
  { id: "g", label: "גרם", gramsPerUnit: 1, defaultValue: 44, quickValues: [22, 44, 66, 88] },
];

const pitaUnits: UnitOption[] = [
  { id: "pita", label: "פיתה", gramsPerUnit: 90, defaultValue: 1, quickValues: [0.5, 1, 1.5, 2] },
  { id: "half-pita", label: "חצי פיתה", gramsPerUnit: 45, defaultValue: 1, quickValues: [1, 2, 3] },
  { id: "g", label: "גרם", gramsPerUnit: 1, defaultValue: 90, quickValues: [45, 60, 90, 120] },
];

const lightPitaUnits: UnitOption[] = [
  { id: "pita", label: "פיתה קלה", gramsPerUnit: 55, defaultValue: 1, quickValues: [0.5, 1, 1.5, 2] },
  { id: "half-pita", label: "חצי פיתה", gramsPerUnit: 28, defaultValue: 1, quickValues: [1, 2, 3] },
  { id: "g", label: "גרם", gramsPerUnit: 1, defaultValue: 55, quickValues: [30, 45, 55, 70] },
];

const sausageUnits: UnitOption[] = [
  { id: "unit", label: "יחידה", gramsPerUnit: 60, defaultValue: 1, quickValues: [1, 2, 3, 4] },
  { id: "g", label: "גרם", gramsPerUnit: 1, defaultValue: 100, quickValues: [60, 100, 150, 200] },
];

const skewerUnits: UnitOption[] = [
  { id: "skewer", label: "שיפוד", gramsPerUnit: 120, defaultValue: 1, quickValues: [1, 2, 3] },
  { id: "g", label: "גרם", gramsPerUnit: 1, defaultValue: 150, quickValues: [100, 150, 200, 250, 300] },
];

const steakUnits: UnitOption[] = [
  { id: "g", label: "גרם", gramsPerUnit: 1, defaultValue: 250, quickValues: [100, 150, 200, 250, 300, 400] },
  { id: "steak", label: "סטייק", gramsPerUnit: 250, defaultValue: 1, quickValues: [0.5, 1, 1.5, 2] },
];

const spoonUnits: UnitOption[] = [
  { id: "g", label: "גרם", gramsPerUnit: 1, defaultValue: 10, quickValues: [5, 10, 15, 30, 50] },
  { id: "tsp", label: "כפית", gramsPerUnit: 5, defaultValue: 1, quickValues: [1, 2, 3, 4] },
  { id: "tbsp", label: "כף", gramsPerUnit: 15, defaultValue: 1, quickValues: [1, 2, 3] },
];

const oilUnits: UnitOption[] = [
  { id: "tsp", label: "כפית", gramsPerUnit: 5, defaultValue: 1, quickValues: [1, 2, 3] },
  { id: "tbsp", label: "כף", gramsPerUnit: 15, defaultValue: 1, quickValues: [1, 2, 3] },
  { id: "spray", label: "שפריץ", gramsPerUnit: 1, defaultValue: 3, quickValues: [1, 3, 5, 10] },
  { id: "g", label: "גרם", gramsPerUnit: 1, defaultValue: 15, quickValues: [5, 10, 15, 30] },
];

const portionUnits: UnitOption[] = [
  { id: "g", label: "גרם", gramsPerUnit: 1, defaultValue: 100, quickValues: [50, 100, 150, 200, 250] },
  { id: "portion", label: "מנה", gramsPerUnit: 250, defaultValue: 1, quickValues: [1, 2] },
  { id: "half", label: "חצי מנה", gramsPerUnit: 125, defaultValue: 1, quickValues: [1, 2] },
];

const emptyDay = (): DayLog => ({
  breakfast: [],
  lunch: [],
  dinner: [],
  night: [],
  snacks: [],
});

const toDateKey = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const fromDateKey = (key: string) => {
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year, month - 1, day);
};

const addDays = (dateKey: string, amount: number) => {
  const date = fromDateKey(dateKey);
  date.setDate(date.getDate() + amount);
  return toDateKey(date);
};

const formatHebrewDate = (dateKey: string) =>
  new Intl.DateTimeFormat("he-IL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(fromDateKey(dateKey));

const caloriesFor = (entry: Entry) =>
  Math.round((entry.product.caloriesPer100g * entry.grams) / 100);

const macroFor = (entry: Entry, field: "protein" | "carbs" | "fat") => {
  const value = entry.product[field];
  return typeof value === "number" ? (value * entry.grams) / 100 : 0;
};

const finalLetterMap: Record<string, string> = {
  ך: "כ",
  ם: "מ",
  ן: "נ",
  ף: "פ",
  ץ: "צ",
};

const normalizeText = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0591-\u05C7]/g, "")
    .replace(/[ךםןףץ]/g, (letter) => finalLetterMap[letter] ?? letter)
    .replace(/[״"׳'`´’‘]/g, "")
    .replace(/[^0-9a-z\u0590-\u05ff%]+/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

const tokenizeSearch = (value: string) => normalizeText(value).split(" ").filter(Boolean);

const editDistance = (a: string, b: string) => {
  if (Math.abs(a.length - b.length) > 2) return 3;

  let previous = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let i = 0; i < a.length; i += 1) {
    const current = [i + 1];
    for (let j = 0; j < b.length; j += 1) {
      current[j + 1] = a[i] === b[j]
        ? previous[j]
        : Math.min(previous[j], current[j], previous[j + 1]) + 1;
    }
    previous = current;
  }

  return previous[b.length];
};

const scoreSearchToken = (queryToken: string, productTokens: string[]) => {
  let best = 0;

  for (const token of productTokens) {
    if (token === queryToken) best = Math.max(best, 80);
    else if (token.startsWith(queryToken)) best = Math.max(best, 62);
    else if (queryToken.startsWith(token) && token.length >= 3) best = Math.max(best, 52);
    else if (token.includes(queryToken) && queryToken.length >= 3) best = Math.max(best, 42);
    else if (queryToken.length >= 3 && editDistance(queryToken, token) <= 1) best = Math.max(best, 34);
    else if (queryToken.length >= 5 && editDistance(queryToken, token) <= 2) best = Math.max(best, 24);
  }

  return best;
};

const scoreProductSearch = (product: Product, queryValue: string) => {
  const cleanQuery = normalizeText(queryValue);
  if (cleanQuery.length < 2) return 0;

  const text = normalizeText(`${product.name} ${product.brand ?? ""} ${product.category}`);
  const productTokens = text.split(" ").filter(Boolean);
  const queryTokens = tokenizeSearch(queryValue);
  if (!queryTokens.length) return 0;

  let score = text.includes(cleanQuery) ? 90 : 0;
  let matchedTokens = 0;

  for (const queryToken of queryTokens) {
    const tokenScore = scoreSearchToken(queryToken, productTokens);
    if (tokenScore > 0) matchedTokens += 1;
    score += tokenScore;
  }

  if (matchedTokens === 0) return 0;
  if (queryTokens.length > 1 && matchedTokens / queryTokens.length < 0.6) return 0;
  if (normalizeText(product.name).includes(cleanQuery)) score += 35;
  if (normalizeText(product.brand ?? "").includes(cleanQuery)) score += 18;

  return score;
};

const parseUserNumber = (value: string) => Number(value.trim().replace(",", "."));
const isLocalhost = (hostname: string) => hostname === "localhost" || hostname === "127.0.0.1";

const waitForVideoElement = async (getElement: () => HTMLVideoElement | null) => {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    const element = getElement();
    if (element) return element;
    await new Promise((resolve) => window.setTimeout(resolve, 50));
  }

  return null;
};

// 720p decodes EAN-13 reliably and locks focus faster than 1080p on iPhones,
// where forcing a high resolution noticeably delays the first autofocus.
const videoConstraintsFor = (deviceId?: string): MediaTrackConstraints => ({
  ...(deviceId ? { deviceId: { exact: deviceId } } : { facingMode: { ideal: "environment" } }),
  width: { ideal: 1280 },
  height: { ideal: 720 },
});

// iPhones expose several rear lenses. facingMode "environment" may hand back the
// ultra-wide or a virtual multi-camera device, and neither holds focus at the
// 10-20cm a barcode needs - the preview looks sharp but nothing ever decodes.
// Pin the plain wide "Back Camera" instead.
const pickRearCameraId = async () => {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const cameras = devices.filter((device) => device.kind === "videoinput");
    if (cameras.length < 2) return undefined;

    // Labels stay empty until camera permission has been granted once. Without
    // them there is nothing to choose by, so let the browser pick this time and
    // pin the lens on the next scan instead - reopening the camera mid-session
    // to correct the choice makes iOS Safari drop the device as busy.
    if (cameras.every((device) => !device.label)) return undefined;

    const labelOf = (device: MediaDeviceInfo) => device.label.toLowerCase();
    const rear = cameras.filter((device) => /back|rear|environment|אחורית/.test(labelOf(device)));
    const pool = rear.length ? rear : cameras;

    const chosen =
      pool.find((device) => /back camera|מצלמה אחורית/.test(labelOf(device))) ??
      pool.find((device) => !/ultra|tele|depth|front/.test(labelOf(device))) ??
      pool[pool.length - 1];

    return chosen?.deviceId;
  } catch {
    return undefined;
  }
};

// Unsupported keys inside `advanced` are meant to be ignored rather than reject,
// but Safari rejects on some versions - so this must be awaited, not wrapped in
// a synchronous try/catch.
const applyFocusConstraints = async (track: MediaStreamTrack) => {
  try {
    await track.applyConstraints({
      advanced: [
        {
          focusMode: "continuous",
          exposureMode: "continuous",
          whiteBalanceMode: "continuous",
        } as MediaTrackConstraintSet,
      ],
    });
    return true;
  } catch {
    return false;
  }
};

const scannerHints = new Map<DecodeHintType, unknown>([
  [DecodeHintType.TRY_HARDER, true],
  [
    DecodeHintType.POSSIBLE_FORMATS,
    [
      BarcodeFormat.EAN_13,
      BarcodeFormat.EAN_8,
      BarcodeFormat.UPC_A,
      BarcodeFormat.UPC_E,
      BarcodeFormat.CODE_128,
      BarcodeFormat.CODE_39,
      BarcodeFormat.ITF,
    ],
  ],
]);


const getUnitOptions = (product: Product): UnitOption[] => {
  const text = `${product.name} ${product.brand ?? ""} ${product.category}`.toLowerCase();

  if (/אלכוהול|קוקטייל|בירה|יין|וודקה|וויסקי|ויסקי|ערק|גין|רום|טקילה|מרגריטה|מוחיטו|קמפרי|אפרול|קאווה|שמפניה/.test(text)) {
    return alcoholUnits;
  }

  if (product.category === "שתייה" || /משקה|מיץ|קולה|סודה|מים|קפה|תה|שוקו/.test(text)) {
    return drinkUnits;
  }

  if (/שמן|תרסיס|ספריי/.test(text)) {
    return oilUnits;
  }

  if (
    product.category === "שמנים ורטבים" ||
    /רוטב|טחינה|מיונז|קטשופ|חרדל|דבש|סילאן|ריבה|סוכר|מלח|תבלין|פפריקה|כמון|קינמון|זעתר|פלפל/.test(text)
  ) {
    return spoonUnits;
  }

  if (/פיתה קלה|פיתות קלות|פיתה חלבון|פיתה 99|פיתה 100|פיתה 125/.test(text)) {
    return lightPitaUnits;
  }

  if (/פיתה|פיתות/.test(text)) {
    return pitaUnits;
  }

  if (/לחם קל|לחם חלבון/.test(text)) {
    return lightBreadSliceUnits;
  }

  if (/לחם|חלה|טוסט/.test(text)) {
    return breadSliceUnits;
  }

  if (/נקניק|נקניקיה|נקניקייה|מרגז/.test(text)) {
    return sausageUnits;
  }

  if (/שיפוד|שיפודי/.test(text)) {
    return skewerUnits;
  }

  if (/סטייק|אנטריקוט|סינטה|פילה בקר|צלעות טלה|אסאדו|נתח קצבים/.test(text)) {
    return steakUnits;
  }

  if (product.category === "ארוחות מוכנות" || /מנה|לאפה|כריך|סלט|קערת|ארוחת/.test(text)) {
    return portionUnits;
  }

  return gramUnits;
};

const formatAmountLabel = (value: number, unit: UnitOption, grams: number) => {
  const cleanValue = Number.isInteger(value) ? value.toString() : value.toFixed(1);
  if (unit.id === "g") return `${Math.round(grams)} גרם`;
  if (unit.id === "ml") return `${Math.round(value)} מ״ל`;
  return `${cleanValue} ${unit.label} (${Math.round(grams)} גרם)`;
};

function useStoredLogs() {
  const [logs, setLogs] = useState<Logs>({});
  const [loaded, setLoaded] = useState(false);
  const [storageStatus, setStorageStatus] = useState("טוען נתונים...");

  useEffect(() => {
    let cancelled = false;

    const loadLogs = async () => {
      let localLogs: Logs = {};

      try {
        const raw = window.localStorage.getItem("calor-logs-v1");
        if (raw) {
          localLogs = JSON.parse(raw) as Logs;
        }
      } catch {
        localLogs = {};
      }

      try {
        const response = await fetch("/api/logs", { cache: "no-store" });
        if (!response.ok) throw new Error("Failed to load logs");
        const payload = (await response.json()) as { logs?: Logs };
        const serverLogs = payload.logs ?? {};
        const mergedLogs = { ...localLogs, ...serverLogs };

        if (cancelled) return;
        setLogs(mergedLogs);
        setStorageStatus("נשמר בענן Railway");

        if (Object.keys(localLogs).length && Object.keys(serverLogs).length === 0) {
          await fetch("/api/logs", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ logs: mergedLogs }),
          });
        }
      } catch {
        if (cancelled) return;
        setLogs(localLogs);
        setStorageStatus("שמירה מקומית בלבד כרגע");
      } finally {
        if (!cancelled) setLoaded(true);
      }
    };

    void loadLogs();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const timeout = window.setTimeout(() => {
      window.localStorage.setItem("calor-logs-v1", JSON.stringify(logs));
      void fetch("/api/logs", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ logs }),
      })
        .then((response) => {
          setStorageStatus(response.ok ? "נשמר בענן Railway" : "שמירה מקומית בלבד כרגע");
        })
        .catch(() => setStorageStatus("שמירה מקומית בלבד כרגע"));
    }, 350);

    return () => window.clearTimeout(timeout);
  }, [loaded, logs]);

  return [logs, setLogs, storageStatus] as const;
}

function useStoredSettings() {
  const [profile, setProfile] = useState<Profile>(defaultProfile);
  const [weights, setWeights] = useState<Weights>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const loadSettings = async () => {
      let localProfile = defaultProfile;
      let localWeights: Weights = {};

      try {
        const raw = window.localStorage.getItem("calor-settings-v1");
        if (raw) {
          const parsed = JSON.parse(raw) as { profile?: Partial<Profile>; weights?: Weights };
          localProfile = sanitizeProfile(parsed.profile);
          localWeights = sanitizeWeights(parsed.weights);
        }
      } catch {
        localProfile = defaultProfile;
        localWeights = {};
      }

      try {
        const response = await fetch("/api/settings", { cache: "no-store" });
        if (!response.ok) throw new Error("Failed to load settings");
        const payload = (await response.json()) as {
          settings?: { profile?: Partial<Profile>; weights?: Weights };
        };
        const serverSettings = sanitizeSettings(payload.settings);
        const nextProfile = sanitizeProfile({ ...localProfile, ...serverSettings.profile });
        const nextWeights = sanitizeWeights({ ...localWeights, ...serverSettings.weights });

        if (cancelled) return;
        setProfile(nextProfile);
        setWeights(nextWeights);

        if (
          (Object.keys(localWeights).length || localProfile.name) &&
          !payload.settings?.profile &&
          !payload.settings?.weights
        ) {
          await fetch("/api/settings", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ settings: { profile: nextProfile, weights: nextWeights } }),
          });
        }
      } catch {
        if (cancelled) return;
        setProfile(localProfile);
        setWeights(localWeights);
      } finally {
        if (!cancelled) setLoaded(true);
      }
    };

    void loadSettings();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const timeout = window.setTimeout(() => {
      const settings = { profile: sanitizeProfile(profile), weights: sanitizeWeights(weights) };
      window.localStorage.setItem("calor-settings-v1", JSON.stringify(settings));
      void fetch("/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ settings }),
      }).catch(() => undefined);
    }, 350);

    return () => window.clearTimeout(timeout);
  }, [loaded, profile, weights]);

  return { profile, setProfile, weights, setWeights } as const;
}

function totalCalories(day: DayLog) {
  return mealOrder.reduce(
    (sum, meal) => sum + day[meal].reduce((mealSum, entry) => mealSum + caloriesFor(entry), 0),
    0,
  );
}

function weekKeys(selectedDate: string) {
  const base = fromDateKey(selectedDate);
  const day = base.getDay();
  base.setDate(base.getDate() - day);
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(base);
    date.setDate(base.getDate() + index);
    return toDateKey(date);
  });
}

function getCurrentWeight(weights: Weights, selectedDate: string, fallback: number) {
  if (Number.isFinite(weights[selectedDate]) && weights[selectedDate] > 0) return weights[selectedDate];

  const latest = Object.entries(weights)
    .filter(([, value]) => Number.isFinite(value) && value > 0)
    .sort(([dateA], [dateB]) => dateB.localeCompare(dateA))[0];

  return latest?.[1] ?? clampNumber(fallback, defaultProfile.targetWeightKg, 30, 300);
}

function calculateBmi(weightKg: number, heightCm: number) {
  const safeWeight = clampNumber(weightKg, defaultProfile.targetWeightKg, 30, 300);
  const safeHeight = clampNumber(heightCm, defaultProfile.heightCm, 80, 250);
  if (!safeWeight || !safeHeight) return 0;
  const heightM = safeHeight / 100;
  return safeWeight / (heightM * heightM);
}

function calculateDailyTarget(profile: Profile, weightKg: number) {
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

function bmiLabel(bmi: number) {
  if (!bmi) return "חסר נתון";
  if (bmi < 18.5) return "מתחת לנורמה";
  if (bmi < 25) return "בטווח תקין";
  if (bmi < 30) return "עודף משקל";
  return "השמנה";
}

export function CalorieApp() {
  const [logs, setLogs, storageStatus] = useStoredLogs();
  const { profile, setProfile, weights, setWeights } = useStoredSettings();
  const [selectedDate, setSelectedDate] = useState(() => toDateKey(new Date()));
  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState<MealKey>("breakfast");
  const [amountValue, setAmountValue] = useState(100);
  const [selectedUnitId, setSelectedUnitId] = useState("g");
  const [manualOpen, setManualOpen] = useState(false);
  const [manualName, setManualName] = useState("");
  const [manualCalories, setManualCalories] = useState("150");
  const [barcode, setBarcode] = useState("");
  const [barcodeStatus, setBarcodeStatus] = useState("");
  const [cameraStatus, setCameraStatus] = useState("");
  const [scanning, setScanning] = useState(false);
  const [torchOn, setTorchOn] = useState(false);
  const [torchAvailable, setTorchAvailable] = useState(false);
  const [lastScannedProduct, setLastScannedProduct] = useState<Product | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [choosingMeal, setChoosingMeal] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showWeekSummary, setShowWeekSummary] = useState(false);
  const [notice, setNotice] = useState("");
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const scannerControlsRef = useRef<IScannerControls | null>(null);

  const day = logs[selectedDate] ?? emptyDay();
  const weeks = useMemo(() => weekKeys(selectedDate), [selectedDate]);
  const dailyTotal = totalCalories(day);
  const currentWeight = getCurrentWeight(weights, selectedDate, profile.targetWeightKg);
  const bmi = calculateBmi(currentWeight, profile.heightCm);
  const goal = calculateDailyTarget(profile, currentWeight);
  const percentOfGoal = goal > 0 ? Math.round((dailyTotal / goal) * 100) : 0;
  const ringCircumference = 2 * Math.PI * 58;
  const ringOffset = ringCircumference * (1 - Math.min(1, goal > 0 ? dailyTotal / goal : 0));
  const over = dailyTotal > goal;
  const remaining = Math.max(0, goal - dailyTotal);
  const macroTargets = {
    protein: Math.max(1, Math.round((goal * 0.3) / 4)),
    carbs: Math.max(1, Math.round((goal * 0.4) / 4)),
    fat: Math.max(1, Math.round((goal * 0.3) / 9)),
  };
  const allEntries = useMemo(() => mealOrder.flatMap((meal) => day[meal]), [day]);
  const entryCount = allEntries.length;
  const weeklyTotal = weeks.reduce((sum, dateKey) => sum + totalCalories(logs[dateKey] ?? emptyDay()), 0);
  const weeklyGoal = goal * 7;
  const unitOptions = selectedProduct ? getUnitOptions(selectedProduct) : gramUnits;
  const selectedUnit = unitOptions.find((unit) => unit.id === selectedUnitId) ?? unitOptions[0];
  const safeAmountValue = Number.isFinite(amountValue) ? amountValue : selectedUnit.defaultValue;
  const selectedGrams = Math.max(1, safeAmountValue * selectedUnit.gramsPerUnit);

  const filteredProducts = useMemo(() => {
    if (normalizeText(query).length < 2) return [];
    return products
      .map((product) => ({ product, score: scoreProductSearch(product, query) }))
      .filter((result) => result.score > 0)
      .sort((a, b) => b.score - a.score || a.product.name.localeCompare(b.product.name, "he"))
      .map((result) => result.product)
      .slice(0, 18);
  }, [query]);

  const recentProducts = useMemo(() => {
    const seen = new Set<string>();
    return Object.values(logs)
      .flatMap((log) => mealOrder.flatMap((meal) => log[meal]))
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
      .map((entry) => entry.product)
      .filter((product) => {
        if (seen.has(product.name)) return false;
        seen.add(product.name);
        return true;
      })
      .slice(0, 8);
  }, [logs]);

  const totals = useMemo(() => {
    const entries = mealOrder.flatMap((meal) => day[meal]);
    return {
      protein: Math.round(entries.reduce((sum, entry) => sum + macroFor(entry, "protein"), 0)),
      carbs: Math.round(entries.reduce((sum, entry) => sum + macroFor(entry, "carbs"), 0)),
      fat: Math.round(entries.reduce((sum, entry) => sum + macroFor(entry, "fat"), 0)),
    };
  }, [day]);

  const updateDay = (updater: (current: DayLog) => DayLog) => {
    setLogs((current) => ({
      ...current,
      [selectedDate]: updater(current[selectedDate] ?? emptyDay()),
    }));
  };

  const selectProduct = (product: Product) => {
    const nextUnits = getUnitOptions(product);
    setSelectedUnitId(nextUnits[0].id);
    setAmountValue(nextUnits[0].defaultValue);
    setSelectedProduct(product);
    setChoosingMeal(false);
    setNotice("");
  };

  const addProduct = (product: Product, amount: number, meal: MealKey, amountLabel: string) => {
    const entry: Entry = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      product,
      grams: Math.max(1, amount),
      amountLabel,
      meal,
      createdAt: new Date().toISOString(),
    };

    updateDay((current) => ({
      ...current,
      [meal]: [entry, ...current[meal]],
    }));
    setNotice(`${product.name} נוסף ל${mealLabels[meal]} (${amountLabel})`);
    setSelectedMeal(meal);
  };

  const removeEntry = (meal: MealKey, entryId: string) => {
    updateDay((current) => ({
      ...current,
      [meal]: current[meal].filter((entry) => entry.id !== entryId),
    }));
  };

  const addManual = () => {
    const cleanName = manualName.trim() || query.trim();
    const calories = parseUserNumber(manualCalories);

    if (!cleanName) {
      setNotice("צריך למלא שם מוצר ידני.");
      return;
    }

    if (!Number.isFinite(calories) || calories < 0 || calories > 1000) {
      setNotice("צריך למלא קלוריות תקינות ל-100 גרם.");
      return;
    }

    selectProduct({
      id: `manual-${Date.now()}`,
      name: cleanName,
      category: "ידני",
      serving: "100 גרם",
      caloriesPer100g: calories,
      protein: null,
      carbs: null,
      fat: null,
    });
    setManualName("");
    setManualCalories("150");
    setManualOpen(false);
    setNotice("המוצר הידני נוצר. עכשיו בחר כמות ואז ארוחה.");
  };

  const requestMealChoice = () => {
    if (!selectedProduct) {
      setNotice("קודם צריך לבחור מוצר מחיפוש או ברקוד.");
      return;
    }
    setChoosingMeal(true);
  };

  const addSelectedToMeal = (meal: MealKey) => {
    if (!selectedProduct) return;
    addProduct(selectedProduct, selectedGrams, meal, formatAmountLabel(safeAmountValue, selectedUnit, selectedGrams));
    setSelectedProduct(null);
    setChoosingMeal(false);
    setQuery("");
    setBarcode("");
    setBarcodeStatus("");
    setCameraStatus("");
  };

  const updateTodayWeight = (value: string) => {
    setWeights((current) => {
      const next = { ...current };
      if (value.trim() === "") {
        delete next[selectedDate];
        return next;
      }
      const numericValue = Number(value);
      if (!Number.isFinite(numericValue) || numericValue <= 0 || numericValue >= 400) return current;
      next[selectedDate] = numericValue;
      return next;
    });
  };

  const updateProfileText = (field: "name", value: string) => {
    setProfile((current) => sanitizeProfile({ ...current, [field]: value }));
  };

  const updateProfileNumber = (
    field: Exclude<keyof Profile, "name" | "sex">,
    value: string,
  ) => {
    if (value.trim() === "") return;
    const nextValue = Number(value.replace(",", "."));
    if (!Number.isFinite(nextValue)) return;
    setProfile((current) => sanitizeProfile({ ...current, [field]: nextValue }));
  };

  const lookupBarcode = async (code = barcode) => {
    const cleanCode = code.replace(/\D/g, "");
    if (!cleanCode) {
      setBarcodeStatus("צריך להזין מספר ברקוד.");
      return;
    }

    setBarcodeStatus("בודק את הברקוד במאגר Open Food Facts...");
    try {
      const response = await fetch(`/api/barcode/${cleanCode}`);
      const payload = await response.json();
      if (!response.ok) {
        setBarcodeStatus(payload.error ?? "לא נמצא מוצר מתאים.");
        return;
      }
      setLastScannedProduct(payload as Product);
      selectProduct(payload as Product);
      setBarcodeStatus(`נמצא: ${(payload as Product).name}. עכשיו בחר כמות ולחץ הוספה.`);
      setBarcode(cleanCode);
    } catch {
      setBarcodeStatus("החיבור למאגר נכשל. אפשר להוסיף ידנית בינתיים.");
    }
  };

  const stopScanner = () => {
    scannerControlsRef.current?.stop();
    scannerControlsRef.current = null;
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    setScanning(false);
    setTorchOn(false);
    setTorchAvailable(false);
  };

  const improveCameraFocus = async () => {
    const track = streamRef.current?.getVideoTracks()[0];
    if (!track) return;

    const applied = await applyFocusConstraints(track);
    setCameraStatus(
      applied
        ? "כוון את הברקוד בתוך המסגרת, במרחק 10-20 ס״מ, והחזק יציב."
        : "הדפדפן לא נתן שליטה בפוקוס. נסה להרחיק/לקרב מעט ולהחזיק יציב.",
    );
  };

  const toggleTorch = async () => {
    const next = !torchOn;
    const track = streamRef.current?.getVideoTracks()[0];

    // Driving the track directly is more reliable than zxing's experimental
    // switchTorch, which is only kept as a fallback.
    if (track) {
      try {
        await track.applyConstraints({ advanced: [{ torch: next } as MediaTrackConstraintSet] });
        setTorchOn(next);
        return;
      } catch {
        // fall through to the zxing fallback below
      }
    }

    const controls = scannerControlsRef.current;
    if (!controls?.switchTorch) {
      setCameraStatus("פנס לא נתמך בדפדפן הזה. נסה תאורה חזקה יותר סביב הברקוד.");
      return;
    }

    try {
      await controls.switchTorch(next);
      setTorchOn(next);
    } catch {
      setCameraStatus("לא הצלחנו להפעיל פנס דרך הדפדפן. נסה להאיר את הברקוד מבחוץ.");
    }
  };

  const startScanner = async () => {
    if (!window.isSecureContext && !isLocalhost(window.location.hostname)) {
      setCameraStatus("באייפון ספארי המצלמה עובדת רק ב-HTTPS. ברשת מקומית דרך http אפשר להקליד את הברקוד ידנית, או לפתוח גרסה ב-Railway.");
      return;
    }

    if (!navigator.mediaDevices?.getUserMedia) {
      setCameraStatus("הדפדפן הזה לא תומך בפתיחת מצלמה. אפשר להקליד את הברקוד ידנית.");
      return;
    }

    stopScanner();
    setScanning(true);
    setCameraStatus("פותח מצלמה...");

    let stream: MediaStream | null = null;

    try {
      const videoElement = await waitForVideoElement(() => videoRef.current);

      if (!videoElement) {
        setCameraStatus("לא הצלחנו לפתוח את חלון המצלמה. אפשר להקליד את הברקוד ידנית.");
        setScanning(false);
        return;
      }

      // Opening the camera here (rather than letting zxing do it) keeps
      // getUserMedia inside the tap that started the scan, which Safari needs,
      // and lets us pick the lens instead of leaving it to the browser.
      //
      // This must stay a single successful open: releasing a live stream and
      // reopening it to switch lens makes iOS Safari fail with NotReadableError
      // and kills the scanner right after the preview appears.
      const rearId = await pickRearCameraId();

      if (rearId) {
        try {
          stream = await navigator.mediaDevices.getUserMedia({
            video: videoConstraintsFor(rearId),
            audio: false,
          });
        } catch {
          stream = null;
        }
      }

      if (!stream) {
        stream = await navigator.mediaDevices.getUserMedia({
          video: videoConstraintsFor(),
          audio: false,
        });
      }

      streamRef.current = stream;

      const reader = new BrowserMultiFormatOneDReader(scannerHints, {
        delayBetweenScanAttempts: 100,
        delayBetweenScanSuccess: 500,
        tryPlayVideoTimeout: 8000,
      });
      const controls = await reader.decodeFromStream(stream, videoElement, (result) => {
        const value = result?.getText();
        if (!value) return;
        stopScanner();
        setBarcode(value);
        void lookupBarcode(value);
      });

      scannerControlsRef.current = controls;

      const track = stream.getVideoTracks()[0];
      const capabilities = track?.getCapabilities?.() as
        | (MediaTrackCapabilities & { torch?: boolean })
        | undefined;
      setTorchAvailable(Boolean(capabilities?.torch) || Boolean(controls.switchTorch));
      if (track) void applyFocusConstraints(track);

      setCameraStatus("כוון את המצלמה לברקוד, במרחק 10-20 ס״מ.");
    } catch (error) {
      stream?.getTracks().forEach((track) => track.stop());
      const errorName = (error as { name?: string } | null)?.name;

      setCameraStatus(
        errorName === "NotAllowedError"
          ? "הרשאת מצלמה נדחתה. בספארי: הגדרות האתר ← מצלמה ← אפשר, ואז נסה שוב."
          : errorName === "NotFoundError"
            ? "לא נמצאה מצלמה במכשיר הזה. אפשר להקליד את הברקוד ידנית."
            : errorName === "NotReadableError"
              ? "המצלמה תפוסה על ידי אפליקציה אחרת. סגור אותה, או סגור טאבים אחרים, ונסה שוב."
              : `לא הצלחנו לפתוח את המצלמה${errorName ? ` (${errorName})` : ""}. ודא שהאתר פתוח ב-HTTPS ושאישרת הרשאת מצלמה בספארי.`,
      );
      stopScanner();
    }
  };

  useEffect(() => stopScanner, []);

  useEffect(() => {
    if (!notice) return;
    const timeout = window.setTimeout(() => setNotice(""), 2800);
    return () => window.clearTimeout(timeout);
  }, [notice]);

  return (
    <main className="app-shell">
      {notice ? <div className="toast" role="status">{notice}</div> : null}
      <section className="topbar" aria-label="סיכום יומי">
        <div>
          <p className="eyebrow">קלורית</p>
          <h1>יומן קלוריות ישראלי</h1>
          <p className="subline">{formatHebrewDate(selectedDate)} · {entryCount} פריטים נרשמו</p>
          <div className="status-actions">
            <p className="storage-status">{storageStatus}</p>
            <button type="button" className="settings-button" onClick={() => setShowSettings(true)}>
              הגדרות
            </button>
          </div>
        </div>
        <button
          type="button"
          className={over ? "today-card over" : "today-card"}
          onClick={() => setShowWeekSummary(true)}
          aria-label={`סה"כ ${dailyTotal} קלוריות מתוך יעד ${goal}. לצפייה בסיכום שבועי`}
        >
          <div className="ring">
            <svg viewBox="0 0 128 128" aria-hidden="true">
              <circle className="ring-track" cx="64" cy="64" r="58" strokeWidth="12" />
              <circle
                className="ring-value"
                cx="64"
                cy="64"
                r="58"
                strokeWidth="12"
                strokeDasharray={ringCircumference}
                strokeDashoffset={ringOffset}
              />
            </svg>
            <div className="ring-center">
              <b>{dailyTotal.toLocaleString("he-IL")}</b>
              <span>{percentOfGoal}% מהיעד</span>
            </div>
          </div>
          <div className="today-meta">
            <span className="today-label">סה"כ קלוריות היום</span>
            <strong className="big">
              {dailyTotal.toLocaleString("he-IL")} <small>קק"ל</small>
            </strong>
            <small className="today-remaining">
              {over
                ? `עברת את היעד ב-${(dailyTotal - goal).toLocaleString("he-IL")} קק"ל`
                : `נשארו ${remaining.toLocaleString("he-IL")} קק"ל`}
            </small>
            <span className="today-goal">יעד יומי {goal.toLocaleString("he-IL")}</span>
          </div>
        </button>
      </section>

      <section className="calendar-strip" aria-label="לוח שנה">
        <button type="button" className="icon-button" onClick={() => setSelectedDate(addDays(selectedDate, -7))} title="שבוע קודם">
          ‹
        </button>
        <div className="days">
          {weeks.map((dateKey) => {
            const date = fromDateKey(dateKey);
            const total = totalCalories(logs[dateKey] ?? emptyDay());
            return (
              <button
                key={dateKey}
                type="button"
                className={dateKey === selectedDate ? "day active" : "day"}
                onClick={() => setSelectedDate(dateKey)}
              >
                <span>{new Intl.DateTimeFormat("he-IL", { weekday: "short" }).format(date)}</span>
                <strong>{date.getDate()}</strong>
                <small>{total ? `${total} קק"ל` : "ריק"}</small>
              </button>
            );
          })}
        </div>
        <button type="button" className="icon-button" onClick={() => setSelectedDate(addDays(selectedDate, 7))} title="שבוע הבא">
          ›
        </button>
      </section>

      <section className="health-strip" aria-label="מדדי יעד">
        <div>
          <span>BMI</span>
          <strong>{bmi ? bmi.toFixed(1) : "-"}</strong>
          <small>{bmiLabel(bmi)}</small>
        </div>
        <div>
          <span>יעד יומי</span>
          <strong>{goal.toLocaleString("he-IL")}</strong>
          <small>קק"ל לירידה של {profile.weeklyLossKg} ק״ג בשבוע</small>
        </div>
      </section>

      {showWeekSummary ? (
        <section className="modal-panel" aria-label="סיכום שבועי">
          <div className="modal-head">
            <div>
              <p className="eyebrow">שבוע</p>
              <h2>קלוריות השבוע</h2>
            </div>
            <button type="button" onClick={() => setShowWeekSummary(false)}>×</button>
          </div>
          <div className="week-total">
            <strong>{weeklyTotal.toLocaleString("he-IL")}</strong>
            <span>מתוך {weeklyGoal.toLocaleString("he-IL")} קק"ל</span>
          </div>
          <div className="week-bars">
            {weeks.map((dateKey) => {
              const total = totalCalories(logs[dateKey] ?? emptyDay());
              return (
                <div key={dateKey}>
                  <span>{new Intl.DateTimeFormat("he-IL", { weekday: "short" }).format(fromDateKey(dateKey))}</span>
                  <div><i style={{ width: `${Math.min(100, (total / goal) * 100)}%` }} /></div>
                  <strong>{total.toLocaleString("he-IL")}</strong>
                </div>
              );
            })}
          </div>
        </section>
      ) : null}

      {showSettings ? (
        <section className="modal-panel settings-panel" aria-label="הגדרות">
          <div className="modal-head">
            <div>
              <p className="eyebrow">פרופיל</p>
              <h2>הגדרות יעד</h2>
            </div>
            <button type="button" onClick={() => setShowSettings(false)}>×</button>
          </div>
          <div className="settings-grid">
            <label>
              שם
              <input
                value={profile.name ?? ""}
                onChange={(event) => updateProfileText("name", event.target.value)}
                onInput={(event) => updateProfileText("name", event.currentTarget.value)}
              />
            </label>
            <label>
              גובה
              <input
                type="number"
                value={Number.isFinite(profile.heightCm) ? profile.heightCm : ""}
                onChange={(event) => updateProfileNumber("heightCm", event.target.value)}
                onInput={(event) => updateProfileNumber("heightCm", event.currentTarget.value)}
              />
            </label>
            <label>
              גיל
              <input
                type="number"
                value={Number.isFinite(profile.age) ? profile.age : ""}
                onChange={(event) => updateProfileNumber("age", event.target.value)}
                onInput={(event) => updateProfileNumber("age", event.currentTarget.value)}
              />
            </label>
            <label>
              מין לחישוב
              <select
                value={profile.sex}
                onChange={(event) =>
                  setProfile((current) =>
                    sanitizeProfile({ ...current, sex: event.target.value as Profile["sex"] }),
                  )
                }
              >
                <option value="male">זכר</option>
                <option value="female">נקבה</option>
              </select>
            </label>
            <label>
              משקל יעד
              <input
                type="number"
                step="0.1"
                value={Number.isFinite(profile.targetWeightKg) ? profile.targetWeightKg : ""}
                onChange={(event) => updateProfileNumber("targetWeightKg", event.target.value)}
                onInput={(event) => updateProfileNumber("targetWeightKg", event.currentTarget.value)}
              />
            </label>
            <label>
              ירידה בשבוע
              <select
                value={profile.weeklyLossKg}
                onChange={(event) => updateProfileNumber("weeklyLossKg", event.target.value)}
              >
                <option value={0.25}>0.25 ק״ג</option>
                <option value={0.5}>0.5 ק״ג</option>
                <option value={0.75}>0.75 ק״ג</option>
                <option value={1}>1 ק״ג</option>
              </select>
            </label>
            <label>
              פעילות
              <select
                value={profile.activity}
                onChange={(event) => updateProfileNumber("activity", event.target.value)}
              >
                <option value={1.2}>מעט פעילות</option>
                <option value={1.35}>קל</option>
                <option value={1.55}>בינוני</option>
                <option value={1.75}>גבוה</option>
              </select>
            </label>
          </div>
          <div className="settings-result">
            <strong>{goal.toLocaleString("he-IL")} קק"ל ליום</strong>
            <span>BMI נוכחי {bmi ? bmi.toFixed(1) : "-"} · {bmiLabel(bmi)}</span>
          </div>
        </section>
      ) : null}

      <section className="dashboard">
        <div className="panel meals-panel">
          <div className="panel-head">
            <div>
              <p className="eyebrow">ארוחות</p>
              <h2>מה אכלת היום</h2>
            </div>
            <input
              className="date-input"
              type="date"
              value={selectedDate}
              onChange={(event) => setSelectedDate(event.target.value)}
              aria-label="בחירת תאריך"
            />
          </div>

          <div className="macro-row" aria-label="פירוט מקרו יומי">
            {([
              { key: "protein", label: "חלבון", value: totals.protein, target: macroTargets.protein },
              { key: "carbs", label: "פחמימות", value: totals.carbs, target: macroTargets.carbs },
              { key: "fat", label: "שומן", value: totals.fat, target: macroTargets.fat },
            ] as const).map((macro) => (
              <div className={`macro ${macro.key}`} key={macro.key}>
                <div className="macro-top">
                  <span>{macro.label}</span>
                  <strong>
                    {macro.value}
                    <i> / {macro.target}g</i>
                  </strong>
                </div>
                <div className="macro-track">
                  <span style={{ width: `${Math.min(100, Math.round((macro.value / macro.target) * 100))}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="meal-list">
            {mealOrder.map((meal) => {
              const mealCalories = day[meal].reduce((sum, entry) => sum + caloriesFor(entry), 0);
              return (
                <article className="meal-block" key={meal}>
                  <header>
                    <button
                      type="button"
                      className={selectedMeal === meal ? "meal-tab selected" : "meal-tab"}
                      onClick={() => setSelectedMeal(meal)}
                    >
                      {mealLabels[meal]}
                    </button>
                    <span>{mealCalories.toLocaleString("he-IL")} קק"ל</span>
                  </header>
                  <p>{mealHints[meal]}</p>
                  {day[meal].length === 0 ? (
                    <div className="empty-meal">אין פריטים בארוחה הזו עדיין.</div>
                  ) : (
                    <ul className="entries">
                      {day[meal].map((entry) => (
                        <li key={entry.id}>
                          <div>
                            <strong>{entry.product.name}</strong>
                            <span>
                              {entry.amountLabel ?? `${entry.grams} גרם`} · {caloriesFor(entry)} קק"ל
                            </span>
                          </div>
                          <button type="button" onClick={() => removeEntry(meal, entry.id)} title="מחיקה">
                            ×
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              );
            })}
          </div>
        </div>

        <aside className="panel add-panel">
          <div className="panel-head compact">
            <div>
              <p className="eyebrow">הוספה</p>
              <h2>חפש, סרוק או הזן</h2>
              <p className="helper">חפש מוצר בשם או סרוק ברקוד. אחרי שמצאת, בחר כמות ואז לחץ הוספה.</p>
            </div>
          </div>

          <div className="barcode-box">
            <div className="barcode-visual" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="barcode-actions">
              <input
                inputMode="numeric"
                placeholder="הזן ברקוד"
                value={barcode}
                onChange={(event) => setBarcode(event.target.value)}
                onInput={(event) => setBarcode(event.currentTarget.value)}
              />
              <button type="button" className="primary" onClick={() => void lookupBarcode()}>
                בדיקה
              </button>
              <button type="button" onClick={scanning ? stopScanner : startScanner}>
                {scanning ? "עצור מצלמה" : "סרוק"}
              </button>
            </div>
            {scanning ? (
              <div className="scanner-frame">
                <video ref={videoRef} className="scanner" muted playsInline autoPlay />
                <div className="scanner-guide" aria-hidden="true">
                  <span />
                </div>
                <div className="scanner-tools">
                  <button type="button" onClick={improveCameraFocus}>
                    שפר פוקוס
                  </button>
                  <button type="button" onClick={() => void toggleTorch()} disabled={!torchAvailable}>
                    {torchOn ? "כבה פנס" : "פנס"}
                  </button>
                </div>
              </div>
            ) : null}
            <p>{barcodeStatus || cameraStatus || "סריקת ברקוד תחפש את המוצר, ואז תוכל לבחור כמות וארוחה."}</p>
            {lastScannedProduct?.image ? (
              <img className="product-image" src={lastScannedProduct.image} alt={lastScannedProduct.name} />
            ) : null}
          </div>

          <div className="search-box">
            <input
              type="search"
              placeholder="חיפוש: קוטג', במבה, חזה עוף..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onInput={(event) => setQuery(event.currentTarget.value)}
            />
          </div>

          {query.trim().length === 0 ? (
            <div className="search-prompt">
              המאגר כולל {products.length.toLocaleString("he-IL")} מוצרים. התחל להקליד שם מוצר כדי לראות תוצאות.
            </div>
          ) : null}

          {query.trim().length > 0 && query.trim().length < 2 ? (
            <div className="search-prompt">הקלד לפחות שני תווים כדי לחפש.</div>
          ) : null}

          {query.trim().length === 0 && recentProducts.length ? (
            <section className="suggestion-block" aria-label="אחרונים">
              <div className="mini-head">
                <strong>אחרונים אצלך</strong>
                <span>לחיצה תבחר מוצר</span>
              </div>
              <div className="chip-row">
                {recentProducts.map((product) => (
                  <button key={`recent-${product.id}`} type="button" onClick={() => selectProduct(product)}>
                    {product.name}
                  </button>
                ))}
              </div>
            </section>
          ) : null}

          {selectedProduct ? (
            <section className="selected-product" aria-label="מוצר שנבחר">
              <div className="selected-product-head">
                <strong>{selectedProduct.name}</strong>
                <span>{selectedProduct.brand ?? selectedProduct.category} · {selectedProduct.serving}</span>
              </div>
              <div className="selected-calories">
                {Math.round((selectedProduct.caloriesPer100g * selectedGrams) / 100).toLocaleString("he-IL")} קק"ל
              </div>
              <div className="amount-grid">
                <label className="amount-field">
                  כמות
                  <input
                    type="number"
                    min="0.1"
                    step="0.1"
                    value={Number.isFinite(amountValue) ? amountValue : ""}
                    onChange={(event) => setAmountValue(parseUserNumber(event.target.value))}
                    onInput={(event) => setAmountValue(parseUserNumber(event.currentTarget.value))}
                  />
                </label>
                <label className="amount-field">
                  יחידה
                  <select
                    value={selectedUnit.id}
                    onChange={(event) => {
                      const nextUnit = unitOptions.find((unit) => unit.id === event.target.value) ?? unitOptions[0];
                      setSelectedUnitId(nextUnit.id);
                      setAmountValue(nextUnit.defaultValue);
                    }}
                  >
                    {unitOptions.map((unit) => (
                      <option key={unit.id} value={unit.id}>
                        {unit.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <p className="amount-summary">
                מחושב לפי {formatAmountLabel(safeAmountValue, selectedUnit, selectedGrams)}
              </p>
              <div className="quick-amounts" aria-label="בחירת כמות מהירה">
                {selectedUnit.quickValues.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    className={amountValue === amount ? "selected" : ""}
                    onClick={() => setAmountValue(amount)}
                  >
                    {amount} {selectedUnit.label}
                  </button>
                ))}
              </div>
              <button type="button" className="primary add-selected" onClick={requestMealChoice}>
                הוסף ליומן
              </button>
            </section>
          ) : null}

          {filteredProducts.length ? (
            <div className="product-results">
              {filteredProducts.map((product) => (
                <button
                  key={product.id}
                  type="button"
                  className={selectedProduct?.id === product.id ? "product-result selected" : "product-result"}
                  onClick={() => selectProduct(product)}
                >
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.brand ?? product.category}</span>
                  </div>
                  <small>{product.caloriesPer100g} קק"ל ל-100 גרם</small>
                </button>
              ))}
            </div>
          ) : null}

          {query.trim().length >= 2 && filteredProducts.length === 0 ? (
            <div className="empty-search">
              לא מצאתי מוצר בשם הזה. אפשר לסרוק ברקוד או להוסיף ידנית עם קלוריות ל-100 גרם.
            </div>
          ) : null}

          {choosingMeal && selectedProduct ? (
            <section className="meal-chooser" aria-label="בחירת ארוחה">
              <div className="mini-head">
                <strong>לאיזו ארוחה להוסיף?</strong>
                <span>{selectedProduct.name}</span>
              </div>
              <div className="meal-choice-grid">
                {mealOrder.map((meal) => (
                  <button key={meal} type="button" onClick={() => addSelectedToMeal(meal)}>
                    {mealLabels[meal]}
                  </button>
                ))}
              </div>
              <button type="button" className="ghost meal-cancel" onClick={() => setChoosingMeal(false)}>
                ביטול
              </button>
            </section>
          ) : null}

          <div className="manual-box">
            <button
              type="button"
              className="ghost"
              onClick={() => {
                setManualOpen((value) => !value);
                if (!manualName.trim() && query.trim()) setManualName(query.trim());
              }}
            >
              {manualOpen ? "סגור הזנה ידנית" : "הוסף מוצר ידני"}
            </button>
            {manualOpen ? (
              <div className="manual-fields">
                <label>
                  שם מוצר
                  <input
                    placeholder="לדוגמה: גבינה ביתית"
                    value={manualName}
                    onChange={(event) => setManualName(event.target.value)}
                    onInput={(event) => setManualName(event.currentTarget.value)}
                  />
                </label>
                <label>
                  קק"ל ל-100 גרם
                  <input
                    inputMode="decimal"
                    min="0"
                    placeholder="לדוגמה: 95"
                    value={manualCalories}
                    onChange={(event) => setManualCalories(event.target.value)}
                    onInput={(event) => setManualCalories(event.currentTarget.value)}
                  />
                </label>
                <button type="button" className="primary" onClick={addManual}>
                  צור ובחר כמות
                </button>
                <p>את הערך הקלורי לוקחים בדרך כלל מהתווית: "קלוריות ל-100 גרם" או "אנרגיה ל-100 גרם".</p>
              </div>
            ) : null}
          </div>
        </aside>
      </section>

      <section className="health-strip weight-footer" aria-label="משקל יומי">
        <label>
          משקל היום
          <input
            type="number"
            min="20"
            step="0.1"
            value={weights[selectedDate] ?? ""}
            placeholder={`${currentWeight || ""}`}
            onChange={(event) => updateTodayWeight(event.target.value)}
            onInput={(event) => updateTodayWeight(event.currentTarget.value)}
          />
        </label>
        <div>
          <span>תאריך</span>
          <strong>{new Intl.DateTimeFormat("he-IL", { day: "numeric", month: "short" }).format(fromDateKey(selectedDate))}</strong>
          <small>נשמר אוטומטית ליומן של היום הזה</small>
        </div>
      </section>
    </main>
  );
}

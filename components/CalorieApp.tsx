"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";
import { products, type Product } from "@/data/products";

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

const normalizeText = (value: string) => value.trim().toLowerCase();
const isLocalhost = (hostname: string) => hostname === "localhost" || hostname === "127.0.0.1";

const getUnitOptions = (product: Product): UnitOption[] => {
  const text = `${product.name} ${product.brand ?? ""} ${product.category}`.toLowerCase();

  if (product.category === "שתייה" || /משקה|מיץ|קולה|סודה|מים|בירה|יין|קפה|תה|שוקו/.test(text)) {
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

  if (product.category === "ארוחות מוכנות" || /מנה|פיתה|לאפה|כריך|סלט|קערת|ארוחת/.test(text)) {
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

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem("calor-logs-v1");
      if (raw) {
        setLogs(JSON.parse(raw) as Logs);
      }
    } catch {
      setLogs({});
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (loaded) {
      window.localStorage.setItem("calor-logs-v1", JSON.stringify(logs));
    }
  }, [loaded, logs]);

  return [logs, setLogs] as const;
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

export function CalorieApp() {
  const [logs, setLogs] = useStoredLogs();
  const [selectedDate, setSelectedDate] = useState(() => toDateKey(new Date()));
  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState<MealKey>("breakfast");
  const [amountValue, setAmountValue] = useState(100);
  const [selectedUnitId, setSelectedUnitId] = useState("g");
  const [manualOpen, setManualOpen] = useState(false);
  const [manualName, setManualName] = useState("");
  const [manualCalories, setManualCalories] = useState(150);
  const [barcode, setBarcode] = useState("");
  const [barcodeStatus, setBarcodeStatus] = useState("");
  const [cameraStatus, setCameraStatus] = useState("");
  const [scanning, setScanning] = useState(false);
  const [lastScannedProduct, setLastScannedProduct] = useState<Product | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [choosingMeal, setChoosingMeal] = useState(false);
  const [notice, setNotice] = useState("");
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const scannerControlsRef = useRef<{ stop: () => void } | null>(null);

  const day = logs[selectedDate] ?? emptyDay();
  const weeks = useMemo(() => weekKeys(selectedDate), [selectedDate]);
  const dailyTotal = totalCalories(day);
  const goal = 2200;
  const progress = Math.min(100, Math.round((dailyTotal / goal) * 100));
  const remaining = Math.max(0, goal - dailyTotal);
  const allEntries = useMemo(() => mealOrder.flatMap((meal) => day[meal]), [day]);
  const entryCount = allEntries.length;
  const unitOptions = selectedProduct ? getUnitOptions(selectedProduct) : gramUnits;
  const selectedUnit = unitOptions.find((unit) => unit.id === selectedUnitId) ?? unitOptions[0];
  const selectedGrams = Math.max(1, amountValue * selectedUnit.gramsPerUnit);

  const filteredProducts = useMemo(() => {
    const cleanQuery = normalizeText(query);
    if (cleanQuery.length < 2) return [];
    return products
      .filter((product) => {
        return normalizeText(
          `${product.name} ${product.brand ?? ""} ${product.category}`,
        ).includes(cleanQuery);
      })
      .slice(0, 12);
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
    if (!manualName.trim()) return;
    selectProduct({
      id: `manual-${Date.now()}`,
      name: manualName.trim(),
      category: "ידני",
      serving: "100 גרם",
      caloriesPer100g: Number(manualCalories) || 0,
      protein: null,
      carbs: null,
      fat: null,
    });
    setManualName("");
    setManualCalories(150);
    setManualOpen(false);
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
    addProduct(selectedProduct, selectedGrams, meal, formatAmountLabel(amountValue, selectedUnit, selectedGrams));
    setSelectedProduct(null);
    setChoosingMeal(false);
    setQuery("");
    setBarcode("");
    setBarcodeStatus("");
    setCameraStatus("");
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
  };

  const startScanner = async () => {
    if (!window.isSecureContext && !isLocalhost(window.location.hostname)) {
      setCameraStatus("באייפון ספארי המצלמה עובדת רק ב-HTTPS. ברשת מקומית דרך http אפשר להקליד את הברקוד ידנית, או לפתוח גרסה ב-Railway.");
      return;
    }

    const detectorCtor = (window as unknown as {
      BarcodeDetector?: new (options?: { formats?: string[] }) => {
        detect: (source: HTMLVideoElement) => Promise<Array<{ rawValue: string }>>;
      };
    }).BarcodeDetector;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setScanning(true);
      setCameraStatus("כוון את המצלמה לברקוד.");

      if (!detectorCtor) {
        if (!videoRef.current) {
          setCameraStatus("לא הצלחנו לפתוח את חלון המצלמה. אפשר להקליד את הברקוד ידנית.");
          stopScanner();
          return;
        }
        const reader = new BrowserMultiFormatReader();
        const controls = await reader.decodeFromVideoElement(videoRef.current, (result) => {
          const value = result?.getText();
          if (!value) return;
          stopScanner();
          setBarcode(value);
          void lookupBarcode(value);
        });
        scannerControlsRef.current = controls;
        return;
      }

      const detector = new detectorCtor({ formats: ["ean_13", "ean_8", "upc_a", "upc_e"] });

      const scan = async () => {
        if (!videoRef.current || !streamRef.current) return;
        const codes = await detector.detect(videoRef.current);
        if (codes[0]?.rawValue) {
          const value = codes[0].rawValue;
          stopScanner();
          setBarcode(value);
          void lookupBarcode(value);
          return;
        }
        window.setTimeout(scan, 500);
      };

      window.setTimeout(scan, 700);
    } catch {
      setCameraStatus("לא קיבלנו גישה למצלמה. באייפון דרך רשת מקומית צריך HTTPS; בינתיים אפשר להקליד את הברקוד ידנית.");
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
        </div>
        <div className="today-card">
          <span>סה"כ היום</span>
          <strong>{dailyTotal.toLocaleString("he-IL")}</strong>
          <small>{remaining ? `נשארו ${remaining.toLocaleString("he-IL")} קק"ל` : "עברת את היעד היומי"}</small>
          <div className="progress" aria-label={`התקדמות ${progress}%`}>
            <span style={{ width: `${progress}%` }} />
          </div>
        </div>
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

          <div className="macro-row">
            <span>חלבון {totals.protein}g</span>
            <span>פחמימות {totals.carbs}g</span>
            <span>שומן {totals.fat}g</span>
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
            {scanning ? <video ref={videoRef} className="scanner" muted playsInline /> : null}
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
                    value={amountValue}
                    onChange={(event) => setAmountValue(Number(event.target.value))}
                    onInput={(event) => setAmountValue(Number(event.currentTarget.value))}
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
                מחושב לפי {formatAmountLabel(amountValue || 0, selectedUnit, selectedGrams)}
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
            <button type="button" className="ghost" onClick={() => setManualOpen((value) => !value)}>
              {manualOpen ? "סגור הזנה ידנית" : "הוסף מוצר ידני"}
            </button>
            {manualOpen ? (
              <div className="manual-fields">
                <input
                  placeholder="שם המאכל"
                  value={manualName}
                  onChange={(event) => setManualName(event.target.value)}
                  onInput={(event) => setManualName(event.currentTarget.value)}
                />
                <input
                  type="number"
                  min="0"
                  value={manualCalories}
                  onChange={(event) => setManualCalories(Number(event.target.value))}
                  onInput={(event) => setManualCalories(Number(event.currentTarget.value))}
                  aria-label="קלוריות ל-100 גרם"
                />
                <button type="button" className="primary" onClick={addManual}>
                  בחר
                </button>
              </div>
            ) : null}
          </div>
        </aside>
      </section>
    </main>
  );
}

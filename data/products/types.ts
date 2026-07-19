// Canonical product schema and category taxonomy for the food catalog.
// Every product in the catalog is normalized to `Product` and its `category`
// is one of the `Category` literals below — no free-text categories.

export type Product = {
  id: string;
  name: string;
  brand?: string;
  category: Category;
  serving: string;
  caloriesPer100g: number;
  protein?: number | null;
  carbs?: number | null;
  fat?: number | null;
  barcode?: string;
  image?: string | null;
};

// The single source of truth for categories. Ordered for display
// (staples first, treats last). Adding a category here is the only way to
// introduce one — the builders are typed against this union, so a typo in a
// source row fails the TypeScript build instead of silently creating a
// 17th "category".
export const CATEGORIES = [
  "מוצרי חלב",
  "דגים ובשר",
  "חלבונים",
  "קטניות",
  "דגנים ותוספות",
  "לחמים ומאפים",
  "ירקות",
  "פירות",
  "סלטים וממרחים",
  "שמנים ורטבים",
  "ארוחות מוכנות",
  "אגוזים וזרעים",
  "חטיפים",
  "מתוקים",
  "שתייה",
  "אלכוהול",
  // Special-purpose: assigned to user-entered ("manual") items at runtime, never
  // to catalog rows — so it stays out of the `categories` list the UI shows.
  "ידני",
] as const;

export type Category = (typeof CATEGORIES)[number];

const CATEGORY_SET = new Set<string>(CATEGORIES);

export const isCategory = (value: string): value is Category => CATEGORY_SET.has(value);

// Normalization pipeline: every raw source shape is funneled through one of the
// `from*` builders into a canonical `Product`, then deduped and sorted in index.ts.
import { type Category, type Product, isCategory } from "./types";

// FNV-1a 32-bit hash -> base36. Content-derived, so an id depends only on the
// product's name+brand — it never shifts when other rows are added or removed
// (unlike the old `local-<index>` / `family-<i>-<j>` positional ids).
const hash = (input: string) => {
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(36);
};

export const slugId = (name: string, brand?: string) => `p-${hash(`${brand ?? ""}|${name}`)}`;

type Macros = {
  caloriesPer100g: number;
  protein?: number | null;
  carbs?: number | null;
  fat?: number | null;
};

// Fully-specified rows keep their authored (human-readable) id; anything without
// one gets a stable slug id.
export const fromWhole = (rows: readonly Product[]): Product[] =>
  rows.map((row) => ({ ...row, id: row.id || slugId(row.name, row.brand) }));

// [name, category, calories, protein, carbs, fat] — serving defaults to 100g.
export type MacroTuple = readonly [string, Category, number, number, number, number];
export const fromTuples = (rows: readonly MacroTuple[]): Product[] =>
  rows.map(([name, category, caloriesPer100g, protein, carbs, fat]) => ({
    id: slugId(name),
    name,
    category,
    serving: "100 גרם",
    caloriesPer100g,
    protein,
    carbs,
    fat,
  }));

// [name, brand, category, calories, protein, carbs, fat]
export type BrandTuple = readonly [string, string, Category, number, number, number, number];
export const fromBrandTuples = (rows: readonly BrandTuple[]): Product[] =>
  rows.map(([name, brand, category, caloriesPer100g, protein, carbs, fat]) => ({
    id: slugId(name, brand),
    name,
    brand,
    category,
    serving: "100 גרם",
    caloriesPer100g,
    protein,
    carbs,
    fat,
  }));

// A family that lists explicit product names sharing one nutrition profile.
export type NameFamily = Macros & {
  brand?: string;
  category: Category;
  serving: string;
  names: readonly string[];
};
export const fromNameFamilies = (families: readonly NameFamily[]): Product[] =>
  families.flatMap((family) =>
    family.names.map((name) => ({
      id: slugId(name, family.brand),
      name,
      brand: family.brand,
      category: family.category,
      serving: family.serving,
      caloriesPer100g: family.caloriesPer100g,
      protein: family.protein,
      carbs: family.carbs,
      fat: family.fat,
    })),
  );

// A family expanded as a cartesian product of bases × variants
// (e.g. "ביסלי" × "גריל" -> "ביסלי גריל").
export type ComboFamily = Macros & {
  brand?: string;
  category: Category;
  serving: string;
  bases: readonly string[];
  variants: readonly string[];
};
export const fromComboFamilies = (families: readonly ComboFamily[]): Product[] =>
  families.flatMap((family) =>
    family.bases.flatMap((base) =>
      family.variants.map((variant) => {
        const name = `${base} ${variant}`;
        return {
          id: slugId(name, family.brand),
          name,
          brand: family.brand,
          category: family.category,
          serving: family.serving,
          caloriesPer100g: family.caloriesPer100g,
          protein: family.protein,
          carbs: family.carbs,
          fat: family.fat,
        };
      }),
    ),
  );

// Merge exact duplicates (same name+brand). Callers pass sources most-authoritative
// first, so a hand-checked row wins over a generated combo on any conflict, and the
// authored id survives. A counter suffix guards against a hash collision between two
// genuinely different products.
export const dedupe = (rows: readonly Product[]): Product[] => {
  const seen = new Map<string, Product>();
  const usedIds = new Set<string>();
  for (const row of rows) {
    const key = `${row.name.trim()}|${(row.brand ?? "").trim()}`;
    if (seen.has(key)) continue;
    let id = row.id;
    let n = 2;
    while (usedIds.has(id)) id = `${row.id}-${n++}`;
    usedIds.add(id);
    seen.set(key, { ...row, id });
  }
  return Array.from(seen.values());
};

export const sortByName = (rows: readonly Product[]): Product[] =>
  [...rows].sort((a, b) => a.name.localeCompare(b.name, "he"));

// Defensive runtime check — the builders are already typed against `Category`,
// but this catches anything that slipped in via an `as` cast.
export const assertCategories = (rows: readonly Product[]): readonly Product[] => {
  const bad = rows.filter((row) => !isCategory(row.category));
  if (bad.length) {
    console.warn(
      `[products] ${bad.length} row(s) have an unknown category`,
      Array.from(new Set(bad.map((row) => row.category))),
    );
  }
  return rows;
};

// Public catalog API. Import from "@/data/products".
//
// Pipeline:  raw sources  ->  from* builders (normalize + stable ids)
//            ->  assertCategories  ->  dedupe (merge exact name+brand)
//            ->  sortByName  ->  `products`
import { CATEGORIES, type Category, type Product } from "./types";
import {
  assertCategories,
  dedupe,
  fromBrandTuples,
  fromComboFamilies,
  fromNameFamilies,
  fromTuples,
  fromWhole,
  sortByName,
} from "./build";
import {
  alcoholAndCocktailProducts,
  basicCheeseProducts,
  brandVariants,
  breadAndPitaUnitProducts,
  expandedNames,
  grillMeatProducts,
  moreNames,
  mullerYotvataCatalog,
  proAndSnackCatalog,
  productFamilies,
  staples,
  supermarketComboCatalog,
  supermarketFocusCatalog,
} from "./sources";

// Order = dedupe priority. Hand-authored, fully-specified rows come first so
// their nutrition and readable ids win over the generated fan-out on a collision.
const assembled: Product[] = [
  ...fromWhole(staples),
  ...fromWhole(basicCheeseProducts),
  ...fromWhole(grillMeatProducts),
  ...fromWhole(alcoholAndCocktailProducts),
  ...fromWhole(breadAndPitaUnitProducts),
  ...fromBrandTuples(brandVariants),
  ...fromTuples(moreNames),
  ...fromTuples(expandedNames),
  ...fromNameFamilies(productFamilies),
  ...fromNameFamilies(supermarketFocusCatalog),
  ...fromNameFamilies(mullerYotvataCatalog),
  ...fromComboFamilies(proAndSnackCatalog),
  ...fromComboFamilies(supermarketComboCatalog),
];

export const products: Product[] = sortByName(dedupe(assertCategories(assembled)));

// Only the categories that actually occur, in canonical CATEGORIES order.
export const categories: Category[] = CATEGORIES.filter((category) =>
  products.some((product) => product.category === category),
);

export { CATEGORIES, isCategory } from "./types";
export type { Product, Category } from "./types";

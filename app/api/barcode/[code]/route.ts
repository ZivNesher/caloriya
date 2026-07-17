import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type OpenFoodFactsResponse = {
  status?: number;
  product?: {
    code?: string;
    product_name_he?: string;
    product_name?: string;
    product_name_en?: string;
    brands?: string;
    quantity?: string;
    image_front_small_url?: string;
    nutriments?: {
      "energy-kcal_100g"?: number;
      "energy-kcal_serving"?: number;
      proteins_100g?: number;
      carbohydrates_100g?: number;
      fat_100g?: number;
    };
    serving_size?: string;
  };
};

function numberOrNull(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ code: string }> },
) {
  const { code: rawCode } = await params;
  const code = rawCode.replace(/\D/g, "");

  if (!code || code.length < 6) {
    return NextResponse.json(
      { error: "ברקוד לא תקין" },
      { status: 400 },
    );
  }

  const fields = [
    "code",
    "product_name",
    "product_name_he",
    "product_name_en",
    "brands",
    "quantity",
    "image_front_small_url",
    "nutriments",
    "serving_size",
  ].join(",");

  const response = await fetch(
    `https://world.openfoodfacts.org/api/v2/product/${code}.json?lc=he&fields=${fields}`,
    {
      headers: {
        "User-Agent": "calor-hebrew-app/1.0 (local railway demo)",
      },
      next: { revalidate: 60 * 60 * 24 },
    },
  );

  if (response.status === 404) {
    return NextResponse.json(
      { error: "המוצר לא נמצא במאגר הברקודים" },
      { status: 404 },
    );
  }

  if (!response.ok) {
    return NextResponse.json(
      { error: "לא הצלחנו לגשת למאגר הברקודים כרגע" },
      { status: 502 },
    );
  }

  const data = (await response.json()) as OpenFoodFactsResponse;

  if (data.status !== 1 || !data.product) {
    return NextResponse.json(
      { error: "המוצר לא נמצא במאגר הברקודים" },
      { status: 404 },
    );
  }

  const product = data.product;
  const nutriments = product.nutriments ?? {};
  const calories = numberOrNull(nutriments["energy-kcal_100g"]);

  if (!calories) {
    return NextResponse.json(
      { error: "המוצר נמצא, אבל חסרים לו ערכי קלוריות" },
      { status: 422 },
    );
  }

  return NextResponse.json({
    id: `barcode-${product.code ?? code}`,
    barcode: product.code ?? code,
    name:
      product.product_name_he ||
      product.product_name ||
      product.product_name_en ||
      "מוצר סרוק",
    brand: product.brands || "Open Food Facts",
    category: "סריקות ברקוד",
    serving: product.serving_size || product.quantity || "100 גרם",
    caloriesPer100g: Math.round(calories),
    protein: numberOrNull(nutriments.proteins_100g),
    carbs: numberOrNull(nutriments.carbohydrates_100g),
    fat: numberOrNull(nutriments.fat_100g),
    image: product.image_front_small_url || null,
  });
}

(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/data/products.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categories",
    ()=>categories,
    "products",
    ()=>products
]);
const staples = [
    {
        id: "cottage-tnuva-5",
        name: "קוטג' 5%",
        brand: "תנובה",
        category: "מוצרי חלב",
        serving: "100 גרם",
        caloriesPer100g: 98,
        protein: 11,
        carbs: 3,
        fat: 5
    },
    {
        id: "cottage-strauss-5",
        name: "קוטג' 5%",
        brand: "שטראוס",
        category: "מוצרי חלב",
        serving: "100 גרם",
        caloriesPer100g: 97,
        protein: 11,
        carbs: 3,
        fat: 5
    },
    {
        id: "white-cheese-5",
        name: "גבינה לבנה 5%",
        brand: "תנובה",
        category: "מוצרי חלב",
        serving: "100 גרם",
        caloriesPer100g: 95,
        protein: 9,
        carbs: 4,
        fat: 5
    },
    {
        id: "white-cheese-3",
        name: "גבינה לבנה 3%",
        brand: "תנובה",
        category: "מוצרי חלב",
        serving: "100 גרם",
        caloriesPer100g: 78,
        protein: 9,
        carbs: 4,
        fat: 3
    },
    {
        id: "greek-yogurt",
        name: "יוגורט יווני",
        brand: "מולר",
        category: "מוצרי חלב",
        serving: "150 גרם",
        caloriesPer100g: 118,
        protein: 7,
        carbs: 4,
        fat: 8
    },
    {
        id: "yogurt-plain-3",
        name: "יוגורט טבעי 3%",
        brand: "תנובה",
        category: "מוצרי חלב",
        serving: "200 גרם",
        caloriesPer100g: 62,
        protein: 5,
        carbs: 5,
        fat: 3
    },
    {
        id: "skyr",
        name: "סקיר טבעי",
        brand: "תנובה GO",
        category: "מוצרי חלב",
        serving: "150 גרם",
        caloriesPer100g: 65,
        protein: 11,
        carbs: 4,
        fat: 0
    },
    {
        id: "milk-3",
        name: "חלב 3%",
        brand: "תנובה",
        category: "מוצרי חלב",
        serving: "כוס 200 מל",
        caloriesPer100g: 60,
        protein: 3.3,
        carbs: 5,
        fat: 3
    },
    {
        id: "milk-1",
        name: "חלב 1%",
        brand: "תנובה",
        category: "מוצרי חלב",
        serving: "כוס 200 מל",
        caloriesPer100g: 42,
        protein: 3.4,
        carbs: 5,
        fat: 1
    },
    {
        id: "yellow-cheese-9",
        name: "גבינה צהובה 9%",
        brand: "עמק",
        category: "מוצרי חלב",
        serving: "פרוסה 25 גרם",
        caloriesPer100g: 210,
        protein: 28,
        carbs: 1,
        fat: 9
    },
    {
        id: "yellow-cheese-28",
        name: "גבינה צהובה 28%",
        brand: "עמק",
        category: "מוצרי חלב",
        serving: "פרוסה 25 גרם",
        caloriesPer100g: 350,
        protein: 25,
        carbs: 1,
        fat: 28
    },
    {
        id: "feta-5",
        name: "בולגרית 5%",
        brand: "גד",
        category: "מוצרי חלב",
        serving: "100 גרם",
        caloriesPer100g: 125,
        protein: 16,
        carbs: 2,
        fat: 5
    },
    {
        id: "labane",
        name: "לבנה",
        brand: "גד",
        category: "מוצרי חלב",
        serving: "100 גרם",
        caloriesPer100g: 160,
        protein: 8,
        carbs: 4,
        fat: 12
    },
    {
        id: "hummus-achla",
        name: "חומוס",
        brand: "אחלה",
        category: "סלטים וממרחים",
        serving: "100 גרם",
        caloriesPer100g: 265,
        protein: 7,
        carbs: 14,
        fat: 20
    },
    {
        id: "hummus-zabar",
        name: "חומוס",
        brand: "צבר",
        category: "סלטים וממרחים",
        serving: "100 גרם",
        caloriesPer100g: 270,
        protein: 7,
        carbs: 14,
        fat: 21
    },
    {
        id: "tahini-raw",
        name: "טחינה גולמית",
        brand: "אחוה",
        category: "סלטים וממרחים",
        serving: "כף 15 גרם",
        caloriesPer100g: 595,
        protein: 18,
        carbs: 10,
        fat: 53
    },
    {
        id: "tahini-salad",
        name: "טחינה מוכנה",
        brand: "צבר",
        category: "סלטים וממרחים",
        serving: "100 גרם",
        caloriesPer100g: 300,
        protein: 8,
        carbs: 6,
        fat: 27
    },
    {
        id: "matbucha",
        name: "מטבוחה",
        brand: "אחלה",
        category: "סלטים וממרחים",
        serving: "100 גרם",
        caloriesPer100g: 115,
        protein: 2,
        carbs: 10,
        fat: 7
    },
    {
        id: "eggplant-mayo",
        name: "חצילים במיונז",
        brand: "צבר",
        category: "סלטים וממרחים",
        serving: "100 גרם",
        caloriesPer100g: 245,
        protein: 1,
        carbs: 7,
        fat: 23
    },
    {
        id: "tuna-oil",
        name: "טונה בשמן",
        brand: "סטארקיסט",
        category: "דגים ובשר",
        serving: "קופסה מסוננת",
        caloriesPer100g: 190,
        protein: 27,
        carbs: 0,
        fat: 9
    },
    {
        id: "tuna-water",
        name: "טונה במים",
        brand: "סטארקיסט",
        category: "דגים ובשר",
        serving: "קופסה מסוננת",
        caloriesPer100g: 110,
        protein: 25,
        carbs: 0,
        fat: 1
    },
    {
        id: "chicken-breast",
        name: "חזה עוף מבושל",
        category: "דגים ובשר",
        serving: "100 גרם",
        caloriesPer100g: 165,
        protein: 31,
        carbs: 0,
        fat: 4
    },
    {
        id: "chicken-thigh",
        name: "פרגית צלויה",
        category: "דגים ובשר",
        serving: "100 גרם",
        caloriesPer100g: 210,
        protein: 25,
        carbs: 0,
        fat: 12
    },
    {
        id: "ground-beef",
        name: "בשר בקר טחון",
        category: "דגים ובשר",
        serving: "100 גרם",
        caloriesPer100g: 250,
        protein: 26,
        carbs: 0,
        fat: 15
    },
    {
        id: "salmon",
        name: "סלמון אפוי",
        category: "דגים ובשר",
        serving: "100 גרם",
        caloriesPer100g: 208,
        protein: 20,
        carbs: 0,
        fat: 13
    },
    {
        id: "egg",
        name: "ביצה קשה",
        category: "חלבונים",
        serving: "ביצה 55 גרם",
        caloriesPer100g: 155,
        protein: 13,
        carbs: 1,
        fat: 11
    },
    {
        id: "omelette",
        name: "חביתה",
        category: "חלבונים",
        serving: "2 ביצים",
        caloriesPer100g: 190,
        protein: 13,
        carbs: 1,
        fat: 15
    },
    {
        id: "tofu",
        name: "טופו",
        brand: "משק ויילר",
        category: "חלבונים",
        serving: "100 גרם",
        caloriesPer100g: 120,
        protein: 13,
        carbs: 2,
        fat: 7
    },
    {
        id: "rice-white",
        name: "אורז לבן מבושל",
        category: "דגנים ותוספות",
        serving: "כוס 160 גרם",
        caloriesPer100g: 130,
        protein: 2.7,
        carbs: 28,
        fat: 0.3
    },
    {
        id: "rice-brown",
        name: "אורז מלא מבושל",
        category: "דגנים ותוספות",
        serving: "כוס 160 גרם",
        caloriesPer100g: 112,
        protein: 2.6,
        carbs: 23,
        fat: 0.9
    },
    {
        id: "pasta-cooked",
        name: "פסטה מבושלת",
        category: "דגנים ותוספות",
        serving: "כוס 150 גרם",
        caloriesPer100g: 158,
        protein: 5.8,
        carbs: 31,
        fat: 0.9
    },
    {
        id: "ptitim",
        name: "פתיתים מבושלים",
        brand: "אסם",
        category: "דגנים ותוספות",
        serving: "כוס 160 גרם",
        caloriesPer100g: 155,
        protein: 5,
        carbs: 31,
        fat: 1
    },
    {
        id: "couscous",
        name: "קוסקוס מבושל",
        category: "דגנים ותוספות",
        serving: "כוס 160 גרם",
        caloriesPer100g: 112,
        protein: 3.8,
        carbs: 23,
        fat: 0.2
    },
    {
        id: "quinoa",
        name: "קינואה מבושלת",
        category: "דגנים ותוספות",
        serving: "כוס 160 גרם",
        caloriesPer100g: 120,
        protein: 4.4,
        carbs: 21,
        fat: 1.9
    },
    {
        id: "oats",
        name: "שיבולת שועל",
        brand: "קוואקר",
        category: "דגנים ותוספות",
        serving: "40 גרם",
        caloriesPer100g: 389,
        protein: 17,
        carbs: 66,
        fat: 7
    },
    {
        id: "granola",
        name: "גרנולה",
        category: "דגנים ותוספות",
        serving: "40 גרם",
        caloriesPer100g: 450,
        protein: 9,
        carbs: 62,
        fat: 17
    },
    {
        id: "cornflakes",
        name: "קורנפלקס",
        brand: "תלמה",
        category: "דגנים ותוספות",
        serving: "30 גרם",
        caloriesPer100g: 370,
        protein: 7,
        carbs: 84,
        fat: 1
    },
    {
        id: "bread-white",
        name: "לחם אחיד",
        category: "לחמים ומאפים",
        serving: "פרוסה 30 גרם",
        caloriesPer100g: 250,
        protein: 8,
        carbs: 49,
        fat: 3
    },
    {
        id: "bread-whole",
        name: "לחם מלא",
        category: "לחמים ומאפים",
        serving: "פרוסה 30 גרם",
        caloriesPer100g: 235,
        protein: 9,
        carbs: 41,
        fat: 4
    },
    {
        id: "pita",
        name: "פיתה",
        category: "לחמים ומאפים",
        serving: "יחידה 90 גרם",
        caloriesPer100g: 275,
        protein: 9,
        carbs: 55,
        fat: 1
    },
    {
        id: "laffa",
        name: "לאפה",
        category: "לחמים ומאפים",
        serving: "יחידה 180 גרם",
        caloriesPer100g: 300,
        protein: 9,
        carbs: 60,
        fat: 4
    },
    {
        id: "bagel",
        name: "בייגל",
        category: "לחמים ומאפים",
        serving: "יחידה 100 גרם",
        caloriesPer100g: 270,
        protein: 9,
        carbs: 55,
        fat: 2
    },
    {
        id: "bureka-cheese",
        name: "בורקס גבינה",
        category: "לחמים ומאפים",
        serving: "יחידה 80 גרם",
        caloriesPer100g: 360,
        protein: 9,
        carbs: 32,
        fat: 22
    },
    {
        id: "malawach",
        name: "מלאווח",
        category: "לחמים ומאפים",
        serving: "יחידה 120 גרם",
        caloriesPer100g: 390,
        protein: 7,
        carbs: 41,
        fat: 22
    },
    {
        id: "jahnun",
        name: "ג'חנון",
        category: "לחמים ומאפים",
        serving: "יחידה 140 גרם",
        caloriesPer100g: 420,
        protein: 7,
        carbs: 48,
        fat: 22
    },
    {
        id: "olive-oil",
        name: "שמן זית",
        category: "שמנים ורטבים",
        serving: "כף 15 גרם",
        caloriesPer100g: 884,
        protein: 0,
        carbs: 0,
        fat: 100
    },
    {
        id: "canola-oil",
        name: "שמן קנולה",
        category: "שמנים ורטבים",
        serving: "כף 15 גרם",
        caloriesPer100g: 884,
        protein: 0,
        carbs: 0,
        fat: 100
    },
    {
        id: "mayo",
        name: "מיונז",
        brand: "תלמה",
        category: "שמנים ורטבים",
        serving: "כף 15 גרם",
        caloriesPer100g: 680,
        protein: 1,
        carbs: 1,
        fat: 75
    },
    {
        id: "ketchup",
        name: "קטשופ",
        brand: "אסם",
        category: "שמנים ורטבים",
        serving: "כף 17 גרם",
        caloriesPer100g: 112,
        protein: 1,
        carbs: 26,
        fat: 0
    },
    {
        id: "soy-sauce",
        name: "רוטב סויה",
        category: "שמנים ורטבים",
        serving: "כף 15 גרם",
        caloriesPer100g: 53,
        protein: 8,
        carbs: 5,
        fat: 0
    },
    {
        id: "apple",
        name: "תפוח",
        category: "פירות",
        serving: "יחידה 180 גרם",
        caloriesPer100g: 52,
        protein: 0.3,
        carbs: 14,
        fat: 0.2
    },
    {
        id: "banana",
        name: "בננה",
        category: "פירות",
        serving: "יחידה 120 גרם",
        caloriesPer100g: 89,
        protein: 1.1,
        carbs: 23,
        fat: 0.3
    },
    {
        id: "orange",
        name: "תפוז",
        category: "פירות",
        serving: "יחידה 160 גרם",
        caloriesPer100g: 47,
        protein: 0.9,
        carbs: 12,
        fat: 0.1
    },
    {
        id: "grapes",
        name: "ענבים",
        category: "פירות",
        serving: "כוס 150 גרם",
        caloriesPer100g: 69,
        protein: 0.7,
        carbs: 18,
        fat: 0.2
    },
    {
        id: "watermelon",
        name: "אבטיח",
        category: "פירות",
        serving: "פלח 300 גרם",
        caloriesPer100g: 30,
        protein: 0.6,
        carbs: 8,
        fat: 0.2
    },
    {
        id: "melon",
        name: "מלון",
        category: "פירות",
        serving: "כוס 160 גרם",
        caloriesPer100g: 34,
        protein: 0.8,
        carbs: 8,
        fat: 0.2
    },
    {
        id: "dates",
        name: "תמר מג'הול",
        category: "פירות",
        serving: "יחידה 24 גרם",
        caloriesPer100g: 277,
        protein: 1.8,
        carbs: 75,
        fat: 0.2
    },
    {
        id: "tomato",
        name: "עגבניה",
        category: "ירקות",
        serving: "יחידה 120 גרם",
        caloriesPer100g: 18,
        protein: 0.9,
        carbs: 3.9,
        fat: 0.2
    },
    {
        id: "cucumber",
        name: "מלפפון",
        category: "ירקות",
        serving: "יחידה 120 גרם",
        caloriesPer100g: 15,
        protein: 0.7,
        carbs: 3.6,
        fat: 0.1
    },
    {
        id: "pepper",
        name: "פלפל",
        category: "ירקות",
        serving: "יחידה 140 גרם",
        caloriesPer100g: 31,
        protein: 1,
        carbs: 6,
        fat: 0.3
    },
    {
        id: "carrot",
        name: "גזר",
        category: "ירקות",
        serving: "יחידה 70 גרם",
        caloriesPer100g: 41,
        protein: 0.9,
        carbs: 10,
        fat: 0.2
    },
    {
        id: "potato",
        name: "תפוח אדמה אפוי",
        category: "ירקות",
        serving: "יחידה 170 גרם",
        caloriesPer100g: 93,
        protein: 2.5,
        carbs: 21,
        fat: 0.1
    },
    {
        id: "sweet-potato",
        name: "בטטה אפויה",
        category: "ירקות",
        serving: "יחידה 180 גרם",
        caloriesPer100g: 90,
        protein: 2,
        carbs: 21,
        fat: 0.1
    },
    {
        id: "avocado",
        name: "אבוקדו",
        category: "ירקות",
        serving: "חצי 100 גרם",
        caloriesPer100g: 160,
        protein: 2,
        carbs: 9,
        fat: 15
    },
    {
        id: "israeli-salad",
        name: "סלט ישראלי",
        category: "ארוחות מוכנות",
        serving: "קערה 250 גרם",
        caloriesPer100g: 35,
        protein: 1,
        carbs: 6,
        fat: 1
    },
    {
        id: "shakshuka",
        name: "שקשוקה",
        category: "ארוחות מוכנות",
        serving: "מנה 300 גרם",
        caloriesPer100g: 105,
        protein: 6,
        carbs: 7,
        fat: 6
    },
    {
        id: "falafel",
        name: "פלאפל",
        category: "ארוחות מוכנות",
        serving: "כדור 20 גרם",
        caloriesPer100g: 333,
        protein: 13,
        carbs: 32,
        fat: 18
    },
    {
        id: "falafel-pita",
        name: "פיתה פלאפל",
        category: "ארוחות מוכנות",
        serving: "מנה",
        caloriesPer100g: 260,
        protein: 9,
        carbs: 38,
        fat: 8
    },
    {
        id: "shawarma",
        name: "שווארמה הודו",
        category: "ארוחות מוכנות",
        serving: "100 גרם",
        caloriesPer100g: 210,
        protein: 25,
        carbs: 2,
        fat: 11
    },
    {
        id: "shawarma-pita",
        name: "פיתה שווארמה",
        category: "ארוחות מוכנות",
        serving: "מנה",
        caloriesPer100g: 250,
        protein: 13,
        carbs: 28,
        fat: 10
    },
    {
        id: "schnitzel",
        name: "שניצל עוף",
        category: "ארוחות מוכנות",
        serving: "יחידה 120 גרם",
        caloriesPer100g: 260,
        protein: 18,
        carbs: 18,
        fat: 14
    },
    {
        id: "kubbeh",
        name: "קובה",
        category: "ארוחות מוכנות",
        serving: "יחידה 80 גרם",
        caloriesPer100g: 220,
        protein: 10,
        carbs: 25,
        fat: 9
    },
    {
        id: "cholent",
        name: "חמין",
        category: "ארוחות מוכנות",
        serving: "קערה 350 גרם",
        caloriesPer100g: 145,
        protein: 8,
        carbs: 16,
        fat: 6
    },
    {
        id: "soup-lentil",
        name: "מרק עדשים",
        category: "ארוחות מוכנות",
        serving: "קערה 300 גרם",
        caloriesPer100g: 78,
        protein: 5,
        carbs: 12,
        fat: 2
    },
    {
        id: "soup-chicken",
        name: "מרק עוף",
        category: "ארוחות מוכנות",
        serving: "קערה 300 גרם",
        caloriesPer100g: 45,
        protein: 4,
        carbs: 4,
        fat: 2
    },
    {
        id: "bamba",
        name: "במבה",
        brand: "אסם",
        category: "חטיפים",
        serving: "שקית 25 גרם",
        caloriesPer100g: 544,
        protein: 17,
        carbs: 52,
        fat: 31
    },
    {
        id: "bisli-grill",
        name: "ביסלי גריל",
        brand: "אסם",
        category: "חטיפים",
        serving: "שקית 70 גרם",
        caloriesPer100g: 490,
        protein: 9,
        carbs: 65,
        fat: 22
    },
    {
        id: "tapuchips",
        name: "תפוצ'יפס טבעי",
        brand: "עלית",
        category: "חטיפים",
        serving: "שקית 50 גרם",
        caloriesPer100g: 536,
        protein: 6,
        carbs: 52,
        fat: 34
    },
    {
        id: "doritos",
        name: "דוריטוס חמוץ חריף",
        brand: "עלית",
        category: "חטיפים",
        serving: "שקית 70 גרם",
        caloriesPer100g: 500,
        protein: 7,
        carbs: 62,
        fat: 25
    },
    {
        id: "pretzels",
        name: "בייגלה",
        brand: "אסם",
        category: "חטיפים",
        serving: "30 גרם",
        caloriesPer100g: 380,
        protein: 10,
        carbs: 75,
        fat: 4
    },
    {
        id: "pesek-zman",
        name: "פסק זמן",
        brand: "עלית",
        category: "מתוקים",
        serving: "חטיף 45 גרם",
        caloriesPer100g: 535,
        protein: 7,
        carbs: 58,
        fat: 31
    },
    {
        id: "kifkef",
        name: "כיף כף",
        brand: "עלית",
        category: "מתוקים",
        serving: "חטיף 40 גרם",
        caloriesPer100g: 530,
        protein: 7,
        carbs: 60,
        fat: 30
    },
    {
        id: "click",
        name: "קליק",
        brand: "יוניליוור",
        category: "מתוקים",
        serving: "30 גרם",
        caloriesPer100g: 520,
        protein: 6,
        carbs: 62,
        fat: 28
    },
    {
        id: "milky",
        name: "מילקי",
        brand: "שטראוס",
        category: "מתוקים",
        serving: "גביע 133 גרם",
        caloriesPer100g: 145,
        protein: 3,
        carbs: 20,
        fat: 6
    },
    {
        id: "dani",
        name: "דני שוקולד",
        brand: "שטראוס",
        category: "מתוקים",
        serving: "גביע 125 גרם",
        caloriesPer100g: 125,
        protein: 3.5,
        carbs: 20,
        fat: 3.5
    },
    {
        id: "ice-cream",
        name: "גלידה וניל",
        category: "מתוקים",
        serving: "כדור 60 גרם",
        caloriesPer100g: 207,
        protein: 3.5,
        carbs: 24,
        fat: 11
    },
    {
        id: "chocolate-spread",
        name: "ממרח שוקולד",
        brand: "השחר העולה",
        category: "מתוקים",
        serving: "כף 20 גרם",
        caloriesPer100g: 530,
        protein: 4,
        carbs: 62,
        fat: 29
    },
    {
        id: "halva",
        name: "חלבה",
        brand: "אחוה",
        category: "מתוקים",
        serving: "30 גרם",
        caloriesPer100g: 520,
        protein: 12,
        carbs: 47,
        fat: 32
    },
    {
        id: "honey",
        name: "דבש",
        category: "מתוקים",
        serving: "כף 21 גרם",
        caloriesPer100g: 304,
        protein: 0,
        carbs: 82,
        fat: 0
    },
    {
        id: "jam",
        name: "ריבה",
        category: "מתוקים",
        serving: "כף 20 גרם",
        caloriesPer100g: 250,
        protein: 0,
        carbs: 65,
        fat: 0
    },
    {
        id: "coca-cola",
        name: "קוקה קולה",
        brand: "קוקה קולה",
        category: "שתייה",
        serving: "פחית 330 מל",
        caloriesPer100g: 42,
        protein: 0,
        carbs: 10.6,
        fat: 0
    },
    {
        id: "coke-zero",
        name: "קולה זירו",
        brand: "קוקה קולה",
        category: "שתייה",
        serving: "פחית 330 מל",
        caloriesPer100g: 0,
        protein: 0,
        carbs: 0,
        fat: 0
    },
    {
        id: "orange-juice",
        name: "מיץ תפוזים",
        brand: "פריגת",
        category: "שתייה",
        serving: "כוס 200 מל",
        caloriesPer100g: 45,
        protein: 0.7,
        carbs: 10,
        fat: 0
    },
    {
        id: "beer",
        name: "בירה",
        brand: "גולדסטאר",
        category: "שתייה",
        serving: "בקבוק 330 מל",
        caloriesPer100g: 43,
        protein: 0.5,
        carbs: 3.5,
        fat: 0
    },
    {
        id: "wine",
        name: "יין אדום",
        category: "שתייה",
        serving: "כוס 150 מל",
        caloriesPer100g: 85,
        protein: 0,
        carbs: 2.6,
        fat: 0
    },
    {
        id: "coffee-milk",
        name: "קפה הפוך",
        category: "שתייה",
        serving: "כוס 250 מל",
        caloriesPer100g: 54,
        protein: 3,
        carbs: 5,
        fat: 2.5
    },
    {
        id: "almonds",
        name: "שקדים",
        category: "אגוזים וזרעים",
        serving: "חופן 30 גרם",
        caloriesPer100g: 579,
        protein: 21,
        carbs: 22,
        fat: 50
    },
    {
        id: "walnuts",
        name: "אגוזי מלך",
        category: "אגוזים וזרעים",
        serving: "חופן 30 גרם",
        caloriesPer100g: 654,
        protein: 15,
        carbs: 14,
        fat: 65
    },
    {
        id: "cashew",
        name: "קשיו",
        category: "אגוזים וזרעים",
        serving: "חופן 30 גרם",
        caloriesPer100g: 553,
        protein: 18,
        carbs: 30,
        fat: 44
    },
    {
        id: "sunflower-seeds",
        name: "גרעיני חמניה",
        category: "אגוזים וזרעים",
        serving: "30 גרם",
        caloriesPer100g: 584,
        protein: 21,
        carbs: 20,
        fat: 51
    },
    {
        id: "peanut-butter",
        name: "חמאת בוטנים",
        brand: "B&D",
        category: "אגוזים וזרעים",
        serving: "כף 16 גרם",
        caloriesPer100g: 588,
        protein: 25,
        carbs: 20,
        fat: 50
    },
    {
        id: "lentils",
        name: "עדשים מבושלות",
        category: "קטניות",
        serving: "כוס 180 גרם",
        caloriesPer100g: 116,
        protein: 9,
        carbs: 20,
        fat: 0.4
    },
    {
        id: "chickpeas",
        name: "גרגירי חומוס מבושלים",
        category: "קטניות",
        serving: "כוס 160 גרם",
        caloriesPer100g: 164,
        protein: 9,
        carbs: 27,
        fat: 3
    },
    {
        id: "beans",
        name: "שעועית לבנה מבושלת",
        category: "קטניות",
        serving: "כוס 170 גרם",
        caloriesPer100g: 140,
        protein: 9,
        carbs: 25,
        fat: 0.5
    },
    {
        id: "peas",
        name: "אפונה מבושלת",
        category: "קטניות",
        serving: "כוס 160 גרם",
        caloriesPer100g: 84,
        protein: 5,
        carbs: 15,
        fat: 0.4
    }
];
const moreNames = [
    [
        "קוראסון חמאה",
        "לחמים ומאפים",
        406,
        8,
        45,
        21
    ],
    [
        "עוגת שמרים שוקולד",
        "מתוקים",
        390,
        7,
        52,
        17
    ],
    [
        "עוגיית שוקולד צ'יפס",
        "מתוקים",
        488,
        6,
        64,
        24
    ],
    [
        "קרקר חיטה מלאה",
        "חטיפים",
        430,
        11,
        65,
        14
    ],
    [
        "לחמית",
        "חטיפים",
        360,
        11,
        68,
        7
    ],
    [
        "פריכיות אורז",
        "חטיפים",
        385,
        8,
        82,
        3
    ],
    [
        "קוטג' 9%",
        "מוצרי חלב",
        135,
        11,
        3,
        9
    ],
    [
        "שמנת חמוצה 15%",
        "מוצרי חלב",
        160,
        3,
        4,
        15
    ],
    [
        "שמנת לבישול 10%",
        "מוצרי חלב",
        118,
        3,
        4,
        10
    ],
    [
        "חלב סויה",
        "שתייה",
        45,
        3,
        3,
        2
    ],
    [
        "משקה שקדים",
        "שתייה",
        24,
        0.5,
        3,
        1
    ],
    [
        "גבינת שמנת 5%",
        "מוצרי חלב",
        130,
        8,
        5,
        8
    ],
    [
        "גבינת שמנת 25%",
        "מוצרי חלב",
        265,
        6,
        4,
        25
    ],
    [
        "ריקוטה",
        "מוצרי חלב",
        150,
        11,
        4,
        9
    ],
    [
        "מוצרלה",
        "מוצרי חלב",
        280,
        22,
        3,
        20
    ],
    [
        "פרמזן",
        "מוצרי חלב",
        431,
        38,
        4,
        29
    ],
    [
        "נקניקיות עוף",
        "דגים ובשר",
        220,
        13,
        5,
        17
    ],
    [
        "פסטרמה הודו",
        "דגים ובשר",
        105,
        18,
        2,
        2
    ],
    [
        "קבב בקר",
        "דגים ובשר",
        285,
        17,
        4,
        22
    ],
    [
        "המבורגר בקר",
        "דגים ובשר",
        254,
        17,
        4,
        20
    ],
    [
        "דג אמנון אפוי",
        "דגים ובשר",
        128,
        26,
        0,
        2.7
    ],
    [
        "דג נסיכת הנילוס",
        "דגים ובשר",
        105,
        20,
        0,
        2
    ],
    [
        "חזה הודו",
        "דגים ובשר",
        135,
        29,
        0,
        1.5
    ],
    [
        "כבד עוף",
        "דגים ובשר",
        167,
        25,
        1,
        6
    ],
    [
        "סלט כרוב",
        "סלטים וממרחים",
        75,
        1,
        9,
        4
    ],
    [
        "סלט ביצים",
        "סלטים וממרחים",
        260,
        9,
        2,
        24
    ],
    [
        "סלט טונה",
        "סלטים וממרחים",
        210,
        17,
        2,
        14
    ],
    [
        "סלט אבוקדו",
        "סלטים וממרחים",
        170,
        2,
        8,
        15
    ],
    [
        "כרובית בתנור",
        "ירקות",
        45,
        2,
        6,
        2
    ],
    [
        "ברוקולי מבושל",
        "ירקות",
        35,
        2.4,
        7,
        0.4
    ],
    [
        "קישוא",
        "ירקות",
        17,
        1.2,
        3,
        0.3
    ],
    [
        "בצל",
        "ירקות",
        40,
        1.1,
        9,
        0.1
    ],
    [
        "חסה",
        "ירקות",
        15,
        1.4,
        3,
        0.2
    ],
    [
        "כרוב",
        "ירקות",
        25,
        1.3,
        6,
        0.1
    ],
    [
        "תירס",
        "ירקות",
        96,
        3.4,
        21,
        1.5
    ],
    [
        "פטריות",
        "ירקות",
        22,
        3.1,
        3.3,
        0.3
    ],
    [
        "מנגו",
        "פירות",
        60,
        0.8,
        15,
        0.4
    ],
    [
        "אפרסק",
        "פירות",
        39,
        0.9,
        10,
        0.3
    ],
    [
        "אגס",
        "פירות",
        57,
        0.4,
        15,
        0.1
    ],
    [
        "שזיף",
        "פירות",
        46,
        0.7,
        11,
        0.3
    ],
    [
        "תותים",
        "פירות",
        32,
        0.7,
        8,
        0.3
    ],
    [
        "אוכמניות",
        "פירות",
        57,
        0.7,
        14,
        0.3
    ],
    [
        "רימון",
        "פירות",
        83,
        1.7,
        19,
        1.2
    ],
    [
        "מרק ירקות",
        "ארוחות מוכנות",
        38,
        1.5,
        7,
        0.8
    ],
    [
        "פיצה משפחתית",
        "ארוחות מוכנות",
        266,
        11,
        33,
        10
    ],
    [
        "סושי סלמון",
        "ארוחות מוכנות",
        145,
        6,
        23,
        3
    ],
    [
        "מוקפץ עוף",
        "ארוחות מוכנות",
        150,
        12,
        16,
        5
    ],
    [
        "קציצות בקר",
        "ארוחות מוכנות",
        245,
        17,
        7,
        17
    ],
    [
        "מג'דרה",
        "ארוחות מוכנות",
        150,
        6,
        25,
        3
    ],
    [
        "פירה",
        "דגנים ותוספות",
        110,
        2,
        17,
        4
    ],
    [
        "צ'יפס",
        "ארוחות מוכנות",
        312,
        3.4,
        41,
        15
    ],
    [
        "נאגטס עוף",
        "ארוחות מוכנות",
        295,
        15,
        18,
        19
    ],
    [
        "טורטייה חיטה",
        "לחמים ומאפים",
        310,
        8,
        52,
        8
    ],
    [
        "לחמניה",
        "לחמים ומאפים",
        280,
        9,
        52,
        4
    ],
    [
        "חלה",
        "לחמים ומאפים",
        285,
        8,
        52,
        5
    ],
    [
        "מצה",
        "לחמים ומאפים",
        375,
        10,
        82,
        1.5
    ],
    [
        "גביניות",
        "לחמים ומאפים",
        330,
        9,
        45,
        13
    ],
    [
        "רוגלך",
        "מתוקים",
        430,
        7,
        50,
        23
    ],
    [
        "ופל שוקולד",
        "מתוקים",
        510,
        6,
        66,
        25
    ],
    [
        "מרשמלו",
        "מתוקים",
        318,
        1.8,
        81,
        0.2
    ],
    [
        "סוכר לבן",
        "מתוקים",
        387,
        0,
        100,
        0
    ],
    [
        "סילאן",
        "מתוקים",
        300,
        1,
        73,
        0
    ],
    [
        "חמוציות מיובשות",
        "פירות",
        325,
        0,
        82,
        1
    ],
    [
        "צימוקים",
        "פירות",
        299,
        3,
        79,
        0.5
    ],
    [
        "משמש מיובש",
        "פירות",
        241,
        3.4,
        63,
        0.5
    ],
    [
        "מים בטעמים",
        "שתייה",
        20,
        0,
        5,
        0
    ],
    [
        "תה קר",
        "שתייה",
        30,
        0,
        7.5,
        0
    ],
    [
        "שוקו",
        "שתייה",
        78,
        3.2,
        12,
        2
    ],
    [
        "נס קפה עם חלב",
        "שתייה",
        35,
        2,
        4,
        1.5
    ],
    [
        "טחינה עם דבש",
        "מתוקים",
        470,
        12,
        34,
        32
    ],
    [
        "ממרח תמרים",
        "מתוקים",
        285,
        2,
        70,
        0.5
    ],
    [
        "פופקורן מוכן",
        "חטיפים",
        500,
        9,
        58,
        27
    ],
    [
        "חטיף אנרגיה",
        "חטיפים",
        390,
        8,
        64,
        10
    ],
    [
        "חטיף חלבון",
        "חטיפים",
        360,
        32,
        35,
        10
    ],
    [
        "אבקת חלבון",
        "חלבונים",
        390,
        78,
        8,
        6
    ],
    [
        "אדממה",
        "קטניות",
        121,
        11,
        9,
        5
    ],
    [
        "פול מבושל",
        "קטניות",
        110,
        8,
        20,
        0.4
    ],
    [
        "בורגול מבושל",
        "דגנים ותוספות",
        83,
        3,
        19,
        0.2
    ],
    [
        "כוסמת מבושלת",
        "דגנים ותוספות",
        92,
        3.4,
        20,
        0.6
    ],
    [
        "סולת מבושלת",
        "דגנים ותוספות",
        80,
        2.5,
        16,
        0.3
    ],
    [
        "אטריות אורז",
        "דגנים ותוספות",
        109,
        1.8,
        24,
        0.2
    ]
];
const products = [
    ...staples,
    ...moreNames.map(([name, category, caloriesPer100g, protein, carbs, fat], index)=>({
            id: `local-${index}`,
            name: String(name),
            category: String(category),
            serving: "100 גרם",
            caloriesPer100g: Number(caloriesPer100g),
            protein: Number(protein),
            carbs: Number(carbs),
            fat: Number(fat)
        }))
].sort((a, b)=>a.name.localeCompare(b.name, "he"));
const categories = Array.from(new Set(products.map((product)=>product.category))).sort((a, b)=>a.localeCompare(b, "he"));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CalorieApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalorieApp",
    ()=>CalorieApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/products.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const mealLabels = {
    breakfast: "בוקר",
    lunch: "צהריים",
    dinner: "ערב",
    night: "לילה",
    snacks: "נשנושים"
};
const mealHints = {
    breakfast: "קפה, יוגורט, ביצים, לחם",
    lunch: "מנה עיקרית ותוספות",
    dinner: "ארוחה קלה או מלאה",
    night: "מה שאוכלים אחרי שהיום כבר נגמר",
    snacks: "חטיפים, פירות, מתוקים"
};
const mealOrder = Object.keys(mealLabels);
const quickAmounts = [
    30,
    50,
    100,
    150,
    200,
    250
];
const featuredProductIds = [
    "cottage-tnuva-5",
    "egg",
    "chicken-breast",
    "rice-white",
    "pita",
    "hummus-achla",
    "banana",
    "bamba"
];
const emptyDay = ()=>({
        breakfast: [],
        lunch: [],
        dinner: [],
        night: [],
        snacks: []
    });
const toDateKey = (date)=>{
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
};
const fromDateKey = (key)=>{
    const [year, month, day] = key.split("-").map(Number);
    return new Date(year, month - 1, day);
};
const addDays = (dateKey, amount)=>{
    const date = fromDateKey(dateKey);
    date.setDate(date.getDate() + amount);
    return toDateKey(date);
};
const formatHebrewDate = (dateKey)=>new Intl.DateTimeFormat("he-IL", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }).format(fromDateKey(dateKey));
const caloriesFor = (entry)=>Math.round(entry.product.caloriesPer100g * entry.grams / 100);
const macroFor = (entry, field)=>{
    const value = entry.product[field];
    return typeof value === "number" ? value * entry.grams / 100 : 0;
};
const normalizeText = (value)=>value.trim().toLocaleLowerCase("he-IL");
function useStoredLogs() {
    _s();
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useStoredLogs.useEffect": ()=>{
            try {
                const raw = window.localStorage.getItem("calor-logs-v1");
                if (raw) {
                    setLogs(JSON.parse(raw));
                }
            } catch  {
                setLogs({});
            } finally{
                setLoaded(true);
            }
        }
    }["useStoredLogs.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useStoredLogs.useEffect": ()=>{
            if (loaded) {
                window.localStorage.setItem("calor-logs-v1", JSON.stringify(logs));
            }
        }
    }["useStoredLogs.useEffect"], [
        loaded,
        logs
    ]);
    return [
        logs,
        setLogs
    ];
}
_s(useStoredLogs, "4+VOGdZH/FILBEVxIxAaertTaPE=");
function totalCalories(day) {
    return mealOrder.reduce((sum, meal)=>sum + day[meal].reduce((mealSum, entry)=>mealSum + caloriesFor(entry), 0), 0);
}
function weekKeys(selectedDate) {
    const base = fromDateKey(selectedDate);
    const day = base.getDay();
    base.setDate(base.getDate() - day);
    return Array.from({
        length: 7
    }, (_, index)=>{
        const date = new Date(base);
        date.setDate(base.getDate() + index);
        return toDateKey(date);
    });
}
function CalorieApp() {
    _s1();
    const [logs, setLogs] = useStoredLogs();
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "CalorieApp.useState": ()=>toDateKey(new Date())
    }["CalorieApp.useState"]);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("הכל");
    const [selectedMeal, setSelectedMeal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("breakfast");
    const [grams, setGrams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(100);
    const [manualOpen, setManualOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [manualName, setManualName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [manualCalories, setManualCalories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(150);
    const [barcode, setBarcode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [barcodeStatus, setBarcodeStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [cameraStatus, setCameraStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [scanning, setScanning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastScannedProduct, setLastScannedProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [notice, setNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const day = logs[selectedDate] ?? emptyDay();
    const weeks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CalorieApp.useMemo[weeks]": ()=>weekKeys(selectedDate)
    }["CalorieApp.useMemo[weeks]"], [
        selectedDate
    ]);
    const dailyTotal = totalCalories(day);
    const goal = 2200;
    const progress = Math.min(100, Math.round(dailyTotal / goal * 100));
    const remaining = Math.max(0, goal - dailyTotal);
    const allEntries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CalorieApp.useMemo[allEntries]": ()=>mealOrder.flatMap({
                "CalorieApp.useMemo[allEntries]": (meal)=>day[meal]
            }["CalorieApp.useMemo[allEntries]"])
    }["CalorieApp.useMemo[allEntries]"], [
        day
    ]);
    const entryCount = allEntries.length;
    const filteredProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CalorieApp.useMemo[filteredProducts]": ()=>{
            const cleanQuery = normalizeText(query);
            return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter({
                "CalorieApp.useMemo[filteredProducts]": (product)=>category === "הכל" || product.category === category
            }["CalorieApp.useMemo[filteredProducts]"]).filter({
                "CalorieApp.useMemo[filteredProducts]": (product)=>{
                    if (!cleanQuery) return true;
                    return normalizeText(`${product.name} ${product.brand ?? ""} ${product.category}`).includes(cleanQuery);
                }
            }["CalorieApp.useMemo[filteredProducts]"]).slice(0, 72);
        }
    }["CalorieApp.useMemo[filteredProducts]"], [
        category,
        query
    ]);
    const featuredProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CalorieApp.useMemo[featuredProducts]": ()=>featuredProductIds.map({
                "CalorieApp.useMemo[featuredProducts]": (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].find({
                        "CalorieApp.useMemo[featuredProducts]": (product)=>product.id === id
                    }["CalorieApp.useMemo[featuredProducts]"])
            }["CalorieApp.useMemo[featuredProducts]"]).filter({
                "CalorieApp.useMemo[featuredProducts]": (product)=>Boolean(product)
            }["CalorieApp.useMemo[featuredProducts]"])
    }["CalorieApp.useMemo[featuredProducts]"], []);
    const recentProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CalorieApp.useMemo[recentProducts]": ()=>{
            const seen = new Set();
            return Object.values(logs).flatMap({
                "CalorieApp.useMemo[recentProducts]": (log)=>mealOrder.flatMap({
                        "CalorieApp.useMemo[recentProducts]": (meal)=>log[meal]
                    }["CalorieApp.useMemo[recentProducts]"])
            }["CalorieApp.useMemo[recentProducts]"]).sort({
                "CalorieApp.useMemo[recentProducts]": (a, b)=>b.createdAt.localeCompare(a.createdAt)
            }["CalorieApp.useMemo[recentProducts]"]).map({
                "CalorieApp.useMemo[recentProducts]": (entry)=>entry.product
            }["CalorieApp.useMemo[recentProducts]"]).filter({
                "CalorieApp.useMemo[recentProducts]": (product)=>{
                    if (seen.has(product.name)) return false;
                    seen.add(product.name);
                    return true;
                }
            }["CalorieApp.useMemo[recentProducts]"]).slice(0, 8);
        }
    }["CalorieApp.useMemo[recentProducts]"], [
        logs
    ]);
    const totals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CalorieApp.useMemo[totals]": ()=>{
            const entries = mealOrder.flatMap({
                "CalorieApp.useMemo[totals].entries": (meal)=>day[meal]
            }["CalorieApp.useMemo[totals].entries"]);
            return {
                protein: Math.round(entries.reduce({
                    "CalorieApp.useMemo[totals]": (sum, entry)=>sum + macroFor(entry, "protein")
                }["CalorieApp.useMemo[totals]"], 0)),
                carbs: Math.round(entries.reduce({
                    "CalorieApp.useMemo[totals]": (sum, entry)=>sum + macroFor(entry, "carbs")
                }["CalorieApp.useMemo[totals]"], 0)),
                fat: Math.round(entries.reduce({
                    "CalorieApp.useMemo[totals]": (sum, entry)=>sum + macroFor(entry, "fat")
                }["CalorieApp.useMemo[totals]"], 0))
            };
        }
    }["CalorieApp.useMemo[totals]"], [
        day
    ]);
    const updateDay = (updater)=>{
        setLogs((current)=>({
                ...current,
                [selectedDate]: updater(current[selectedDate] ?? emptyDay())
            }));
    };
    const addProduct = (product, amount = grams, meal = selectedMeal)=>{
        const entry = {
            id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
            product,
            grams: Math.max(1, amount),
            meal,
            createdAt: new Date().toISOString()
        };
        updateDay((current)=>({
                ...current,
                [meal]: [
                    entry,
                    ...current[meal]
                ]
            }));
        setNotice(`${product.name} נוסף ל${mealLabels[meal]} (${Math.max(1, amount)} גרם)`);
    };
    const removeEntry = (meal, entryId)=>{
        updateDay((current)=>({
                ...current,
                [meal]: current[meal].filter((entry)=>entry.id !== entryId)
            }));
    };
    const addManual = ()=>{
        if (!manualName.trim()) return;
        addProduct({
            id: `manual-${Date.now()}`,
            name: manualName.trim(),
            category: "ידני",
            serving: "100 גרם",
            caloriesPer100g: Number(manualCalories) || 0,
            protein: null,
            carbs: null,
            fat: null
        });
        setManualName("");
        setManualCalories(150);
        setManualOpen(false);
    };
    const lookupBarcode = async (code = barcode)=>{
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
            setLastScannedProduct(payload);
            addProduct(payload);
            setBarcodeStatus(`נוסף: ${payload.name}`);
            setBarcode(cleanCode);
        } catch  {
            setBarcodeStatus("החיבור למאגר נכשל. אפשר להוסיף ידנית בינתיים.");
        }
    };
    const stopScanner = ()=>{
        streamRef.current?.getTracks().forEach((track)=>track.stop());
        streamRef.current = null;
        setScanning(false);
    };
    const startScanner = async ()=>{
        const detectorCtor = window.BarcodeDetector;
        if (!detectorCtor) {
            setCameraStatus("הדפדפן הזה לא תומך בסריקת ברקוד מהמצלמה. הזנה ידנית עדיין עובדת.");
            return;
        }
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: "environment"
                }
            });
            streamRef.current = stream;
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                await videoRef.current.play();
            }
            setScanning(true);
            setCameraStatus("כוון את המצלמה לברקוד.");
            const detector = new detectorCtor({
                formats: [
                    "ean_13",
                    "ean_8",
                    "upc_a",
                    "upc_e"
                ]
            });
            const scan = async ()=>{
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
        } catch  {
            setCameraStatus("לא קיבלנו גישה למצלמה. אפשר להקליד את הברקוד ידנית.");
            stopScanner();
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CalorieApp.useEffect": ()=>stopScanner
    }["CalorieApp.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CalorieApp.useEffect": ()=>{
            if (!notice) return;
            const timeout = window.setTimeout({
                "CalorieApp.useEffect.timeout": ()=>setNotice("")
            }["CalorieApp.useEffect.timeout"], 2800);
            return ({
                "CalorieApp.useEffect": ()=>window.clearTimeout(timeout)
            })["CalorieApp.useEffect"];
        }
    }["CalorieApp.useEffect"], [
        notice
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "app-shell",
        children: [
            notice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "toast",
                role: "status",
                children: notice
            }, void 0, false, {
                fileName: "[project]/components/CalorieApp.tsx",
                lineNumber: 340,
                columnNumber: 17
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "topbar",
                "aria-label": "סיכום יומי",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "קלורית"
                            }, void 0, false, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 343,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "יומן קלוריות ישראלי"
                            }, void 0, false, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 344,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "subline",
                                children: [
                                    formatHebrewDate(selectedDate),
                                    " · ",
                                    entryCount,
                                    " פריטים נרשמו"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 345,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CalorieApp.tsx",
                        lineNumber: 342,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "today-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: 'סה"כ היום'
                            }, void 0, false, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 348,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: dailyTotal.toLocaleString("he-IL")
                            }, void 0, false, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 349,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: remaining ? `נשארו ${remaining.toLocaleString("he-IL")} קק"ל` : "עברת את היעד היומי"
                            }, void 0, false, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 350,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "progress",
                                "aria-label": `התקדמות ${progress}%`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: `${progress}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/CalorieApp.tsx",
                                    lineNumber: 352,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 351,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CalorieApp.tsx",
                        lineNumber: 347,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CalorieApp.tsx",
                lineNumber: 341,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "calendar-strip",
                "aria-label": "לוח שנה",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "icon-button",
                        onClick: ()=>setSelectedDate(addDays(selectedDate, -7)),
                        title: "שבוע קודם",
                        children: "‹"
                    }, void 0, false, {
                        fileName: "[project]/components/CalorieApp.tsx",
                        lineNumber: 358,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "days",
                        children: weeks.map((dateKey)=>{
                            const date = fromDateKey(dateKey);
                            const total = totalCalories(logs[dateKey] ?? emptyDay());
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: dateKey === selectedDate ? "day active" : "day",
                                onClick: ()=>setSelectedDate(dateKey),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: new Intl.DateTimeFormat("he-IL", {
                                            weekday: "short"
                                        }).format(date)
                                    }, void 0, false, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 372,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: date.getDate()
                                    }, void 0, false, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 373,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: total ? `${total} קק"ל` : "ריק"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 374,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, dateKey, true, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 366,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/CalorieApp.tsx",
                        lineNumber: 361,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "icon-button",
                        onClick: ()=>setSelectedDate(addDays(selectedDate, 7)),
                        title: "שבוע הבא",
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/components/CalorieApp.tsx",
                        lineNumber: 379,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CalorieApp.tsx",
                lineNumber: 357,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "dashboard",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel meals-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel-head",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "eyebrow",
                                                children: "ארוחות"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 388,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "מה אכלת היום"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 389,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 387,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "date-input",
                                        type: "date",
                                        value: selectedDate,
                                        onChange: (event)=>setSelectedDate(event.target.value),
                                        "aria-label": "בחירת תאריך"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 391,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 386,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "macro-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "חלבון ",
                                            totals.protein,
                                            "g"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 401,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "פחמימות ",
                                            totals.carbs,
                                            "g"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 402,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "שומן ",
                                            totals.fat,
                                            "g"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 403,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 400,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "meal-list",
                                children: mealOrder.map((meal)=>{
                                    const mealCalories = day[meal].reduce((sum, entry)=>sum + caloriesFor(entry), 0);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "meal-block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: selectedMeal === meal ? "meal-tab selected" : "meal-tab",
                                                        onClick: ()=>setSelectedMeal(meal),
                                                        children: mealLabels[meal]
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CalorieApp.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            mealCalories.toLocaleString("he-IL"),
                                                            ' קק"ל'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/CalorieApp.tsx",
                                                        lineNumber: 419,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 411,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: mealHints[meal]
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 421,
                                                columnNumber: 19
                                            }, this),
                                            day[meal].length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "empty-meal",
                                                children: "אין פריטים בארוחה הזו עדיין."
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 423,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "entries",
                                                children: day[meal].map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: entry.product.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/CalorieApp.tsx",
                                                                        lineNumber: 429,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            entry.grams,
                                                                            " גרם · ",
                                                                            caloriesFor(entry),
                                                                            ' קק"ל'
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/CalorieApp.tsx",
                                                                        lineNumber: 430,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/CalorieApp.tsx",
                                                                lineNumber: 428,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>removeEntry(meal, entry.id),
                                                                title: "מחיקה",
                                                                children: "×"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/CalorieApp.tsx",
                                                                lineNumber: 434,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, entry.id, true, {
                                                        fileName: "[project]/components/CalorieApp.tsx",
                                                        lineNumber: 427,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 425,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, meal, true, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 410,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 406,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CalorieApp.tsx",
                        lineNumber: 385,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "panel add-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel-head compact",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "eyebrow",
                                            children: "הוספה"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CalorieApp.tsx",
                                            lineNumber: 450,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "חפש, סרוק או הזן"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CalorieApp.tsx",
                                            lineNumber: 451,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "helper",
                                            children: "בחר ארוחה וכמות, ואז לחץ על מוצר. ברקוד יתווסף אוטומטית לאותה ארוחה."
                                        }, void 0, false, {
                                            fileName: "[project]/components/CalorieApp.tsx",
                                            lineNumber: 452,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CalorieApp.tsx",
                                    lineNumber: 449,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 448,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "controls",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "ארוחה",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: selectedMeal,
                                                onChange: (event)=>setSelectedMeal(event.target.value),
                                                children: mealOrder.map((meal)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: meal,
                                                        children: mealLabels[meal]
                                                    }, meal, false, {
                                                        fileName: "[project]/components/CalorieApp.tsx",
                                                        lineNumber: 461,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 459,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 457,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "כמות בגרמים",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: "1",
                                                value: grams,
                                                onChange: (event)=>setGrams(Number(event.target.value))
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 469,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 467,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 456,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "quick-amounts",
                                "aria-label": "בחירת כמות מהירה",
                                children: quickAmounts.map((amount)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: grams === amount ? "selected" : "",
                                        onClick: ()=>setGrams(amount),
                                        children: [
                                            amount,
                                            "g"
                                        ]
                                    }, amount, true, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 479,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 477,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "barcode-box",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "barcode-visual",
                                        "aria-hidden": "true",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 492,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 493,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 494,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 495,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 496,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 497,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 491,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "barcode-actions",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                inputMode: "numeric",
                                                placeholder: "הזן ברקוד",
                                                value: barcode,
                                                onChange: (event)=>setBarcode(event.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 500,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "primary",
                                                onClick: ()=>void lookupBarcode(),
                                                children: "בדיקה"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 506,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: scanning ? stopScanner : startScanner,
                                                children: scanning ? "עצור מצלמה" : "סרוק"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 509,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 499,
                                        columnNumber: 13
                                    }, this),
                                    scanning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        ref: videoRef,
                                        className: "scanner",
                                        muted: true,
                                        playsInline: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 513,
                                        columnNumber: 25
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: barcodeStatus || cameraStatus || "ברקודים נבדקים מול Open Food Facts ומתווספים לארוחה שנבחרה."
                                    }, void 0, false, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 514,
                                        columnNumber: 13
                                    }, this),
                                    lastScannedProduct?.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "product-image",
                                        src: lastScannedProduct.image,
                                        alt: lastScannedProduct.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 516,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 490,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "search-box",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "search",
                                        placeholder: "חיפוש: קוטג', במבה, חזה עוף...",
                                        value: query,
                                        onChange: (event)=>setQuery(event.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 521,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: category,
                                        onChange: (event)=>setCategory(event.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "הכל"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 528,
                                                columnNumber: 15
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: item
                                                }, item, false, {
                                                    fileName: "[project]/components/CalorieApp.tsx",
                                                    lineNumber: 530,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 527,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 520,
                                columnNumber: 11
                            }, this),
                            !query && recentProducts.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "suggestion-block",
                                "aria-label": "אחרונים",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mini-head",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "אחרונים אצלך"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 538,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "לחיצה מוסיפה שוב"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 539,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 537,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "chip-row",
                                        children: recentProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>addProduct(product),
                                                children: product.name
                                            }, `recent-${product.id}`, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 543,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 541,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 536,
                                columnNumber: 13
                            }, this) : null,
                            !query ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "suggestion-block",
                                "aria-label": "פופולריים",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mini-head",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "נפוצים להתחלה מהירה"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 554,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].length.toLocaleString("he-IL"),
                                                    " מוצרים במאגר המקומי"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 555,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 553,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "chip-row",
                                        children: featuredProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>addProduct(product),
                                                children: product.name
                                            }, `featured-${product.id}`, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 559,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 557,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 552,
                                columnNumber: 13
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "product-grid",
                                children: filteredProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "product-card",
                                        onClick: ()=>addProduct(product),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: product.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 570,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: product.brand ?? product.category
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 571,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: [
                                                    product.caloriesPer100g,
                                                    ' קק"ל · ',
                                                    product.serving
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 572,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, product.id, true, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 569,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 567,
                                columnNumber: 11
                            }, this),
                            filteredProducts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "empty-search",
                                children: "לא מצאתי מוצר בשם הזה. אפשר לסרוק ברקוד או להוסיף ידנית עם קלוריות ל-100 גרם."
                            }, void 0, false, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 579,
                                columnNumber: 13
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "manual-box",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "ghost",
                                        onClick: ()=>setManualOpen((value)=>!value),
                                        children: manualOpen ? "סגור הזנה ידנית" : "הוסף מוצר ידני"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 585,
                                        columnNumber: 13
                                    }, this),
                                    manualOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "manual-fields",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                placeholder: "שם המאכל",
                                                value: manualName,
                                                onChange: (event)=>setManualName(event.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 590,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: "0",
                                                value: manualCalories,
                                                onChange: (event)=>setManualCalories(Number(event.target.value)),
                                                "aria-label": "קלוריות ל-100 גרם"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 595,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "primary",
                                                onClick: addManual,
                                                children: "הוסף"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 602,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 589,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 584,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CalorieApp.tsx",
                        lineNumber: 447,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CalorieApp.tsx",
                lineNumber: 384,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CalorieApp.tsx",
        lineNumber: 339,
        columnNumber: 5
    }, this);
}
_s1(CalorieApp, "Yq6vUAH+wfvsXuGGHeV5pNDPKKs=", false, function() {
    return [
        useStoredLogs
    ];
});
_c = CalorieApp;
var _c;
__turbopack_context__.k.register(_c, "CalorieApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_0_58x75._.js.map
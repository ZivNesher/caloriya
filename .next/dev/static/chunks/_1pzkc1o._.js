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
const expandedNames = [
    [
        "אשל",
        "מוצרי חלב",
        69,
        4.5,
        5,
        3
    ],
    [
        "גיל",
        "מוצרי חלב",
        55,
        3.5,
        4.5,
        3
    ],
    [
        "יוגורט ביו 1.5%",
        "מוצרי חלב",
        48,
        4.5,
        5,
        1.5
    ],
    [
        "יוגורט ביו 0%",
        "מוצרי חלב",
        42,
        5,
        5,
        0
    ],
    [
        "יוגורט פרי",
        "מוצרי חלב",
        95,
        3.5,
        15,
        2
    ],
    [
        "מעדן חלב וניל",
        "מוצרי חלב",
        120,
        3,
        20,
        3
    ],
    [
        "מעדן חלב שוקולד",
        "מוצרי חלב",
        128,
        3,
        21,
        3.5
    ],
    [
        "גבינה צפתית 5%",
        "מוצרי חלב",
        130,
        17,
        1,
        5
    ],
    [
        "גבינה צפתית 16%",
        "מוצרי חלב",
        230,
        17,
        1,
        16
    ],
    [
        "גבינת עיזים",
        "מוצרי חלב",
        290,
        18,
        1,
        24
    ],
    [
        "גבינת חלומי",
        "מוצרי חלב",
        320,
        22,
        2,
        25
    ],
    [
        "גבינת טוב טעם",
        "מוצרי חלב",
        92,
        11,
        4,
        4
    ],
    [
        "חלב ללא לקטוז",
        "מוצרי חלב",
        58,
        3.2,
        5,
        3
    ],
    [
        "חלב שיבולת שועל",
        "שתייה",
        46,
        1,
        7,
        1.5
    ],
    [
        "קפה קר",
        "שתייה",
        65,
        2.5,
        10,
        2
    ],
    [
        "אייס קפה",
        "שתייה",
        90,
        2.5,
        15,
        3
    ],
    [
        "מיץ ענבים",
        "שתייה",
        68,
        0,
        17,
        0
    ],
    [
        "מיץ תפוחים",
        "שתייה",
        46,
        0,
        11,
        0
    ],
    [
        "סודה",
        "שתייה",
        0,
        0,
        0,
        0
    ],
    [
        "מים מינרליים",
        "שתייה",
        0,
        0,
        0,
        0
    ],
    [
        "משקה איזוטוני",
        "שתייה",
        26,
        0,
        6.5,
        0
    ],
    [
        "קפה שחור",
        "שתייה",
        2,
        0,
        0,
        0
    ],
    [
        "תה",
        "שתייה",
        1,
        0,
        0,
        0
    ],
    [
        "לחם קל",
        "לחמים ומאפים",
        185,
        9,
        34,
        2
    ],
    [
        "לחם כוסמין",
        "לחמים ומאפים",
        245,
        10,
        42,
        4
    ],
    [
        "לחם שיפון",
        "לחמים ומאפים",
        250,
        9,
        48,
        3
    ],
    [
        "לחם מחמצת",
        "לחמים ומאפים",
        260,
        9,
        50,
        3
    ],
    [
        "פיתה כוסמין",
        "לחמים ומאפים",
        260,
        9,
        48,
        4
    ],
    [
        "פיתה קלה",
        "לחמים ומאפים",
        210,
        9,
        38,
        2
    ],
    [
        "לחמניית המבורגר",
        "לחמים ומאפים",
        285,
        9,
        50,
        5
    ],
    [
        "לחמניית כוסמין",
        "לחמים ומאפים",
        250,
        10,
        44,
        4
    ],
    [
        "טוסט גבינה צהובה",
        "ארוחות מוכנות",
        290,
        13,
        32,
        13
    ],
    [
        "כריך טונה",
        "ארוחות מוכנות",
        205,
        12,
        25,
        6
    ],
    [
        "כריך חביתה",
        "ארוחות מוכנות",
        230,
        11,
        24,
        10
    ],
    [
        "כריך גבינה לבנה",
        "ארוחות מוכנות",
        180,
        10,
        27,
        4
    ],
    [
        "סביח בפיתה",
        "ארוחות מוכנות",
        245,
        8,
        30,
        10
    ],
    [
        "שניצל בפיתה",
        "ארוחות מוכנות",
        270,
        13,
        32,
        12
    ],
    [
        "חזה עוף בפיתה",
        "ארוחות מוכנות",
        215,
        18,
        30,
        4
    ],
    [
        "חומוס פול",
        "ארוחות מוכנות",
        230,
        10,
        26,
        10
    ],
    [
        "חומוס מסבחה",
        "ארוחות מוכנות",
        260,
        10,
        22,
        16
    ],
    [
        "פלאפל בצלחת",
        "ארוחות מוכנות",
        290,
        11,
        30,
        14
    ],
    [
        "שווארמה בלאפה",
        "ארוחות מוכנות",
        285,
        14,
        30,
        13
    ],
    [
        "מעורב ירושלמי",
        "ארוחות מוכנות",
        205,
        23,
        4,
        11
    ],
    [
        "קציצות עוף",
        "ארוחות מוכנות",
        210,
        18,
        8,
        12
    ],
    [
        "קציצות דגים",
        "ארוחות מוכנות",
        180,
        16,
        9,
        8
    ],
    [
        "מוסקה",
        "ארוחות מוכנות",
        160,
        10,
        10,
        10
    ],
    [
        "לזניה",
        "ארוחות מוכנות",
        165,
        9,
        18,
        7
    ],
    [
        "קנלוני גבינות",
        "ארוחות מוכנות",
        210,
        11,
        23,
        9
    ],
    [
        "פשטידת ירקות",
        "ארוחות מוכנות",
        145,
        7,
        12,
        8
    ],
    [
        "פשטידת ברוקולי",
        "ארוחות מוכנות",
        150,
        8,
        10,
        9
    ],
    [
        "קיש גבינות",
        "ארוחות מוכנות",
        310,
        10,
        24,
        20
    ],
    [
        "אורז עם ירקות",
        "דגנים ותוספות",
        135,
        3,
        26,
        2
    ],
    [
        "אורז פרסי",
        "דגנים ותוספות",
        175,
        3,
        31,
        4
    ],
    [
        "אורז מוקפץ",
        "דגנים ותוספות",
        170,
        5,
        28,
        5
    ],
    [
        "נודלס מוקפץ",
        "דגנים ותוספות",
        175,
        6,
        28,
        5
    ],
    [
        "פסטה ברוטב עגבניות",
        "דגנים ותוספות",
        145,
        5,
        27,
        2
    ],
    [
        "פסטה שמנת",
        "דגנים ותוספות",
        220,
        7,
        27,
        10
    ],
    [
        "ניוקי",
        "דגנים ותוספות",
        150,
        4,
        30,
        1
    ],
    [
        "פולנטה",
        "דגנים ותוספות",
        85,
        2,
        18,
        1
    ],
    [
        "כוסמת ירוקה",
        "דגנים ותוספות",
        95,
        3.5,
        20,
        0.6
    ],
    [
        "קרוטונים",
        "דגנים ותוספות",
        410,
        10,
        70,
        10
    ],
    [
        "תפוח אדמה מבושל",
        "ירקות",
        87,
        2,
        20,
        0.1
    ],
    [
        "תפוח אדמה מטוגן",
        "ארוחות מוכנות",
        310,
        3.5,
        38,
        16
    ],
    [
        "לביבות תפוח אדמה",
        "ארוחות מוכנות",
        220,
        4,
        28,
        10
    ],
    [
        "אנטיפסטי",
        "ירקות",
        95,
        2,
        10,
        5
    ],
    [
        "פלפל קלוי",
        "ירקות",
        35,
        1,
        7,
        0.5
    ],
    [
        "חציל קלוי",
        "ירקות",
        50,
        1.2,
        8,
        2
    ],
    [
        "חציל מטוגן",
        "ירקות",
        190,
        1.5,
        10,
        16
    ],
    [
        "שעועית ירוקה",
        "ירקות",
        35,
        2,
        7,
        0.2
    ],
    [
        "אספרגוס",
        "ירקות",
        20,
        2.2,
        4,
        0.1
    ],
    [
        "סלק מבושל",
        "ירקות",
        44,
        1.7,
        10,
        0.2
    ],
    [
        "קולורבי",
        "ירקות",
        27,
        1.7,
        6,
        0.1
    ],
    [
        "צנונית",
        "ירקות",
        16,
        0.7,
        3.4,
        0.1
    ],
    [
        "עלי בייבי",
        "ירקות",
        22,
        2,
        3,
        0.4
    ],
    [
        "ארטישוק",
        "ירקות",
        47,
        3.3,
        11,
        0.2
    ],
    [
        "דלעת",
        "ירקות",
        26,
        1,
        6.5,
        0.1
    ],
    [
        "כרוב כבוש",
        "ירקות",
        19,
        1,
        4,
        0.1
    ],
    [
        "מלפפון חמוץ",
        "ירקות",
        12,
        0.3,
        2.3,
        0.2
    ],
    [
        "זיתים ירוקים",
        "שמנים ורטבים",
        145,
        1,
        4,
        15
    ],
    [
        "זיתים שחורים",
        "שמנים ורטבים",
        115,
        0.8,
        6,
        11
    ],
    [
        "רוטב אלף האיים",
        "שמנים ורטבים",
        360,
        1,
        10,
        35
    ],
    [
        "רוטב ויניגרט",
        "שמנים ורטבים",
        260,
        0,
        8,
        25
    ],
    [
        "רוטב צ'ילי מתוק",
        "שמנים ורטבים",
        215,
        0,
        52,
        0
    ],
    [
        "חרדל",
        "שמנים ורטבים",
        66,
        4,
        6,
        3
    ],
    [
        "פסטו",
        "שמנים ורטבים",
        430,
        5,
        8,
        40
    ],
    [
        "אריסה",
        "שמנים ורטבים",
        95,
        2,
        9,
        5
    ],
    [
        "עמבה",
        "שמנים ורטבים",
        80,
        1,
        18,
        1
    ],
    [
        "ביצה מקושקשת",
        "חלבונים",
        185,
        12,
        2,
        14
    ],
    [
        "חלבון ביצה",
        "חלבונים",
        52,
        11,
        1,
        0
    ],
    [
        "סייטן",
        "חלבונים",
        150,
        25,
        8,
        2
    ],
    [
        "טמפה",
        "חלבונים",
        190,
        20,
        9,
        11
    ],
    [
        "המבורגר טבעוני",
        "חלבונים",
        220,
        17,
        9,
        14
    ],
    [
        "שניצל תירס",
        "ארוחות מוכנות",
        235,
        7,
        28,
        10
    ],
    [
        "שניצל טבעול",
        "ארוחות מוכנות",
        215,
        14,
        18,
        10
    ],
    [
        "נקניקייה טבעונית",
        "חלבונים",
        210,
        16,
        9,
        13
    ],
    [
        "קציצת עדשים",
        "קטניות",
        175,
        9,
        22,
        6
    ],
    [
        "עדשים כתומות מבושלות",
        "קטניות",
        115,
        9,
        20,
        0.4
    ],
    [
        "עדשים שחורות מבושלות",
        "קטניות",
        116,
        9,
        20,
        0.4
    ],
    [
        "שעועית אדומה מבושלת",
        "קטניות",
        127,
        9,
        23,
        0.5
    ],
    [
        "שעועית שחורה מבושלת",
        "קטניות",
        132,
        9,
        24,
        0.5
    ],
    [
        "לוביה מבושלת",
        "קטניות",
        116,
        8,
        21,
        0.5
    ],
    [
        "חמאת שקדים",
        "אגוזים וזרעים",
        614,
        21,
        19,
        56
    ],
    [
        "טחינת שקדים",
        "אגוזים וזרעים",
        614,
        21,
        19,
        56
    ],
    [
        "פקאן",
        "אגוזים וזרעים",
        691,
        9,
        14,
        72
    ],
    [
        "פיסטוק",
        "אגוזים וזרעים",
        560,
        20,
        28,
        45
    ],
    [
        "אגוזי לוז",
        "אגוזים וזרעים",
        628,
        15,
        17,
        61
    ],
    [
        "מקדמיה",
        "אגוזים וזרעים",
        718,
        8,
        14,
        76
    ],
    [
        "זרעי צ'יה",
        "אגוזים וזרעים",
        486,
        17,
        42,
        31
    ],
    [
        "זרעי פשתן",
        "אגוזים וזרעים",
        534,
        18,
        29,
        42
    ],
    [
        "גרעיני דלעת",
        "אגוזים וזרעים",
        559,
        30,
        11,
        49
    ],
    [
        "בננה מיובשת",
        "פירות",
        346,
        4,
        88,
        2
    ],
    [
        "אננס",
        "פירות",
        50,
        0.5,
        13,
        0.1
    ],
    [
        "קיווי",
        "פירות",
        61,
        1.1,
        15,
        0.5
    ],
    [
        "פומלה",
        "פירות",
        38,
        0.8,
        10,
        0
    ],
    [
        "אשכולית",
        "פירות",
        42,
        0.8,
        11,
        0.1
    ],
    [
        "נקטרינה",
        "פירות",
        44,
        1.1,
        11,
        0.3
    ],
    [
        "דובדבנים",
        "פירות",
        63,
        1.1,
        16,
        0.2
    ],
    [
        "תאנה",
        "פירות",
        74,
        0.8,
        19,
        0.3
    ],
    [
        "פיטאיה",
        "פירות",
        57,
        1.2,
        13,
        0.4
    ],
    [
        "פסיפלורה",
        "פירות",
        97,
        2.2,
        23,
        0.7
    ],
    [
        "במבה נוגט",
        "חטיפים",
        530,
        10,
        58,
        29
    ],
    [
        "במבה אדומה",
        "חטיפים",
        520,
        11,
        56,
        29
    ],
    [
        "ביסלי בצל",
        "חטיפים",
        495,
        9,
        65,
        22
    ],
    [
        "ביסלי פלאפל",
        "חטיפים",
        495,
        9,
        65,
        22
    ],
    [
        "צ'יטוס",
        "חטיפים",
        520,
        7,
        58,
        30
    ],
    [
        "אפרופו",
        "חטיפים",
        515,
        7,
        61,
        28
    ],
    [
        "נאצ'וס",
        "חטיפים",
        500,
        7,
        65,
        24
    ],
    [
        "קרמבו",
        "מתוקים",
        335,
        4,
        67,
        7
    ],
    [
        "מקופלת",
        "מתוקים",
        530,
        7,
        59,
        30
    ],
    [
        "טעמי",
        "מתוקים",
        520,
        6,
        60,
        29
    ],
    [
        "אגוזי",
        "מתוקים",
        535,
        8,
        55,
        32
    ],
    [
        "טורטית",
        "מתוקים",
        500,
        5,
        66,
        24
    ],
    [
        "שוקולד פרה חלב",
        "מתוקים",
        535,
        7,
        57,
        31
    ],
    [
        "שוקולד מריר",
        "מתוקים",
        560,
        7,
        46,
        40
    ],
    [
        "עוגת הבית",
        "מתוקים",
        395,
        6,
        55,
        17
    ],
    [
        "פתיבר",
        "מתוקים",
        440,
        7,
        73,
        13
    ],
    [
        "לוטוס",
        "מתוקים",
        480,
        5,
        72,
        19
    ],
    [
        "אוראו",
        "מתוקים",
        480,
        5,
        69,
        20
    ],
    [
        "גלידת שמנת",
        "מתוקים",
        230,
        4,
        24,
        13
    ],
    [
        "ארטיק קרח",
        "מתוקים",
        80,
        0,
        20,
        0
    ],
    [
        "ארטיק שוקולד",
        "מתוקים",
        290,
        4,
        28,
        17
    ],
    [
        "קורנפלקס אלופים",
        "דגנים ותוספות",
        380,
        8,
        83,
        2
    ],
    [
        "כריות",
        "דגנים ותוספות",
        430,
        7,
        72,
        13
    ],
    [
        "קוקומן",
        "דגנים ותוספות",
        390,
        7,
        84,
        3
    ],
    [
        "ברנפלקס",
        "דגנים ותוספות",
        330,
        12,
        65,
        4
    ],
    [
        "פייבר 1",
        "דגנים ותוספות",
        210,
        8,
        33,
        3
    ]
];
const brandVariants = [
    [
        "גבינה לבנה 5%",
        "טרה",
        "מוצרי חלב",
        96,
        9,
        4,
        5
    ],
    [
        "גבינה לבנה 5%",
        "שטראוס",
        "מוצרי חלב",
        96,
        9,
        4,
        5
    ],
    [
        "קוטג' 3%",
        "תנובה",
        "מוצרי חלב",
        80,
        11,
        3,
        3
    ],
    [
        "קוטג' 9%",
        "תנובה",
        "מוצרי חלב",
        135,
        11,
        3,
        9
    ],
    [
        "יוגורט חלבון",
        "תנובה GO",
        "מוצרי חלב",
        72,
        12,
        5,
        0
    ],
    [
        "יוגורט חלבון",
        "יופלה",
        "מוצרי חלב",
        76,
        10,
        7,
        0
    ],
    [
        "מעדן חלבון",
        "דנונה PRO",
        "מוצרי חלב",
        80,
        10,
        8,
        0
    ],
    [
        "חלב 3%",
        "טרה",
        "מוצרי חלב",
        60,
        3.3,
        5,
        3
    ],
    [
        "חלב 3%",
        "יטבתה",
        "מוצרי חלב",
        60,
        3.3,
        5,
        3
    ],
    [
        "שוקו",
        "יטבתה",
        "שתייה",
        82,
        3,
        13,
        2
    ],
    [
        "שוקו",
        "שוקו בשקית",
        "שתייה",
        80,
        3,
        13,
        2
    ],
    [
        "חומוס",
        "מיקי",
        "סלטים וממרחים",
        268,
        7,
        14,
        21
    ],
    [
        "טחינה גולמית",
        "הר ברכה",
        "סלטים וממרחים",
        620,
        20,
        11,
        56
    ],
    [
        "טחינה גולמית",
        "בארכה",
        "סלטים וממרחים",
        610,
        19,
        10,
        55
    ],
    [
        "טונה במים",
        "ויליפוד",
        "דגים ובשר",
        110,
        25,
        0,
        1
    ],
    [
        "טונה בשמן",
        "ויליפוד",
        "דגים ובשר",
        190,
        27,
        0,
        9
    ],
    [
        "קורנפלקס",
        "שופרסל",
        "דגנים ותוספות",
        370,
        7,
        84,
        1
    ],
    [
        "גרנולה",
        "שופרסל",
        "דגנים ותוספות",
        445,
        9,
        62,
        17
    ],
    [
        "פריכיות אורז",
        "שופרסל",
        "חטיפים",
        385,
        8,
        82,
        3
    ],
    [
        "לחמית",
        "אסם",
        "חטיפים",
        360,
        11,
        68,
        7
    ],
    [
        "פתיתים",
        "שופרסל",
        "דגנים ותוספות",
        350,
        12,
        73,
        2
    ],
    [
        "פסטה",
        "אסם",
        "דגנים ותוספות",
        355,
        12,
        72,
        1.5
    ],
    [
        "פסטה",
        "ברילה",
        "דגנים ותוספות",
        359,
        12,
        72,
        2
    ],
    [
        "אורז בסמטי",
        "סוגת",
        "דגנים ותוספות",
        350,
        7,
        78,
        1
    ],
    [
        "אורז יסמין",
        "סוגת",
        "דגנים ותוספות",
        350,
        7,
        78,
        1
    ],
    [
        "קינואה",
        "סוגת",
        "דגנים ותוספות",
        368,
        14,
        64,
        6
    ],
    [
        "בייגלה שטוחים",
        "אסם",
        "חטיפים",
        410,
        10,
        76,
        7
    ],
    [
        "תפוצ'יפס שמנת בצל",
        "עלית",
        "חטיפים",
        535,
        6,
        52,
        34
    ],
    [
        "דוריטוס גריל",
        "עלית",
        "חטיפים",
        500,
        7,
        62,
        25
    ],
    [
        "קליק כריות",
        "יוניליוור",
        "מתוקים",
        520,
        6,
        62,
        28
    ],
    [
        "מילקי טופ",
        "שטראוס",
        "מתוקים",
        160,
        3,
        22,
        7
    ],
    [
        "דני וניל",
        "שטראוס",
        "מתוקים",
        120,
        3.5,
        20,
        3
    ],
    [
        "ארטיק מגנום",
        "שטראוס",
        "מתוקים",
        330,
        4,
        30,
        22
    ],
    [
        "גלידת בן אנד ג'ריס",
        "בן אנד ג'ריס",
        "מתוקים",
        270,
        4,
        28,
        16
    ],
    [
        "קולה",
        "RC",
        "שתייה",
        42,
        0,
        10.6,
        0
    ],
    [
        "ספרייט",
        "קוקה קולה",
        "שתייה",
        40,
        0,
        10,
        0
    ],
    [
        "פנטה",
        "קוקה קולה",
        "שתייה",
        48,
        0,
        12,
        0
    ],
    [
        "פיוז טי",
        "קוקה קולה",
        "שתייה",
        30,
        0,
        7.5,
        0
    ],
    [
        "נסטי",
        "נסטלה",
        "שתייה",
        31,
        0,
        7.7,
        0
    ],
    [
        "בירה מכבי",
        "טמפו",
        "שתייה",
        42,
        0.5,
        3.5,
        0
    ],
    [
        "בירה היינקן",
        "היינקן",
        "שתייה",
        43,
        0.5,
        3.5,
        0
    ]
];
const productFamilies = [
    {
        brand: "יופלה",
        category: "מוצרי חלב",
        serving: "גביע 150 גרם",
        caloriesPer100g: 96,
        protein: 3.5,
        carbs: 15,
        fat: 2.5,
        names: [
            "יוגורט תות",
            "יוגורט אפרסק",
            "יוגורט פירות יער",
            "יוגורט אננס",
            "יוגורט וניל",
            "יוגורט בננה"
        ]
    },
    {
        brand: "מולר",
        category: "מוצרי חלב",
        serving: "גביע 150 גרם",
        caloriesPer100g: 112,
        protein: 4,
        carbs: 14,
        fat: 4.5,
        names: [
            "מולר מיקס שוקולד",
            "מולר מיקס וניל",
            "מולר מיקס פירות יער",
            "מולר מיקס קראנץ'",
            "יוגורט קצפת תות"
        ]
    },
    {
        brand: "תנובה GO",
        category: "מוצרי חלב",
        serving: "בקבוק 250 מל",
        caloriesPer100g: 78,
        protein: 10,
        carbs: 8,
        fat: 0.5,
        names: [
            "משקה חלבון וניל",
            "משקה חלבון שוקולד",
            "משקה חלבון קפה",
            "משקה חלבון בננה",
            "יוגורט חלבון תות"
        ]
    },
    {
        brand: "טרה",
        category: "מוצרי חלב",
        serving: "גביע 150 גרם",
        caloriesPer100g: 82,
        protein: 9,
        carbs: 5,
        fat: 2.5,
        names: [
            "יוגורט פרו וניל",
            "יוגורט פרו תות",
            "יוגורט פרו אפרסק",
            "קוטג' מועשר",
            "גבינה לבנה מועשרת"
        ]
    },
    {
        brand: "אסם",
        category: "חטיפים",
        serving: "שקית",
        caloriesPer100g: 505,
        protein: 8,
        carbs: 62,
        fat: 25,
        names: [
            "ביסלי ברביקיו",
            "ביסלי פיצה",
            "ביסלי מקסיקני",
            "ביסלי מעושן",
            "במבה חלבה",
            "במבה במילוי קרם",
            "אפרופו איטלקי",
            "בייגלה שמיניות",
            "בייגלה מקלות"
        ]
    },
    {
        brand: "עלית",
        category: "חטיפים",
        serving: "שקית",
        caloriesPer100g: 520,
        protein: 7,
        carbs: 58,
        fat: 30,
        names: [
            "תפוצ'יפס גריל",
            "תפוצ'יפס מלח פלפל",
            "תפוצ'יפס מקסיקני",
            "דוריטוס טבעי",
            "דוריטוס חריף אש",
            "צ'יטוס גבינה",
            "צ'יטוס קטשופ"
        ]
    },
    {
        brand: "עלית",
        category: "מתוקים",
        serving: "חטיף",
        caloriesPer100g: 525,
        protein: 6,
        carbs: 60,
        fat: 29,
        names: [
            "פסק זמן ביג בייט",
            "פסק זמן קלאסי",
            "כיף כף חלב",
            "כיף כף מריר",
            "מקופלת לבנה",
            "טעמי בוטנים",
            "שוקולד פרה אגוזים",
            "שוקולד פרה לבן",
            "שוקולד פרה סוכריות"
        ]
    },
    {
        brand: "ורד הגליל",
        category: "מתוקים",
        serving: "100 גרם",
        caloriesPer100g: 535,
        protein: 6,
        carbs: 58,
        fat: 31,
        names: [
            "שוקולד חלב",
            "שוקולד מריר",
            "שוקולד אגוזים",
            "שוקולד לבן",
            "חטיף שוקולד"
        ]
    },
    {
        brand: "אסם",
        category: "דגנים ותוספות",
        serving: "100 גרם יבש",
        caloriesPer100g: 355,
        protein: 12,
        carbs: 73,
        fat: 1.5,
        names: [
            "פתיתים קוסקוס",
            "פתיתים אורז",
            "פתיתים אפויים",
            "ספגטי",
            "פנה",
            "פוזילי",
            "אטריות דקות",
            "אטריות רחבות"
        ]
    },
    {
        brand: "סוגת",
        category: "דגנים ותוספות",
        serving: "100 גרם יבש",
        caloriesPer100g: 350,
        protein: 8,
        carbs: 76,
        fat: 1.5,
        names: [
            "אורז עגול",
            "אורז פרסי",
            "אורז מלא",
            "בורגול דק",
            "בורגול גס",
            "קוסקוס מלא",
            "גריסי פנינה",
            "חיטה"
        ]
    },
    {
        brand: "שופרסל",
        category: "מוצרי חלב",
        serving: "100 גרם",
        caloriesPer100g: 98,
        protein: 9,
        carbs: 4,
        fat: 5,
        names: [
            "גבינה לבנה 5%",
            "גבינה לבנה 3%",
            "קוטג' 5%",
            "קוטג' 9%",
            "יוגורט טבעי",
            "יוגורט פרי",
            "שמנת חמוצה"
        ]
    },
    {
        brand: "שופרסל",
        category: "חטיפים",
        serving: "שקית",
        caloriesPer100g: 500,
        protein: 7,
        carbs: 62,
        fat: 25,
        names: [
            "חטיף בוטנים",
            "חטיף תירס",
            "צ'יפס טבעי",
            "צ'יפס גלי",
            "בייגלה מקלות",
            "בייגלה שטוחים",
            "נאצ'וס"
        ]
    },
    {
        brand: "פריגת",
        category: "שתייה",
        serving: "כוס 200 מל",
        caloriesPer100g: 45,
        protein: 0,
        carbs: 11,
        fat: 0,
        names: [
            "מיץ אשכוליות",
            "מיץ ענבים",
            "מיץ תפוחים",
            "מיץ מנגו",
            "נקטר אפרסק",
            "לימונדה",
            "משקה תות בננה"
        ]
    },
    {
        brand: "ספרינג",
        category: "שתייה",
        serving: "כוס 200 מל",
        caloriesPer100g: 42,
        protein: 0,
        carbs: 10,
        fat: 0,
        names: [
            "נקטר מנגו",
            "נקטר אפרסק",
            "נקטר ענבים",
            "נקטר תפוחים",
            "משקה לימונענע",
            "משקה אשכוליות"
        ]
    },
    {
        brand: "זוגלובק",
        category: "דגים ובשר",
        serving: "100 גרם",
        caloriesPer100g: 160,
        protein: 18,
        carbs: 3,
        fat: 8,
        names: [
            "פסטרמה דבש",
            "פסטרמה ברביקיו",
            "פסטרמה כתף בקר",
            "נקניקיות עוף",
            "נקניקיות בקר",
            "קבב מזרחי"
        ]
    },
    {
        brand: "טירת צבי",
        category: "דגים ובשר",
        serving: "100 גרם",
        caloriesPer100g: 145,
        protein: 18,
        carbs: 2,
        fat: 7,
        names: [
            "פסטרמה הודו",
            "פסטרמה מעושנת",
            "כתף בקר",
            "חזה עוף פרוס",
            "סלמי"
        ]
    },
    {
        brand: "טבעול",
        category: "ארוחות מוכנות",
        serving: "100 גרם",
        caloriesPer100g: 220,
        protein: 12,
        carbs: 20,
        fat: 10,
        names: [
            "שניצל תירס",
            "שניצל ברוקולי",
            "שניצל עדשים",
            "המבורגר צמחוני",
            "קציצות ירק",
            "נאגטס צמחוני"
        ]
    },
    {
        brand: "מעדנות",
        category: "לחמים ומאפים",
        serving: "100 גרם",
        caloriesPer100g: 320,
        protein: 9,
        carbs: 35,
        fat: 16,
        names: [
            "בורקס גבינה",
            "בורקס תפוח אדמה",
            "בורקס פיצה",
            "מלוואח",
            "ג'חנון",
            "פיצה אישית",
            "בצק עלים"
        ]
    },
    {
        brand: "סנפרוסט",
        category: "ירקות",
        serving: "100 גרם",
        caloriesPer100g: 62,
        protein: 3,
        carbs: 10,
        fat: 0.5,
        names: [
            "ברוקולי קפוא",
            "כרובית קפואה",
            "אפונה וגזר",
            "שעועית ירוקה",
            "לקט נורמנדי",
            "תירס קפוא",
            "אדממה קפואה"
        ]
    },
    {
        brand: "יד מרדכי",
        category: "שמנים ורטבים",
        serving: "כף",
        caloriesPer100g: 310,
        protein: 1,
        carbs: 38,
        fat: 16,
        names: [
            "דבש לחיץ",
            "סילאן טבעי",
            "רוטב ויניגרט",
            "רוטב קיסר",
            "רוטב חרדל ודבש"
        ]
    }
];
const proAndSnackCatalog = [
    {
        id: "tnuva-go-yogurt",
        brand: "תנובה GO",
        category: "מוצרי חלב",
        serving: "גביע 200 גרם",
        caloriesPer100g: 78,
        protein: 10.5,
        carbs: 6,
        fat: 1.5,
        bases: [
            "יוגורט חלבון GO",
            "יוגורט יופלה GO",
            "יוגורט GO סמיך",
            "יוגורט GO אוורירי",
            "יוגורט GO לייט"
        ],
        variants: [
            "טבעי",
            "וניל",
            "תות",
            "אפרסק",
            "פירות יער",
            "דובדבן",
            "מנגו",
            "אננס",
            "בננה",
            "קפה",
            "קוקוס",
            "מלון תות",
            "פאי תפוחים",
            "אננס מקורמל",
            "אפרסק פסיפלורה"
        ]
    },
    {
        id: "tnuva-go-drinks",
        brand: "תנובה GO",
        category: "שתייה",
        serving: "בקבוק 340 מל",
        caloriesPer100g: 67,
        protein: 7.4,
        carbs: 5,
        fat: 1.9,
        bases: [
            "משקה חלבון GO",
            "משקה יוגורט חלבון GO",
            "משקה GO ללא תוספת סוכר",
            "משקה GO קולגן",
            "משקה סויה GO"
        ],
        variants: [
            "וניל",
            "שוקולד",
            "קפה",
            "אייס קפה",
            "עוגיות",
            "בננה קרמל",
            "מנגו אננס",
            "פסיפלורה",
            "תות בננה",
            "קפה אגוזי לוז",
            "אגוזי לוז",
            "טבעי"
        ]
    },
    {
        id: "tnuva-go-powders",
        brand: "תנובה GO",
        category: "חלבונים",
        serving: "סקופ 30 גרם",
        caloriesPer100g: 390,
        protein: 76,
        carbs: 9,
        fat: 6,
        bases: [
            "אבקת חלבון GO",
            "אבקת מי גבינה GO",
            "אבקת חלבון GO איזולייט"
        ],
        variants: [
            "וניל",
            "שוקולד",
            "עוגיות",
            "וניל קרמל",
            "אייס קפה",
            "טבעי",
            "בננה",
            "קרם עוגיות",
            "קפה",
            "שוקולד אגוזים"
        ]
    },
    {
        id: "danone-pro-yogurt",
        brand: "דנונה PRO",
        category: "מוצרי חלב",
        serving: "גביע 160 גרם",
        caloriesPer100g: 74,
        protein: 10,
        carbs: 5.5,
        fat: 1.5,
        bases: [
            "יוגורט דנונה PRO",
            "דנונה PRO יוגורט חלבון",
            "דנונה PRO שכבות",
            "דנונה PRO ללא תוספת סוכר",
            "דנונה PRO 20 גרם חלבון"
        ],
        variants: [
            "טבעי",
            "וניל",
            "תות",
            "אפרסק",
            "פירות יער",
            "מנגו",
            "בננה",
            "דובדבן",
            "קוקוס",
            "קפה",
            "מנגו פסיפלורה",
            "שוקולד"
        ]
    },
    {
        id: "danone-pro-bars",
        brand: "דנונה PRO",
        category: "חטיפים",
        serving: "חטיף 60 גרם",
        caloriesPer100g: 365,
        protein: 32,
        carbs: 36,
        fat: 11,
        bases: [
            "חטיף חלבון PRO",
            "חטיף דנונה PRO",
            "חטיף פרו מצופה",
            "חטיף חלבון פרו קראנץ'"
        ],
        variants: [
            "קרמל",
            "שוקולד",
            "אגוזי לוז",
            "וניל",
            "עוגיות",
            "בוטנים",
            "קפה",
            "בראוניז",
            "קוקוס",
            "שוקולד לבן",
            "קרמל מלוח"
        ]
    },
    {
        id: "yoplait-pro",
        brand: "יופלה GO",
        category: "מוצרי חלב",
        serving: "גביע 200 גרם",
        caloriesPer100g: 82,
        protein: 10,
        carbs: 7,
        fat: 1.8,
        bases: [
            "יוגורט חלבון יופלה GO",
            "יופלה GO סמיך",
            "יופלה GO אוורירי",
            "יופלה GO נטול לקטוז",
            "יופלה GO 25 גרם חלבון"
        ],
        variants: [
            "טבעי",
            "וניל",
            "אפרסק",
            "תות",
            "פירות יער",
            "דובדבן",
            "מנגו",
            "קפה",
            "קוקוס",
            "בננה",
            "אפרסק פסיפלורה",
            "מלון תות"
        ]
    },
    {
        id: "strauss-pro",
        brand: "שטראוס PRO",
        category: "מוצרי חלב",
        serving: "גביע",
        caloriesPer100g: 80,
        protein: 10,
        carbs: 6,
        fat: 2,
        bases: [
            "מעדן חלבון PRO",
            "משקה חלבון PRO",
            "יוגורט חלבון PRO",
            "פרו דל שומן"
        ],
        variants: [
            "וניל",
            "שוקולד",
            "קפה",
            "תות",
            "בננה",
            "קרמל",
            "עוגיות",
            "אגוזי לוז",
            "קוקוס",
            "טבעי"
        ]
    },
    {
        id: "protein-bars",
        brand: "חטיפי חלבון",
        category: "חטיפים",
        serving: "חטיף 60 גרם",
        caloriesPer100g: 380,
        protein: 31,
        carbs: 34,
        fat: 13,
        bases: [
            "חטיף חלבון",
            "חטיף חלבון 20 גרם",
            "חטיף חלבון 25 גרם",
            "חטיף חלבון קראנצ'",
            "חטיף חלבון ללא תוספת סוכר",
            "חטיף חלבון טבעוני"
        ],
        variants: [
            "שוקולד",
            "וניל",
            "קרמל",
            "קרמל מלוח",
            "בוטנים",
            "עוגיות",
            "בראוניז",
            "קוקוס",
            "קפה",
            "אגוזי לוז",
            "פיסטוק",
            "שוקולד לבן",
            "חמאת בוטנים",
            "בננה"
        ]
    },
    {
        id: "protein-snacks",
        brand: "נשנושי חלבון",
        category: "חטיפים",
        serving: "שקית",
        caloriesPer100g: 420,
        protein: 23,
        carbs: 44,
        fat: 16,
        bases: [
            "בייגלה חלבון",
            "צ'יפס חלבון",
            "קרקר חלבון",
            "פופקורן חלבון",
            "נאצ'וס חלבון",
            "קראנץ' חלבון"
        ],
        variants: [
            "מלח",
            "שומשום",
            "ברביקיו",
            "שמנת בצל",
            "גריל",
            "פיצה",
            "חריף",
            "עשבי תיבול",
            "צ'ילי מתוק",
            "מלח פלפל"
        ]
    },
    {
        id: "bamba-family",
        brand: "אסם",
        category: "חטיפים",
        serving: "שקית",
        caloriesPer100g: 535,
        protein: 14,
        carbs: 52,
        fat: 30,
        bases: [
            "במבה",
            "במבה מיני",
            "במבה במילוי",
            "במבה מיקס",
            "במבה נוגט",
            "במבה אפויה"
        ],
        variants: [
            "קלאסית",
            "נוגט",
            "חלבה",
            "קרם בוטנים",
            "קרם שוקולד",
            "אדומה",
            "מתוקה",
            "מלוחה",
            "בצל",
            "גריל",
            "פיצה",
            "חריף",
            "עם ביסלי גריל",
            "עם ביסלי בצל"
        ]
    },
    {
        id: "bisli-family",
        brand: "אסם",
        category: "חטיפים",
        serving: "שקית",
        caloriesPer100g: 495,
        protein: 9,
        carbs: 65,
        fat: 22,
        bases: [
            "ביסלי",
            "ביסלי מיקס",
            "ביסלי קראנץ'",
            "ביסלי מהדורה מיוחדת",
            "ביסלי אקסטרה"
        ],
        variants: [
            "גריל",
            "בצל",
            "פלאפל",
            "פיצה",
            "ברביקיו",
            "מקסיקני",
            "מעושן",
            "חריף",
            "צ'ילי",
            "שמנת בצל",
            "המבורגר",
            "שווארמה",
            "נאצ'וס",
            "גבינה"
        ]
    },
    {
        id: "chips-israel",
        brand: "חטיפי צ'יפס",
        category: "חטיפים",
        serving: "שקית",
        caloriesPer100g: 535,
        protein: 6,
        carbs: 52,
        fat: 34,
        bases: [
            "תפוצ'יפס",
            "צ'יפס גלי",
            "צ'יפס קראנץ'",
            "צ'יפס אפוי",
            "צ'יפס קומקום",
            "צ'יפס דק"
        ],
        variants: [
            "טבעי",
            "גריל",
            "שמנת בצל",
            "מלח פלפל",
            "ברביקיו",
            "חריף",
            "צ'ילי מתוק",
            "קטשופ",
            "פיצה",
            "גבינה",
            "שום שמיר",
            "ים תיכוני"
        ]
    },
    {
        id: "doritos-nachos",
        brand: "עלית",
        category: "חטיפים",
        serving: "שקית",
        caloriesPer100g: 500,
        protein: 7,
        carbs: 62,
        fat: 25,
        bases: [
            "דוריטוס",
            "נאצ'וס",
            "דוריטוס דיפ",
            "דוריטוס קראנץ'",
            "דוריטוס מהדורה מיוחדת"
        ],
        variants: [
            "חמוץ חריף",
            "גריל",
            "טבעי",
            "גבינה",
            "צ'ילי",
            "ברביקיו",
            "חריף אש",
            "מקסיקני",
            "שמנת בצל",
            "סלסה",
            "פלפל לימון"
        ]
    },
    {
        id: "pretzel-crackers",
        brand: "נשנושים מלוחים",
        category: "חטיפים",
        serving: "30 גרם",
        caloriesPer100g: 405,
        protein: 10,
        carbs: 72,
        fat: 8,
        bases: [
            "בייגלה",
            "קרקר",
            "לחמית",
            "פריכיות",
            "מקלוני גריסיני",
            "טוסטונים",
            "קריספי"
        ],
        variants: [
            "מלח",
            "שומשום",
            "זעתר",
            "שום",
            "בצל",
            "חיטה מלאה",
            "כוסמין",
            "גבינה",
            "פיצה",
            "חריף",
            "קינואה",
            "שיבולת שועל"
        ]
    },
    {
        id: "sweet-bars",
        brand: "חטיפים מתוקים",
        category: "מתוקים",
        serving: "חטיף",
        caloriesPer100g: 520,
        protein: 6,
        carbs: 60,
        fat: 29,
        bases: [
            "חטיף שוקולד",
            "ופל מצופה",
            "חטיף קרמל",
            "חטיף בוטנים",
            "חטיף אגוזים",
            "חטיף קוקוס",
            "חטיף נוגט"
        ],
        variants: [
            "חלב",
            "מריר",
            "לבן",
            "קרמל",
            "קרמל מלוח",
            "אגוזי לוז",
            "בוטנים",
            "עוגיות",
            "קוקוס",
            "פיסטוק",
            "תות",
            "בננה"
        ]
    },
    {
        id: "cookies-family",
        brand: "עוגיות ונשנושים",
        category: "מתוקים",
        serving: "30 גרם",
        caloriesPer100g: 470,
        protein: 6,
        carbs: 68,
        fat: 19,
        bases: [
            "עוגיות",
            "עוגיות סנדוויץ'",
            "פתיבר",
            "וופלים",
            "ביסקוויטים",
            "עוגיות שוקולד צ'יפס",
            "עוגיות חמאה"
        ],
        variants: [
            "וניל",
            "שוקולד",
            "קרם שוקולד",
            "קרם וניל",
            "קרמל",
            "קפה",
            "קוקוס",
            "אגוזים",
            "לימון",
            "קינמון",
            "ללא סוכר",
            "חיטה מלאה"
        ]
    },
    {
        id: "cereal-snacks",
        brand: "דגני בוקר וחטיפים",
        category: "דגנים ותוספות",
        serving: "30 גרם",
        caloriesPer100g: 390,
        protein: 8,
        carbs: 78,
        fat: 6,
        bases: [
            "קורנפלקס",
            "כריות",
            "קוקומן",
            "גרנולה",
            "ברנפלקס",
            "פייבר",
            "דגני שוקולד",
            "דגני דבש"
        ],
        variants: [
            "קלאסי",
            "שוקולד",
            "וניל",
            "נוגט",
            "דבש",
            "קינמון",
            "אגוזים",
            "פירות",
            "ללא סוכר",
            "חלבון",
            "מלא",
            "קראנץ'"
        ]
    },
    {
        id: "ice-cream-snacks",
        brand: "גלידות וארטיקים",
        category: "מתוקים",
        serving: "יחידה",
        caloriesPer100g: 250,
        protein: 4,
        carbs: 28,
        fat: 14,
        bases: [
            "ארטיק",
            "גלידת שמנת",
            "גלידה בגביע",
            "טילון",
            "שלגון",
            "מיני שלגון"
        ],
        variants: [
            "וניל",
            "שוקולד",
            "שוקולד לבן",
            "קרמל",
            "פיסטוק",
            "תות",
            "קפה",
            "עוגיות",
            "קוקוס",
            "מנגו",
            "לימון",
            "ללא סוכר"
        ]
    },
    {
        id: "nuts-seeds-snacks",
        brand: "פיצוחים",
        category: "אגוזים וזרעים",
        serving: "חופן 30 גרם",
        caloriesPer100g: 585,
        protein: 20,
        carbs: 20,
        fat: 49,
        bases: [
            "שקדים",
            "קשיו",
            "פיסטוק",
            "אגוזי מלך",
            "פקאן",
            "בוטנים",
            "גרעיני חמניה",
            "גרעיני דלעת",
            "מיקס אגוזים"
        ],
        variants: [
            "טבעי",
            "קלוי",
            "קלוי מלוח",
            "חריף",
            "דבש",
            "ברביקיו",
            "ללא מלח",
            "מצופה",
            "שום",
            "צ'ילי"
        ]
    },
    {
        id: "ready-protein-meals",
        brand: "ארוחות חלבון",
        category: "ארוחות מוכנות",
        serving: "מנה",
        caloriesPer100g: 155,
        protein: 16,
        carbs: 12,
        fat: 5,
        bases: [
            "קערת חלבון",
            "סלט חלבון",
            "ארוחת חזה עוף",
            "ארוחת טונה",
            "ארוחת ביצים",
            "ארוחת טופו",
            "ראפ חלבון"
        ],
        variants: [
            "אורז",
            "קינואה",
            "עדשים",
            "בטטה",
            "ירקות",
            "טחינה",
            "אסיאתי",
            "ים תיכוני",
            "פיקנטי",
            "ברביקיו"
        ]
    }
];
const proAndSnackProducts = proAndSnackCatalog.flatMap((family)=>family.bases.flatMap((base, baseIndex)=>family.variants.map((variant, variantIndex)=>({
                id: `pro-snack-${family.id}-${baseIndex}-${variantIndex}`,
                name: `${base} ${variant}`,
                brand: family.brand,
                category: family.category,
                serving: family.serving,
                caloriesPer100g: family.caloriesPer100g,
                protein: family.protein,
                carbs: family.carbs,
                fat: family.fat
            }))));
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
        })),
    ...expandedNames.map(([name, category, caloriesPer100g, protein, carbs, fat], index)=>({
            id: `expanded-${index}`,
            name: String(name),
            category: String(category),
            serving: "100 גרם",
            caloriesPer100g: Number(caloriesPer100g),
            protein: Number(protein),
            carbs: Number(carbs),
            fat: Number(fat)
        })),
    ...brandVariants.map(([name, brand, category, caloriesPer100g, protein, carbs, fat], index)=>({
            id: `brand-${index}`,
            name: String(name),
            brand: String(brand),
            category: String(category),
            serving: "100 גרם",
            caloriesPer100g: Number(caloriesPer100g),
            protein: Number(protein),
            carbs: Number(carbs),
            fat: Number(fat)
        })),
    ...productFamilies.flatMap((family, familyIndex)=>family.names.map((name, index)=>({
                id: `family-${familyIndex}-${index}`,
                name,
                brand: family.brand,
                category: family.category,
                serving: family.serving,
                caloriesPer100g: family.caloriesPer100g,
                protein: family.protein,
                carbs: family.carbs,
                fat: family.fat
            }))),
    ...proAndSnackProducts
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$zxing$2f$browser$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@zxing/browser/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$zxing$2f$browser$2f$esm$2f$readers$2f$BrowserMultiFormatReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@zxing/browser/esm/readers/BrowserMultiFormatReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/products.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
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
const gramUnits = [
    {
        id: "g",
        label: "גרם",
        gramsPerUnit: 1,
        defaultValue: 100,
        quickValues: [
            30,
            50,
            100,
            150,
            200,
            250
        ]
    }
];
const drinkUnits = [
    {
        id: "ml",
        label: "מ״ל",
        gramsPerUnit: 1,
        defaultValue: 250,
        quickValues: [
            100,
            200,
            250,
            330,
            500
        ]
    },
    {
        id: "cup",
        label: "כוס",
        gramsPerUnit: 200,
        defaultValue: 1,
        quickValues: [
            1,
            2,
            3
        ]
    },
    {
        id: "can",
        label: "פחית",
        gramsPerUnit: 330,
        defaultValue: 1,
        quickValues: [
            1,
            2
        ]
    },
    {
        id: "bottle",
        label: "בקבוק קטן",
        gramsPerUnit: 500,
        defaultValue: 1,
        quickValues: [
            1,
            2
        ]
    }
];
const spoonUnits = [
    {
        id: "g",
        label: "גרם",
        gramsPerUnit: 1,
        defaultValue: 10,
        quickValues: [
            5,
            10,
            15,
            30,
            50
        ]
    },
    {
        id: "tsp",
        label: "כפית",
        gramsPerUnit: 5,
        defaultValue: 1,
        quickValues: [
            1,
            2,
            3,
            4
        ]
    },
    {
        id: "tbsp",
        label: "כף",
        gramsPerUnit: 15,
        defaultValue: 1,
        quickValues: [
            1,
            2,
            3
        ]
    }
];
const oilUnits = [
    {
        id: "tsp",
        label: "כפית",
        gramsPerUnit: 5,
        defaultValue: 1,
        quickValues: [
            1,
            2,
            3
        ]
    },
    {
        id: "tbsp",
        label: "כף",
        gramsPerUnit: 15,
        defaultValue: 1,
        quickValues: [
            1,
            2,
            3
        ]
    },
    {
        id: "spray",
        label: "שפריץ",
        gramsPerUnit: 1,
        defaultValue: 3,
        quickValues: [
            1,
            3,
            5,
            10
        ]
    },
    {
        id: "g",
        label: "גרם",
        gramsPerUnit: 1,
        defaultValue: 15,
        quickValues: [
            5,
            10,
            15,
            30
        ]
    }
];
const portionUnits = [
    {
        id: "g",
        label: "גרם",
        gramsPerUnit: 1,
        defaultValue: 100,
        quickValues: [
            50,
            100,
            150,
            200,
            250
        ]
    },
    {
        id: "portion",
        label: "מנה",
        gramsPerUnit: 250,
        defaultValue: 1,
        quickValues: [
            1,
            2
        ]
    },
    {
        id: "half",
        label: "חצי מנה",
        gramsPerUnit: 125,
        defaultValue: 1,
        quickValues: [
            1,
            2
        ]
    }
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
const normalizeText = (value)=>value.trim().toLowerCase();
const isLocalhost = (hostname)=>hostname === "localhost" || hostname === "127.0.0.1";
const getUnitOptions = (product)=>{
    const text = `${product.name} ${product.brand ?? ""} ${product.category}`.toLowerCase();
    if (product.category === "שתייה" || /משקה|מיץ|קולה|סודה|מים|בירה|יין|קפה|תה|שוקו/.test(text)) {
        return drinkUnits;
    }
    if (/שמן|תרסיס|ספריי/.test(text)) {
        return oilUnits;
    }
    if (product.category === "שמנים ורטבים" || /רוטב|טחינה|מיונז|קטשופ|חרדל|דבש|סילאן|ריבה|סוכר|מלח|תבלין|פפריקה|כמון|קינמון|זעתר|פלפל/.test(text)) {
        return spoonUnits;
    }
    if (product.category === "ארוחות מוכנות" || /מנה|פיתה|לאפה|כריך|סלט|קערת|ארוחת/.test(text)) {
        return portionUnits;
    }
    return gramUnits;
};
const formatAmountLabel = (value, unit, grams)=>{
    const cleanValue = Number.isInteger(value) ? value.toString() : value.toFixed(1);
    if (unit.id === "g") return `${Math.round(grams)} גרם`;
    if (unit.id === "ml") return `${Math.round(value)} מ״ל`;
    return `${cleanValue} ${unit.label} (${Math.round(grams)} גרם)`;
};
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
    const [selectedMeal, setSelectedMeal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("breakfast");
    const [amountValue, setAmountValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(100);
    const [selectedUnitId, setSelectedUnitId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("g");
    const [manualOpen, setManualOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [manualName, setManualName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [manualCalories, setManualCalories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(150);
    const [barcode, setBarcode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [barcodeStatus, setBarcodeStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [cameraStatus, setCameraStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [scanning, setScanning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastScannedProduct, setLastScannedProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedProduct, setSelectedProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [choosingMeal, setChoosingMeal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notice, setNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scannerControlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    const unitOptions = selectedProduct ? getUnitOptions(selectedProduct) : gramUnits;
    const selectedUnit = unitOptions.find((unit)=>unit.id === selectedUnitId) ?? unitOptions[0];
    const selectedGrams = Math.max(1, amountValue * selectedUnit.gramsPerUnit);
    const filteredProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CalorieApp.useMemo[filteredProducts]": ()=>{
            const cleanQuery = normalizeText(query);
            if (cleanQuery.length < 2) return [];
            return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter({
                "CalorieApp.useMemo[filteredProducts]": (product)=>{
                    return normalizeText(`${product.name} ${product.brand ?? ""} ${product.category}`).includes(cleanQuery);
                }
            }["CalorieApp.useMemo[filteredProducts]"]).slice(0, 12);
        }
    }["CalorieApp.useMemo[filteredProducts]"], [
        query
    ]);
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
    const selectProduct = (product)=>{
        const nextUnits = getUnitOptions(product);
        setSelectedUnitId(nextUnits[0].id);
        setAmountValue(nextUnits[0].defaultValue);
        setSelectedProduct(product);
        setChoosingMeal(false);
        setNotice("");
    };
    const addProduct = (product, amount, meal, amountLabel)=>{
        const entry = {
            id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
            product,
            grams: Math.max(1, amount),
            amountLabel,
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
        setNotice(`${product.name} נוסף ל${mealLabels[meal]} (${amountLabel})`);
        setSelectedMeal(meal);
    };
    const removeEntry = (meal, entryId)=>{
        updateDay((current)=>({
                ...current,
                [meal]: current[meal].filter((entry)=>entry.id !== entryId)
            }));
    };
    const addManual = ()=>{
        if (!manualName.trim()) return;
        selectProduct({
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
    const requestMealChoice = ()=>{
        if (!selectedProduct) {
            setNotice("קודם צריך לבחור מוצר מחיפוש או ברקוד.");
            return;
        }
        setChoosingMeal(true);
    };
    const addSelectedToMeal = (meal)=>{
        if (!selectedProduct) return;
        addProduct(selectedProduct, selectedGrams, meal, formatAmountLabel(amountValue, selectedUnit, selectedGrams));
        setSelectedProduct(null);
        setChoosingMeal(false);
        setQuery("");
        setBarcode("");
        setBarcodeStatus("");
        setCameraStatus("");
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
            selectProduct(payload);
            setBarcodeStatus(`נמצא: ${payload.name}. עכשיו בחר כמות ולחץ הוספה.`);
            setBarcode(cleanCode);
        } catch  {
            setBarcodeStatus("החיבור למאגר נכשל. אפשר להוסיף ידנית בינתיים.");
        }
    };
    const stopScanner = ()=>{
        scannerControlsRef.current?.stop();
        scannerControlsRef.current = null;
        streamRef.current?.getTracks().forEach((track)=>track.stop());
        streamRef.current = null;
        setScanning(false);
    };
    const startScanner = async ()=>{
        if (!window.isSecureContext && !isLocalhost(window.location.hostname)) {
            setCameraStatus("באייפון ספארי המצלמה עובדת רק ב-HTTPS. ברשת מקומית דרך http אפשר להקליד את הברקוד ידנית, או לפתוח גרסה ב-Railway.");
            return;
        }
        const detectorCtor = window.BarcodeDetector;
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
            if (!detectorCtor) {
                if (!videoRef.current) {
                    setCameraStatus("לא הצלחנו לפתוח את חלון המצלמה. אפשר להקליד את הברקוד ידנית.");
                    stopScanner();
                    return;
                }
                const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$zxing$2f$browser$2f$esm$2f$readers$2f$BrowserMultiFormatReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserMultiFormatReader"]();
                const controls = await reader.decodeFromVideoElement(videoRef.current, (result)=>{
                    const value = result?.getText();
                    if (!value) return;
                    stopScanner();
                    setBarcode(value);
                    void lookupBarcode(value);
                });
                scannerControlsRef.current = controls;
                return;
            }
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
            setCameraStatus("לא קיבלנו גישה למצלמה. באייפון דרך רשת מקומית צריך HTTPS; בינתיים אפשר להקליד את הברקוד ידנית.");
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
                lineNumber: 450,
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
                                lineNumber: 453,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "יומן קלוריות ישראלי"
                            }, void 0, false, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 454,
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
                                lineNumber: 455,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CalorieApp.tsx",
                        lineNumber: 452,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "today-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: 'סה"כ היום'
                            }, void 0, false, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 458,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: dailyTotal.toLocaleString("he-IL")
                            }, void 0, false, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 459,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: remaining ? `נשארו ${remaining.toLocaleString("he-IL")} קק"ל` : "עברת את היעד היומי"
                            }, void 0, false, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 460,
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
                                    lineNumber: 462,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 461,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CalorieApp.tsx",
                        lineNumber: 457,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CalorieApp.tsx",
                lineNumber: 451,
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
                        lineNumber: 468,
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
                                        lineNumber: 482,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: date.getDate()
                                    }, void 0, false, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 483,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: total ? `${total} קק"ל` : "ריק"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 484,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, dateKey, true, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 476,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/CalorieApp.tsx",
                        lineNumber: 471,
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
                        lineNumber: 489,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CalorieApp.tsx",
                lineNumber: 467,
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
                                                lineNumber: 498,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "מה אכלת היום"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 499,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 497,
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
                                        lineNumber: 501,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 496,
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
                                        lineNumber: 511,
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
                                        lineNumber: 512,
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
                                        lineNumber: 513,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 510,
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
                                                        lineNumber: 522,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            mealCalories.toLocaleString("he-IL"),
                                                            ' קק"ל'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/CalorieApp.tsx",
                                                        lineNumber: 529,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 521,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: mealHints[meal]
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 531,
                                                columnNumber: 19
                                            }, this),
                                            day[meal].length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "empty-meal",
                                                children: "אין פריטים בארוחה הזו עדיין."
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 533,
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
                                                                        lineNumber: 539,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            entry.amountLabel ?? `${entry.grams} גרם`,
                                                                            " · ",
                                                                            caloriesFor(entry),
                                                                            ' קק"ל'
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/CalorieApp.tsx",
                                                                        lineNumber: 540,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/CalorieApp.tsx",
                                                                lineNumber: 538,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>removeEntry(meal, entry.id),
                                                                title: "מחיקה",
                                                                children: "×"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/CalorieApp.tsx",
                                                                lineNumber: 544,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, entry.id, true, {
                                                        fileName: "[project]/components/CalorieApp.tsx",
                                                        lineNumber: 537,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 535,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, meal, true, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 520,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 516,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CalorieApp.tsx",
                        lineNumber: 495,
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
                                            lineNumber: 560,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "חפש, סרוק או הזן"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CalorieApp.tsx",
                                            lineNumber: 561,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "helper",
                                            children: "חפש מוצר בשם או סרוק ברקוד. אחרי שמצאת, בחר כמות ואז לחץ הוספה."
                                        }, void 0, false, {
                                            fileName: "[project]/components/CalorieApp.tsx",
                                            lineNumber: 562,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CalorieApp.tsx",
                                    lineNumber: 559,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 558,
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
                                                lineNumber: 568,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 569,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 570,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 571,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 572,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 573,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 567,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "barcode-actions",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                inputMode: "numeric",
                                                placeholder: "הזן ברקוד",
                                                value: barcode,
                                                onChange: (event)=>setBarcode(event.target.value),
                                                onInput: (event)=>setBarcode(event.currentTarget.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 576,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "primary",
                                                onClick: ()=>void lookupBarcode(),
                                                children: "בדיקה"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 583,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: scanning ? stopScanner : startScanner,
                                                children: scanning ? "עצור מצלמה" : "סרוק"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 586,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 575,
                                        columnNumber: 13
                                    }, this),
                                    scanning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        ref: videoRef,
                                        className: "scanner",
                                        muted: true,
                                        playsInline: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 590,
                                        columnNumber: 25
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: barcodeStatus || cameraStatus || "סריקת ברקוד תחפש את המוצר, ואז תוכל לבחור כמות וארוחה."
                                    }, void 0, false, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 591,
                                        columnNumber: 13
                                    }, this),
                                    lastScannedProduct?.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "product-image",
                                        src: lastScannedProduct.image,
                                        alt: lastScannedProduct.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 593,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 566,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "search-box",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "search",
                                    placeholder: "חיפוש: קוטג', במבה, חזה עוף...",
                                    value: query,
                                    onChange: (event)=>setQuery(event.target.value),
                                    onInput: (event)=>setQuery(event.currentTarget.value)
                                }, void 0, false, {
                                    fileName: "[project]/components/CalorieApp.tsx",
                                    lineNumber: 598,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 597,
                                columnNumber: 11
                            }, this),
                            query.trim().length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "search-prompt",
                                children: [
                                    "המאגר כולל ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].length.toLocaleString("he-IL"),
                                    " מוצרים. התחל להקליד שם מוצר כדי לראות תוצאות."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 608,
                                columnNumber: 13
                            }, this) : null,
                            query.trim().length > 0 && query.trim().length < 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "search-prompt",
                                children: "הקלד לפחות שני תווים כדי לחפש."
                            }, void 0, false, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 614,
                                columnNumber: 13
                            }, this) : null,
                            query.trim().length === 0 && recentProducts.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
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
                                                lineNumber: 620,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "לחיצה תבחר מוצר"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 621,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 619,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "chip-row",
                                        children: recentProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>selectProduct(product),
                                                children: product.name
                                            }, `recent-${product.id}`, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 625,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 623,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 618,
                                columnNumber: 13
                            }, this) : null,
                            selectedProduct ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "selected-product",
                                "aria-label": "מוצר שנבחר",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "selected-product-head",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: selectedProduct.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 636,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    selectedProduct.brand ?? selectedProduct.category,
                                                    " · ",
                                                    selectedProduct.serving
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 637,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 635,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "selected-calories",
                                        children: [
                                            Math.round(selectedProduct.caloriesPer100g * selectedGrams / 100).toLocaleString("he-IL"),
                                            ' קק"ל'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 639,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "amount-grid",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "amount-field",
                                                children: [
                                                    "כמות",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: "0.1",
                                                        step: "0.1",
                                                        value: amountValue,
                                                        onChange: (event)=>setAmountValue(Number(event.target.value)),
                                                        onInput: (event)=>setAmountValue(Number(event.currentTarget.value))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CalorieApp.tsx",
                                                        lineNumber: 645,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 643,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "amount-field",
                                                children: [
                                                    "יחידה",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: selectedUnit.id,
                                                        onChange: (event)=>{
                                                            const nextUnit = unitOptions.find((unit)=>unit.id === event.target.value) ?? unitOptions[0];
                                                            setSelectedUnitId(nextUnit.id);
                                                            setAmountValue(nextUnit.defaultValue);
                                                        },
                                                        children: unitOptions.map((unit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: unit.id,
                                                                children: unit.label
                                                            }, unit.id, false, {
                                                                fileName: "[project]/components/CalorieApp.tsx",
                                                                lineNumber: 665,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CalorieApp.tsx",
                                                        lineNumber: 656,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 654,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 642,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "amount-summary",
                                        children: [
                                            "מחושב לפי ",
                                            formatAmountLabel(amountValue || 0, selectedUnit, selectedGrams)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 672,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "quick-amounts",
                                        "aria-label": "בחירת כמות מהירה",
                                        children: selectedUnit.quickValues.map((amount)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: amountValue === amount ? "selected" : "",
                                                onClick: ()=>setAmountValue(amount),
                                                children: [
                                                    amount,
                                                    " ",
                                                    selectedUnit.label
                                                ]
                                            }, amount, true, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 677,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 675,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "primary add-selected",
                                        onClick: requestMealChoice,
                                        children: "הוסף ליומן"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 687,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 634,
                                columnNumber: 13
                            }, this) : null,
                            filteredProducts.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "product-results",
                                children: filteredProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: selectedProduct?.id === product.id ? "product-result selected" : "product-result",
                                        onClick: ()=>selectProduct(product),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: product.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CalorieApp.tsx",
                                                        lineNumber: 703,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: product.brand ?? product.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CalorieApp.tsx",
                                                        lineNumber: 704,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 702,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: [
                                                    product.caloriesPer100g,
                                                    ' קק"ל ל-100 גרם'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 706,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, product.id, true, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 696,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 694,
                                columnNumber: 13
                            }, this) : null,
                            query.trim().length >= 2 && filteredProducts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "empty-search",
                                children: "לא מצאתי מוצר בשם הזה. אפשר לסרוק ברקוד או להוסיף ידנית עם קלוריות ל-100 גרם."
                            }, void 0, false, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 713,
                                columnNumber: 13
                            }, this) : null,
                            choosingMeal && selectedProduct ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "meal-chooser",
                                "aria-label": "בחירת ארוחה",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mini-head",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "לאיזו ארוחה להוסיף?"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 721,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: selectedProduct.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 722,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 720,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "meal-choice-grid",
                                        children: mealOrder.map((meal)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>addSelectedToMeal(meal),
                                                children: mealLabels[meal]
                                            }, meal, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 726,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 724,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "ghost meal-cancel",
                                        onClick: ()=>setChoosingMeal(false),
                                        children: "ביטול"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 731,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 719,
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
                                        lineNumber: 738,
                                        columnNumber: 13
                                    }, this),
                                    manualOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "manual-fields",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                placeholder: "שם המאכל",
                                                value: manualName,
                                                onChange: (event)=>setManualName(event.target.value),
                                                onInput: (event)=>setManualName(event.currentTarget.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 743,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: "0",
                                                value: manualCalories,
                                                onChange: (event)=>setManualCalories(Number(event.target.value)),
                                                onInput: (event)=>setManualCalories(Number(event.currentTarget.value)),
                                                "aria-label": "קלוריות ל-100 גרם"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 749,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "primary",
                                                onClick: addManual,
                                                children: "בחר"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CalorieApp.tsx",
                                                lineNumber: 757,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CalorieApp.tsx",
                                        lineNumber: 742,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CalorieApp.tsx",
                                lineNumber: 737,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CalorieApp.tsx",
                        lineNumber: 557,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CalorieApp.tsx",
                lineNumber: 494,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CalorieApp.tsx",
        lineNumber: 449,
        columnNumber: 5
    }, this);
}
_s1(CalorieApp, "Ii6qrQhDCrKAECWmWIhtPS/AeW0=", false, function() {
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
]);

//# sourceMappingURL=_1pzkc1o._.js.map
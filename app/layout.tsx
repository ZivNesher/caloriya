import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "קלורית",
  description: "יומן קלוריות בעברית עם סריקת ברקוד ומאגר מוצרים ישראלי",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}

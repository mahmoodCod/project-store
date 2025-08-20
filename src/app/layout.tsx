import type { Metadata } from "next";
import "./globals.css";
import LoadingSpinner from "@/components/LoadingSpinner";

export const metadata: Metadata = {
  title: "فروشگاه من - بهترین محصولات با بهترین قیمت",
  description: "فروشگاه آنلاین با ارائه بهترین محصولات و خدمات به مشتریان عزیز",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-sans">
        <LoadingSpinner />
        {children}
      </body>
    </html>
  );
}

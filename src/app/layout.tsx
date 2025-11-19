import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gridix - Interactive Floor Plans for Real Estate",
  description: "Professional platform for creating and managing interactive real estate floor plans.",
};

// Корневой layout - минимальная обертка
// Основная локализация обрабатывается в [locale]/layout.tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

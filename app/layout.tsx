import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-futura",
});

export const metadata = {
  title: "Tobi Odebo | Product Manager & Software Engineer",
  description:
    "Product Manager and Software Engineer passionate about building impactful digital experiences. Specializing in full-stack development, data analytics, and AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}

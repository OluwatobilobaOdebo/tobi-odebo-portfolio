import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Tobi Odebo | Portfolio",
  description: "Software Engineer • AI • Analytics • Product",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <nav className="w-full border-b p-5 flex gap-6 text-lg">
          <Link href="/" className="font-semibold">
            Home
          </Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <main className="p-5 max-w-5xl mx-auto">{children}</main>
      </body>
    </html>
  );
}

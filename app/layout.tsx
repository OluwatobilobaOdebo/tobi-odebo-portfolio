import "./globals.css";

export const metadata = {
  title: "Tobi Odebo | Product Manager & Software Engineer",
  description: "Product Manager and Software Engineer passionate about building impactful digital experiences. Specializing in full-stack development, data analytics, and AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

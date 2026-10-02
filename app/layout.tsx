import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prem Paudel | Portfolio",
  description:
    "Information Systems student building projects across technology, business, and product.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

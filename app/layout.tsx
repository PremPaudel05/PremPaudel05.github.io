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
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}

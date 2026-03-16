import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Looop Agent Hub",
  description: "Intern dashboard voor Looop Renewables — AI agents beheren en monitoren",
  icons: {
    icon: "/images/looop-emblem.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        {/* MyFonts license tracking (required for Nexa webfont compliance) */}
        <link rel="stylesheet" href="//hello.myfonts.net/count/3cc4b5" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

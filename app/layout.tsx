import { ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./_components/Navigation";

export const metadata: Metadata = {
  title: "Mae @ 18th",
  description: "Mae turning 18",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={`${inter.className} flex min-h-screen flex-col antialiased`}
      >
        <Navigation />
        <div className="flex-1  dark:bg-gray-800">{children}</div>
      </body>
    </html>
  );
}

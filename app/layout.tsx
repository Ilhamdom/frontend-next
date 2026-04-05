import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import '@idds/react/index.css';
import ThemeClient from "@/components/ThemeClient";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "SIREVA NG",
  description: "Sistem Monitoring dan Evaluasi New Generation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeClient />
        {children}
      </body>
    </html>
  );
}

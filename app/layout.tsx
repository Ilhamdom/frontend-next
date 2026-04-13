import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@idds/react/index.css';
import ThemeClient from "@/components/ThemeClient";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SI-REVA Dashboard",
  description: "Sistem Informasi Rencana Evaluasi LAN RI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

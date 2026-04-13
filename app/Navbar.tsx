"use client";


import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const menu = [
  {
    label: "Beranda",
    href: "#beranda",
  },
  {
    label: "Visi & Misi",
    href: "#visi-misi",
  },
  {
    label: "Dasar Hukum",
    href: "#dasar-hukum",
  },
  {
    label: "Informasi",
    href: "#informasi",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 bg-brand-blue-950 h-[72px] flex items-center shadow-lg border-b border-brand-blue-900">
      <nav className="container mx-auto flex items-center justify-between px-6">
        <div className="flex items-center">
          <img src="/images/logo-lan.png" alt="Logo LAN" className="h-10 w-auto mr-3 object-contain" />
          <div className="text-white font-bold text-2xl tracking-wide">SI-REVA</div>
        </div>
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          {menu.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center gap-1.5 text-white font-bold hover:text-brand-gold-400 transition-colors text-base"
            >
              {item.label}
            </a>
          ))}
          <Link
            href="/login"
            className="ml-4 bg-brand-gold-500 text-white font-bold px-5 py-2 rounded-lg shadow-md hover:bg-brand-gold-600 transition-colors text-sm md:text-base border border-brand-gold-600 focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold-500"
          >
            Login
          </Link>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
        {/* Mobile menu */}
        {open && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-40 flex justify-end md:hidden">
            <div className="w-64 bg-brand-blue-950 h-full shadow-lg p-6 flex flex-col gap-4 animate-slide-in-right">
              <button
                className="self-end mb-4 text-white"
                onClick={() => setOpen(false)}
                aria-label="Tutup menu"
              >
                <X className="w-8 h-8" />
              </button>
              {menu.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white font-bold py-2 px-2 rounded hover:bg-brand-gold-500 hover:text-brand-blue-950 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Link
                href="/login"
                className="mt-4 bg-brand-gold-500 text-white font-bold px-5 py-2 rounded-lg shadow-md hover:bg-brand-gold-600 transition-colors text-sm border border-brand-gold-600 focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold-500"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const menu = [
  { label: "Beranda", href: "/user" },
  { label: "Laporan Realisasi", href: "/user/laporan-realisasi" },
  { label: "Visi & Misi", href: "/user/visi-misi" },
];

export default function UserNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 bg-blue-900 h-[64px] flex items-center shadow-lg border-b border-blue-800">
      <nav className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <img src="/images/logo-lan.png" alt="Logo LAN" className="h-8 w-auto mr-2 object-contain" />
          <div className="text-white font-bold text-xl tracking-wide">SI-REVA</div>
        </div>
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white font-semibold hover:text-yellow-400 transition-colors text-base"
            >
              {item.label}
            </Link>
          ))}
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
            <div className="w-64 bg-blue-900 h-full shadow-lg p-6 flex flex-col gap-4 animate-slide-in-right">
              <button
                className="self-end mb-4 text-white"
                onClick={() => setOpen(false)}
                aria-label="Tutup menu"
              >
                <X className="w-8 h-8" />
              </button>
              {menu.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white font-semibold py-2 px-2 rounded hover:bg-yellow-400 hover:text-blue-900 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

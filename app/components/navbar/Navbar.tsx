"use client";

import Link from "next/link";

const menu = [
  { label: "Beranda", href: "#beranda" },
  { label: "Visi & Misi", href: "#visi-misi" },
  { label: "Dasar Hukum", href: "#dasar-hukum" },
  { label: "Informasi", href: "#informasi" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-blue-900 h-18 flex items-center shadow">
      <nav className="container mx-auto flex items-center justify-between px-6">
        <div className="text-white font-bold text-2xl tracking-wide">SI-REVA</div>
        <div className="flex items-center gap-6">
          {menu.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white font-medium hover:text-yellow-400 transition-colors text-base"
            >
              {item.label}
            </a>
          ))}
          <Link
            href="/login"
            className="ml-4 bg-white text-blue-900 font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition-colors text-sm md:text-base"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}

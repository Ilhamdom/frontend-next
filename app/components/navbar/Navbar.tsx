"use client";

import Link from "next/link";
import Image from "next/image";

const menu = [
  { label: "Beranda", href: "#beranda" },
  { label: "Visi & Misi", href: "#visi-misi" },
  { label: "Dasar Hukum", href: "#dasar-hukum" },
  { label: "Informasi", href: "#informasi" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-blue-900 h-18 flex items-center shadow-lg border-b border-blue-800">
      <nav className="container mx-auto flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Image
            src="/logolanwhite.png"
            alt="Logo LAN RI"
            width={72}
            height={72}
            className="object-contain drop-shadow-md"
            priority
          />
          <div className="flex flex-col leading-tight">
            <span className="text-white font-extrabold text-xl tracking-widest">SIREVA-NG</span>
            <span className="text-yellow-400 text-[10px] font-semibold tracking-widest uppercase">Sistem Informasi Perencanaan dan Evaluasi New Generation</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          {menu.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-blue-100 font-medium hover:text-yellow-400 transition-colors text-sm relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
          <Link
            href="/login"
            className="ml-2 bg-yellow-400 text-blue-900 font-bold px-5 py-2 rounded-lg shadow hover:bg-yellow-300 transition-colors text-sm"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}

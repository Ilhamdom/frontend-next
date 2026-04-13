"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface UserSidebarProps {
  isOpen: boolean;
}

const menuItems = [
  {
    label: "Dashboard",
    href: "/user/dashboard",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="opacity-80 group-hover:opacity-100 transition-opacity">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    label: "Visi, Misi & Tujuan",
    href: "/user/visi-misi-tujuan",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="opacity-80 group-hover:opacity-100 transition-opacity">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
  },
  {
    label: "Sasaran Strategis",
    href: "/user/sasaran-strategis",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="opacity-80 group-hover:opacity-100 transition-opacity">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    ),
  },
  {
    label: "Sasaran Program",
    href: "/user/sasaran-program",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="opacity-80 group-hover:opacity-100 transition-opacity">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    label: "Sasaran Kegiatan",
    href: "/user/sasaran-kegiatan",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="opacity-80 group-hover:opacity-100 transition-opacity">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    label: "Pemantauan Kinerja",
    href: "/user/pemantauan-kinerja",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="opacity-80 group-hover:opacity-100 transition-opacity">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
  {
    label: "Cascading",
    href: "/user/cascading",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="opacity-80 group-hover:opacity-100 transition-opacity">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    label: "Laporan Realisasi",
    href: "/user/laporan-realisasi",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="opacity-80 group-hover:opacity-100 transition-opacity">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v1a3 3 0 11-6 0v-1m6 0v-1a3 3 0 11-6 0v1m6 0h3.5A5.5 5.5 0 0018 11.5v0A5.5 5.5 0 0012.5 6H9m0 11V6m0 0V5a2 2 0 012-2h1a2 2 0 012 2v1" />
      </svg>
    ),
  },
];

const UserSidebar: React.FC<UserSidebarProps> = ({ isOpen }) =>{
  const pathname = usePathname();
  return (
    <aside
      className={`relative shrink-0 overflow-hidden transition-all duration-300 ease-in-out bg-[#0A2540]
        ${isOpen ? 'w-[248px]' : 'w-[80px]'}
      `}
      aria-hidden={false}
    >
      <div className="h-full w-[248px] text-white flex flex-col justify-between py-6 px-4">
        <div className="flex flex-col h-full">
          {/* Branding */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 flex items-center justify-center mb-1">
              <img src="/images/logo-lan.png" alt="Logo LAN" className="w-full h-full object-contain drop-shadow-md" />
            </div>
            <div className="text-2xl font-extrabold text-white tracking-wide">LAN RI</div>
            <div className="text-xs text-yellow-400 font-semibold mt-1">SI-REVA 2026</div>
          </div>
          <div className="text-xs text-gray-400 font-bold mb-2 px-2 tracking-widest">MENU UTAMA</div>
          <nav className="flex flex-col gap-1">
            {menuItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm font-medium ${active ? "bg-blue-600 text-white" : "text-gray-200 hover:bg-blue-900 hover:text-white"}`}
                >
                  <span className="w-5 h-5 flex items-center justify-center text-blue-200">{item.icon}</span>
                  {item.label}
                </Link>
              );
            })}
          </nav>
          {/* Profile Footer SE */}
          <div className="mt-8 border-t border-white/10 pt-6 flex flex-col items-center justify-center pb-4">
            <button className="bg-[#00875A] rounded-full w-14 h-14 flex items-center justify-center text-white font-bold text-xl mb-3 hover:bg-[#006644] transition-colors shadow-md border-2 border-white/20">
              SE
            </button>
            <div className="text-sm font-bold text-white tracking-wide">Staf Evaluator</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
export default UserSidebar;

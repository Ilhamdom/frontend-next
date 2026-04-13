"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import {
  IconDashboard,
  IconTargetArrow,
  IconFocus2,
  IconChecks,
  IconListDetails,
  IconChartBar,
  IconSitemap,
  IconLogout
} from "@tabler/icons-react";

type IconComponent = React.ComponentType<{ size?: number; stroke?: number }>;

interface MenuItem {
  label: string;
  href: string;
  icon: IconComponent;
}

interface SidebarProps {
  isOpen: boolean;
}

const menuItems: MenuItem[] = [
  {
    label: "Dashboard",
    href: "/[slug]/dashboard",
    icon: IconDashboard as IconComponent,
  },
  {
    label: "Visi, Misi & Tujuan",
    href: "/[slug]/visi-misi-tujuan",
    icon: IconTargetArrow as IconComponent,
  },
  {
    label: "Sasaran Strategis",
    href: "/[slug]/sasaran-strategis",
    icon: IconFocus2 as IconComponent,
  },
  {
    label: "Sasaran Program",
    href: "/[slug]/sasaran-program",
    icon: IconChecks as IconComponent,
  },
  {
    label: "Sasaran Kegiatan",
    href: "/[slug]/sasaran-kegiatan",
    icon: IconListDetails as IconComponent,
  },
  {
    label: "Pemantauan Kinerja",
    href: "/[slug]/pemantauan-kinerja",
    icon: IconChartBar as IconComponent,
  },
  {
    label: "Cascading",
    href: "/[slug]/cascading",
    icon: IconSitemap as IconComponent,
  },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const pathname = usePathname();
  const params = useParams();
  const slug = params.slug as string;
  
  return (
    <aside
      className={`sticky top-0 h-screen shrink-0 overflow-y-auto overflow-x-hidden transition-all duration-300 ease-in-out bg-[#0a1834] border-r border-blue-900/50 custom-scrollbar
        ${isOpen ? 'w-[260px] opacity-100 translate-x-0' : 'w-0 opacity-0 -translate-x-full'}
      `}
      aria-hidden={!isOpen}
    >
      <div className="w-[260px] min-h-full flex flex-col py-6 px-4">
        {/* Branding */}
        <div className="flex flex-col items-center mb-8 shrink-0">
          <div className="bg-gradient-to-br from-yellow-400 to-amber-600 rounded-xl w-12 h-12 flex items-center justify-center mb-3 shadow-lg shadow-yellow-500/20">
            <span className="text-blue-950 font-extrabold text-2xl">L</span>
          </div>
          <div className="text-xl font-extrabold text-white tracking-wide">LAN RI</div>
          <div className="text-[10px] text-yellow-400 font-bold mt-1 tracking-widest bg-yellow-400/10 px-2.5 py-0.5 rounded-full border border-yellow-400/20">SI-REVA 2026</div>
        </div>
        
        {/* Navigation */}
        <div className="flex-1 flex flex-col">
          <div className="text-[10px] text-blue-300/60 font-bold mb-3 px-2 tracking-widest uppercase">Menu Utama</div>
          <nav className="flex flex-col gap-1.5">
            {menuItems.map((item) => {
              const active = pathname === `/${slug}${item.href.slice(7)}` || pathname?.startsWith(`/${slug}${item.href.slice(7)}/`);
              return (
                <Link
                  key={item.href}
                  href={`/${slug}${item.href.slice(7)}`}
                  className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 text-sm font-medium ${
                    active 
                      ? "bg-blue-600 text-white shadow-md shadow-blue-900/20" 
                      : "text-blue-100/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className={`flex items-center justify-center transition-colors duration-200 ${
                    active ? "text-white" : "text-blue-300/70 group-hover:text-blue-200"
                  }`}>
                    <item.icon size={20} stroke={1.5} />
                  </span>
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Logout */}
        <div className="mt-8 shrink-0 pt-4 border-t border-white/5">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-500/10 text-red-400 font-semibold text-sm hover:bg-red-500 hover:text-white transition-all duration-200 group">
            <IconLogout size={18} stroke={2} className="transition-transform group-hover:-translate-x-1" />
            Logout Sistem
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;


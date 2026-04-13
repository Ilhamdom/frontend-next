"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useParams } from "next/navigation";
import { useUserStore } from "@/store/userStore";
import {
  IconDashboard,
  IconClipboardList,
  IconChartBar,
  IconChevronDown,
  IconChecklist,
  IconFileText,
  IconFlag,
  IconTargetArrow,
  IconFocus2,
  IconListDetails,
  IconActivity,
  IconSitemap,
  IconDatabase,
  IconUser,
  IconLogout
} from "@tabler/icons-react";

type IconComponent = React.ComponentType<{ size?: number; stroke?: number }>;

interface MenuChildItem {
  label: string;
  href: string;
  icon: IconComponent;
}

interface MenuItem {
  label: string;
  href?: string;
  children?: MenuChildItem[];
  icon: IconComponent;
  optional?: boolean;
}

interface SidebarProps {
  isOpen: boolean;
  variant?: "admin" | "user";
  showLaporan?: boolean;
}

const adminMenuItems: MenuItem[] = [
  {
    label: "Dashboard",
    href: "/[slug]/dashboard",
    icon: IconDashboard as IconComponent,
  },
  {
    label: "Perencanaan Kinerja",
    icon: IconClipboardList as IconComponent,
    children: [
      { label: "Visi, Misi, dan Tujuan", href: "/[slug]/visi-misi-tujuan", icon: IconFlag as IconComponent },
      { label: "Sasaran Strategis", href: "/[slug]/sasaran-strategis", icon: IconTargetArrow as IconComponent },
      { label: "Sasaran Program", href: "/[slug]/sasaran-program", icon: IconFocus2 as IconComponent },
      { label: "Sasaran Kegiatan", href: "/[slug]/sasaran-kegiatan", icon: IconListDetails as IconComponent },
    ],
  },
  {
    label: "Pemantauan Kinerja",
    icon: IconChartBar as IconComponent,
    children: [
      
      { label: "Cascading", href: "/[slug]/cascading", icon: IconSitemap as IconComponent },
    ],
  },
  {
    label: "Data Master",
    icon: IconDatabase as IconComponent,
    children: [
      { label: "Master Unit Kerja", href: "/[slug]/master-unit-kerja", icon: IconSitemap as IconComponent },
      { label: "Master User", href: "/[slug]/master-user", icon: IconUser as IconComponent },
    ],
  },
];

const userMenuItems: MenuItem[] = [
  {
    label: "Dashboard",
    href: "/[slug]/dashboard",
    icon: IconDashboard as IconComponent,
  },
  {
    label: "Pemantauan Kinerja",
    icon: IconChartBar as IconComponent,
    children: [
      { label: "Sasaran Strategis", href: "/[slug]/sasaran-strategis", icon: IconActivity as IconComponent },
      { label: "Cascading", href: "/[slug]/cascading", icon: IconSitemap as IconComponent },
    ],
  },
  {
    label: "Rencana Aksi",
    href: "/[slug]/rencana-aksi",
    icon: IconChecklist as IconComponent,
  },
  {
    label: "Laporan",
    href: "/[slug]/laporan",
    icon: IconFileText as IconComponent,
    optional: true,
  },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, variant, showLaporan = true }) => {
  const pathname = usePathname();
  const params = useParams();
  const slug = params.slug as string;
  const user = useUserStore((state) => state.user);

  // Tentukan variant dari role zustand, kalau tidak ada pakai prop variant, default admin
  const resolvedVariant: "admin" | "user" =
    variant ?? (user?.role && user.role.toLowerCase() !== "admin" ? "user" : "admin");

  const baseMenuItems = resolvedVariant === "user" ? userMenuItems : adminMenuItems;
  const menuItems = baseMenuItems.filter((item) => !(item.optional && !showLaporan));
  const menuTitle = resolvedVariant === "user" ? "Menu User" : "Menu Utama";

  const resolveHref = (href: string) => `/${slug}${href.slice(7)}`;

  const isHrefActive = (href: string) => {
    const resolved = resolveHref(href);
    return pathname === resolved || pathname?.startsWith(`${resolved}/`);
  };
  
  return (
    <aside
      className={`sticky top-0 h-screen shrink-0 overflow-y-auto overflow-x-hidden transition-all duration-300 ease-in-out bg-blue-900 border-r border-blue-900/50 custom-scrollbar
        ${isOpen ? 'w-65 opacity-100 translate-x-0' : 'w-0 opacity-0 -translate-x-full'}
      `}
      aria-hidden={!isOpen}
    >
      <div className="w-65 min-h-full flex flex-col py-6 px-4">
        {/* Branding */}
        <div className="flex flex-col items-center mb-8 shrink-0">
          <Image
            src="/logolanwhite.png"
            alt="Logo LAN RI"
            width={120}
            height={120}
            className="object-contain mb-3"
            priority
          />
          
          <div className="text-[15px] text-yellow-400 font-bold mt-1 tracking-widest bg-yellow-400/10 px-2.5 py-0.5 rounded-full border border-yellow-400/20">SI-REVA NG</div>
        </div>
        
        {/* Navigation */}
        <div className="flex-1 flex flex-col">
          <div className="text-[10px] text-blue-300/60 font-bold mb-3 px-2 tracking-widest uppercase">{menuTitle}</div>
          <nav className="flex flex-col gap-1.5">
            {menuItems.map((item) => {
              const parentActive = item.href ? isHrefActive(item.href) : !!item.children?.some((child) => isHrefActive(child.href));

              if (item.href) {
                return (
                  <Link
                    key={item.label}
                    href={resolveHref(item.href)}
                    className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 text-sm font-medium ${
                      parentActive
                        ? "bg-blue-600 text-white shadow-md shadow-blue-900/20"
                        : "text-blue-100/70 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span className={`flex items-center justify-center transition-colors duration-200 ${
                      parentActive ? "text-white" : "text-blue-300/70 group-hover:text-blue-200"
                    }`}>
                      <item.icon size={20} stroke={1.5} />
                    </span>
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.label} className="rounded-xl overflow-hidden border border-white/5 bg-white/2">
                  <div
                    className={`flex items-center justify-between gap-3 px-3 py-2.5 text-sm font-medium ${
                      parentActive ? "text-white bg-blue-700/50" : "text-blue-100/80"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className={`${parentActive ? "text-white" : "text-blue-300/80"}`}>
                        <item.icon size={20} stroke={1.5} />
                      </span>
                      <span className="truncate">{item.label}</span>
                    </div>
                    <IconChevronDown size={16} stroke={2} className={`${parentActive ? "text-blue-100" : "text-blue-300/70"}`} />
                  </div>

                  <div className="pb-2 px-2">
                    {item.children?.map((child) => {
                      const childActive = isHrefActive(child.href);
                      return (
                        <Link
                          key={child.href}
                          href={resolveHref(child.href)}
                          className={`group flex items-center gap-2 pl-6 pr-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                            childActive
                              ? "bg-blue-600 text-white shadow-sm shadow-blue-900/20"
                              : "text-blue-100/70 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          <span className={`flex items-center justify-center ${childActive ? "text-white" : "text-blue-300/70 group-hover:text-blue-200"}`}>
                            <child.icon size={16} stroke={1.8} />
                          </span>
                          <span className="leading-snug">{child.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Logout */}
        <div className="mt-8 shrink-0 pt-4 border-t border-white/5">
          <Link href="/login" className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-500/10 text-red-400 font-semibold text-sm hover:bg-red-500 hover:text-white transition-all duration-200 group">
            <IconLogout size={18} stroke={2} className="transition-transform group-hover:-translate-x-1" />
            Logout Sistem
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;


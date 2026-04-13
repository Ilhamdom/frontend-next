"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconDashboard, IconTarget, IconChartBar, IconListCheck, IconChartPie, IconDeviceAnalytics, IconNetwork, IconReport } from "@tabler/icons-react";

const menuItems = [
  {
    label: "Dashboard",
    href: "/user/dashboard",
    icon: <IconDashboard size={20} stroke={1.5} />,
  },
  {
    label: "Visi, Misi & Tujuan",
    href: "/user/visi-misi",
    icon: <IconTarget size={20} stroke={1.5} />,
  },
  {
    label: "Sasaran Strategis",
    href: "/user/sasaran-strategis",
    icon: <IconDeviceAnalytics size={20} stroke={1.5} />,
  },
  {
    label: "Sasaran Program",
    href: "/user/sasaran-program",
    icon: <IconListCheck size={20} stroke={1.5} />,
  },
  {
    label: "Sasaran Kegiatan",
    href: "/user/sasaran-kegiatan",
    icon: <IconChartPie size={20} stroke={1.5} />,
  },
  {
    label: "Pemantauan Kinerja",
    href: "/user/pemantauan-kinerja",
    icon: <IconChartBar size={20} stroke={1.5} />,
  },
  {
    label: "Cascading",
    href: "/user/cascading",
    icon: <IconNetwork size={20} stroke={1.5} />,
  },
  {
    label: "Laporan Realisasi",
    href: "/user/laporan-realisasi",
    icon: <IconReport size={20} stroke={1.5} />,
  },
];

export default function UserSidebar({ isOpen = true }: { isOpen?: boolean }) {
  const pathname = usePathname();
  return (
    <aside className={`h-full min-h-screen transition-all duration-300 ease-in-out bg-[#0a1834] flex flex-col justify-between py-6 shrink-0 overflow-hidden ${isOpen ? 'w-[220px] px-4' : 'w-[80px] px-2'}`}>
      <nav className="flex-1">
        {/* Branding/Logo for User Sidebar */}
        <div className={`flex flex-col items-center pb-6 mb-6 border-b border-blue-900/50 ${isOpen ? '' : 'px-0'}`}>
          <div className="w-10 h-10 flex items-center justify-center mb-1">
            <img src="/images/logo-lan.png" alt="Logo LAN" className="w-full h-full object-contain drop-shadow-md" />
          </div>
          {isOpen && (
            <>
              <div className="text-xl font-bold text-white tracking-wide">LAN RI</div>
              <div className="text-[10px] font-semibold text-yellow-400 mt-1 tracking-widest whitespace-nowrap">SI-REVA USER</div>
            </>
          )}
        </div>
        
        <ul className="flex flex-col gap-2">
          {menuItems.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 py-2 rounded-lg font-semibold text-sm transition-colors ${isOpen ? 'px-4' : 'px-0 justify-center'} ${active ? "bg-white text-blue-900 shadow" : "text-gray-200 hover:bg-blue-900/30"}`}
                  title={!isOpen ? item.label : undefined}
                >
                  <span className="w-5 h-5 flex items-center justify-center shrink-0">{item.icon}</span>
                  {isOpen && <span className="whitespace-nowrap">{item.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="mt-8 flex flex-col items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center text-white font-bold text-sm">SE</div>
        {isOpen && <div className="text-xs text-gray-200 font-semibold whitespace-nowrap">Staf Evaluator</div>}
      </div>
    </aside>
  );
}
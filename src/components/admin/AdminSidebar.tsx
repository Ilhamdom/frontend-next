"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconDashboard, IconTarget, IconChartBar, IconListCheck, IconChartPie, IconDeviceAnalytics, IconNetwork, IconReport } from "@tabler/icons-react";

interface AdminSidebarProps {
  isOpen: boolean;
}

const menuItems = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: <IconDashboard size={22} className="mr-3 opacity-80 group-hover:opacity-100 transition-opacity" stroke={1.5} />,
  },
  {
    label: "Visi, Misi & Tujuan",
    href: "/admin/visi-misi",
    icon: <IconTarget size={22} className="mr-3 opacity-80 group-hover:opacity-100 transition-opacity" stroke={1.5} />,
  },
  {
    label: "Sasaran Strategis",
    href: "/admin/sasaran-strategis",
    icon: <IconDeviceAnalytics size={22} className="mr-3 opacity-80 group-hover:opacity-100 transition-opacity" stroke={1.5} />,
  },
  {
    label: "Sasaran Program",
    href: "/admin/sasaran-program",
    icon: <IconListCheck size={22} className="mr-3 opacity-80 group-hover:opacity-100 transition-opacity" stroke={1.5} />,
  },
  {
    label: "Sasaran Kegiatan",
    href: "/admin/sasaran-kegiatan",
    icon: <IconChartPie size={22} className="mr-3 opacity-80 group-hover:opacity-100 transition-opacity" stroke={1.5} />,
  },
  {
    label: "Laporan Realisasi",
    href: "/admin/laporan-realisasi",
    icon: <IconReport size={22} className="mr-3 opacity-80 group-hover:opacity-100 transition-opacity" stroke={1.5} />,
  },
  {
    label: "Pemantauan Kinerja",
    href: "/admin/pemantauan-kinerja",
    icon: <IconChartBar size={22} className="mr-3 opacity-80 group-hover:opacity-100 transition-opacity" stroke={1.5} />,
  },
  {
    label: "Cascading",
    href: "/admin/cascading",
    icon: <IconNetwork size={22} className="mr-3 opacity-80 group-hover:opacity-100 transition-opacity" stroke={1.5} />,
  },
];

const AdminSidebar: React.FC<AdminSidebarProps> = ({ isOpen }) => {
  const pathname = usePathname();
  return (
    <aside
      className={`relative shrink-0 overflow-hidden transition-all duration-300 ease-in-out bg-brand-blue-950
        ${isOpen ? 'w-[248px]' : 'w-[80px]'}
      `}
      aria-hidden={false}
    >
      <div className={`h-full min-h-screen text-white flex flex-col justify-between ${isOpen ? 'w-[248px]' : 'w-[80px]'}`}>
        <div className="flex flex-col h-full">
          {/* Branding */}
          <div className={`flex flex-col items-center py-6 border-b border-brand-blue-900/50 ${isOpen ? '' : 'px-0'}`}>
            <div className={`flex items-center justify-center mb-1 ${isOpen ? 'w-16 h-16' : 'w-12 h-12'}`}>
              <img src="/images/logo-lan.png" alt="Logo LAN" className="w-full h-full object-contain drop-shadow-md" />
            </div>
            {isOpen && (
              <>
                <div className="text-2xl font-bold text-white tracking-wide mt-1">LAN RI</div>
                <div className="text-[10px] font-bold text-brand-gold-400 mt-1 tracking-widest whitespace-nowrap">SI-REVA 2026</div>
              </>
            )}
          </div>
          {/* Menu Section */}
          <div className="px-3 mt-6 flex-1">
            {isOpen && <div className="text-[10px] text-brand-blue-200 font-bold mb-3 tracking-widest mt-2 px-1">MENU UTAMA</div>}
            <nav className="flex flex-col gap-1">
              {menuItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    title={!isOpen ? item.label : undefined}
                    className={`group flex items-center ${isOpen ? 'px-3 justify-start' : 'px-0 justify-center'} py-2.5 rounded-lg font-bold text-sm transition-all ${active ? "bg-brand-blue-800 text-white shadow-md" : "text-brand-blue-100 hover:bg-brand-blue-900 hover:text-white"}`}
                  >
                    <span className={`flex items-center justify-center shrink-0 ${isOpen ? 'mr-3' : ''}`}>{item.icon}</span>
                    {isOpen && <span className="whitespace-nowrap">{item.label}</span>}
                  </Link>
                );
              })}
            </nav>
          </div>
          {/* Logout dipindahkan ke Topbar */}
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;

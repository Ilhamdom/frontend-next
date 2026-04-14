
import LayoutShell from "@/components/LayoutShell";
import ExecutiveInfoCards from "../../../src/components/ExecutiveInfoCards";
import DashboardKinerjaAnggaran from "../../../src/components/dashboard/DashboardKinerjaAnggaran";
import SummaryCardsRow from "../../../src/components/SummaryCardsRow";
import UnifiedOverviewCard from "../../../src/components/dashboard/UnifiedOverviewCard";
import PerformanceTrendCard from "../../../src/components/PerformanceTrendCard";
import RecentLaporanCard from "../../../src/components/dashboard/RecentLaporanCard";

export default function UserDashboardPage() {
  return (
    <LayoutShell>
      <div className="flex flex-col w-full">
          {/* Header */}
          <div className="max-w-screen-xl mx-auto mb-10">
            <h1 className="text-3xl font-extrabold text-blue-900 tracking-tight">Dashboard Unit Kerja</h1>
            <p className="text-gray-500 text-base mt-2">Ringkasan integrasi perencanaan dan capaian kinerja LAN RI Tahun 2026.</p>
          </div>
          <div className="max-w-screen-xl mx-auto">
            {/* Info Cards Row */}
            <ExecutiveInfoCards role="user" />
            {/* Summary Cards Row */}
            <SummaryCardsRow role="user" />
            {/* Chart + Activity Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
              <div className="lg:col-span-2">
                <PerformanceTrendCard role="user" />
              </div>
              <div>
                <RecentLaporanCard role="user" />
              </div>
            </div>
            {/* Master Overview Section */}
            <UnifiedOverviewCard role="user" />

            {/* Fitur Anggaran (Dipindah ke bawah) */}
            <div className="mt-12 w-full">
               <DashboardKinerjaAnggaran role="user" />
            </div>
          </div>
      </div>
    </LayoutShell>
  );
}

import React from "react";
import DashboardKinerjaAnggaran from "../../../src/components/dashboard/DashboardKinerjaAnggaran";
import ExecutiveInfoCards from "../../../src/components/ExecutiveInfoCards";
import SummaryCardsRow from "../../../src/components/SummaryCardsRow";
import UnifiedOverviewCard from "../../../src/components/dashboard/UnifiedOverviewCard";
import PerformanceTrendCard from "../../../src/components/PerformanceTrendCard";
import RecentLaporanCard from "../../../src/components/dashboard/RecentLaporanCard";


export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col w-full">
        {/* Header Eksekutif */}
        <div className="max-w-screen-xl mb-10 text-left px-8 md:px-16">
          <h1 className="text-3xl font-extrabold text-blue-900 tracking-tight">Dashboard Eksekutif</h1>
          <p className="text-gray-500 text-base mt-2">Ringkasan integrasi perencanaan dan capaian kinerja LAN RI Tahun 2026.</p>
        </div>
        <div className="max-w-screen-xl mx-auto">
          {/* Info Cards Row */}
          <ExecutiveInfoCards role="admin" />
          {/* Summary Cards Row */}
          <SummaryCardsRow role="admin" />
          {/* Chart + Activity Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            <div className="lg:col-span-2">
              <PerformanceTrendCard role="admin" />
            </div>
            <div>
              <RecentLaporanCard role="admin" />
            </div>
          </div>
          {/* Master Overview Section */}
          <UnifiedOverviewCard role="admin" />

          {/* Fitur Anggaran (Dipindah ke bawah) */}
          <div className="mt-12 w-full">
             <DashboardKinerjaAnggaran role="admin" />
          </div>
        </div>
    </div>
  );
}

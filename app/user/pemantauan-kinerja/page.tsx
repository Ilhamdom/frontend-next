"use client";
import PageHeader from "@/components/PageHeader";
import InfoCard from "@/components/InfoCard";

export default function UserPemantauanKinerjaPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader
        title="Pemantauan Kinerja"
        description="Dasbor analitik tren capaian kinerja dan peringatan dini (early warning)."
      />
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <InfoCard title="Kinerja Unit" accent="green">
          <div className="text-2xl font-bold text-emerald-700 mb-1">92.4%</div>
          <div className="text-xs text-emerald-700 font-semibold">Capaian Kinerja Tahun 2026</div>
        </InfoCard>
        <InfoCard title="Serapan Anggaran" accent="blue">
          <div className="text-2xl font-bold text-blue-700 mb-1">71.0%</div>
          <div className="text-xs text-gray-500 font-medium">Per 25 Maret 2026</div>
        </InfoCard>
        <InfoCard title="Status Aman" accent="green">
          <div className="bg-emerald-50 rounded-xl p-4 flex flex-col gap-1">
            <div className="text-xs font-bold text-emerald-700 mb-1">0 Indikator</div>
            <div className="text-sm text-emerald-900 font-semibold">Tidak ada deviasi kritis</div>
          </div>
        </InfoCard>
      </div>
      {/* Chart Card */}
      <InfoCard title="Tren Capaian Kinerja vs Target" accent="blue">
        <div className="w-full max-w-2xl mx-auto">
          {/* Chart batang statis */}
          <div className="flex items-end gap-4 h-40 mt-4 mb-2">
            {/* Target (abu) dan Realisasi (biru) */}
            {[72, 80, 85, 90, 92, 95].map((target, i) => (
              <div key={i} className="flex flex-col items-center w-8">
                {/* Target */}
                <div className="w-5 rounded-t bg-gray-200" style={{ height: `${target}%`, minHeight: 10 }} />
                {/* Realisasi */}
                <div className="w-5 mt-1 rounded-t bg-blue-500" style={{ height: `${[68, 78, 82, 88, 91, 93][i]}%`, minHeight: 10 }} />
                <div className="text-xs text-gray-400 mt-1">{["Jan","Feb","Mar","Apr","Mei","Jun"][i]}</div>
              </div>
            ))}
          </div>
          {/* Legenda */}
          <div className="flex gap-4 mt-2 text-xs text-gray-500">
            <div className="flex items-center gap-1"><span className="inline-block w-3 h-3 bg-gray-200 rounded-sm" /> Target</div>
            <div className="flex items-center gap-1"><span className="inline-block w-3 h-3 bg-blue-500 rounded-sm" /> Realisasi</div>
          </div>
        </div>
      </InfoCard>
    </div>
  );
}

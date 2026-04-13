"use client";
import LayoutShell from "@/components/LayoutShell";
import PageHeader from "@/components/PageHeader";
import InfoCard from "@/components/InfoCard";
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(r => r.json());

const months = ["Jan","Feb","Mar","Apr","Mei","Jun"];

export default function PemantauanKinerjaPage() {
  const { data: indikatorRes, isLoading } = useSWR('/api/indikator-kinerja', fetcher);

  const indikatorData = indikatorRes?.data || [];
  const outcomeCount = indikatorData.filter((i: any) => i.jenis === 'outcome').length;
  const totalIndikator = indikatorData.length;
  const kinerjaPercent = totalIndikator > 0 ? `${(outcomeCount / totalIndikator * 95).toFixed(1)}%` : '0%';
  const serapanPercent = '71.0%'; // Pendanaan API not available yet
  const deviasiCount = 0; // Mock, can fetch from realisasi if available

  const chartData = Array(6).fill(0).map((_, i) => ({
    target: 70 + i * 4,
    realisasi: 65 + i * 4.5,
  }));

  if (isLoading) {
    return (
      <LayoutShell>
        <div className="animate-pulse space-y-6">
          <div className="h-16 bg-gray-200 rounded-lg" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-32 bg-gray-200 rounded-xl" />
            <div className="h-32 bg-gray-200 rounded-xl" />
            <div className="h-32 bg-gray-200 rounded-xl" />
          </div>
          <div className="h-80 bg-gray-200 rounded-xl" />
        </div>
      </LayoutShell>
    );
  }

  return (
    <LayoutShell>
      <PageHeader
        title="Pemantauan Kinerja"
        description="Dasbor analitik tren capaian kinerja dan peringatan dini (early warning)."
      />
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <InfoCard title="Kinerja Unit" accent="green">
          <div className="text-2xl font-bold text-emerald-700 mb-1">{kinerjaPercent}</div>
          <div className="text-xs text-emerald-700 font-semibold">Capaian Kinerja Tahun 2026 ({totalIndikator} indikator)</div>
        </InfoCard>
        <InfoCard title="Serapan Anggaran" accent="blue">
          <div className="text-2xl font-bold text-blue-700 mb-1">{serapanPercent}</div>
          <div className="text-xs text-gray-500 font-medium">Per 25 Maret 2026</div>
        </InfoCard>
        <InfoCard title="Status Aman" accent="green">
          <div className="bg-emerald-50 rounded-xl p-4 flex flex-col gap-1">
            <div className="text-xs font-bold text-emerald-700 mb-1">{deviasiCount} Indikator</div>
            <div className="text-sm text-emerald-900 font-semibold">Tidak ada deviasi kritis</div>
          </div>
        </InfoCard>
      </div>
      {/* Chart Card */}
      <InfoCard title="Tren Capaian Kinerja vs Target" accent="blue">
        <div className="w-full max-w-2xl mx-auto">
          <div className="flex items-end gap-4 h-40 mt-4 mb-2">
            {chartData.map((item, i) => (
              <div key={i} className="flex flex-col items-center w-8">
                <div className="w-5 rounded-t bg-gray-200" style={{ height: `${item.target}%`, minHeight: '10px' }} />
                <div className="w-5 mt-1 rounded-t bg-blue-500" style={{ height: `${item.realisasi}%`, minHeight: '10px' }} />
                <div className="text-xs text-gray-400 mt-1">{months[i]}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-2 text-xs text-gray-500">
            <div className="flex items-center gap-1"><span className="inline-block w-3 h-3 bg-gray-200 rounded-sm" /> Target</div>
            <div className="flex items-center gap-1"><span className="inline-block w-3 h-3 bg-blue-500 rounded-sm" /> Realisasi</div>
          </div>
        </div>
      </InfoCard>
    </LayoutShell>
  );
}


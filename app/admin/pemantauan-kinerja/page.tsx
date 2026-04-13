import InfoCard from "../../components/InfoCard";
import React from "react";

export default function AdminPemantauanKinerjaPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Ringkasan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <InfoCard title="Kinerja Instansi" accent="green">
          <div className="text-2xl font-bold text-green-700 mb-1">88.5%</div>
          <div className="text-xs text-green-700">Capaian Kinerja</div>
        </InfoCard>
        <InfoCard title="Serapan Anggaran" accent="blue">
          <div className="text-2xl font-bold text-blue-800 mb-1">65.2%</div>
          <div className="text-xs text-gray-500">Per 25 Maret 2026</div>
        </InfoCard>
        <InfoCard title="Perlu Atensi (Warning)" accent="red">
          <div className="text-2xl font-bold text-pink-700 mb-1">2</div>
          <div className="text-xs text-pink-700">Indikator Warning</div>
        </InfoCard>
      </div>
      {/* Grid 2 kolom bawah */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Chart batang sederhana */}
        <InfoCard title="Tren Capaian Kinerja vs Target" accent="blue">
          <div className="flex items-end gap-2 h-32 w-full mt-4">
            {/* Target */}
            {[80, 85, 90, 92, 88, 95].map((target, i) => (
              <div key={i} className="flex flex-col items-center w-8">
                <div className="bg-blue-200 w-4 rounded-t-full" style={{ height: `${target * 0.8}px` }} />
                <span className="text-xs text-gray-400 mt-1">{["Jan","Feb","Mar","Apr","Mei","Jun"][i]}</span>
              </div>
            ))}
            {/* Realisasi */}
            <div className="absolute flex items-end gap-2 h-32 w-full mt-4 pointer-events-none">
              {[75, 80, 85, 90, 85, 88].map((real, i) => (
                <div key={i} className="flex flex-col items-center w-8">
                  <div className="bg-blue-700 w-4 rounded-t-full opacity-80" style={{ height: `${real * 0.8}px` }} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <span className="flex items-center gap-1 text-xs"><span className="inline-block w-3 h-3 bg-blue-200 rounded-full" /> Target</span>
            <span className="flex items-center gap-1 text-xs"><span className="inline-block w-3 h-3 bg-blue-700 rounded-full" /> Realisasi</span>
          </div>
        </InfoCard>
        {/* Indikator Kritis */}
        <InfoCard title="Indikator Kritis" accent="red">
          <ul className="space-y-2">
            <li className="bg-pink-50 border-l-4 border-pink-400 rounded p-3">
              <div className="font-semibold text-pink-700">Indikator 1</div>
              <div className="text-xs text-gray-500">Unit: Pusbangkom | Deviasi: -20%</div>
            </li>
            <li className="bg-pink-50 border-l-4 border-pink-400 rounded p-3">
              <div className="font-semibold text-pink-700">Indikator 2</div>
              <div className="text-xs text-gray-500">Unit: Biro Perencanaan | Deviasi: -15%</div>
            </li>
          </ul>
        </InfoCard>
      </div>
    </div>
  );
}

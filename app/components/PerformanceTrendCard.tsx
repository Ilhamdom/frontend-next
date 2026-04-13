"use client";
import React, { useState } from "react";

interface PerformanceTrendCardProps {
  role: "admin" | "user";
}

const chartData = [
  { label: "Triwulan I", target: 90, real: 85 },
  { label: "Triwulan II", target: 88, real: 86 },
  { label: "Triwulan III", target: 92, real: 80 },
  { label: "Triwulan IV", target: 96, real: 93 },
];

export default function PerformanceTrendCard({ role }: PerformanceTrendCardProps) {
  const [year, setYear] = useState(2026);
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col min-h-[320px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="font-bold text-blue-900 text-base">Tren Capaian Kinerja Tahunan</div>
          <div className="text-xs text-gray-500">Perbandingan Target vs Realisasi (Persentase)</div>
        </div>
        <div className="flex gap-2">
          <button
            className={`px-3 py-1 rounded-lg text-xs font-semibold border ${year === 2025 ? "bg-blue-50 text-blue-800 border-blue-200" : "bg-white text-gray-400 border-gray-200"}`}
            onClick={() => setYear(2025)}
          >
            2025
          </button>
          <button
            className={`px-3 py-1 rounded-lg text-xs font-semibold border ${year === 2026 ? "bg-blue-700 text-white border-blue-700" : "bg-white text-gray-400 border-gray-200"}`}
            onClick={() => setYear(2026)}
          >
            2026
          </button>
        </div>
      </div>
      {/* Chart */}
      <div className="flex flex-col justify-end h-48 w-full relative">
        {/* Grid lines */}
        {[100, 80, 60, 40, 20, 0].map((v) => (
          <div key={v} className="absolute left-0 right-0" style={{ bottom: `${v * 0.44}px` }}>
            <div className="border-t border-dashed border-gray-200 w-full" />
          </div>
        ))}
        <div className="flex h-full items-end gap-8 z-10 relative">
          {chartData.map((d, i) => (
            <div key={d.label} className="flex flex-col items-center w-16">
              {/* Target */}
              <div className="flex flex-col-reverse items-center h-40 justify-end">
                <div
                  className="w-6 rounded-t bg-gray-200"
                  style={{ height: `${d.target * 1.6}px`, minHeight: 10 }}
                  title={`Target: ${d.target}%`}
                />
                <div
                  className="w-6 mt-1 rounded-t bg-blue-500"
                  style={{ height: `${d.real * 1.6}px`, minHeight: 10, marginBottom: -d.target * 1.6 + d.real * 1.6 }}
                  title={`Realisasi: ${d.real}%`}
                />
              </div>
              <div className="text-xs text-gray-500 mt-2 font-semibold">{d.label}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Legend */}
      <div className="flex gap-4 mt-4 text-xs text-gray-500">
        <div className="flex items-center gap-1"><span className="inline-block w-3 h-3 bg-gray-200 rounded-sm" /> Target Kinerja</div>
        <div className="flex items-center gap-1"><span className="inline-block w-3 h-3 bg-blue-500 rounded-sm" /> Realisasi Capaian</div>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import AnggaranFilters from "./anggaran/AnggaranFilters";
import AnggaranRadialChart from "./anggaran/AnggaranRadialChart";
import AnggaranBarChart from "./anggaran/AnggaranBarChart";
import AnggaranLineChart from "./anggaran/AnggaranLineChart";

interface Props {
  role: "admin" | "user";
}

export default function DashboardKinerjaAnggaran({ role }: Props) {
  return (
    <div className="flex flex-col gap-6 w-full mb-8 pt-8 border-t border-gray-200 mt-4">
      
      {/* Header Panel */}
      <div className="flex items-start justify-between flex-col md:flex-row gap-4 mb-2">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded text-[10px] font-extrabold tracking-widest">MODUL KEUANGAN</span>
          </div>
          <h3 className="text-2xl font-extrabold text-[#0B1F3A] tracking-tight">Analisis Penyerapan Anggaran</h3>
          <p className="text-xs font-medium text-gray-500 mt-1">Status dan tren realisasi penggunaan anggaran DIPA</p>
        </div>
        <div className="w-full md:w-auto">
          <AnggaranFilters />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Kolom Kiri: Summary Anggaran (Stack vertikal) */}
        <div className="flex flex-col gap-6 lg:col-span-1">
          {/* Card 1: Pagu */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col hover:border-blue-300 transition-colors shadow-sm">
            <span className="text-[10px] font-black text-gray-400 tracking-widest uppercase mb-1">Total Pagu Anggaran</span>
            <span className="text-2xl font-black text-[#0B1F3A] tracking-tight mb-2">
              Rp 23.57<span className="text-sm font-bold text-gray-500 ml-1">Miliar</span>
            </span>
            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden mt-auto">
              <div className="bg-gray-300 w-full h-full rounded-full"></div>
            </div>
            <span className="text-[10px] text-gray-400 mt-1.5 font-bold">Tahun 2026</span>
          </div>
          
          {/* Card 2: Realisasi */}
          <div className="bg-white rounded-2xl border border-emerald-200 bg-emerald-50/30 p-6 flex flex-col hover:border-emerald-300 transition-colors shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full -translate-y-8 translate-x-8"></div>
            <span className="text-[10px] font-black text-emerald-600 tracking-widest uppercase mb-1">Total Realisasi</span>
            <span className="text-2xl font-black text-emerald-700 tracking-tight mb-2">
              Rp 22.16<span className="text-sm font-bold text-emerald-600/70 ml-1">Miliar</span>
            </span>
            <div className="w-full bg-emerald-100 h-1.5 rounded-full overflow-hidden mt-auto">
              <div className="bg-emerald-500 w-[94%] h-full rounded-full"></div>
            </div>
            <span className="text-[10px] text-emerald-600 mt-1.5 font-bold">Serapan 94.00%</span>
          </div>

          {/* Radial Donut - Compact */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col items-center justify-center flex-1 min-h-[220px] shadow-sm">
            <h4 className="text-xs font-bold text-[#0B1F3A] mb-4 text-center">Proporsi Serapan Total</h4>
            <div className="transform scale-90 -mt-4">
              <AnggaranRadialChart 
                percentage={94} 
                color="#059669" // Emerald 600
                gradientFrom="#34d399" // Emerald 400
                gradientTo="#059669"
                title="94%"
                subtitle="Sangat Baik"
              />
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Detail & Trend Chart */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          
          {/* Baris Atas Kanan: Capaian Distribusi RO (ChartCard Wrapper handles border and padding) */}
          <AnggaranBarChart />

          {/* Baris Bawah Kanan: Tren YoY (ChartCard Wrapper handles border and padding) */}
          <AnggaranLineChart />

        </div>
      </div>
    </div>
  );
}

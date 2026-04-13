"use client";
import React, { useState } from "react";

interface Props {
  role: "admin" | "user";
}

const tabs = [
  { id: "ss", label: "Sasaran Strategis" },
  { id: "sp", label: "Sasaran Program" },
  { id: "sk", label: "Sasaran Kegiatan" },
  { id: "cascading", label: "Hierarki Cascading" },
];

export default function UnifiedOverviewCard({ role }: Props) {
  const [activeTab, setActiveTab] = useState("ss");

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col min-h-[400px]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl font-extrabold text-[#0B1F3A] tracking-tight">Ringkasan Modul Sasaran</h3>
          <p className="text-xs font-semibold text-gray-500 mt-1">Akses cepat matriks indikator kinerja utama</p>
        </div>
        
        {/* Tab Header */}
        <div className="flex overflow-x-auto hide-scrollbar bg-gray-50/50 p-1 rounded-xl border border-gray-200/60 max-w-full">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-white text-[#0B1F3A] shadow-sm border border-gray-200"
                  : "text-gray-500 hover:text-gray-800 border border-transparent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1 w-full bg-gray-50/30 border border-gray-100 rounded-xl overflow-hidden p-4">
        {activeTab === "ss" && (
          <div className="flex flex-col gap-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white p-3 rounded-lg border border-gray-200 flex items-center justify-between hover:border-blue-300 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded bg-blue-50 text-blue-800 flex items-center justify-center font-bold text-xs shrink-0">SS-0{i}</span>
                  <div>
                    <div className="text-sm font-bold text-gray-800">Meningkatkan Indeks Reformasi Birokrasi</div>
                    <div className="text-xs text-gray-500 mt-0.5">Target: 95.00 Point | Capaian: 91.00 Point</div>
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <span className="bg-emerald-100 text-emerald-700 font-bold px-2 py-1 rounded text-[10px]">On Track</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "sp" && (
          <div className="flex flex-col gap-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white p-3 rounded-lg border border-gray-200 flex items-center justify-between hover:border-indigo-300 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded bg-indigo-50 text-indigo-800 flex items-center justify-center font-bold text-xs shrink-0">SP-0{i}</span>
                  <div>
                    <div className="text-sm font-bold text-gray-800">Pemantauan Layanan Publik</div>
                    <div className="text-xs text-gray-500 mt-0.5">Unit Terkait: Pusbangkom | Indikator Jelas</div>
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <span className="bg-emerald-100 text-emerald-700 font-bold px-2 py-1 rounded text-[10px]">Active</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "sk" && (
          <div className="flex flex-col gap-3">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-white p-3 rounded-lg border border-gray-200 flex items-center justify-between hover:border-orange-300 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded bg-orange-50 text-orange-800 flex items-center justify-center font-bold text-xs shrink-0">SK-0{i}</span>
                  <div>
                    <div className="text-sm font-bold text-gray-800">Pelatihan Administrasi Tahap {i}</div>
                    <div className="text-xs text-gray-500 mt-0.5">Tenggat Waktu: Q{i} 2026</div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="w-24 bg-gray-200 rounded-full h-1.5 mt-1 overflow-hidden">
                    <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: `${i * 25}%` }}></div>
                  </div>
                  <div className="text-[10px] font-bold text-gray-500 mt-1 text-right">{i * 25}%</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "cascading" && (
          <div className="flex items-center justify-center h-full min-h-[200px] flex-col text-center">
             <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3">
               <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
             </div>
             <p className="text-sm font-bold text-gray-700">Visualisasi Pohon Kinerja Aktif</p>
             <p className="text-xs text-gray-500 mt-1 mb-4 max-w-sm">Lihat keterhubungan logis antara Sasaran Strategis hingga Sasaran Kegiatan di halaman penuh.</p>
             <button className="px-4 py-2 bg-[#0B1F3A] text-white text-xs font-bold rounded-lg hover:bg-blue-900 transition-colors">
               Buka Modul Cascading
             </button>
          </div>
        )}
      </div>
    </div>
  );
}

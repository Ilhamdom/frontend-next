"use client";
import React from "react";

interface Props {
  role: "admin" | "user";
}

const laporanData = [
  { unit: "Pusbangkom", text: "Mengirim Laporan SK-02", time: "10 Menit yang lalu", status: "PENDING", color: "orange" },
  { unit: "Biro Hukum", text: "Mengirim eviden SP-01", time: "30 Menit yang lalu", status: "VERIFIED", color: "emerald" },
  { unit: "Puslitbang", text: "Revisi Laporan SK-04", time: "1 Jam yang lalu", status: "PENDING", color: "orange" },
  { unit: "Pusbangkom", text: "Mengirim Laporan SK-03", time: "3 Jam yang lalu", status: "VERIFIED", color: "emerald" },
];

export default function RecentLaporanCard({ role }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col min-h-[400px]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-extrabold text-[#0B1F3A] tracking-tight">Laporan Realisasi Terkini</h3>
          <p className="text-xs font-semibold text-gray-500 mt-1">Aktivitas penyerahan laporan capaian</p>
        </div>
        <button className="text-blue-600 hover:text-blue-800 text-xs font-bold px-2 py-1 bg-blue-50 rounded hidden sm:block">Lihat Semua</button>
      </div>

      <div className="flex-1 w-full flex flex-col gap-4">
        {laporanData.map((lap, i) => (
          <div key={i} className="flex gap-4 group cursor-pointer relative overflow-hidden bg-gray-50/50 p-3 rounded-xl border border-transparent hover:border-gray-200 hover:bg-white transition-all">
            <div className={`w-1 shrink-0 rounded-full bg-${lap.color}-500`} />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-black text-gray-900">{lap.unit}</span>
                <span className="text-[10px] font-bold text-gray-400">{lap.time}</span>
              </div>
              <p className="text-sm font-semibold text-gray-700 leading-snug">{lap.text}</p>
            </div>
            {role === "admin" && lap.status === "PENDING" && (
              <div className="flex items-center justify-center translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[10px] bg-[#0B1F3A] text-white px-2 py-1 rounded-md font-bold">Verifikasi</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

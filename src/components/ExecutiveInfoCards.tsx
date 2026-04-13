"use client";
import React from "react";
import Link from "next/link";

interface ExecutiveInfoCardsProps {
  role: "admin" | "user";
}

const visionQuote =
  "Menjadi lembaga pembina yang unggul dalam mewujudkan birokrasi berkelas dunia untuk Indonesia Maju.";

export default function ExecutiveInfoCards({ role }: ExecutiveInfoCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {/* Card 1: VISI & TUJUAN */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 md:p-6 flex flex-col min-h-[180px] hover:border-[#0A2540]/30 transition-colors">
        <div className="flex items-center justify-between mb-4">
          <span className="font-extrabold text-[#0A2540] text-base tracking-wide flex items-center gap-2">
            <div className="w-1.5 h-4 bg-yellow-400 rounded-sm"></div>
            VISI & TUJUAN
          </span>
          <Link href={role === "admin" ? "/admin/visi-misi-tujuan" : "/user/visi-misi-tujuan"} className="text-xs text-blue-600 font-bold hover:text-[#0A2540] hover:underline transition-colors shrink-0">Lihat Detail</Link>
        </div>
        <div className="flex items-start gap-4 mb-4">
          <div className="w-1.5 rounded-sm bg-yellow-400 h-auto min-h-[48px] self-stretch" />
          <div className="bg-slate-50/80 rounded-lg px-4 py-3 text-[#2a3547] text-sm font-semibold flex-1 leading-snug border border-slate-100">
            Menjadi lembaga pembina yang mewujudkan birokrasi berkelas dunia untuk Indonesia Maju.
          </div>
        </div>
        <div className="flex justify-between text-xs text-gray-600 font-semibold mt-auto pt-2">
          <div>
            <span className="block text-gray-500">Misi Organisasi</span>
            <span>3 Misi</span>
          </div>
          <div>
            <span className="block text-gray-500">Tujuan Strategis</span>
            <span>4 Tujuan</span>
          </div>
        </div>
      </div>
      {/* Card 2: STATUS CASCADING */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 md:p-6 flex flex-col min-h-[180px] hover:border-[#0A2540]/30 transition-colors">
        <div className="flex items-center justify-between mb-4">
          <span className="font-extrabold text-[#0A2540] text-base tracking-wide flex items-center gap-2">
            <div className="w-1.5 h-4 bg-emerald-500 rounded-sm"></div>
            STATUS CASCADING
          </span>
          <Link href={role === "admin" ? "/admin/cascading" : "/user/cascading"} className="text-xs text-blue-600 font-bold hover:text-[#0A2540] hover:underline transition-colors shrink-0">Lihat Pohon</Link>
        </div>
        <div className="mb-1">
          <div className="text-xs text-gray-500 font-semibold mb-1">Penurunan Sasaran</div>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-2xl font-extrabold text-emerald-600">100%</span>
            <div className="flex-1 h-2 bg-emerald-100 rounded-full overflow-hidden">
              <div className="h-2 bg-emerald-500 rounded-full w-full" />
            </div>
          </div>
          <div className="text-xs text-gray-400">Seluruh sasaran telah dicascading ke unit kerja.</div>
        </div>
      </div>
      {/* Card 3: WARNING/STATUS AMAN */}
      {role === "admin" ? (
        <div className="bg-pink-50 border border-pink-200 shadow-sm rounded-2xl p-5 md:p-6 flex flex-col min-h-[180px]">
          <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-pink-700 text-base">WARNING KINERJA</span>
            <Link href="/admin/pemantauan-kinerja" className="text-xs text-pink-700 font-semibold hover:underline">Lihat Data</Link>
          </div>
          <div className="bg-white rounded-xl border border-pink-100 p-3 mb-2 flex flex-col gap-1">
            <div className="text-xs text-gray-700 font-bold">Pusat Kajian Kebijakan</div>
            <div className="text-xs text-gray-500">Indikator: Persentase Rekomendasi Diadopsi</div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full">Target 80%</span>
              <span className="text-xs bg-pink-200 text-pink-800 px-2 py-0.5 rounded-full">Capaian 45%</span>
            </div>
          </div>
          <div className="text-xs text-pink-600 mt-auto pt-2">* Terdapat 1 indikator dengan deviasi &gt; 20%.</div>
        </div>
      ) : (
        <div className="bg-emerald-50 border border-emerald-200 shadow-sm rounded-2xl p-5 md:p-6 flex flex-col min-h-[180px]">
          <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-emerald-700 text-base">STATUS AMAN</span>
          </div>
          <div className="flex-1 flex flex-col justify-center items-start">
            <div className="text-2xl font-extrabold text-emerald-700 mb-1">0 Indikator</div>
            <div className="text-sm text-emerald-900 font-semibold mb-1">Tidak ada deviasi kritis</div>
          </div>
        </div>
      )}
    </div>
  );
}

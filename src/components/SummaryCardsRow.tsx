"use client";
import React from "react";

interface SummaryCardsRowProps {
  role: "admin" | "user";
}

const summaryData = [
  {
    icon: (
      <div className="bg-gray-100 rounded-lg w-8 h-8 flex items-center justify-center">
        <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" stroke="#64748b" strokeWidth="2" /></svg>
      </div>
    ),
    value: 4,
    label: "SS",
    title: "SASARAN STRATEGIS",
  },
  {
    icon: (
      <div className="bg-gray-100 rounded-lg w-8 h-8 flex items-center justify-center">
        <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><rect x="4" y="4" width="12" height="12" stroke="#64748b" strokeWidth="2" /></svg>
      </div>
    ),
    value: 12,
    label: "SP",
    title: "SASARAN PROGRAM",
  },
  {
    icon: (
      <div className="bg-gray-100 rounded-lg w-8 h-8 flex items-center justify-center">
        <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><rect x="3" y="8" width="14" height="6" stroke="#64748b" strokeWidth="2" /></svg>
      </div>
    ),
    value: 45,
    label: "SK",
    title: "SASARAN KEGIATAN",
  },
];

export default function SummaryCardsRow({ role }: SummaryCardsRowProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {/* 3 summary cards */}
      {summaryData.map((item, idx) => (
        <div key={item.label} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 md:p-6 flex flex-col min-h-[110px] relative">
          <div className="flex items-center w-full">
            {/* Icon kiri */}
            <div className="mr-2">{item.icon}</div>
            <span className="text-3xl font-extrabold text-blue-900">{item.value}</span>
            {/* Badge kanan atas */}
            <span className="absolute right-4 top-4 text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full font-bold">{item.label}</span>
          </div>
          <div className="text-xs text-gray-500 font-bold tracking-widest uppercase w-full text-left mt-4">{item.title}</div>
        </div>
      ))}
      {/* Card 4: Capaian Pemantauan Kinerja */}
      <div className="bg-blue-900 rounded-2xl shadow-sm p-5 md:p-6 flex flex-col items-center justify-center min-h-[110px] relative">
        <span className="absolute right-4 top-4 text-xs bg-blue-800 text-white px-2 py-0.5 rounded-full font-bold">%</span>
        <span className="text-3xl font-extrabold text-white mb-1">
          {role === "admin" ? "78.5%" : "82.0%"}
        </span>
        <div className="text-xs text-blue-100 font-bold tracking-widest uppercase mb-2">CAPAIAN PEMANTAUAN KINERJA</div>
      </div>
    </div>
  );
}

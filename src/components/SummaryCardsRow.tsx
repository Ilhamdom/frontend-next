"use client";
import React from "react";
import { IconTarget, IconListCheck, IconChartPie } from "@tabler/icons-react";

interface SummaryCardsRowProps {
  role: "admin" | "user";
  highlight?: boolean;
}

const summaryData = [
  {
    icon: (
      <div className="bg-gray-100 rounded-lg w-8 h-8 flex items-center justify-center">
        <IconTarget size={20} stroke={2} className="text-slate-500" />
      </div>
    ),
    value: 4,
    label: "SS",
    title: "SASARAN STRATEGIS",
  },
  {
    icon: (
      <div className="bg-gray-100 rounded-lg w-8 h-8 flex items-center justify-center">
        <IconListCheck size={20} stroke={2} className="text-slate-500" />
      </div>
    ),
    value: 12,
    label: "SP",
    title: "SASARAN PROGRAM",
  },
  {
    icon: (
      <div className="bg-gray-100 rounded-lg w-8 h-8 flex items-center justify-center">
        <IconChartPie size={20} stroke={2} className="text-slate-500" />
      </div>
    ),
    value: 45,
    label: "SK",
    title: "SASARAN KEGIATAN",
  },
];

export default function SummaryCardsRow({ role, highlight }: SummaryCardsRowProps) {
  return (
    <div className={
      `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 transition-shadow duration-300 ` +
      (highlight ? 'ring-4 ring-yellow-400 ring-opacity-70 shadow-lg' : '')
    }>
      {/* 3 summary cards */}
      {summaryData.map((item, idx) => (
        <div key={item.label} className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 md:p-6 flex flex-col min-h-[120px] relative hover:shadow-md transition-shadow group">
          <div className="flex items-center w-full gap-3">
            {/* Icon kiri */}
            <div className="text-slate-500 group-hover:text-[#0A2540] transition-colors">{item.icon}</div>
            <span className="text-4xl font-extrabold text-[#0A2540] tracking-tight">{item.value}</span>
            {/* Badge kanan atas */}
            <span className="absolute right-4 top-4 text-[10px] bg-slate-100 border border-slate-200 text-[#0A2540] px-2.5 py-1 rounded-md font-extrabold tracking-wider">{item.label}</span>
          </div>
          <div className="text-xs text-slate-500 font-extrabold tracking-widest uppercase w-full text-left mt-5 group-hover:text-[#0A2540] transition-colors line-clamp-1">{item.title}</div>
        </div>
      ))}
      {/* Card 4: Capaian Pemantauan Kinerja */}
      <div className="bg-[#0A2540] rounded-xl shadow-md p-5 md:p-6 flex flex-col items-center justify-center min-h-[120px] relative border border-[#0A2540]">
        <span className="absolute right-4 top-4 text-[10px] bg-white text-[#0A2540] px-2.5 py-1 rounded-md font-extrabold shadow-sm">%</span>
        <span className="text-3xl font-extrabold text-white mb-1">
          {role === "admin" ? "78.5%" : "82.0%"}
        </span>
        <div className="text-xs text-blue-100 font-bold tracking-widest uppercase mb-2">CAPAIAN PEMANTAUAN KINERJA</div>
      </div>
    </div>
  );
}

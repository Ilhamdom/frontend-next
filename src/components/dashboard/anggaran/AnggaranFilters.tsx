"use client";

import React from "react";

export default function AnggaranFilters() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 w-full flex flex-col md:flex-row items-start md:items-center gap-6 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center gap-3 w-full md:w-auto">
        <div className="font-extrabold text-indigo-900 tracking-wide text-lg whitespace-nowrap uppercase">
          Filter Data
        </div>
        <div className="w-1.5 h-6 bg-indigo-500 rounded-full hidden md:block" />
      </div>
      
      <div className="flex flex-col md:flex-row flex-1 items-center gap-8 w-full">
        {/* Unit Kerja */}
        <div className="flex flex-col flex-1 w-full group">
          <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 group-focus-within:text-indigo-600 transition-colors">Unit Kerja</label>
          <select className="w-full text-sm font-semibold text-gray-800 bg-transparent border-b-2 border-gray-200 focus:border-indigo-500 focus:outline-none py-1.5 truncate transition-colors cursor-pointer appearance-none">
            <option>Pusat Pembelajaran dan Strategi Kebijakan Talenta A...</option>
            <option>Biro Perencanaan dan Keuangan</option>
            <option>Pusbangkom Pejabat Negara</option>
          </select>
        </div>

        {/* Tahun */}
        <div className="flex flex-col w-full md:w-32 group">
          <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 group-focus-within:text-indigo-600 transition-colors">Tahun</label>
          <select className="w-full text-sm font-semibold text-gray-800 bg-transparent border-b-2 border-gray-200 focus:border-indigo-500 focus:outline-none py-1.5 cursor-pointer appearance-none transition-colors">
            <option>2025</option>
            <option>2026</option>
          </select>
        </div>

        {/* Nama Bulan */}
        <div className="flex flex-col w-full md:w-40 group">
          <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 group-focus-within:text-indigo-600 transition-colors">Nama Bulan</label>
          <select className="w-full text-sm font-semibold text-gray-800 bg-transparent border-b-2 border-gray-200 focus:border-indigo-500 focus:outline-none py-1.5 cursor-pointer appearance-none transition-colors">
            <option>All</option>
            <option>Januari</option>
            <option>Februari</option>
          </select>
        </div>
      </div>
    </div>
  );
}

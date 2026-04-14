"use client";
import React from "react";
import { ChartCard, StandardBarChart } from "../ui/Chart";

const data = [
  { name: "Pemeliharaan Sarana Bidang T...", percentage: 100 },
  { name: "Layanan Sarana Internal", percentage: 100 },
  { name: "Sarana Bidang Teknologi Infor...", percentage: 100 },
  { name: "Penilaian Kompetensi dan Pot...", percentage: 100 },
  { name: "Layanan Umum", percentage: 100 },
  { name: "Layanan Prasarana Internal", percentage: 100 },
  { name: "Layanan Hubungan Masyarak...", percentage: 100 },
  { name: "Layanan Manajemen Keuangan", percentage: 99 },
  { name: "Layanan Perkantoran", percentage: 99 },
  { name: "Layanan Manajemen SDM", percentage: 99 },
];

export default function AnggaranBarChart() {
  return (
    <ChartCard 
      title="Capaian Distribusi RO" 
      subtitle="Sebaran target anggaran Per-Kegiatan"
      action={<span className="bg-green-100 text-green-700 px-3 py-1 rounded text-[10px] font-bold">100% On-Track</span>}
    >
      <StandardBarChart 
        data={data}
        indexKey="name"
        categories={["percentage"]}
        layout="vertical"
        colors={["#f97316"]} // Based on their old color or brand color
      />
    </ChartCard>
  );
}

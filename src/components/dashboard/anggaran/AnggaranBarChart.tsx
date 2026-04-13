"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
  Cell,
} from "recharts";

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
    <div className="w-full h-[280px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
          <XAxis 
            type="number" 
            domain={[0, 100]} 
            tickFormatter={(val) => `${val}%`} 
            tick={{ fontSize: 10, fill: "#6b7280" }} 
            stroke="#d1d5db" 
          />
          <YAxis 
            type="category" 
            dataKey="name" 
            width={160} 
            tick={{ fontSize: 9, fill: "#4b5563" }} 
            stroke="none" 
            axisLine={false} 
            tickLine={false}
          />
          <Bar dataKey="percentage" barSize={12}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#f97316" /> /* Tailwind orange-500 */
            ))}
            <LabelList 
              dataKey="percentage" 
              position="right" 
              formatter={(val: any) => val !== undefined ? `${val}%` : ''} 
              style={{ fontSize: 10, fill: "#4b5563" }} 
              offset={5}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

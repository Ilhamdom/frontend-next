"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Januari", RO1: 0.05, RO2: 0, RO3: 0, RO4: 0, RO5: 0 },
  { name: "Februari", RO1: 0.15, RO2: 0, RO3: 0, RO4: 0, RO5: 0 },
  { name: "Maret", RO1: 0.55, RO2: 0.1, RO3: 0, RO4: 0.05, RO5: 0 },
  { name: "April", RO1: 0.65, RO2: 0.15, RO3: 0, RO4: 0.25, RO5: 0.05 },
  { name: "Mei", RO1: 0.95, RO2: 0.35, RO3: 0.05, RO4: 0.35, RO5: 0.15 },
  { name: "Juni", RO1: 0.95, RO2: 0.45, RO3: 0.1, RO4: 0.35, RO5: 0.2 },
  { name: "Juli", RO1: 0.95, RO2: 0.5, RO3: 0.1, RO4: 0.35, RO5: 0.2 },
  { name: "Agustus", RO1: 0.95, RO2: 0.55, RO3: 0.15, RO4: 0.35, RO5: 0.2 },
  { name: "September", RO1: 0.95, RO2: 0.65, RO3: 0.2, RO4: 0.35, RO5: 0.25 },
  { name: "Oktober", RO1: 0.95, RO2: 0.75, RO3: 0.4, RO4: 0.45, RO5: 0.35 },
  { name: "November", RO1: 0.95, RO2: 0.85, RO3: 0.7, RO4: 0.65, RO5: 0.6 },
  { name: "Desember", RO1: 1.0, RO2: 1.0, RO3: 1.0, RO4: 1.0, RO5: 1.0 },
];

const colors = ["#22c55e", "#ef4444", "#eab308", "#06b6d4", "#a855f7", "#ec4899"];

export default function AnggaranLineChart() {
  return (
    <div className="w-full h-[320px] pb-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, left: -20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 10, fill: "#6b7280" }} 
            stroke="#d1d5db" 
            tickMargin={10}
            label={{ value: "Nama Bulan", position: "insideBottom", offset: -15, fontSize: 10, fill: "#4b5563" }}
          />
          <YAxis 
            domain={[0, 1.0]} 
            tick={{ fontSize: 10, fill: "#6b7280" }} 
            stroke="#d1d5db" 
            tickFormatter={(val) => val.toFixed(1)}
            label={{ value: "Persentase Penggunaan Anggaran", angle: -90, position: 'insideLeft', fontSize: 10, fill: "#4b5563", offset: 10 }}
          />
          <Tooltip 
            formatter={(value: any) => value !== undefined ? `${(Number(value) * 100).toFixed(0)}%` : ''}
            contentStyle={{ fontSize: 12, borderRadius: 8 }}
          />
          <Legend 
            verticalAlign="top" 
            height={36} 
            iconType="circle"
            wrapperStyle={{ fontSize: 10, color: "#4b5563", display: "flex", flexWrap: "wrap", justifyContent: "center" }}
          />
          <Line type="linear" dataKey="RO1" name="Pemeliharaan Sarana..." stroke={colors[0]} strokeWidth={1.5} dot={false} />
          <Line type="linear" dataKey="RO2" name="Layanan Sarana Intern..." stroke={colors[1]} strokeWidth={1.5} dot={false} />
          <Line type="linear" dataKey="RO3" name="Sarana Bidang..." stroke={colors[2]} strokeWidth={1.5} dot={false} />
          <Line type="linear" dataKey="RO4" name="Layanan Prasarana..." stroke={colors[3]} strokeWidth={1.5} dot={false} />
          <Line type="linear" dataKey="RO5" name="Layanan Manajemen..." stroke={colors[4]} strokeWidth={1.5} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

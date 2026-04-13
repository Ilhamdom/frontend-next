"use client";
import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";

interface PerformanceTrendCardProps {
  role: "admin" | "user";
}

const chartData = [
  { label: "Q1", Target: 90, Realisasi: 85 },
  { label: "Q2", Target: 88, Realisasi: 86 },
  { label: "Q3", Target: 92, Realisasi: 80 },
  { label: "Q4", Target: 96, Realisasi: 93 },
];

export default function PerformanceTrendCard({ role }: PerformanceTrendCardProps) {
  const [year, setYear] = useState(2026);
  // Hover state to highlight bars
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col min-h-[400px]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div>
          <h3 className="text-xl font-extrabold text-[#0B1F3A] tracking-tight">Tren Capaian Kinerja</h3>
          <p className="text-xs font-semibold text-gray-500 mt-1">Perbandingan Target vs Realisasi (Persentase)</p>
        </div>
        <div className="flex gap-2 shrink-0 bg-gray-50/50 p-1 border border-gray-200 rounded-lg">
          <button
            className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${year === 2025 ? "bg-white text-[#0B1F3A] shadow-sm border border-gray-200" : "bg-transparent text-gray-400 hover:text-gray-600"}`}
            onClick={() => setYear(2025)}
          >
            2025
          </button>
          <button
            className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${year === 2026 ? "bg-[#0B1F3A] text-white shadow-sm" : "bg-transparent text-gray-400 hover:text-gray-600"}`}
            onClick={() => setYear(2026)}
          >
            2026
          </button>
        </div>
      </div>
      
      {/* Chart */}
      <div className="flex-1 w-full min-h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
            barGap={8}
            onMouseMove={(state: any) => {
              if (state.isTooltipActive) {
                setActiveIndex(state.activeTooltipIndex);
              } else {
                setActiveIndex(null);
              }
            }}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="label" 
              tick={{ fontSize: 12, fill: "#64748b", fontWeight: 700 }} 
              axisLine={false} 
              tickLine={false} 
              dy={15} 
            />
            <YAxis 
              tick={{ fontSize: 11, fill: "#94a3b8", fontWeight: 600 }} 
              axisLine={false} 
              tickLine={false}
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              dx={-5}
            />
            <Tooltip 
              cursor={{ fill: '#f8fafc', opacity: 0.6 }}
              contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              itemStyle={{ fontWeight: 700 }}
              labelStyle={{ color: '#0B1F3A', fontWeight: 800, marginBottom: '8px' }}
            />
            <Legend 
              verticalAlign="top" 
              height={40} 
              iconType="circle" 
              iconSize={8}
              wrapperStyle={{ fontSize: 12, fontWeight: 700, color: '#475569', paddingBottom: '20px' }}
            />
            <Bar dataKey="Target" radius={[6, 6, 0, 0]} maxBarSize={40}>
               {chartData.map((entry, index) => (
                  <Cell key={`cell-target-${index}`} fill="#cbd5e1" fillOpacity={activeIndex === index ? 1 : 0.6} />
                ))}
            </Bar>
            <Bar dataKey="Realisasi" radius={[6, 6, 0, 0]} maxBarSize={40}>
               {chartData.map((entry, index) => (
                  <Cell key={`cell-real-${index}`} fill={activeIndex === index ? "#1546B4" : "#0B1F3A"} />
                ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

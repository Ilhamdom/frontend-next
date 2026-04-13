"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface AnggaranGaugeChartProps {
  percentage: number; 
  color: string;
  centerText: string;
  subCenterText?: string;
  bottomLeftText: string;
  bottomRightText: string;
}

export default function AnggaranGaugeChart({
  percentage,
  color,
  centerText,
  subCenterText,
  bottomLeftText,
  bottomRightText,
}: AnggaranGaugeChartProps) {
  // Ensure we don't exceed 100% for the pie data
  const safePercentage = Math.min(Math.max(percentage, 0), 100);
  
  // Data array for Pie
  // First item is the colored fill, second is the remaining gray track
  const data = [
    { name: "Value", value: safePercentage },
    { name: "Track", value: 100 - safePercentage },
  ];

  return (
    <div className="relative w-full h-[180px] flex flex-col items-center justify-end">
      {/* Container for the PieChart */}
      <div className="absolute top-0 w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="100%"
              startAngle={180}
              endAngle={0}
              innerRadius="70%"
              outerRadius="95%"
              dataKey="value"
              stroke="none"
              isAnimationActive={true}
            >
              <Cell fill={color} />
              <Cell fill="#e5e7eb" /> {/* Tailwind gray-200 */}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Center Text Container */}
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center pointer-events-none">
        <span className="text-3xl font-normal text-gray-600">{centerText}</span>
        {subCenterText && (
          <span className="text-xl font-semibold text-gray-800 tracking-tight mt-1">{subCenterText}</span>
        )}
      </div>

      {/* Bottom Labels Container */}
      <div className="w-full flex justify-between px-6 pt-2 z-10 text-xs text-gray-600 font-semibold mb-[-20px]">
        <span>{bottomLeftText}</span>
        <span>{bottomRightText}</span>
      </div>
    </div>
  );
}

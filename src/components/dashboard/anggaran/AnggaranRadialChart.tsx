"use client";

import React, { useEffect, useState } from "react";

interface AnggaranRadialChartProps {
  percentage: number;
  color: string;
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export default function AnggaranRadialChart({
  percentage,
  color,
  title,
  subtitle,
  gradientFrom = color,
  gradientTo = color,
}: AnggaranRadialChartProps) {
  const [offset, setOffset] = useState(0);
  
  const size = 220;
  const strokeWidth = 20;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  useEffect(() => {
    // Animate the stroke dashoffset on mount
    const progressOffset = circumference - (percentage / 100) * circumference;
    // Small delay for smooth entry animation
    const timeout = setTimeout(() => {
      setOffset(progressOffset);
    }, 100);
    return () => clearTimeout(timeout);
  }, [percentage, circumference]);

  const id = React.useId();

  return (
    <div className="relative flex flex-col items-center justify-center p-4">
      {/* Container to handle perfectly centered SVG */}
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90">
          
          {/* Defs for Gradients */}
          <defs>
            <linearGradient id={`gradient-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={gradientFrom} />
              <stop offset="100%" stopColor={gradientTo} />
            </linearGradient>
            <filter id={`shadow-${id}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.25" floodColor={gradientFrom} />
            </filter>
          </defs>

          {/* Background Track Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#f1f5f9" /* slate-100 */
            strokeWidth={strokeWidth}
            fill="none"
          />

          {/* Progress Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={`url(#gradient-${id})`}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: offset === 0 ? circumference : offset,
              transition: "stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            filter={`url(#shadow-${id})`}
          />
        </svg>

        {/* Centered Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-4xl font-extrabold text-gray-800 tracking-tight" style={{ color: gradientTo }}>
            {percentage}%
          </span>
          <span className="text-sm font-semibold text-gray-400 mt-1 tracking-wider uppercase">
            Terrealisasi
          </span>
        </div>
      </div>

      {/* Optional Bottom Labels if needed instead of putting them far away */}
      <div className="text-center mt-6 flex flex-col items-center">
        <span className="text-2xl font-black text-gray-800 tracking-tight">{title}</span>
        <span className="text-sm font-medium text-gray-500 mt-1">{subtitle}</span>
      </div>
    </div>
  );
}

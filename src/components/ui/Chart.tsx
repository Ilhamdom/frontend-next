"use client";
import React from 'react';
import {
  ResponsiveContainer,
  Tooltip,
  Legend,
  BarChart as RechartsBarChart,
  LineChart as RechartsLineChart,
  PieChart as RechartsPieChart,
  Bar,
  Line,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';

export const CHART_COLORS = [
  '#1546B4', // Brand primary 
  '#60a5fa', // Light blue
  '#0B1F3A', // Brand dark
  '#34d399', // Green
  '#a78bfa', // Purple
  '#fbbf24', // Yellow
];

// --- Custom Tooltip ---
export const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-3 text-sm">
        {label && <p className="font-extrabold text-[#0B1F3A] mb-2">{label}</p>}
        <div className="flex flex-col gap-1.5">
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="w-2.5 h-2.5 rounded-full" 
                style={{ backgroundColor: entry.color || entry.payload.fill || CHART_COLORS[index % CHART_COLORS.length] }} 
              />
              <span className="font-semibold text-gray-600">{entry.name}:</span>
              <span className="font-bold text-[#0B1F3A]">{entry.value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

// --- Container Card ---
export interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
}

export function ChartCard({ title, subtitle, children, className = '', action }: ChartCardProps) {
  return (
    <div className={`bg-white rounded-xl border border-gray-200 shadow-sm p-[24px] flex flex-col min-h-[380px] w-full ${className}`}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-bold text-[#0B1F3A]">{title}</h3>
          {subtitle && <p className="text-sm text-gray-500 mt-1 mt-1">{subtitle}</p>}
        </div>
        {action && <div>{action}</div>}
      </div>
      <div className="flex-1 w-full relative min-h-[250px] mt-2">
        {children}
      </div>
    </div>
  );
}

// --- Standard Bar Chart ---
interface StandardChartProps {
  data: any[];
  indexKey: string;
  categories: string[];
  colors?: string[];
  layout?: 'horizontal' | 'vertical';
  yAxisLabel?: string;
  xAxisLabel?: string;
  stacked?: boolean;
}

export function StandardBarChart({ 
  data, indexKey, categories, colors = CHART_COLORS, layout = 'horizontal', stacked = false 
}: StandardChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart data={data} layout={layout} margin={{ top: 0, right: 10, left: -20, bottom: 0 }} barGap={8}>
        <CartesianGrid strokeDasharray="3 3" vertical={layout === 'vertical'} horizontal={layout === 'horizontal'} stroke="#f1f5f9" />
        
        {layout === 'horizontal' ? (
          <>
            <XAxis dataKey={indexKey} tick={{ fontSize: 12, fill: "#64748b", fontWeight: 600 }} axisLine={false} tickLine={false} dy={10} />
            <YAxis tick={{ fontSize: 11, fill: "#94a3b8", fontWeight: 600 }} axisLine={false} tickLine={false} dx={-5} />
          </>
        ) : (
          <>
            <XAxis type="number" tick={{ fontSize: 11, fill: "#94a3b8", fontWeight: 600 }} axisLine={false} tickLine={false} dy={5} />
            <YAxis type="category" dataKey={indexKey} tick={{ fontSize: 12, fill: "#64748b", fontWeight: 600 }} width={120} axisLine={false} tickLine={false} dx={-10} />
          </>
        )}
        
        <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f8fafc', opacity: 0.6 }} />
        <Legend verticalAlign="top" align="left" iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12, fontWeight: 600, color: '#475569', paddingBottom: '20px' }} />
        
        {categories.map((cat, i) => (
          <Bar 
            key={cat} 
            dataKey={cat} 
            stackId={stacked ? "a" : undefined}
            fill={colors[i % colors.length]} 
            radius={stacked ? 0 : [4, 4, 0, 0]} 
            maxBarSize={40} 
          />
        ))}
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}

// --- Standard Line Chart ---
export function StandardLineChart({ 
  data, indexKey, categories, colors = CHART_COLORS 
}: StandardChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart data={data} margin={{ top: 0, right: 10, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
        <XAxis dataKey={indexKey} tick={{ fontSize: 12, fill: "#64748b", fontWeight: 600 }} axisLine={false} tickLine={false} dy={10} />
        <YAxis tick={{ fontSize: 11, fill: "#94a3b8", fontWeight: 600 }} axisLine={false} tickLine={false} dx={-5} />
        <Tooltip content={<CustomTooltip />} />
        <Legend verticalAlign="top" align="left" iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12, fontWeight: 600, color: '#475569', paddingBottom: '20px' }} />
        
        {categories.map((cat, i) => (
          <Line 
            key={cat} 
            type="monotone" 
            dataKey={cat} 
            stroke={colors[i % colors.length]} 
            strokeWidth={3} 
            dot={{ r: 4, strokeWidth: 2 }}
            activeDot={{ r: 6 }} 
          />
        ))}
      </RechartsLineChart>
    </ResponsiveContainer>
  );
}

// --- Standard Pie Chart ---
interface PieChartProps {
  data: any[];
  nameKey: string;
  dataKey: string;
  colors?: string[];
  donut?: boolean;
}

export function StandardPieChart({ 
  data, nameKey, dataKey, colors = CHART_COLORS, donut = true 
}: PieChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsPieChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <Tooltip content={<CustomTooltip />} />
        <Legend verticalAlign="top" align="left" iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12, fontWeight: 600, color: '#475569', paddingBottom: '20px' }} />
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={donut ? "60%" : 0}
          outerRadius="80%"
          fill="#8884d8"
          paddingAngle={donut ? 2 : 0}
          dataKey={dataKey}
          nameKey={nameKey}
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </RechartsPieChart>
    </ResponsiveContainer>
  );
}

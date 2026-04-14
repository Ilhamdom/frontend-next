"use client";
import React, { useState } from "react";
import { ChartCard, StandardBarChart } from "./ui/Chart";
import { ButtonGroup } from "./ui/ButtonGroup";

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
  const [year, setYear] = useState<string>("2026");

  const yearOptions = [
    { label: "2025", value: "2025" },
    { label: "2026", value: "2026" }
  ];

  return (
    <ChartCard 
      title="Tren Capaian Kinerja" 
      subtitle="Perbandingan Target vs Realisasi (Persentase)"
      action={
        <ButtonGroup 
          options={yearOptions}
          value={year}
          onChange={(val) => setYear(val)}
          size="32"
        />
      }
    >
      <StandardBarChart 
        data={chartData}
        indexKey="label"
        categories={["Target", "Realisasi"]}
        layout="horizontal"
      />
    </ChartCard>
  );
}

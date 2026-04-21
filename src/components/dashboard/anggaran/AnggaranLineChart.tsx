"use client";
import React from "react";
import { ChartCard, StandardLineChart } from "../../ui/Chart";

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

export default function AnggaranLineChart() {
  return (
    <ChartCard 
      title="Tren Realisasi YoY" 
      subtitle="Pola grafik pengeluaran anggaran bulanan (Jan - Des)"
    >
      <StandardLineChart 
        data={data}
        indexKey="name"
        categories={["RO1", "RO2", "RO3", "RO4", "RO5"]}
      />
    </ChartCard>
  );
}

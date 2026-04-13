"use client";
import React from "react";

interface RecentActivityCardProps {
  role: "admin" | "user";
}

const adminActivities = [
  {
    color: "bg-blue-500",
    title: "Pusbangkom memperbarui SK-01",
    desc: "Progres ditingkatkan menjadi 100%",
    time: "1 JAM YANG LALU",
  },
  {
    color: "bg-emerald-500",
    title: "Pusat Inovasi menambah SP-03",
    desc: "Sasaran program baru telah diregistrasi",
    time: "3 JAM YANG LALU",
  },
  {
    color: "bg-pink-400",
    title: "Biro Umum mengunggah LAKIP",
    desc: "Laporan kinerja tahunan diunggah",
    time: "5 JAM YANG LALU",
  },
];

const userActivities = [
  {
    color: "bg-blue-500",
    title: "Anda memperbarui SK-01",
    desc: "Progres kegiatan sudah 100%",
    time: "1 JAM YANG LALU",
  },
  {
    color: "bg-emerald-500",
    title: "Unit Anda menambah SP-03",
    desc: "Sasaran program baru telah diregistrasi",
    time: "3 JAM YANG LALU",
  },
];

export default function RecentActivityCard({ role }: RecentActivityCardProps) {
  const activities = role === "admin" ? adminActivities : userActivities;
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col min-h-80 max-h-85">
      <div className="flex items-center gap-2 mb-4">
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-50">
          <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><path d="M10 2v4M10 14v4M4.93 4.93l2.83 2.83M14.24 14.24l2.83 2.83M2 10h4M14 10h4M4.93 15.07l2.83-2.83M14.24 5.76l2.83-2.83" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/></svg>
        </span>
        <span className="font-bold text-blue-900 text-base">Aktivitas Terkini</span>
      </div>
      <div className="flex-1 overflow-y-auto pr-1">
        {activities.map((a, i) => (
          <div key={i} className="flex items-start gap-3 mb-5 last:mb-0">
            <span className={`w-3 h-3 rounded-full mt-1 ${a.color}`} />
            <div className="flex-1">
              <div className="font-semibold text-sm text-blue-900 leading-tight">{a.title}</div>
              <div className="text-xs text-gray-500 leading-tight mb-1">{a.desc}</div>
              <div className="text-xs text-blue-400 font-semibold">{a.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

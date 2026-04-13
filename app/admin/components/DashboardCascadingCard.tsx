import React from "react";
import { BarChart3 } from "lucide-react";

export default function DashboardCascadingCard() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col min-h-[180px]">
      <div className="flex items-center justify-between mb-4">
        <div className="font-bold text-gray-800 text-base">STATUS CASCADING</div>
        <div className="flex items-center gap-2">
          <a href="#" className="text-blue-700 text-xs font-semibold hover:underline">Lihat Pohon</a>
          <BarChart3 className="w-8 h-8 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-700 font-medium">Penurunan Sasaran</span>
        <span className="text-lg font-bold text-green-600">100%</span>
      </div>
      <div className="w-full h-2 bg-green-100 rounded-full mb-2">
        <div className="h-2 bg-green-500 rounded-full" style={{ width: "100%" }} />
      </div>
      <div className="text-xs text-gray-500 mt-auto">
        Seluruh Sasaran Strategis telah diturunkan secara hierarkis hingga level Sasaran Kegiatan.
      </div>
    </div>
  );
}

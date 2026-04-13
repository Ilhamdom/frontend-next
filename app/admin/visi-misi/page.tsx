"use client";
import AdminPageHeader from "../../../src/components/admin/AdminPageHeader";
import AdminInfoCard from "../../../src/components/admin/AdminInfoCard";
import { useSearch } from "../../../src/context/SearchContext";
import { highlightText } from "../../../src/utils/textHighlight";

export default function AdminVisiMisiPage() {
  const { searchQuery } = useSearch();

  return (
    <div className="flex flex-col w-full">
      <AdminPageHeader
        title="Visi, Misi & Tujuan"
        description="Fondasi arah kebijakan dan landasan perencanaan strategis LAN RI."
      />
      {/* Hero Card */}
      <div className="mb-8 overflow-hidden rounded-2xl shadow-md border border-gray-200 bg-white">
        <div className="flex flex-col md:flex-row">
          <div className="bg-blue-800 p-8 flex-1 flex flex-col justify-center">
            <span className="inline-block bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full mb-3 w-max">VISI LAN RI</span>
            <div className="text-white text-xl md:text-2xl font-bold leading-snug">
              {highlightText("Menjadi lembaga pembina yang unggul dalam mewujudkan birokrasi berkelas dunia untuk Indonesia Maju.", searchQuery)}
            </div>
          </div>
          <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
             <img src="/images/gedung_lan.jpg" alt="Gedung LAN" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
          </div>
        </div>
      </div>
      {/* Grid 2 kolom */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Misi Organisasi */}
        <AdminInfoCard title="Misi Organisasi" accent="blue">
          <ol className="list-decimal list-inside space-y-2">
            <li className="bg-gray-50 rounded-lg px-3 py-2">{highlightText("Meningkatkan kualitas SDM aparatur negara.", searchQuery)}</li>
            <li className="bg-gray-50 rounded-lg px-3 py-2">{highlightText("Mengembangkan inovasi tata kelola pemerintahan.", searchQuery)}</li>
            <li className="bg-gray-50 rounded-lg px-3 py-2">{highlightText("Memperkuat sistem pengawasan dan akuntabilitas.", searchQuery)}</li>
          </ol>
        </AdminInfoCard>
        {/* Tujuan Strategis */}
        <AdminInfoCard title="Tujuan Strategis" accent="orange">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500 uppercase text-xs">
                <th className="text-left py-1 pr-4">Kode</th>
                <th className="text-left py-1">Pernyataan Tujuan</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="font-semibold pr-4">{highlightText("T-01", searchQuery)}</td><td>{highlightText("Meningkatkan kualitas pelayanan publik", searchQuery)}</td></tr>
              <tr><td className="font-semibold pr-4">{highlightText("T-02", searchQuery)}</td><td>{highlightText("Meningkatkan profesionalisme ASN", searchQuery)}</td></tr>
              <tr><td className="font-semibold pr-4">{highlightText("T-03", searchQuery)}</td><td>{highlightText("Meningkatkan inovasi kelembagaan", searchQuery)}</td></tr>
              <tr><td className="font-semibold pr-4">{highlightText("T-04", searchQuery)}</td><td>{highlightText("Meningkatkan akuntabilitas kinerja", searchQuery)}</td></tr>
            </tbody>
          </table>
        </AdminInfoCard>
      </div>
    </div>
  );
}

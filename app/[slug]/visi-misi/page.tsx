"use client";
import React from "react";

export default function VisiMisiUserPage() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto pb-10">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-[#0B1F3A] tracking-tight mb-2">Visi, Misi & Tujuan</h1>
        <p className="text-gray-500 text-sm">Fondasi arah kebijakan dan landasan perencanaan strategis LAN RI.</p>
      </div>

      {/* Hero Banner Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-8 bg-white min-h-[280px]">
        {/* Left Side: Blue Background */}
        <div className="bg-[#1546B4] p-8 md:p-12 flex flex-col justify-center">
          <span className="inline-block bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full mb-4 w-max">VISI LAN RI</span>
          <div className="text-white text-xl md:text-3xl font-extrabold leading-tight">
            Menjadi lembaga pembina yang unggul dalam mewujudkan birokrasi berkelas dunia untuk Indonesia Maju.
          </div>
        </div>
        {/* Right Side: Image */}
        <div className="hidden md:block h-full w-full">
          <img 
            src="/images/gedung_lan.jpg" 
            alt="Gedung LAN RI" 
            className="object-cover h-full w-full"
          />
        </div>
      </div>

      {/* Grid 2 kolom untuk Misi dan Tujuan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Misi Organisasi */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-6 bg-[#1546B4] rounded-full"></div>
            <h2 className="text-lg font-bold text-[#0B1F3A]">Misi Organisasi</h2>
          </div>
          <ol className="flex flex-col gap-3">
            <li className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-sm text-gray-800 font-medium tracking-wide">
              1. Meningkatkan kualitas SDM aparatur negara.
            </li>
            <li className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-sm text-gray-800 font-medium tracking-wide">
              2. Mengembangkan inovasi tata kelola pemerintahan.
            </li>
            <li className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-sm text-gray-800 font-medium tracking-wide">
              3. Memperkuat sistem pengawasan dan akuntabilitas.
            </li>
          </ol>
        </div>

        {/* Tujuan Strategis */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-6 bg-orange-500 rounded-full"></div>
            <h2 className="text-lg font-bold text-[#0B1F3A]">Tujuan Strategis</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-gray-500 text-xs font-bold tracking-wider">
                  <th className="uppercase py-2 pr-4 border-b border-gray-100">Kode</th>
                  <th className="uppercase py-2 border-b border-gray-100">Pernyataan Tujuan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-50 last:border-none">
                  <td className="font-extrabold text-[#0B1F3A] py-3 pr-4">T-01</td>
                  <td className="py-3 text-gray-700 font-medium">Meningkatkan kualitas pelayanan publik</td>
                </tr>
                <tr className="border-b border-gray-50 last:border-none">
                  <td className="font-extrabold text-[#0B1F3A] py-3 pr-4">T-02</td>
                  <td className="py-3 text-gray-700 font-medium">Meningkatkan profesionalisme ASN</td>
                </tr>
                <tr className="border-b border-gray-50 last:border-none">
                  <td className="font-extrabold text-[#0B1F3A] py-3 pr-4">T-03</td>
                  <td className="py-3 text-gray-700 font-medium">Meningkatkan inovasi kelembagaan</td>
                </tr>
                <tr className="border-b border-gray-50 last:border-none">
                  <td className="font-extrabold text-[#0B1F3A] py-3 pr-4">T-04</td>
                  <td className="py-3 text-gray-700 font-medium">Meningkatkan akuntabilitas kinerja</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

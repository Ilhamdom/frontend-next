"use client";
import Link from "next/link";
import React, { useState } from "react";
import CarouselAuthImages from "./CarouselAuthImages";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-8 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-400/20 rounded-full blur-3xl"></div>

      <div className="w-full max-w-4xl mx-auto px-4 relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 mb-6 text-blue-900 font-medium hover:text-blue-700 transition-colors">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali ke Beranda
        </Link>
        <div className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] border border-white/60 shadow-[0_8px_40px_0_rgba(31,38,135,0.08)] flex flex-col md:flex-row overflow-hidden relative">
          
          {/* Left Panel dengan Carousel */}
          <div className="flex-1 flex flex-col p-10 lg:p-12 border-b md:border-b-0 md:border-r border-gray-100/50 bg-linear-to-br from-blue-50/50 to-white/30 relative overflow-hidden">
            {/* Inner Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10 h-full flex flex-col">
              {/* Carousel Gambar */}
              <CarouselAuthImages />
              <div className="mt-8 mb-8 text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">LAN RI</h2>
                <div className="text-sm font-semibold text-emerald-500 tracking-widest uppercase mt-1">SI-REVA 2026</div>
                <p className="mt-4 text-gray-500 text-sm leading-relaxed max-w-sm mx-auto">
                  Sistem Informasi Rencana dan Evaluasi Kinerja untuk memantau pencapaian sasaran strategis secara real-time.
                </p>
              </div>
            </div>
          </div>


          {/* Right Panel (Form Content) */}
          <div className="flex-1 flex flex-col justify-center items-center p-8 lg:p-12 relative">
            <div className="w-full max-w-md flex justify-center">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
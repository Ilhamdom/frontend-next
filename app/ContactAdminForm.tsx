"use client";
import { useState } from "react";
import Link from "next/link";
import { Input } from "../src/components/ui/Input";
import { Textarea } from "../src/components/ui/Textarea";
import { Button } from "../src/components/ui/Button";
import { Alert } from "../src/components/ui/Alert";

export default function ContactAdminForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.message || "Gagal mengirim pesan");
      
      setStatus("success");
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "Terjadi kesalahan koneksi.");
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto p-6 md:p-8 bg-white/50 backdrop-blur-xl border border-white/60 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] transition-all duration-500">
      
      {status === "success" ? (
        <div className="flex flex-col items-center text-center py-6 animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm ring-1 ring-emerald-100">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 drop-shadow-sm">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight mb-2">Pesan Terkirim</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-8">
            Terima kasih! Tiket dukungan Anda telah diteruskan ke administrator SI-REVA dan akan segera ditindaklanjuti.
          </p>
          <div className="mt-2 w-full">
            <Link href="/" className="flex items-center justify-center w-full bg-[#0A2540] text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:bg-[#07192b] hover:shadow-lg transition-all">
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col">
          {/* Header */}
          <div className="flex flex-col items-center mb-6 text-center">
            <div className="w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center mb-4 border border-indigo-100/50">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">Hubungi Admin</h1>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">Punya kendala teknis? Kirimkan laporan atau pertanyaan Anda ke tim pengembang.</p>
          </div>

          {status === "error" && (
            <Alert type="error">
               <div className="flex gap-2 items-start animate-in shake">
                 <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 {errorMessage}
               </div>
            </Alert>
          )}

          <div className="space-y-4 mb-6">
            <Input
              type="text"
              label="Nama Lengkap"
              required
              placeholder="cth: Budi Santoso"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
            
            <Input
              type="email"
              label="Email Pemohon"
              required
              placeholder="cth: user@instansi.go.id"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />

            <Textarea
              label="Detail Keluhan / Pesan"
              required
              rows={3}
              placeholder="Jelaskan kendala Anda secara spesifik..."
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <Button 
            type="submit" 
            disabled={status === "loading" || !formData.email || !formData.message}
            fullWidth
          >
            {status === "loading" ? (
               <span className="flex items-center justify-center gap-2">
                 <svg className="animate-spin h-5 w-5 text-indigo-200" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                 Mengirim...
               </span>
            ) : "Kirim Pengaduan"}
          </Button>

          <div className="mt-4 flex items-center justify-center">
            <Link href="/" className="w-full">
              <Button variant="ghost" fullWidth className="group text-sm font-bold text-gray-500 hover:text-[#0A2540]">
                <span className="flex items-center gap-1.5 transition-colors">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className="group-hover:-translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Kembali
                </span>
              </Button>
            </Link>
          </div>
        </form>
      )}
    </div>
  );
}

"use client";
import { useState } from "react";
import Link from "next/link";
import { Input } from "../src/components/ui/Input";
import { Button } from "../src/components/ui/Button";

export default function ResetPasswordForm() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call for reset link
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="w-full max-w-sm mx-auto p-6 md:p-8 bg-white/50 backdrop-blur-xl border border-white/60 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] transition-all duration-500">
      
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col">
          {/* Header */}
          <div className="flex flex-col items-center mb-8 text-center">
            <div className="w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center mb-4 border border-indigo-100/50">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 outline-none">
                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
              </svg>
            </div>
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">Lupa Password?</h1>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">Jangan khawatir. Masukkan email yang terdaftar dan kami akan mengirimkan instruksi pemulihan profil.</p>
          </div>

          <div className="mb-6">
            <Input
              type="email"
              label="Alamat Email"
              required
              placeholder="cth: admin@lan.go.id"
              value={email}
              onChange={e => setEmail(e.target.value)}
              icon={
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />
          </div>

          <Button 
            type="submit" 
            fullWidth
            disabled={isLoading || !email}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white/80" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                Memproses...
              </span>
            ) : "Kirim Tautan Reset"}
          </Button>

          <div className="mt-6 flex items-center justify-center">
            <Link href="/" className="text-sm font-bold text-gray-500 hover:text-[#0A2540] transition-colors flex items-center gap-1.5 group">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className="group-hover:-translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Kembali ke Login
            </Link>
          </div>
        </form>
      ) : (
        <div className="flex flex-col items-center text-center py-6 animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm ring-1 ring-emerald-100">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 drop-shadow-sm">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight mb-2">Tautan Terkirim!</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-8">
            Jika email <span className="font-bold text-gray-800">{email}</span> tercatat dalam sistem kami, Anda akan segera menerima tautan pemulihan sandi.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            fullWidth
            className="mt-2"
          >
            Coba Email Lain
          </Button>
          <div className="mt-6">
            <Link href="/" className="text-sm font-bold text-[#0A2540] hover:underline transition-all">Kembali ke Halaman Utama</Link>
          </div>
        </div>
      )}
    </div>
  );
}

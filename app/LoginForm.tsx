"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input } from "../src/components/ui/Input";
import { Button } from "../src/components/ui/Button";
import { Alert } from "../src/components/ui/Alert";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const [errorMsg, setErrorMsg] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");
    if (username === "admin" && password === "000000") {
      router.push("/admin/dashboard");
    } else if (username === "user" && password === "000000") {
      router.push("/user/dashboard");
    } else {
      setErrorMsg("Username atau password salah. Silakan coba lagi.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
      <h1 className="text-2xl font-bold text-brand-blue-900 mb-2">Login SI-REVA</h1>
      <p className="text-sm text-gray-500 mb-6 font-medium">Masukkan kredensial akun Anda untuk masuk.</p>
      
      {errorMsg && (
        <Alert type="error" title="Gagal Masuk">
          {errorMsg}
        </Alert>
      )}

      <div className="flex flex-col gap-4 mb-6">
        <Input
          type="text"
          label="Username"
          placeholder="cth: admin"
          error={errorMsg ? "Periksa kembali username Anda" : ""}
          value={username}
          onChange={e => setUsername(e.target.value)}
          icon={
            <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
              <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          }
        />
        <Input
          type="password"
          label="Password"
          placeholder="Password Anda"
          error={errorMsg ? "Periksa kembali password Anda" : ""}
          value={password}
          onChange={e => setPassword(e.target.value)}
          icon={
            <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
              <rect x="4" y="8" width="10" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          }
        />
      </div>

      <Button type="submit" fullWidth className="mb-4">
        Masuk Ke Sistem
      </Button>

      <div className="flex justify-between text-sm font-bold">
        <Link href="/lupa-password" className="text-brand-blue-700 hover:text-brand-blue-950 transition-colors">Lupa Password?</Link>
        <Link href="/hubungi-admin" className="text-brand-blue-700 hover:text-brand-blue-950 transition-colors">Hubungi Admin</Link>
      </div>
    </form>
  );
}

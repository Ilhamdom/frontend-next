"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ForgotPasswordForm from "./ForgotPasswordForm";

export default function LoginForm() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ username: "", password: "" });
  const [loginStatus, setLoginStatus] = useState<null | "success" | "error">(null);

  return (
    <>
      <form className="w-full max-w-sm mx-auto bg-white border-2 border-blue-900 p-8 rounded-2xl shadow-lg flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-2 text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-blue-900 text-sm font-semibold mb-1" htmlFor="username">
            Username
          </label>
          <div className="relative">
            <input
              className="shadow-sm border border-blue-200 rounded w-full py-2 pr-10 pl-3 text-blue-900 focus:border-blue-900 focus:ring-2 focus:ring-blue-100 outline-none transition"
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              value={form.username}
              onChange={e => setForm(f => ({ ...f, username: e.target.value }))}
              autoComplete="username"
              required
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              {/* Tabler User Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5z"/><path d="M17.657 18.657A8 8 0 1 0 6.343 18.657"/></svg>
            </span>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-blue-900 text-sm font-semibold mb-1" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              className="shadow-sm border border-blue-200 rounded w-full py-2 pr-10 pl-3 text-blue-900 focus:border-blue-900 focus:ring-2 focus:ring-blue-100 outline-none transition"
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={form.password}
              onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
              autoComplete="current-password"
              required
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <button
                type="button"
                tabIndex={-1}
                className="focus:outline-none"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Sembunyikan password" : "Lihat password"}
              >
                {/* Tabler Eye/EyeOff Icon */}
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.06 10.06 0 0 1 12 20c-5.05 0-9.27-3.11-10-8a9.77 9.77 0 0 1 1.67-3.19M6.53 6.53A9.77 9.77 0 0 1 12 4c5.05 0 9.27 3.11 10 8a9.93 9.93 0 0 1-4.21 6.17M1 1l22 22"/><circle cx="12" cy="12" r="3"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12C1 12 5 5 12 5s11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>
                )}
              </button>
            </span>
          </div>
        </div>
        <button
          className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg shadow focus:outline-none focus:shadow-outline transition-colors"
          type="button"
          onClick={async () => {
            setLoginStatus(null);
            try {
              const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: form.username, password: form.password })
              });
              if (res.ok) {
                const data = await res.json();
                const userObj = data.user;
                const { useUserStore } = await import("@/store/userStore");
                useUserStore.getState().setUser({
                  username: userObj.username,
                  unit: userObj.unit_kerja,
                  role: userObj.role,
                });
                setLoginStatus("success");
                if (userObj.role && userObj.role.toLowerCase() === "admin") {
                  router.push("/admin/dashboard");
                } else {
                  router.push("/users/dashboard");
                }
              } else {
                setLoginStatus("error");
              }
            } catch (e) {
              setLoginStatus("error");
            }
          }}
        >
          Masuk
        </button>
        {loginStatus === "success" && (
          <div className="text-green-600 text-center font-semibold">Login berhasil! Selamat datang, {form.username}.</div>
        )}
        {loginStatus === "error" && (
          <div className="text-red-600 text-center font-semibold">Username atau password salah.</div>
        )}
        <button
          type="button"
          className="text-sm text-blue-900 underline hover:text-blue-700 transition-colors mt-2"
          onClick={() => setShowModal(true)}
        >
          Forgot Password?
        </button>
      </form>

      {/* Modal Forgot Password */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-blue-900 text-xl font-bold"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <ForgotPasswordForm />
          </div>
        </div>
      )}
    </>
  );
}
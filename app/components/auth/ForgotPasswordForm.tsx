"use client";
import React, { useState } from "react";
import ContactAdminForm from "./ContactAdminForm";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [showContact, setShowContact] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Kirim permintaan reset password ke backend
    setSent(true);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto bg-white border-2 border-blue-900 p-8 rounded-2xl shadow-lg flex flex-col gap-5">
        <h2 className="text-xl font-bold text-blue-900 mb-2 text-center">Lupa Password</h2>
        {sent ? (
          <div className="text-green-600 text-center font-semibold py-8">Link reset password sudah dikirim ke email Anda.</div>
        ) : (
          <>
            <div>
              <label className="block text-blue-900 text-sm font-semibold mb-1" htmlFor="email">Email</label>
              <input
                className="shadow-sm border border-blue-200 rounded w-full py-2 px-3 text-blue-900 focus:border-blue-900 focus:ring-2 focus:ring-blue-100 outline-none transition"
                id="email"
                name="email"
                type="email"
                placeholder="email@domain.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg shadow focus:outline-none focus:shadow-outline transition-colors mt-2"
            >
              Kirim Link Reset
            </button>
            <button
              type="button"
              className="text-sm text-blue-900 underline hover:text-blue-700 transition-colors mt-4"
              onClick={() => setShowContact(true)}
            >
              Hubungi Admin
            </button>
          </>
        )}
      </form>
      {/* Modal Contact Admin */}
      {showContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-blue-900 text-xl font-bold"
              onClick={() => setShowContact(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <ContactAdminForm />
          </div>
        </div>
      )}
    </>
  );
}

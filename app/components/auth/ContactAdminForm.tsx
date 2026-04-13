"use client";
import React, { useState } from "react";

export default function ContactAdminForm() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [sent, setSent] = useState(false);

	function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		// TODO: Kirim data ke backend
		setSent(true);
	}

	return (
		<form onSubmit={handleSubmit} className="w-full max-w-md mx-auto bg-white border-2 border-blue-900 p-8 rounded-2xl shadow-lg flex flex-col gap-5">
			<h2 className="text-2xl font-bold text-blue-900 mb-2 text-center">Hubungi Admin</h2>
			{sent ? (
				<div className="text-green-600 text-center font-semibold py-8">Pesan Anda sudah dikirim. Terima kasih!</div>
			) : (
				<>
					<div>
						<label className="block text-blue-900 text-sm font-semibold mb-1" htmlFor="name">Nama Lengkap</label>
						<input
							className="shadow-sm border border-blue-200 rounded w-full py-2 px-3 text-blue-900 focus:border-blue-900 focus:ring-2 focus:ring-blue-100 outline-none transition"
							id="name"
							name="name"
							type="text"
							placeholder="Nama lengkap Anda"
							value={form.name}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label className="block text-blue-900 text-sm font-semibold mb-1" htmlFor="email">Email</label>
						<input
							className="shadow-sm border border-blue-200 rounded w-full py-2 px-3 text-blue-900 focus:border-blue-900 focus:ring-2 focus:ring-blue-100 outline-none transition"
							id="email"
							name="email"
							type="email"
							placeholder="email@domain.com"
							value={form.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label className="block text-blue-900 text-sm font-semibold mb-1" htmlFor="subject">Subjek</label>
						<input
							className="shadow-sm border border-blue-200 rounded w-full py-2 px-3 text-blue-900 focus:border-blue-900 focus:ring-2 focus:ring-blue-100 outline-none transition"
							id="subject"
							name="subject"
							type="text"
							placeholder="Subjek pesan"
							value={form.subject}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label className="block text-blue-900 text-sm font-semibold mb-1" htmlFor="message">Pesan</label>
						<textarea
							className="shadow-sm border border-blue-200 rounded w-full py-2 px-3 text-blue-900 focus:border-blue-900 focus:ring-2 focus:ring-blue-100 outline-none transition min-h-25"
							id="message"
							name="message"
							placeholder="Tulis pesan atau kendala Anda di sini..."
							value={form.message}
							onChange={handleChange}
							required
						/>
					</div>
					<button
						type="submit"
						className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg shadow focus:outline-none focus:shadow-outline transition-colors mt-2"
					>
						Kirim Pesan
					</button>
				</>
			)}
		</form>
	);
}
// ...existing code from ContactAdminForm.tsx...
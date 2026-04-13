"use client";
import { useState } from "react";
import { IconUser, IconLock, IconEye, IconEyeOff, IconWorld } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/userStore";

export default function LoginForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const userStore = useUserStore();

	const setUser = useUserStore((state) => state.setUser);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		try {
			const res = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, password }),
			});
			const data = await res.json();
			if (!res.ok) {
				alert(data.error || "Login gagal.");
				setLoading(false);
				return;
			}
			const userObj = data.user;
			setUser({ username: userObj.username, unit: userObj.unit_kerja, role: userObj.role });
			if (userObj.role && userObj.role.toLowerCase() === "admin") {
				router.push("/admin/dashboard");
			} else {
				router.push("/users/dashboard");
			}
		} catch (err) {
			alert("Gagal menghubungi server.");
		}
		setLoading(false);
	};

	return (
		<form
			onSubmit={handleSubmit}
className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_60px_0_rgba(30,58,138,0.4)] p-10 flex flex-col gap-6 border border-blue-900/30 relative overflow-hidden"
		>
			<div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500"></div>
			
			<div className="flex flex-col items-center mb-2 mt-4">
				<div className="relative mb-6 group">
					<div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-emerald-400 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500"></div>
					<div className="relative bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-700 p-4 rounded-3xl shadow-2xl shadow-blue-900/50 transform group-hover:scale-105 transition-all duration-500">
						<IconWorld size={44} stroke={1.5} className="text-white drop-shadow-md" />
					</div>
				</div>
				<h1 className="text-3xl md:text-4xl font-black text-blue-100/95 mb-3 tracking-tight text-center drop-shadow-sm">
					Selamat Datang
				</h1>
				<p className="text-blue-200/90 text-sm md:text-base text-center max-w-[22rem] leading-relaxed font-medium">
					Masukkan kredensial Anda untuk mengakses dashboard SI-REVA.
				</p>
			</div>

			<div className="space-y-5">
				{/* Username */}
				<div className="space-y-1.5">
					<label htmlFor="username" className="block text-sm font-semibold text-gray-700 ml-1">
						Nama Pengguna
					</label>
					<div className="relative group">
						<span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
							<IconUser size={20} stroke={2} />
						</span>
						<input
							id="username"
							name="username"
							type="text"
							autoComplete="username"
							required
							className="block w-full pl-12 pr-4 py-3.5 bg-white/20 border border-blue-900/40 rounded-2xl text-blue-100 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-500/70 transition-all duration-300 hover:bg-white/25 hover:border-blue-800/50 backdrop-blur-sm"
							placeholder="Masukkan nama pengguna"
							value={username}
							onChange={e => setUsername(e.target.value)}
						/>
					</div>
				</div>

				{/* Password */}
				<div className="space-y-1.5">
					<div className="flex items-center justify-between ml-1">
						<label htmlFor="password" className="block text-sm font-semibold text-gray-700">
							Kata Sandi
						</label>
				<Link href="/forgot-password" className="text-xs md:text-sm font-semibold text-blue-300 hover:text-blue-200 hover:underline transition-all duration-200">
					Lupa Sandi?
				</Link>
					</div>
					<div className="relative group">
						<span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
							<IconLock size={20} stroke={2} />
						</span>
						<input
							id="password"
							name="password"
							type={showPassword ? "text" : "password"}
							autoComplete="current-password"
							required
							className="block w-full pl-12 pr-12 py-3.5 bg-white/20 border border-blue-900/40 rounded-2xl text-blue-100 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-500/70 transition-all duration-300 hover:bg-white/25 hover:border-blue-800/50 backdrop-blur-sm"
							placeholder="Masukkan kata sandi"
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
						<button
							type="button"
							className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none transition-colors"
							tabIndex={-1}
							onClick={() => setShowPassword(v => !v)}
							aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
						>
							{showPassword ? (
								<IconEyeOff size={20} stroke={2} />
							) : (
								<IconEye size={20} stroke={2} />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Tombol Login */}
			<div className="mt-4">
				<button
					type="submit"
					disabled={loading}
					className="group relative w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-2xl text-white font-bold text-lg bg-gradient-to-r from-blue-900 via-blue-800 to-blue-950 hover:from-blue-950 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 shadow-2xl shadow-blue-900/50 hover:shadow-2xl hover:shadow-blue-900/70 transition-all duration-400 overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5"
				>
					<div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 backdrop-blur-sm group-hover:translate-x-full -translate-x-full transition-all duration-700 ease-out skew-x-12 opacity-0 group-hover:opacity-100"></div>
					{loading ? (
						<IconWorld className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" size={20} stroke={2} />
					) : (
						<span className="relative z-10">Masuk ke Sistem</span>
					)}
				</button>
			</div>

			{/* Teks bawah */}
			<div className="text-center text-sm text-gray-500 mt-2">
				Mengalami kendala saat login?{' '}
				<Link href="/contact-admin" className="font-semibold text-blue-300 hover:text-blue-200 hover:underline transition-all duration-200">
					Hubungi Admin
				</Link>
			</div>
		</form>
	);
}


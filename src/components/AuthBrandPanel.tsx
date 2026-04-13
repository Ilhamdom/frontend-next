export default function AuthBrandPanel() {
	return (
		<div className="flex flex-col items-center justify-start h-full w-full max-w-md px-8 py-12 relative">
			{/* Brand Area */}
			<div className="mb-10 w-full flex flex-col items-center relative z-10">
				<div className="inline-block p-3 rounded-2xl bg-gradient-to-tr from-blue-600 to-emerald-400 shadow-lg shadow-blue-500/30 mb-4">
					<svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
					</svg>
				</div>
				<div className="text-3xl md:text-4xl font-extrabold text-[#0B1F3A] tracking-tight mb-2">LAN RI</div>
				<div className="text-sm font-bold text-emerald-600 tracking-widest uppercase">SI-REVA 2026</div>
				<p className="mt-4 text-center text-gray-500 text-sm leading-relaxed">
					Sistem Informasi Rencana dan Evaluasi Kinerja untuk memantau pencapaian sasaran strategis secara real-time.
				</p>
			</div>

			{/* Procedural Dashboard Graphic */}
			<div className="w-full bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-white/80 p-5 flex flex-col gap-3 group hover:shadow-2xl transition-shadow duration-500 relative z-10">
				{/* Header Mockup */}
				<div className="flex items-center justify-between mb-2">
					<div className="w-24 h-4 bg-gray-200/80 rounded-full"></div>
					<div className="flex gap-2">
						<div className="w-6 h-6 bg-blue-100/80 rounded-full"></div>
						<div className="w-6 h-6 bg-emerald-100/80 rounded-full"></div>
					</div>
				</div>
				{/* Chart Area Mockup */}
				<div className="flex items-end gap-2 h-32 mt-2">
					<div className="w-full bg-gradient-to-t from-blue-100 to-blue-200 rounded-t-md h-[40%] group-hover:h-[60%] transition-all duration-700 ease-out"></div>
					<div className="w-full bg-gradient-to-t from-blue-200 to-blue-300 rounded-t-md h-[70%] group-hover:h-[85%] transition-all duration-700 ease-out delay-75"></div>
					<div className="w-full bg-gradient-to-t from-emerald-200 to-emerald-300 rounded-t-md h-[50%] group-hover:h-[95%] transition-all duration-700 ease-out delay-150"></div>
					<div className="w-full bg-gradient-to-t from-blue-100 to-blue-200 rounded-t-md h-[30%] group-hover:h-[45%] transition-all duration-700 ease-out delay-200"></div>
					<div className="w-full bg-gradient-to-t from-blue-200 to-blue-300 rounded-t-md h-[80%] group-hover:h-[70%] transition-all duration-700 ease-out delay-300"></div>
					<div className="w-full bg-gradient-to-t from-emerald-300 to-emerald-400 rounded-t-md h-[60%] group-hover:h-[80%] transition-all duration-700 ease-out delay-500"></div>
				</div>
				{/* Footer Mockup */}
				<div className="grid grid-cols-3 gap-3 mt-auto pt-2">
					<div className="h-2 bg-gray-100 rounded-full"></div>
					<div className="h-2 bg-gray-100 rounded-full"></div>
					<div className="h-2 bg-gray-100 rounded-full"></div>
				</div>
			</div>
		</div>
	);
}

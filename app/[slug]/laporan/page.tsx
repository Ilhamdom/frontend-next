"use client";

import LayoutShell from "@/components/LayoutShell";
import PageHeader from "@/components/PageHeader";

export default function LaporanLakipPage() {
	return (
		<LayoutShell>
			<div className="flex items-center justify-between max-w-4xl mx-auto mt-6 mb-2">
				<PageHeader title="Laporan Akuntabilitas Kinerja (LAKIP)" />
				<div className="flex gap-2">
					<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold shadow text-sm transition">
						<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 17v1m-6 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2Zm6-7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/><path d="M7 9V7a5 5 0 0 1 10 0v2"/></svg>
						Download PDF
					</button>
					<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow text-sm transition">
						<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z"/><path d="M8 8h8v8H8z"/></svg>
						Download Word
					</button>
				</div>
			</div>
			<div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-10 mt-2 border border-blue-100">
				<h2 className="text-2xl font-extrabold mb-6 text-blue-900 text-center tracking-tight">Laporan Akuntabilitas Kinerja (LAKIP)</h2>
				<div className="mb-8">
					<h3 className="text-lg font-bold mb-3 text-blue-800">Daftar Isi</h3>
					<ol className="list-decimal ml-6 text-base space-y-1">
						<li>Pendahuluan</li>
						<li>Perencanaan Kinerja</li>
						<li>Pengukuran Kinerja</li>
						<li>Evaluasi dan Analisis Kinerja</li>
						<li>Penutup</li>
					</ol>
				</div>
				<section className="mb-10">
					<h3 className="text-lg font-semibold mb-2 text-blue-700">1. Pendahuluan</h3>
					<p className="text-gray-700 mb-2">Deskripsi singkat tentang latar belakang, tujuan, dan ruang lingkup LAKIP.</p>
				</section>
				<section className="mb-10">
					<h3 className="text-lg font-semibold mb-2 text-blue-700">2. Perencanaan Kinerja</h3>
					<p className="text-gray-700 mb-2">Penjelasan tentang visi, misi, tujuan, sasaran, dan indikator kinerja utama.</p>
				</section>
				<section className="mb-10">
					<h3 className="text-lg font-semibold mb-2 text-blue-700">3. Pengukuran Kinerja</h3>
					<p className="text-gray-700 mb-2">Pemaparan hasil pengukuran kinerja berdasarkan indikator yang telah ditetapkan.</p>
				</section>
				<section className="mb-10">
					<h3 className="text-lg font-semibold mb-2 text-blue-700">4. Evaluasi dan Analisis Kinerja</h3>
					<p className="text-gray-700 mb-2">Analisis capaian, hambatan, dan tindak lanjut perbaikan kinerja.</p>
				</section>
				<section className="mb-10">
					<h3 className="text-lg font-semibold mb-2 text-blue-700">5. Penutup</h3>
					<p className="text-gray-700 mb-2">Kesimpulan dan rekomendasi untuk peningkatan kinerja di masa mendatang.</p>
				</section>
			</div>
		</LayoutShell>
	);
}

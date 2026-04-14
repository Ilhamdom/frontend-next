import { Card } from './ui/Card';

export default function DasarHukumSection() {
  const hukumData = [
    { title: "Undang-Undang Nomor 17 Tahun 2003", desc: "Tentang Keuangan Negara" },
    { title: "Undang-Undang Nomor 1 Tahun 2004", desc: "Tentang Perbendaharaan Negara" },
    { title: "Undang-Undang Nomor 15 Tahun 2004", desc: "Tentang Pemeriksaan Pengelolaan dan Tanggung Jawab Keuangan Negara" },
    { title: "Peraturan Pemerintah Nomor 58 Tahun 2005", desc: "Tentang Pengelolaan Keuangan Daerah" },
    { title: "Permendagri Nomor 77 Tahun 2020", desc: "Tentang Pedoman Teknis Pengelolaan Keuangan Daerah" },
    { title: "Peraturan Lainnya", desc: "Sesuai perkembangan regulasi yang berlaku" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Dasar Hukum Anggaran</h2>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 mt-8">
          {hukumData.map((item, i) => (
            <Card
              key={i}
              variant="basic"
              title={item.title}
              description={item.desc}
              className="flex-1 min-w-[300px] max-w-[350px]"
              avatarIcon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z" />
                </svg>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
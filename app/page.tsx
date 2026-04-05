

import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/HeroSection";
import VisiMisiSection from "@/components/VisiMisiSection";
import DasarHukumSection from "@/components/DasarHukumSection";
import InformasiLainnyaSection from "@/components/InformasiLainnyaSection";
import Footer from "@/components/footer/Footer";
import FloatingToolbar from "@/components/FloatingToolbar";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <HeroSection />
      <VisiMisiSection />
      <DasarHukumSection />
      <Footer />
      {/* <FloatingToolbar /> */}
    </div>
  );
}

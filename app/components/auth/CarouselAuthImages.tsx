"use client";
import React from "react";
import Image from "next/image";

export default function CarouselAuthImages() {
  const images = [
    { src: "/LAN_9694.JPG", alt: "LAN 9694" },
    { src: "/LAN_9736.JPG", alt: "LAN 9736" },
    { src: "/LAN_9802.JPG", alt: "LAN 9802" },
  ];
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden shadow-lg bg-white/60">
        {images.map((img, idx) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            className={`object-cover transition-opacity duration-700 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
            style={{ zIndex: idx === current ? 1 : 0 }}
            priority={idx === 0}
          />
        ))}
        {/* Indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full border border-blue-900 bg-white/80 ${idx === current ? 'bg-blue-900' : ''}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

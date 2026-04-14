import React, { useState } from 'react';
import { User } from 'lucide-react';

export interface AvatarProps {
  src?: string | null;
  name?: string | null;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  alt?: string;
}

export function Avatar({ src, name, size = 'md', className = '', alt }: AvatarProps) {
  const [imageError, setImageError] = useState(false);

  // Ukuran avatar standar (md: 48x48 adalah yang utama sesuai spesifikasi gambar)
  const sizeMap = {
    sm: "w-8 h-8 text-xs",
    md: "w-12 h-12 text-base", // 48x48
    lg: "w-16 h-16 text-xl",
    xl: "w-24 h-24 text-3xl",
  };

  const getInitials = (fullName: string) => {
    if (!fullName) return "";
    const words = fullName.trim().split(/\s+/);
    if (words.length === 1) {
      // Jika hanya satu kata, ambil maksimal 2 huruf pertama
      return words[0].substring(0, 2).toUpperCase();
    }
    // Jika lebih dari 1 kata, ambil huruf pertama dari kata pertama dan kata terakhir
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  };

  const activeSize = sizeMap[size];

  // Prioritas Render berdasarkan "Cara Penggunaan yang Disarankan":
  // 1. Jika gambar (src) tersedia & tidak error -> tampilkan foto
  // 2. Jika gambar tidak ada atau error, tapi ada nama -> tampilkan inisial (huruf kapital)
  // 3. Jika keduanya tidak ada -> tampilkan placeholder ikon default

  return (
    <div 
      className={`relative flex items-center justify-center shrink-0 rounded-full overflow-hidden bg-gray-100 border border-gray-200 ${activeSize} ${className}`}
      title={name || alt || "User Avatar"}
    >
      {src && !imageError ? (
        <img
          src={src}
          alt={name || alt || "Avatar"}
          className="w-full h-full object-cover rounded-full"
          onError={() => setImageError(true)}
        />
      ) : name ? (
        <span className="font-semibold text-gray-700 tracking-wide uppercase">
          {getInitials(name)}
        </span>
      ) : (
        <User className="w-1/2 h-1/2 text-gray-400" strokeWidth={2} />
      )}
    </div>
  );
}

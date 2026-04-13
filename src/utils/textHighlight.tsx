import React from 'react';

export const highlightText = (text?: string | null, highlight?: string | null) => {
  if (!text) return null;
  if (!highlight || !highlight.trim()) return <span>{text}</span>;
  
  // Pisahkan string berdasarkan kata yang dicari (case-insensitive)
  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);
  
  return (
    <span>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-brand-gold-300 text-brand-blue-950 px-1 font-bold rounded shadow-sm">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
};

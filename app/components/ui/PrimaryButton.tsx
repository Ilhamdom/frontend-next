import React from "react";

interface PrimaryButtonProps {
  label: string;
  className?: string;
}

export default function PrimaryButton({ label, className = "" }: PrimaryButtonProps) {
  return (
    <button
      className={`flex items-center justify-between gap-3 bg-[#0B1F3A] hover:bg-[#14386b] text-white rounded-xl px-6 py-3 font-semibold transition-colors duration-150 focus:outline-none ${className}`}
      type="button"
    >
      <span>{label}</span>
      {/* Icon panah kanan */}
      <span className="text-xl leading-none">→</span>
    </button>
  );
}

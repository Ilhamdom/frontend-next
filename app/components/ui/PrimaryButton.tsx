
import { IconPlus } from "@tabler/icons-react";

interface PrimaryButtonProps {
  label: string;
  className?: string;
}

export default function PrimaryButton({ label, className = "" }: PrimaryButtonProps) {
  return (
    <button
      className={`flex items-center gap-2 bg-[#0B1F3A] hover:bg-[#14386b] text-white rounded-xl px-3 py-2 text-sm font-semibold transition-colors duration-150 focus:outline-none ${className}`}
      type="button"
    >
      <IconPlus size={18} stroke={2} />
      <span>{label}</span>
    </button>
  );
}

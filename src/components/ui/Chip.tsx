import React from 'react';

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'filled' | 'outline';
  size?: '32' | '24';
  selected?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export function Chip({
  label,
  variant = 'filled',
  size = '32',
  selected = false,
  disabled = false,
  iconLeft,
  iconRight,
  className = '',
  onClick,
  ...props
}: ChipProps) {

  // Base layout styles representing "Spesifikasi" padding and gaps
  const baseLayout = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1546B4]/50 rounded-full select-none";
  
  // Size specifications
  // 32px height: 12px horizontal padding, small text
  // 24px height: 12px horizontal padding, extra small text
  const sizeStyles = {
    '32': 'h-[32px] px-3 text-sm gap-1',
    '24': 'h-[24px] px-3 text-xs gap-1',
  };

  // State & Variant Styles
  let colorStyles = "";
  
  if (disabled) {
    colorStyles = variant === 'filled' 
      ? "bg-gray-100 text-gray-400 cursor-not-allowed opacity-60" 
      : "bg-transparent border border-gray-200 text-gray-400 cursor-not-allowed opacity-60";
  } else if (selected) {
    colorStyles = variant === 'filled'
      ? "bg-[#60A5FA] text-white hover:bg-[#3B82F6]" // Selected Filled: Bright Brand Blue with white text
      : "bg-blue-50 border border-[#60A5FA] text-[#2563EB] hover:bg-blue-100"; // Selected Outline: Blue text, blue border, light blue bg hover
  } else {
    // Default & Hover
    colorStyles = variant === 'filled'
      ? "bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
      : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 cursor-pointer";
  }

  // Determine Icon Size based on Chip Size
  const iconSizeClass = size === '32' ? "w-4 h-4" : "w-3 h-3";

  return (
    <button
      type="button"
      className={`${baseLayout} ${sizeStyles[size]} ${colorStyles} ${className}`}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      aria-pressed={selected}
      {...props}
    >
      {iconLeft && (
        <span className={`shrink-0 flex items-center justify-center ${iconSizeClass}`}>
          {iconLeft}
        </span>
      )}
      
      <span className="truncate max-w-[200px] capitalize leading-none">{label}</span>
      
      {iconRight && (
        <span className={`shrink-0 flex items-center justify-center ${iconSizeClass}`}>
          {iconRight}
        </span>
      )}
    </button>
  );
}

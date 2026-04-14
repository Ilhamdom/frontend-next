import React, { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'link' | 'outline' | 'danger' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg' | '32' | '40' | '44' | '48' | '56';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  iconOnly?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  iconOnly = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all rounded-lg outline-none focus:ring-2 focus:ring-offset-2 gap-2 whitespace-nowrap";
  
  // Legacy variant mappings
  const mappedVariant = variant === 'outline' ? 'secondary' 
                      : variant === 'ghost' ? 'tertiary'
                      : variant;

  const variants: Record<string, string> = {
    primary: "bg-brand-blue-950 text-white hover:bg-brand-blue-900 focus:ring-brand-blue-900 disabled:bg-brand-blue-950/50",
    secondary: "border border-brand-blue-950 text-brand-blue-950 hover:bg-brand-blue-50 focus:ring-brand-blue-950 disabled:border-gray-300 disabled:text-gray-400 disabled:bg-transparent",
    tertiary: "text-brand-blue-950 hover:bg-brand-blue-50 focus:ring-brand-blue-950 bg-transparent disabled:text-gray-400 disabled:hover:bg-transparent",
    link: "text-brand-blue-950 hover:underline px-0 h-auto focus:ring-0 bg-transparent disabled:text-gray-400 disabled:no-underline",
    danger: "bg-status-red text-white hover:bg-red-700 focus:ring-status-red disabled:bg-status-red/50",
  };

  // Legacy size mappings
  const mappedSize = size === 'sm' ? '32' : size === 'md' ? '44' : size === 'lg' ? '48' : size;

  const sizes: Record<string, string> = {
    '32': "h-8 text-xs " + (iconOnly ? "w-8 px-0" : "px-3"),
    '40': "h-10 text-sm " + (iconOnly ? "w-10 px-0" : "px-4"),
    '44': "h-11 text-sm " + (iconOnly ? "w-11 px-0" : "px-5"),
    '48': "h-12 text-base " + (iconOnly ? "w-12 px-0" : "px-6"),
    '56': "h-14 text-base " + (iconOnly ? "w-14 px-0" : "px-8"),
  };

  return (
    <button
      className={`
        ${baseStyles} 
        ${variants[mappedVariant] || variants.primary} 
        ${mappedVariant === 'link' ? '' : sizes[mappedSize] || sizes['44']} 
        ${fullWidth ? "w-full" : ""} 
        ${disabled ? "cursor-not-allowed opacity-60" : ""} 
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

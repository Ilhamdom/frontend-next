import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all rounded-lg outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-brand-blue-950 text-white hover:bg-brand-blue-900 focus:ring-brand-blue-900 disabled:bg-brand-blue-950/50",
    outline: "border border-brand-blue-950 text-brand-blue-950 hover:bg-brand-blue-50 focus:ring-brand-blue-950 disabled:border-gray-300 disabled:text-gray-400 disabled:hover:bg-transparent",
    danger: "bg-status-red text-white hover:bg-red-700 focus:ring-status-red disabled:bg-status-red/50",
    ghost: "text-brand-blue-950 hover:bg-brand-blue-50 focus:ring-brand-blue-950 disabled:text-gray-400",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? "w-full" : ""} 
        ${disabled ? "cursor-not-allowed opacity-60" : ""} 
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

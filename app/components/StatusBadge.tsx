import React from "react";

export type BadgeVariant = 'brand' | 'info' | 'success' | 'warning' | 'error' | 'neutral';

interface StatusBadgeProps {
  status?: string;
  variant?: BadgeVariant;
  isSolid?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const statusVariantMap: Record<string, BadgeVariant> = {
  TERCAPAI: 'success',
  SELESAI: 'success',
  "STATUS AMAN": 'success',
  BERJALAN: 'info',
  "PERLU ATENSI": 'warning',
  GAGAL: 'error',
  DITANGGUHKAN: 'warning',
};

export default function StatusBadge({ status, variant, isSolid = false, children, className = "" }: StatusBadgeProps) {
  // Determine text content
  const content = children || status;
  
  // Determine variant logic (explicit prop overrides automatic mapping)
  const key = status ? status.trim().toUpperCase() : "";
  const activeVariant: BadgeVariant = variant || statusVariantMap[key] || 'neutral';

  // Base styles: px-3 (12px padding LR) py-0.5 (2px padding TB) rounded-full (pill)
  const baseClasses = "inline-flex items-center justify-center px-3 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors";
  
  const variants = {
    brand: isSolid 
      ? "bg-blue-600 text-white" 
      : "bg-blue-100 text-blue-700",
    info: isSolid 
      ? "bg-sky-500 text-white" 
      : "bg-sky-100 text-sky-700",
    success: isSolid 
      ? "bg-green-600 text-white" 
      : "bg-green-100 text-green-700",
    warning: isSolid 
      ? "bg-orange-500 text-white" 
      : "bg-orange-100 text-orange-700",
    error: isSolid 
      ? "bg-red-600 text-white" 
      : "bg-red-100 text-red-700",
    neutral: isSolid 
      ? "bg-gray-500 text-white" 
      : "bg-gray-200 text-gray-700",
  };

  return (
    <span className={`${baseClasses} ${variants[activeVariant]} ${className}`}>
      {content}
    </span>
  );
}
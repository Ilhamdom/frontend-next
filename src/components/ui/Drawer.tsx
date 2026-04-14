"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeft, MoreHorizontal, X } from "lucide-react";

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  /**
   * If true, forces it to be a bottom sheet on all screens.
   * If false/undefined, it acts responsively (Bottom on Mobile, Right Panel on Desktop).
   */
  forceBottomSheet?: boolean;
}

export function Drawer({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  forceBottomSheet = false,
}: DrawerProps) {
  const [mounted, setMounted] = useState(false);

  // Handle body scroll locking and Escape key
  useEffect(() => {
    if (open) {
      setMounted(true);
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => setMounted(false), 300); // 300ms matches transition duration
      document.body.style.overflow = "auto";
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (open) window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  if (!mounted && !open) return null;

  // Responsive Styles:
  // Desktop panel: w-[420px] max-w-[520px], full height, slide from right.
  // Mobile bottom sheet: full width, min-h-[280px], max-h-[90vh], rounded top, slide from bottom.
  const desktopClasses = !forceBottomSheet 
    ? "md:top-0 md:bottom-0 md:right-0 md:left-auto md:w-full md:max-w-[420px] lg:max-w-[520px] md:h-full md:rounded-none md:translate-y-0"
    : "";
    
  const desktopTransition = !forceBottomSheet
    ? (open ? "md:translate-x-0" : "md:translate-x-full")
    : "";

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end md:justify-center overflow-hidden">
      {/* Backdrop (Overlay) */}
      <div 
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div 
        className={`relative bg-white w-full shadow-2xl flex flex-col transition-all duration-300 ease-in-out
          bottom-0 left-0 rounded-t-[16px] max-h-[90vh] min-h-[280px]
          transform ${open ? "translate-y-0" : "translate-y-full"}
          ${desktopClasses} ${desktopTransition}
        `}
        role="dialog"
        aria-modal="true"
      >
        {/* Header Anatomy */}
        <div className="flex items-start justify-between px-4 py-3 border-b border-gray-100 shrink-0">
          <div className="flex items-center gap-3">
            <button 
              onClick={onClose}
              className="p-1.5 hover:bg-gray-100 rounded-full text-gray-500 hover:text-[#0B1F3A] transition-colors"
              aria-label="Kembali"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex flex-col">
              <h2 className="text-base font-bold text-[#0B1F3A] leading-tight">{title}</h2>
              {description && (
                <p className="text-xs font-medium text-gray-500 mt-0.5 leading-tight">{description}</p>
              )}
            </div>
          </div>
          
          <button 
            onClick={onClose} // Typically "..." but used as close or more options. We map to close/dismiss for now
            className="p-1.5 hover:bg-gray-100 rounded-full text-gray-400 hover:text-[#0B1F3A] transition-colors"
            aria-label="Opsi Lainnya"
          >
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area (Replace Area) - Spesifikasi 16px padding horizontal */}
        <div className="flex-1 px-4 py-4 overflow-y-auto custom-scrollbar">
          {children}
        </div>

        {/* Footer CTA Area */}
        {footer && (
          <div className="shrink-0 p-4 border-t border-gray-100 bg-white">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

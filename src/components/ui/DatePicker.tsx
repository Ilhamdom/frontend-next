"use client";

import React, { useState, useRef, useEffect } from "react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "./Calendar";

export interface DatePickerProps {
  value?: Date;
  onChange?: (date?: Date) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function DatePicker({
  value,
  onChange,
  placeholder = "Pilih tanggal",
  disabled,
  className = "",
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (date?: Date) => {
    if (onChange) {
      onChange(date);
    }
    setIsOpen(false); // Close upon specific selection
  };

  return (
    <div className={`relative w-full ${className}`} ref={containerRef}>
      {/* Trigger Button pretending to be an Input */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-3 py-2 text-left bg-white border rounded-lg text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]/30
          ${disabled ? "bg-gray-50 text-gray-400 cursor-not-allowed border-gray-200" : "border-gray-300 hover:border-gray-400 text-gray-900"}
          ${!value ? "text-gray-500" : "font-semibold"}
        `}
      >
        <span className="truncate">
          {value ? format(value, "dd MMMM yyyy", { locale: id }) : placeholder}
        </span>
        <CalendarIcon className="w-4 h-4 ml-2 text-gray-400 shrink-0" />
      </button>

      {/* Dropdown Floating Calendar */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 z-50 animate-in fade-in zoom-in-95 duration-100 bg-white rounded-[16px] shadow-lg border border-gray-200 w-auto">
          <Calendar
            mode="single"
            selected={value}
            onSelect={handleSelect}
            initialFocus
            captionLayout="dropdown-buttons"
            fromYear={1950}
            toYear={2050}
            className="border-none shadow-none rounded-none" // Avoid double rounding/borders 
          />
          {/* Terapkan Footer Area */}
          <div className="px-4 pb-4 pt-1 w-full flex justify-center">
             <button 
               onClick={() => setIsOpen(false)}
               className="w-full bg-[#1A1A1A] text-white text-[13px] font-bold py-2.5 rounded-lg hover:bg-black transition-colors"
             >
               Terapkan
             </button>
          </div>
        </div>
      )}
    </div>
  );
}

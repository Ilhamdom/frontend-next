"use client";

import React, { useState, useRef, useEffect } from "react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { Calendar } from "./Calendar";

export interface DateRangePickerProps {
  value?: DateRange;
  onChange?: (date?: DateRange) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function DateRangePicker({
  value,
  onChange,
  placeholder = "Pilih rentang tanggal",
  disabled,
  className = "",
}: DateRangePickerProps) {
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

  const handleSelect = (range?: DateRange) => {
    if (onChange) {
      onChange(range);
    }
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
          ${!value?.from ? "text-gray-500" : "font-semibold"}
        `}
      >
        <span className="truncate">
          {value?.from ? (
            value.to ? (
              <>
                {format(value.from, "dd LLL yyyy", { locale: id })} -{" "}
                {format(value.to, "dd LLL yyyy", { locale: id })}
              </>
            ) : (
              format(value.from, "dd LLL yyyy", { locale: id })
            )
          ) : (
            placeholder
          )}
        </span>
        <CalendarIcon className="w-4 h-4 ml-2 text-gray-400 shrink-0" />
      </button>

      {/* Dropdown Floating Calendar (Double Pane) */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 z-50 animate-in fade-in zoom-in-95 duration-100 bg-white rounded-[16px] shadow-lg border border-gray-200 w-auto">
          <Calendar
            mode="range" // Use range mode
            selected={value}
            onSelect={handleSelect}
            initialFocus
            numberOfMonths={2} // Two months side-by-side as shown in the spec for Range!
            className="border-none shadow-none rounded-none" 
          />
          {/* Terapkan Footer Area */}
          <div className="px-4 pb-4 pt-1 w-full flex justify-center border-t border-gray-50 mt-2">
             <button 
               onClick={() => setIsOpen(false)}
               className="w-40 bg-[#1A1A1A] text-white text-[13px] font-bold py-2.5 rounded-lg hover:bg-black transition-colors"
             >
               Terapkan
             </button>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check, Search } from "lucide-react";

export interface DropdownOption {
  label: string;
  value: string;
  description?: string; // For micro descriptions underneath
}

export interface DropdownProps {
  label?: string;
  options: DropdownOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  searchable?: boolean;
  searchPlaceholder?: string;
  disabled?: boolean;
  className?: string;
  error?: string;
}

export function Dropdown({
  label,
  options,
  value,
  onChange,
  placeholder = "Pilih item",
  searchable = true,
  searchPlaceholder = "Cari...",
  disabled = false,
  className = "",
  error,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close on outside click
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

  const filteredOptions = searchable 
    ? options.filter(opt => opt.label.toLowerCase().includes(searchQuery.toLowerCase()))
    : options;

  const toggleDropdown = () => {
    if (!disabled) setIsOpen(!isOpen);
  };

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
    setSearchQuery(""); // reset search
  };

  return (
    <div className={`flex flex-col gap-1 w-full relative ${className}`} ref={containerRef}>
      {/* Label Utama */}
      {label && (
        <label className="text-xs font-bold text-[#0B1F3A]">
          {label}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        disabled={disabled}
        onClick={toggleDropdown}
        className={`w-full flex items-center justify-between px-3 py-2.5 text-left bg-white border rounded-[8px] text-[13px] transition-all 
          focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]/30
          ${disabled ? "bg-gray-50 text-gray-400 cursor-not-allowed border-gray-200" : "border-gray-300 hover:border-gray-400 text-gray-900"}
          ${error ? "border-red-500 focus:ring-red-500/30" : ""}
          ${isOpen ? "border-[#0B1F3A] ring-1 ring-[#0B1F3A]" : ""}
        `}
      >
        <span className={`truncate ${!selectedOption ? "text-gray-500 font-medium" : "font-bold text-[#0B1F3A]"}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 ml-2 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#0B1F3A]" : "text-gray-400"}`} />
      </button>

      {/* Error Message */}
      {error && !isOpen && <span className="text-xs text-red-500 font-medium">{error}</span>}

      {/* Popover Dropdown List (Menyesuaikan gambar anatomi IDDS) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-1.5 z-50 bg-white border border-gray-200 rounded-[12px] shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-100">
          
          {/* Search Box */}
          {searchable && (
            <div className="p-2 border-b border-gray-100 bg-gray-50/50">
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                <input 
                  type="text"
                  autoFocus
                  placeholder={searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 text-[13px] bg-white border border-gray-200 rounded-[6px] focus:outline-none focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A] transition-colors"
                />
              </div>
            </div>
          )}

          {/* Options List */}
          <ul className="max-h-[240px] overflow-y-auto py-1 custom-scrollbar">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt, i) => {
                const isSelected = value === opt.value;
                return (
                  <li key={i}>
                    <button
                      type="button"
                      onClick={() => handleSelect(opt.value)}
                      className={`w-full flex items-center justify-between px-3 py-2 text-left text-[13px] transition-colors
                        ${isSelected ? "bg-brand-blue-50/50 text-[#0B1F3A] font-bold" : "text-gray-700 hover:bg-gray-50 font-medium"}
                      `}
                    >
                      <div className="flex flex-col truncate">
                         <span className="truncate">{opt.label}</span>
                         {opt.description && <span className="text-[10px] text-gray-400 font-medium mt-0.5 truncate">{opt.description}</span>}
                      </div>
                      
                      {/* Checkmark selected indicator */}
                      {isSelected && <Check className="w-4 h-4 text-[#0B1F3A] shrink-0 ml-2" />}
                    </button>
                  </li>
                );
              })
            ) : (
              <li className="px-4 py-6 text-center text-[13px] font-medium text-gray-400">
                Data tidak ditemukan
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

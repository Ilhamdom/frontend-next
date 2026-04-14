import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, MoreHorizontal } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Handle clicking outside to close the dropdown menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Memotong judul lebih dari 24 karakter (aturan Ellipsis di Judul)
  const truncateLabel = (label: string) => {
    return label.length > 24 ? label.substring(0, 24) + '...' : label;
  };

  const renderItem = (item: BreadcrumbItem, index: number, total: number) => {
    const isLast = index === total - 1;
    const itemContent = isLast ? (
      <span className="font-semibold text-gray-900" aria-current="page">
        {truncateLabel(item.label)}
      </span>
    ) : item.href ? (
      <Link href={item.href} className="text-gray-500 hover:text-blue-800 hover:underline transition-colors">
        {truncateLabel(item.label)}
      </Link>
    ) : (
      <span className="text-gray-500">
        {truncateLabel(item.label)}
      </span>
    );

    return (
      <li key={`crumb-${index}`} className="flex items-center">
        {itemContent}
        {/* Separator jarak = mx-2 (8px) sesuai spesifikasi */}
        {!isLast && <ChevronRight className="w-3.5 h-3.5 mx-2 text-gray-400 shrink-0" />}
      </li>
    );
  };

  if (!items || items.length === 0) return null;

  let visibleItems: React.ReactNode[] = [];

  if (items.length <= 4) {
    visibleItems = items.map((item, i) => renderItem(item, i, items.length));
  } else {
    // Tampilkan maksimal 4 link (1 awal + dropdown + 2 akhir)
    const firstItem = items[0];
    const lastItems = items.slice(items.length - 2);
    const hiddenItems = items.slice(1, items.length - 2);

    // Link Pertama
    visibleItems.push(renderItem({ ...firstItem }, 0, items.length));
    
    // Dropdown Ellipsis
    visibleItems.push(
      <li key="ellipsis" className="flex items-center relative" ref={dropdownRef}>
        <button 
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="text-gray-500 hover:text-blue-800 hover:bg-gray-100 rounded px-1 transition-colors flex items-center"
          aria-expanded={isDropdownOpen}
          aria-label="Tampilkan menu lainnya"
        >
          <MoreHorizontal className="w-4 h-4" />
        </button>
        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-lg py-2 min-w-[200px] z-50">
            {hiddenItems.map((hItem, idx) => (
              <div key={`hidden-${idx}`}>
                {hItem.href ? (
                  <Link 
                    href={hItem.href} 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-800 truncate"
                    onClick={() => setIsDropdownOpen(false)}
                    title={hItem.label}
                  >
                    {truncateLabel(hItem.label)}
                  </Link>
                ) : (
                  <span className="block px-4 py-2 text-sm text-gray-500 truncate" title={hItem.label}>
                    {truncateLabel(hItem.label)}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
        <ChevronRight className="w-3.5 h-3.5 mx-2 text-gray-400 shrink-0" />
      </li>
    );

    // Dua Link Terakhir
    lastItems.forEach((item, idx) => {
      visibleItems.push(renderItem(item, items.length - 2 + idx, items.length));
    });
  }

  return (
    <nav className={`flex items-center text-sm ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center gap-0 w-full flex-wrap">
        {visibleItems}
      </ol>
    </nav>
  );
}

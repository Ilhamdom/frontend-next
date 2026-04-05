"use client";
import Link from "next/link";
import { useState } from "react";

interface NavDropdownProps {
  label: string;
  items: { label: string; href: string }[];
}

export default function NavDropdown({ label, items }: NavDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Tombol utama */}
      <button
        className="flex items-center gap-1 text-white font-medium focus:outline-none px-2 py-1"
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
      >
        {label}
        {/* Chevron icon */}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {/* Dropdown panel */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 mt-2 w-60 bg-white border border-gray-200 rounded-xl shadow-lg transition-all duration-200 z-40 ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
      >
        <ul className="py-2">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-5 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors duration-150"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

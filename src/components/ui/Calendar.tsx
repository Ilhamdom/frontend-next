"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { id } from "date-fns/locale";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      locale={id}
      showOutsideDays={showOutsideDays}
      className={`p-4 bg-white rounded-[16px] shadow-lg border border-gray-200 ${className}`}
      classNames={{
        months: "flex flex-col space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center pb-2",
        caption_label: "text-sm font-black text-[#0B1F3A] hidden", // Hidden when dropdown is active typically
        caption_dropdowns: "flex justify-center gap-2",
        dropdown: "text-[13px] font-bold text-[#0B1F3A] bg-transparent border border-gray-200 rounded-[8px] px-3 py-1 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]/20 transition-colors",
        dropdown_month: "",
        dropdown_year: "",
        dropdown_icon: "hidden", // hide native dropdown arrow to keep it incredibly clean like IDDS spec
        nav: "flex items-center",
        nav_button: "h-8 w-8 bg-white p-0 text-gray-500 hover:text-[#0B1F3A] border border-gray-200 hover:border-gray-300 rounded-[8px] flex items-center justify-center transition-colors shadow-sm",
        nav_button_previous: "absolute left-0",
        nav_button_next: "absolute right-0",
        table: "w-full border-collapse space-y-1",
        head_row: "flex w-full mb-3",
        head_cell: "text-gray-400 w-9 font-bold text-[11px] uppercase text-center tracking-wider",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 flex items-center justify-center focus-within:relative focus-within:z-20 [&:has([aria-selected].day-range-end)]:rounded-r-[8px] [&:has([aria-selected].day-outside)]:bg-gray-100/50 [&:has([aria-selected])]:bg-brand-blue-50 first:[&:has([aria-selected])]:rounded-l-[8px] last:[&:has([aria-selected])]:rounded-r-[8px]",
        day: "h-9 w-9 p-0 font-bold aria-selected:opacity-100 hover:bg-gray-100 rounded-[8px] text-gray-700 transition-colors inline-flex items-center justify-center",
        day_range_end: "day-range-end",
        day_selected: "bg-[#0B1F3A] text-white hover:bg-[#0B1F3A] hover:text-white focus:bg-[#0B1F3A] focus:text-white font-black",
        day_today: "bg-gray-100 font-extrabold text-[#0B1F3A]",
        day_outside: "day-outside text-gray-300 aria-selected:bg-gray-100/50 aria-selected:text-gray-500 aria-selected:bg-transparent",
        day_disabled: "text-gray-300 opacity-50",
        day_range_middle: "aria-selected:bg-brand-blue-50 aria-selected:text-[#0B1F3A] aria-selected:rounded-none",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };

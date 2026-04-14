import React, { useState, ReactNode } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionProps {
  children: ReactNode;
  className?: string;
  defaultOpenIndex?: number | null;
}

export function Accordion({ children, className = "", defaultOpenIndex = null }: AccordionProps) {
  // Ensure only one accordion is open at a time to keep user focus
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`w-full bg-white rounded-lg border border-gray-200 overflow-hidden ${className}`}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            isOpen: openIndex === index,
            onClick: () => handleToggle(index),
            isLast: index === React.Children.count(children) - 1,
          });
        }
        return child;
      })}
    </div>
  );
}

interface AccordionItemProps {
  title: ReactNode;
  children: ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
  isLast?: boolean;
}

export function AccordionItem({ title, children, isOpen, onClick, isLast }: AccordionItemProps) {
  return (
    <div className={`w-full ${!isLast ? 'border-b border-gray-200' : ''}`}>
      <button
        type="button"
        className="w-full flex items-center justify-between px-4 py-4 text-left focus:outline-none focus:bg-gray-50 hover:bg-gray-50 transition-colors"
        onClick={onClick}
      >
        <span className="font-semibold text-gray-900 pr-2">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-600 shrink-0 ml-2" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600 shrink-0 ml-2" />
        )}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export interface ButtonGroupOption {
  label: React.ReactNode;
  value: string;
}

export interface ButtonGroupProps {
  options: ButtonGroupOption[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  size?: '32' | '40' | '44' | '48' | '56';
  fullWidth?: boolean;
}

export function ButtonGroup({
  options,
  value,
  onChange,
  className = '',
  size = '44',
  fullWidth = false,
}: ButtonGroupProps) {
  const sizes: Record<string, string> = {
    '32': 'h-8 px-3 text-xs min-w-8',
    '40': 'h-10 px-4 text-sm min-w-10',
    '44': 'h-11 px-5 text-sm min-w-11',
    '48': 'h-12 px-6 text-base min-w-12',
    '56': 'h-14 px-8 text-base min-w-14',
  };

  return (
    <div className={`inline-flex rounded-lg shadow-sm ${fullWidth ? 'w-full flex' : ''} ${className}`}>
      {options.map((option, index) => {
        const isSelected = value === option.value;
        const isFirst = index === 0;
        const isLast = index === options.length - 1;
        
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange?.(option.value)}
            className={`
              relative inline-flex items-center justify-center transition-colors focus:z-10 focus:outline-none focus:ring-2 focus:ring-brand-blue-950 border
              ${sizes[size] || sizes['44']}
              ${fullWidth ? 'flex-1' : ''}
              ${isSelected 
                ? 'bg-gray-100 text-brand-blue-950 font-bold border-gray-300 z-[1]' 
                : 'bg-white text-gray-700 font-medium hover:bg-gray-50 border-gray-300 z-0 hover:z-[1]'}
              ${isFirst ? 'rounded-l-lg' : 'rounded-l-none'}
              ${isLast ? 'rounded-r-lg' : 'rounded-r-none'}
              ${!isFirst ? '-ml-px' : ''}
            `.trim().replace(/\s+/g, ' ')}
            aria-pressed={isSelected}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

import React, { useRef, useEffect } from 'react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  subtext?: string;
  indeterminate?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, subtext, indeterminate = false, disabled, className = '', ...props }, ref) => {
    
    const internalRef = useRef<HTMLInputElement>(null);
    const resolvedRef = (ref || internalRef) as React.MutableRefObject<HTMLInputElement>;

    useEffect(() => {
      if (resolvedRef.current) {
        resolvedRef.current.indeterminate = indeterminate;
      }
    }, [resolvedRef, indeterminate]);

    return (
      <label 
        className={`flex items-start gap-3 w-fit group ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
      >
        {/* Input Asli Dibuat Tersembunyi tapi Fungsional (Sr-Only) */}
        <div className="relative flex items-center justify-center mt-0.5 shrink-0">
          <input 
            type="checkbox" 
            ref={resolvedRef}
            disabled={disabled}
            className="peer sr-only" 
            {...props} 
          />
          
          {/* Box Kustom pengganti Checkbox native */}
          <div 
            className={`w-5 h-5 rounded-[4px] border border-gray-300 bg-white transition-all duration-200 flex items-center justify-center
              ${disabled ? '' : 'group-hover:border-gray-400 group-active:scale-95 peer-focus-visible:ring-2 peer-focus-visible:ring-[#0B1F3A]/30'}
              ${indeterminate 
                ? 'bg-[#1546B4] border-[#1546B4]' /* Indeterminate state warna Royal Blue/Tertiary Brand */
                : 'peer-checked:bg-[#0B1F3A] peer-checked:border-[#0B1F3A]' /* Checked state warna Navy/Primary Brand */}
            `}
          >
            {indeterminate ? (
              /* Indikator Minus untuk Indeterminate */
              <svg 
                className="w-3.5 h-3.5 text-white pointer-events-none" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" 
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            ) : (
              /* Indikator Centang untuk Checked */
              <svg 
                className="w-3.5 h-3.5 text-white pointer-events-none hidden peer-checked:block" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            )}
          </div>
        </div>
        
        {/* Area Label dan Subtext */}
        {(label || subtext) && (
          <div className="flex flex-col">
            {label && <span className={`text-sm font-semibold select-none ${disabled ? 'text-gray-500' : 'text-gray-900 group-hover:text-black'} leading-tight`}>{label}</span>}
            {subtext && <span className={`text-xs mt-1 select-none ${disabled ? 'text-gray-400' : 'text-gray-500'}`}>{subtext}</span>}
          </div>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

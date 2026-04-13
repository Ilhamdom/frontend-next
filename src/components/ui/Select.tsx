import React, { forwardRef, SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { label: string; value: string }[] | string[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 w-full">
        {label && (
          <label className="text-xs font-bold text-brand-blue-900">
            {label} 
            {props.required && <span className="text-status-red ml-0.5">*</span>}
          </label>
        )}
        <select
          ref={ref}
          className={`w-full rounded-lg border bg-white px-3 py-2 text-sm text-gray-800 transition-colors 
            focus:outline-none focus:ring-1 focus:border-brand-gold-500 focus:ring-brand-gold-500
            disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed
            ${error ? 'border-status-red focus:border-status-red focus:ring-status-red' : 'border-gray-300'}
            ${className}
          `}
          {...props}
        >
          {options.map((opt, i) => {
            const val = typeof opt === 'string' ? opt : opt.value;
            const lbl = typeof opt === 'string' ? opt : opt.label;
            return (
              <option key={i} value={val}>{lbl}</option>
            );
          })}
        </select>
        {error && (
          <p className="text-xs text-status-red font-medium mt-0.5">{error}</p>
        )}
      </div>
    );
  }
);
Select.displayName = 'Select';

export { Select };

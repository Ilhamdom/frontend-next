import React, { forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 w-full">
        {label && (
          <label className="text-xs font-bold text-brand-blue-900">
            {label} 
            {props.required && <span className="text-status-red ml-0.5">*</span>}
          </label>
        )}
        <div className="relative flex items-center w-full">
          {icon && (
            <div className="absolute left-3 text-gray-400">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={`w-full rounded-lg border bg-white px-3 py-2 text-sm text-gray-800 transition-colors 
              focus:outline-none focus:ring-1 focus:border-brand-gold-500 focus:ring-brand-gold-500
              disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed
              ${icon ? 'pl-9' : ''}
              ${error ? 'border-status-red focus:border-status-red focus:ring-status-red' : 'border-gray-300'}
              ${className}
            `}
            {...props}
          />
        </div>
        {error && (
          <p className="text-xs text-status-red font-medium mt-0.5">{error}</p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };

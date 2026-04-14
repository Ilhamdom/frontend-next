import React from 'react';
import { Info, CheckCircle2, AlertTriangle, XCircle, X, HelpCircle } from 'lucide-react';

interface AlertProps {
  type?: 'neutral' | 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children: React.ReactNode;
  actionText?: string;
  onAction?: () => void;
  onClose?: () => void;
  className?: string;
}

export function Alert({ 
  type = 'info', 
  title, 
  children,
  actionText,
  onAction,
  onClose,
  className = ""
}: AlertProps) {
  const varMap = {
    neutral: {
      bg: "bg-white",
      border: "border-gray-200",
      text: "text-gray-700",
      titleText: "text-gray-900",
      iconColor: "text-gray-900",
      IconElement: HelpCircle
    },
    info: {
      bg: "bg-blue-50/50",
      border: "border-blue-500",
      text: "text-gray-700",
      titleText: "text-blue-600",
      iconColor: "text-blue-600",
      IconElement: Info
    },
    success: {
      bg: "bg-green-50/50",
      border: "border-green-500",
      text: "text-gray-700",
      titleText: "text-green-600",
      iconColor: "text-green-600",
      IconElement: CheckCircle2
    },
    warning: {
      bg: "bg-orange-50/50",
      border: "border-orange-500",
      text: "text-gray-700",
      titleText: "text-orange-600",
      iconColor: "text-orange-600",
      IconElement: AlertTriangle
    },
    error: {
      bg: "bg-red-50/50",
      border: "border-red-500",
      text: "text-gray-700",
      titleText: "text-red-600",
      iconColor: "text-red-600",
      IconElement: XCircle
    },
  };

  const active = varMap[type];
  const Icon = active.IconElement;

  return (
    <div className={`p-4 rounded-xl border flex items-start gap-3 ${active.border} ${active.bg} ${className}`}>
      <div className={`shrink-0 mt-0.5 ${active.iconColor}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 flex flex-col gap-1">
        {title && <h4 className={`text-sm font-bold leading-tight ${active.titleText}`}>{title}</h4>}
        <div className={`text-sm leading-relaxed ${active.text}`}>
          {children}
        </div>
        {actionText && (
          <button 
            type="button" 
            onClick={onAction} 
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 mt-1 flex w-fit hover:underline"
          >
            {actionText}
          </button>
        )}
      </div>
      {onClose && (
        <button 
          onClick={onClose} 
          className="p-1 shrink-0 text-gray-400 hover:text-gray-700 mt-[-4px] mr-[-4px] transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-label="Close"
        >
          <X className="w-4 h-4" strokeWidth={2.5} />
        </button>
      )}
    </div>
  );
}

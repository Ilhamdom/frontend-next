import React from 'react';

interface AlertProps {
  type?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children: React.ReactNode;
}

export function Alert({ type = 'info', title, children }: AlertProps) {
  const varMap = {
    info: {
      bg: "bg-status-info/10",
      border: "border-status-info",
      text: "text-brand-blue-950",
      titleText: "text-status-info",
    },
    success: {
      bg: "bg-status-green/10",
      border: "border-status-green",
      text: "text-brand-blue-950",
      titleText: "text-status-green",
    },
    warning: {
      bg: "bg-status-yellow/20",
      border: "border-status-yellow",
      text: "text-yellow-900",
      titleText: "text-yellow-700",
    },
    error: {
      bg: "bg-status-red/10",
      border: "border-status-red",
      text: "text-status-red",
      titleText: "text-status-red",
    },
  };

  const active = varMap[type];

  return (
    <div className={`p-4 rounded-r-lg border-l-4 ${active.border} ${active.bg} mb-4`}>
      {title && <h4 className={`text-sm font-bold mb-1 ${active.titleText}`}>{title}</h4>}
      <div className={`text-xs font-medium ${active.text}`}>
        {children}
      </div>
    </div>
  );
}

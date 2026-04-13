"use client";
interface PageHeaderProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export default function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <div className="flex items-start justify-between mb-10 gap-6 max-w-7xl mx-auto w-full">
      <div className="flex-1">
        <h1 className="text-3xl font-extrabold text-blue-900 tracking-tight">{title}</h1>
        {description && <p className="text-gray-500 text-base mt-2">{description}</p>}
      </div>
      {action && (
        <div className="shrink-0 flex items-center">{action}</div>
      )}
    </div>
  );
}


interface TableCardProps {
  title?: string;
  toolbar?: React.ReactNode;
  children: React.ReactNode;
}

export default function TableCard({ title, toolbar, children }: TableCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-8">
      {(title || toolbar) && (
        <div className="flex items-center justify-between mb-4 gap-4">
          {title && <div className="text-lg font-bold text-blue-900">{title}</div>}
          {toolbar && <div>{toolbar}</div>}
        </div>
      )}
      <div className="overflow-x-auto">{children}</div>
    </div>
  );
}
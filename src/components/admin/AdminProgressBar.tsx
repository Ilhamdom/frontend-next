interface AdminProgressBarProps {
  value: number;
}

export default function AdminProgressBar({ value }: AdminProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value));
  
  let colorClass = "bg-status-red";
  if (clamped > 40 && clamped <= 80) {
    colorClass = "bg-status-yellow";
  } else if (clamped > 80) {
    colorClass = "bg-status-green";
  }

  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className={`h-2 rounded-full transition-all duration-300 ${colorClass}`}
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}

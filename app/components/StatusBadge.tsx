interface StatusBadgeProps {
  status: string;
}

const statusMap: Record<string, { bg: string; text: string }> = {
  TERCAPAI: { bg: "bg-emerald-100", text: "text-emerald-700" },
  SELESAI: { bg: "bg-emerald-100", text: "text-emerald-700" },
  "STATUS AMAN": { bg: "bg-emerald-100", text: "text-emerald-700" },
  BERJALAN: { bg: "bg-blue-100", text: "text-blue-700" },
  "PERLU ATENSI": { bg: "bg-pink-100", text: "text-pink-700" },
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const key = status.trim().toUpperCase();
  const style = statusMap[key] || { bg: "bg-gray-100", text: "text-gray-500" };
  return (
    <span className={`px-2 py-0.5 rounded-md text-xs font-semibold ${style.bg} ${style.text}`}>{status}</span>
  );
}
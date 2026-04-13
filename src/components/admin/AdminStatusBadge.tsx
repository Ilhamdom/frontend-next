interface AdminStatusBadgeProps {
  status: string;
}

const statusMap: Record<string, string> = {
  TERCAPAI: "bg-status-green/20 text-status-green",
  BERJALAN: "bg-status-info/20 text-status-info",
  "PERLU ATENSI": "bg-status-red/20 text-status-red",
  SELESAI: "bg-status-green/20 text-status-green",
  "BELUM MULAI": "bg-status-red/20 text-status-red",
  "HAMPIR SELESAI": "bg-status-yellow/30 text-yellow-700",
  AKTIF: "bg-status-info/20 text-status-info",
};

export default function AdminStatusBadge({ status }: AdminStatusBadgeProps) {
  const normalized = status.trim().toUpperCase();
  const styleClass = statusMap[normalized] || "bg-gray-100 text-gray-600";
  return (
    <span className={`inline-block rounded-md px-2 py-0.5 text-xs font-bold ${styleClass}`}>{status}</span>
  );
}

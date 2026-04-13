interface AdminStatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  badgeText?: string;
  variant?: "default" | "blue" | "green" | "orange";
  icon?: React.ReactNode;
}

const variantStyles = {
  default: "",
  blue: "border-blue-800",
  green: "border-green-600",
  orange: "border-orange-500",
};

export default function AdminStatCard({ title, value, subtitle, badgeText, variant = "default", icon }: AdminStatCardProps) {
  return (
    <div className={`relative bg-white rounded-2xl border border-gray-200 p-6 min-w-[180px] ${variantStyles[variant]}`.trim()}>
      {/* Badge kanan atas */}
      {badgeText && (
        <span className="absolute top-4 right-4 bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded-full">
          {badgeText}
        </span>
      )}
      {/* Value dan icon */}
      <div className="flex items-center gap-3 mb-2">
        {/* Render icon area */}
        {icon && (
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-800 font-bold text-lg">
            {icon}
          </div>
        )}
        <span className="text-3xl font-bold text-[#0B1F3A]">{value}</span>
      </div>
      <div className="text-xs font-semibold text-gray-400 uppercase mb-1">{title}</div>
      {subtitle && <div className="text-sm text-gray-500">{subtitle}</div>}
    </div>
  );
}

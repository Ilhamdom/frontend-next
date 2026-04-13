import { IconUser } from "@tabler/icons-react";
interface StatCardProps {
	title: string;
	value: string;
	subtitle?: string;
	badgeText?: string;
	variant?: "default" | "green" | "blue";
}

const variantStyles = {
	default: {
		iconBg: "bg-gray-100 text-blue-900",
		badge: "bg-gray-100 text-gray-700",
		value: "text-blue-900",
	},
	green: {
		iconBg: "bg-emerald-100 text-emerald-700",
		badge: "bg-emerald-100 text-emerald-700",
		value: "text-emerald-700",
	},
	blue: {
		iconBg: "bg-blue-100 text-blue-700",
		badge: "bg-blue-100 text-blue-700",
		value: "text-blue-700",
	},
};

export default function StatCard({ title, value, subtitle, badgeText, variant = "default" }: StatCardProps) {
	const styles = variantStyles[variant] || variantStyles.default;
	return (
		<div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col relative min-w-45 min-h-30 shadow-sm">
			{/* Icon area kiri atas */}
			<div className={`absolute left-4 top-4 w-8 h-8 rounded-lg flex items-center justify-center text-lg font-bold`}>
				<IconUser size={20} stroke={1.5} />
			</div>
			{/* Badge kanan atas */}
			{badgeText && (
				<span className={`absolute right-4 top-4 px-2 py-0.5 rounded-full text-xs font-semibold ${styles.badge}`}>{badgeText}</span>
			)}
			<div className="flex-1 flex flex-col justify-end pt-6">
				<div className={`text-2xl font-extrabold mb-1 ${styles.value}`}>{value}</div>
				<div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">{title}</div>
				{subtitle && <div className="text-xs text-gray-400 font-medium">{subtitle}</div>}
			</div>
		</div>
	);
}
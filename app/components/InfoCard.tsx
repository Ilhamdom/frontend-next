import React from "react";

interface InfoCardProps {
	title: string;
	children: React.ReactNode;
	accent?: "blue" | "green" | "orange";
	actionLabel?: string;
}

const accentStyles = {
	blue: "text-blue-800 border-blue-100",
	green: "text-emerald-700 border-emerald-100",
	orange: "text-orange-700 border-orange-100",
};

export default function InfoCard({ title, children, accent = "blue", actionLabel }: InfoCardProps) {
	const accentClass = accentStyles[accent] || accentStyles.blue;
	return (
		<div className={`bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-4`}>
			<div className="flex items-center justify-between mb-3">
				<div className={`text-base font-bold ${accentClass}`}>{title}</div>
				{actionLabel && (
					<span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gray-50 border ${accentClass}`}>{actionLabel}</span>
				)}
			</div>
			<div>{children}</div>
		</div>
	);
}
interface ProgressBarProps {
	value: number;
	color?: "blue" | "green";
}

export default function ProgressBar({ value, color = "blue" }: ProgressBarProps) {
	const clamped = Math.max(0, Math.min(100, value));
	const barColor = color === "green" ? "bg-emerald-500" : "bg-blue-500";
	return (
		<div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
			<div
				className={`h-2 rounded-full transition-all duration-300 ${barColor}`}
				style={{ width: `${clamped}%` }}
			/>
		</div>
	);
}
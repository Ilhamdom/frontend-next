interface SectionTitleProps {
  title: string;
  align?: "left" | "center";
  accentColor?: "blue" | "yellow";
}

export default function SectionTitle({ title, align = "left", accentColor = "blue" }: SectionTitleProps) {
  const accentClass = accentColor === "yellow" ? "bg-yellow-400" : "bg-blue-700";
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const accentAlignClass = align === "center" ? "mx-auto" : "";

  return (
    <div>
      <h2 className={`text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-2 ${alignClass}`}>{title}</h2>
      <div className={`h-1 w-20 ${accentClass} rounded-full mb-8 ${accentAlignClass}`} />
    </div>
  );
}
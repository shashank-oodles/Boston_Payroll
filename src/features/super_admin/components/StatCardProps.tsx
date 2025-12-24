import type { StatCardProps } from "../types";

export function StatCardProps({
  label,
  value,
  description,
  accent = "orange",
  icon
}: StatCardProps) {
  const accentStyles: Record<typeof accent, string> = {
    orange: "text-orange-500 bg-orange-100",
    green: "text-green-600 bg-green-100",
    blue: "text-blue-600 bg-blue-100",
    red: "text-red-600 bg-red-100",
  };

  const Icon = icon;

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <span
          className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold ${accentStyles[accent]}`}
        >
          <Icon className="text-lg"/>
        </span>
        <p className="text-sm font-medium text-gray-600">{label}</p>
      </div>

      <p className="text-2xl font-semibold text-[#005151]">{value}</p>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  );
}
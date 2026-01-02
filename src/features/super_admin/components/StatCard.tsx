import type { StatCardProps } from "../types";

export function StatCard({
  label,
  value,
  description,
  accent = "orange",
  icon: Icon
}: StatCardProps) {
  const accentStyles: Record<typeof accent, string> = {
    orange: "text-orange-500 bg-orange-100",
    green: "text-green-600 bg-green-100",
    blue: "text-blue-600 bg-blue-100",
    red: "text-red-600 bg-red-100",
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col gap-2">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div
          className={`p-2 rounded-lg ${accentStyles[accent]}`}
        >
          <Icon className="text-lg" />
        </div>
        <p className="font-semibold text-gray-800 text-sm leading-tight">
          {label}
        </p>
      </div>

      {/* Value */}
      <p className="text-2xl font-bold text-[#005151] leading-none">
        {value}
      </p>

      {/* Description (optional) */}
      {description && (
        <p className="text-xs text-gray-500 leading-snug">
          {description}
        </p>
      )}
    </div>
  );
}
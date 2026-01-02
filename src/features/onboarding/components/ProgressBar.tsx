export function ProgressBar({ percent }: { percent: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
        <span>Progress Bar</span>
        <span className="text-orange-500">{percent}%</span>
      </div>
      <div className="h-2 bg-orange-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-orange-500 transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

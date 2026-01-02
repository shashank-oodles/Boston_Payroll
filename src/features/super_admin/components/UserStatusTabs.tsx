import { useState } from "react";

const TABS = [
  { key: "all", label: "All", count: 16 },
  { key: "active", label: "Active", count: 8 },
  { key: "inactive", label: "Inactive", count: 3 },
  { key: "pending", label: "Pending", count: 3 },
];

export function UserStatusTabs() {
  const [active, setActive] = useState("all");

  return (
    <div className="flex gap-6 px-4 pt-4 bg-white rounded-lg shadow-sm mb-4">
      {TABS.map(tab => (
        <button
          key={tab.key}
          onClick={() => setActive(tab.key)}
          className={`relative pb-2 whitespace-nowrap text-sm ${
            active === tab.key ? "font-medium text-gray-900" : "text-gray-500"
          }`}
        >
          {tab.label} ({tab.count})
          {active === tab.key && (
            <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-orange-500" />
          )}
        </button>
      ))}
    </div>
  );
}

import { useState } from "react";

const TABS = [
  { key: "all", label: "All", count: 16 },
  { key: "active", label: "Active", count: 8 },
  { key: "inactive", label: "Inactive", count: 3 },
  { key: "pending", label: "Pending", count: 3 },
  { key: "archived", label: "Archived", count: 2 },
];

export function UserStatusTabs() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="flex gap-6 pt-4 pr-4 pl-4 rounded-lg bg-white border-1 border-gray-100 shadow-sm mb-4">
      {TABS.map(tab => {
        const isActive = activeTab === tab.key;

        return (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`
              relative pb-2 text-sm whitespace-nowrap cursor-pointer
              ${
                isActive
                  ? "text-gray-900 font-medium"
                  : "text-gray-500 hover:text-gray-700"
              }
            `}
          >
            {tab.label} ({tab.count})

            {isActive && (
              <span className="absolute left-0 -bottom-[.0625rem] w-full h-[.125rem] bg-orange-500 rounded-full" />
            )}
          </button>
        );
      })}
    </div>
  );
}

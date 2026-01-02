import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { SubscriptionBreakdownData } from "../constants";

const data = SubscriptionBreakdownData

const total = data.reduce((sum, d) => sum + d.value, 0);

export function SubscriptionBreakdown() {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
      <h3 className="text-sm font-semibold text-gray-800 mb-3">
        Subscription Breakdown
      </h3>

      <div className="h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={2}
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>

            {/* Center text */}
            <text
              x="50%"
              y="45%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-gray-500 text-xs"
            >
              Total Subscriptions
            </text>
            <text
              x="50%"
              y="55%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-gray-900 text-xl font-semibold"
            >
              {total}
            </text>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-3 text-sm">
        {data.map(item => (
          <div key={item.name} className="text-center">
            <p className="text-gray-500">{item.name}</p>
            <p className="font-semibold" style={{ color: item.color }}>
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

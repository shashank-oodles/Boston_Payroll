import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ClientDistributionData } from "../constants";

const data = ClientDistributionData

export function ClientDistributionChart() {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
      <h3 className="text-sm font-semibold text-gray-800 mb-3">
        Client Distribution
      </h3>

      <div className="h-[16rem] sm:h-[20rem]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barSize={36}
            margin={{ top: 20, right: 20, left: 10, bottom: 10 }}
          >
            {/* Gradient definition */}
            <defs>
              <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#EC6016" stopOpacity={1} />
                <stop offset="100%" stopColor="#EC6016" stopOpacity={0.25} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="4 4"
              vertical={false}
              stroke="#E5E7EB"
            />

            <XAxis
              dataKey="state"
              tick={{ fontSize: 12, fill: "#6B7280" }}
              axisLine={false}
              tickLine={false}
              label={{
                value: "State",
                position: "insideBottom",
                offset: -10,
                fill: "#6B7280",
                fontSize: 12,
              }}
            />

            <YAxis
              tick={{ fontSize: 12, fill: "#6B7280" }}
              axisLine={false}
              tickLine={false}
              label={{
                value: "Number of Clients",
                angle: -90,
                position: "insideLeft",
                fill: "#6B7280",
                fontSize: 12,
              }}
            />

            <Tooltip
              cursor={{ fill: "rgba(236, 96, 22, 0.05)" }}
              contentStyle={{
                borderRadius: 8,
                border: "1px solid #E5E7EB",
                fontSize: 12,
              }}
            />

            <Bar
              dataKey="clients"
              fill="url(#orangeGradient)"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

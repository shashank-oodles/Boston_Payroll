import { StatCard } from './StatCard';
import { HiUsers } from "react-icons/hi2";
import { ImUserCheck } from "react-icons/im";
import { HiMiniUserPlus } from "react-icons/hi2";
import { FaUserSlash } from "react-icons/fa6";

export function UserStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <StatCard
        label="Total Users"
        value={324}
        description="All users across payroll clients and internal roles."
        accent="orange"
        icon={HiUsers}
      />

      <StatCard
        label="Active Users (Last 7 Days)"
        value={217}
        description="Users who logged in or performed actions recently."
        accent="green"
        icon={ImUserCheck}
      />

      <StatCard
        label="New Users This Month"
        value={42}
        description="Users added or activated this calendar month."
        accent="blue"
        icon={HiMiniUserPlus}
      />

      <StatCard
        label="Inactive Users"
        value={14}
        description="Users with no platform activity or blocked access."
        accent="red"
        icon={FaUserSlash}
      />
    </div>
  );
}
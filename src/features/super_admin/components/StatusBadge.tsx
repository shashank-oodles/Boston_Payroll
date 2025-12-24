import type { UserStatus } from "../types";

export function StatusBadge({ status }: { status: UserStatus }) {
  const styles = {
    Active: "bg-green-100 text-green-700",
    Inactive: "bg-red-100 text-red-600",
    Pending: "bg-yellow-100 text-yellow-700",
  };

  return (
    <span
      className={`px-2.5 py-1 text-xs font-medium rounded-full inline-flex items-center gap-1 ${styles[status]}`}
    >
      ● {status}
    </span>
  );
}

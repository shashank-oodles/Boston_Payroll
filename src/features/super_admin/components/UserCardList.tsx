import { StatusBadge } from "./StatusBadge";
import type { User } from "../types";

export function UserCardList({ data }: { data: User[] }) {
  return (
    <>
      {data.map(user => (
        <div
          key={user.id}
          className="bg-white rounded-xl p-4 shadow-sm"
        >
          <div className="flex justify-between mb-3">
            <p className="font-semibold">{user.id}</p>
            <StatusBadge status={user.status} />
          </div>

          <div className="space-y-2 text-sm mb-6">
            <p><span className="text-gray-500">Name:</span> {user.name}</p>
            <p><span className="text-gray-500">Email:</span> {user.email}</p>
            <p><span className="text-gray-500">Role:</span> {user.role}</p>
            <p><span className="text-gray-500">Client:</span> {user.client}</p>
            <p><span className="text-gray-500">Last Login:</span> {user.lastLogin}</p>
          </div>

          <div className="h-[.0625rem] bg-gray-300 rounded-3xl"></div>

          <button className="w-full mt-4 text-orange-500 font-medium">
            View Details
          </button>
        </div>
      ))}
    </>
  );
}

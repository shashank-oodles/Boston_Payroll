import { IoSearch } from "react-icons/io5";

export function UserTableToolbar() {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 bg-white px-3 py-2 border border-gray-200 shadow-sm rounded-md">
        <IoSearch className="text-gray-400 text-xl" />
        <input
          placeholder="Search"
          className="flex-1 outline-none text-sm"
        />
      </div>
    </div>
  );
}

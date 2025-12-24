import { IoSearch } from "react-icons/io5";

export function UserTableToolbar() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
      <div className="
                        flex items-center px-2 py-1.5 gap-2 text-sm bg-white
                        border border-gray-200 rounded-md
                        focus-within:ring-1 focus-within:ring-orange-400
                        focus-within:border-orange-400 sm:w-70
                        ">
                <IoSearch className="text-xl text-gray-400" />
                <input
                    placeholder="Search"
                    className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                />
            </div>
    </div>
  );
}

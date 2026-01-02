import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";

type Props = {
  name: string;
  role: string;
  avatarUrl?: string;
  onProfile?: () => void;
  onLogout?: () => void;
};

export function UserProfileDropdown({
  name,
  role,
  avatarUrl = "/profile.jpg",
  onProfile,
  onLogout,
}: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative hidden lg:block">
      {/* Trigger */}
      <button
        onClick={() => setOpen(prev => !prev)}
        className="
          flex items-center gap-3
          bg-gray-100 rounded-2xl
          px-3 py-1
          cursor-pointer
          hover:bg-gray-200
        "
      >
        <img
          src={avatarUrl}
          alt="Profile"
          className="h-10 w-10 rounded-full object-cover"
        />

        <div className="hidden sm:flex flex-col text-left">
          <span className="text-sm font-semibold text-gray-800">
            {name}
          </span>
          <span className="text-xs text-gray-500">
            {role}
          </span>
        </div>

        <IoIosArrowDown
          className={`text-gray-600 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute right-0 mt-3 w-56
            bg-white rounded-xl
            shadow-xl border border-gray-200
            z-50
          "
        >
          <button
            onClick={() => {
              setOpen(false);
              onProfile?.();
            }}
            className="
              w-full flex items-center gap-3
              px-4 py-3 text-gray-800
              hover:bg-gray-50 cursor-pointer
            "
          >
            <FaRegUser className="text-lg" />
            <span>Profile</span>
          </button>

          <button
            onClick={() => {
              setOpen(false);
              onLogout?.();
            }}
            className="
              w-full flex items-center gap-3
              px-4 py-3 text-gray-800
              hover:bg-gray-50 cursor-pointer
            "
          >
            <MdOutlineLogout className="text-lg text-red-500" />
            <span className="text-red-500">Logout</span>
          </button>
        </div>
      )}
    </div>
  );
}

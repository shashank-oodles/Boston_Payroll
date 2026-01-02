import { useEffect, useRef, useState } from "react";
import { FaBell } from "react-icons/fa";
import { NotificationsPanel } from "../../super_admin/components/NotificationsPanel";
import { notifications } from "../../super_admin/constants";

export function NotificationBell() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      {/* Bell icon */}
      <button
        onClick={() => setOpen(prev => !prev)}
        className="relative p-2 rounded-full hover:bg-gray-100 cursor-pointer"
      >
        <FaBell className="text-orange-500 text-xl" />

        {/* Optional unread dot */}
        <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
      </button>

      {/* Overlay */}
      {open && (
        <NotificationsPanel
          notifications={notifications}
          onClearAll={() => console.log("clear all")}
        />
      )}
    </div>
  );
}

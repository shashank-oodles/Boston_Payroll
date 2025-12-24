import { useEffect, useRef, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdModeEdit } from "react-icons/md";
import { BsActivity } from "react-icons/bs";
import { IoMdArchive } from "react-icons/io";

export function RowActions() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className="p-1 rounded hover:bg-gray-100"
      >
        <HiOutlineDotsVertical className="text-gray-500" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 rounded-lg bg-white shadow-lg border border-gray-200 z-50">
          <button className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-gray-50 cursor-pointer">
            <MdModeEdit /> Edit
          </button>
          <button className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-gray-50 cursor-pointer">
            <BsActivity /> Activity Logs
          </button>
          <button className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-gray-50 cursor-pointer">
            <IoMdArchive /> Archive
          </button>
        </div>
      )}
    </div>
  );
}

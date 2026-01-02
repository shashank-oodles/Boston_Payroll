import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineLogout } from "react-icons/md";
import type { NavItem } from "../config/roles";

type Props = {
  items: NavItem[];
  onClose: () => void;
};

export function MobileSidebar({ items, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 bg-white lg:hidden">
      <div className="flex items-center justify-between px-4 py-4">
        <img src="/logo.png" className="h-10" />
        <RxCross2 className="text-2xl cursor-pointer" onClick={onClose} />
      </div>

      <nav className="flex flex-col px-6 pt-6 text-lg">
        {items.map(item => (
          <div key={item.path} className="mb-5">
            <NavLink
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-black"
              }
            >
              {item.label}
            </NavLink>
            <div className="h-px bg-gray-300 mt-2" />
          </div>
        ))}

        <button className="flex items-center gap-3 text-red-500 pt-8">
          <MdOutlineLogout />
          Logout
        </button>
      </nav>
    </div>
  );
}

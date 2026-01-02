import { NavLink } from "react-router-dom";
import type { NavItem } from "../config/roles";

type Props = {
  items: NavItem[];
  isOpen: boolean;
};

export function Sidebar({ items, isOpen }: Props) {
  return (
    <aside
      className={`hidden lg:flex bg-black text-white flex-col transition-all duration-300
      ${isOpen ? "w-[16.25rem]" : "w-0 overflow-hidden"}`}
    >
      <img src="/image.png" className="h-10 mx-auto mt-4" />

      <nav className="flex flex-col gap-1 px-4 pt-8">
        {items.map(item => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-lg ${
                  isActive ? "bg-orange-500" : "hover:bg-white/10"
                }`
              }
            >
              {Icon && <Icon />}
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

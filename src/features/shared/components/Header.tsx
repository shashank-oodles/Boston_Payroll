import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { LanguageSwitcher, NotificationBell, UserProfileDropdown } from "../components";

type Props = {
  onMobileMenu: () => void;
  onDesktopMenu: () => void;
};

export function Header({ onMobileMenu, onDesktopMenu }: Props) {
  const navigate = useNavigate();

  return (
    <header className="h-16 bg-white flex items-center justify-between px-4 shadow-sm">
      <div className="flex items-center gap-3">
        <RxHamburgerMenu
          className="text-2xl cursor-pointer lg:hidden"
          onClick={onMobileMenu}
        />
        <RxHamburgerMenu
          className="hidden lg:block text-2xl cursor-pointer"
          onClick={onDesktopMenu}
        />
      </div>

      <img src="/logo.png" className="h-8 lg:hidden" />

      <div className="flex items-center gap-4">
        <LanguageSwitcher />
        <NotificationBell />
        <UserProfileDropdown
          name="John Doe"
          role="Super Admin"
          onProfile={() => navigate("/profile")}
          onLogout={() => console.log("logout")}
        />
      </div>
    </header>
  );
}

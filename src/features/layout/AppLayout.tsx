import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { NAVIGATION } from "../shared/config/roles";
import { Sidebar, MobileSidebar, Header } from "../shared/components/index";
import type { Role } from "../shared/types"; // import the Role type

export function AppLayout() {
    //   const role = useSelector((state: any) => state.auth.role) as Role; // SUPER_ADMIN | ADMIN
    const role = "SUPER_ADMIN" as Role;
    const addUser = useSelector((state: any) => state.superAdminUi?.addUser);

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isMobileSidebarOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileSidebarOpen]);

    const navItems = NAVIGATION[role];

    return (
        <div className="flex w-screen h-screen overflow-hidden bg-[#FAF8F2]">
            {isMobileSidebarOpen && (
                <MobileSidebar
                    items={navItems}
                    onClose={() => setIsMobileSidebarOpen(false)}
                />
            )}

            <Sidebar items={navItems} isOpen={isSidebarOpen} />

            <div className="flex flex-col flex-1">
                <Header
                    onMobileMenu={() => setIsMobileSidebarOpen(true)}
                    onDesktopMenu={() => setIsSidebarOpen(p => !p)}
                />

                <main className={`flex-1 overflow-y-auto ${addUser ? "p-0" : "p-4"}`}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

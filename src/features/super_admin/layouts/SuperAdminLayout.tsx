import { useState } from "react";
import { Outlet } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { FaDollarSign } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { RiExchangeDollarFill } from "react-icons/ri";
import { BiSolidDollarCircle } from "react-icons/bi";
import { IoMdFolder } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { notifications } from '../constants'
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";


export function SuperAdminLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isNotificationOpen, setNotificationOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <div className="flex w-screen h-screen overflow-hidden bg-[#FAF8F2]">

            {/* Sidebar */}
            <div
                className={`
          bg-black text-white h-full shrink-0
          transition-all duration-300 ease-in-out
          ${isSidebarOpen ? "w-[16.25rem]" : "w-0"}
        `}
            >
                {isSidebarOpen && (
                    <div className="my-4">
                        <img
                            src="/image.png"
                            alt="Boston Payroll Logo"
                            className="h-11 mx-auto"
                        />
                        <div className="flex flex-col px-4 pt-6">
                            <NavLink to="/super-admin/dashboard" className={({ isActive }) => `flex items-center gap-2 py-2 px-2 rounded-lg ${isActive ? " bg-orange-500" : "bg-none"}`}><HiHome className="text-lg" />
                                <p>Dashboard</p>
                            </NavLink>
                            <NavLink to="/super-admin/client-management" className={({ isActive }) => `flex items-center gap-2 py-2 px-2 rounded-lg ${isActive ? " bg-orange-500" : "bg-none"}`}>
                                <img
                                    src="/user.png"
                                    alt="User Logo"
                                    className="h-5"
                                /><p>Client Management</p>
                            </NavLink>
                            <NavLink to="/super-admin/process-payroll" className={({ isActive }) => `flex items-center gap-2 py-2 px-2 rounded-lg ${isActive ? " bg-orange-500" : "bg-none"}`}><FaDollarSign className="text-lg" />
                                <p>Process Payroll</p>
                            </NavLink>
                            <NavLink to="/super-admin/reports-analytics" className={({ isActive }) => `flex items-center gap-2 py-2 px-2 rounded-lg ${isActive ? " bg-orange-500" : "bg-none"}`}><MdAnalytics className="text-lg" />
                                <p>Reports & Analytics</p>
                            </NavLink>
                            <NavLink to="/super-admin/invoice" className={({ isActive }) => `flex items-center gap-2 py-2 px-2 rounded-lg ${isActive ? " bg-orange-500" : "bg-none"}`}><RiExchangeDollarFill className="text-lg" />
                                <p>Invoice</p>
                            </NavLink>
                            <NavLink to="/super-admin/subscription" className={({ isActive }) => `flex items-center gap-2 py-2 px-2 rounded-lg ${isActive ? " bg-orange-500" : "bg-none"}`}><BiSolidDollarCircle className="text-lg" />
                                <p>Subscription</p>
                            </NavLink>
                            <NavLink to="/super-admin/document-management" className={({ isActive }) => `flex items-center gap-2 py-2 px-2 rounded-lg ${isActive ? " bg-orange-500" : "bg-none"}`}><IoMdFolder className="text-lg" />
                                <p>Document Management</p>
                            </NavLink>
                            <NavLink to="/super-admin/user-management" className={({ isActive }) => `flex items-center gap-2 py-2 px-2 rounded-lg ${isActive ? " bg-orange-500" : "bg-none"}`}><FaUser className="text-lg" />
                                <p>User Managment</p>
                            </NavLink>
                            <NavLink to="/super-admin/taxes" className={({ isActive }) => `flex items-center gap-2 py-2 px-2 rounded-lg ${isActive ? " bg-orange-500" : "bg-none"}`}><FaFileInvoiceDollar className="text-lg" />
                                <p>Taxes</p>
                            </NavLink>
                            <NavLink to="/super-admin/settings" className={({ isActive }) => `flex items-center gap-2 py-2 px-2 rounded-lg ${isActive ? " bg-orange-500" : "bg-none"}`}><IoMdSettings className="text-lg" />
                                <p>Settings</p>
                            </NavLink>
                        </div>

                    </div>
                )}
            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-center justify-between w-full bg-white h-[3.875rem] px-4 shadow-sm">
                    <RxHamburgerMenu
                        className="text-2xl cursor-pointer"
                        onClick={() => setIsSidebarOpen(prev => !prev)}
                    />
                    <div className="flex items-center">
                        <div className="flex items-center gap-1 cursor-pointer">
                            <p className="text-gray-800">En</p>
                            <IoIosArrowDown className="text-gray-800 cursor-pointer" />
                        </div>
                        <div className="h-3 w-[.0938rem] rounded-md bg-gray-300 mx-4"></div>
                        <button onClick={() => setNotificationOpen(!isNotificationOpen)}>
                            <FaBell className="text-[#EC6016] text-xl cursor-pointe mr-4 cursor-pointer" />
                        </button>

                        <div className="flex items-center gap-2 bg-gray-200 py-1 px-2 rounded-2xl" onClick={() => setIsProfileOpen(!isProfileOpen)}>
                            <div className="h-10 w-10 rounded-full overflow-hidden">
                                <img src="/profile.jpg" alt="Profile" />
                            </div>
                            <div className="flex flex-col mr-10 cursor-pointer">
                                <div className="text-sm font-semibold text-gray-500">John Doe</div>
                                <div className="text-xs text-gray-600">Super Admin</div>
                            </div>
                            <div>
                                <IoIosArrowDown
                                    className={`text-lg cursor-pointer text-gray-600 transition-transform
                                    ${isNotificationOpen ? "rotate-180" : ""}`}
                                />

                            </div>
                        </div>
                    </div>
                    {isNotificationOpen &&
                        <div className="absolute max-h-70 flex flex-col transition-all duration-300 ease-in-out overflow-y-auto  w-[24.5rem] px-4 py-2 rounded-lg shadow-2xl shadow-gray-300 bg-white top-18 right-6">
                            <div className="flex justify-between mb-3">
                                <p className="font-semibold">Notifications</p>
                                <p className="text-orange-500 underline cursor-pointer">Clear All</p>
                            </div>
                            <div className="h-[.0625rem] rounded-lg bg-gray-100"><br /></div>
                            <div className="flex flex-col">
                                {notifications.map((notification, index) => (
                                    <>
                                        <div key={index} className="flex gap-2 my-3 ">
                                            <img src="/notificationFrame.png" alt="Notification" className="w-10 h-10" />
                                            <div className="flex flex-col">
                                                <p className="font-semibold text-gray-700">{notification.headline}</p>
                                                <p className="text-sm text-gray-600">{notification.content}</p>
                                                <p className="text-xs text-gray-400">{notification.timestamp}</p>
                                            </div>
                                        </div>
                                        <div className="h-[.0625rem] rounded-lg bg-gray-100"><br /></div>
                                    </>
                                ))}
                            </div>
                        </div>
                    }
                    {isProfileOpen &&
                        <div className="absolute max-h-70 w-[11.3125rem] flex flex-col gap-2 transition-all duration-300 ease-in-out overflow-y-auto px-4 py-2 rounded-lg shadow-2xl shadow-gray-300 bg-white top-18 right-6">
                            <button className="flex items-center gap-3"><FaRegUser className="text-lg" /><button className="cursor-pointer">Profile</button></button>
                            <button className="flex items-center gap-3"><MdOutlineLogout className="text-lg" /><button className="cursor-pointer">Logout</button></button>
                        </div>
                    }
                </div>

                {/* Page Content */}
                <div className="flex-1 overflow-auto p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

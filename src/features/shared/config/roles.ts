import type { Role } from "../index";
import {
  FaDollarSign,
  FaUser,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { MdAnalytics } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { RiExchangeDollarFill } from "react-icons/ri";

export type NavItem = {
  label: string;
  path: string;
  icon?: React.ElementType;
};

export const NAVIGATION: Record<Role, NavItem[]> = {
  SUPER_ADMIN: [
    { label: "Dashboard", path: "dashboard", icon: HiHome },
    { label: "Client Management", path: "client-management", icon: FaUser },
    { label: "Process Payroll", path: "process-payroll", icon: FaDollarSign },
    { label: "Reports & Analytics", path: "reports-analytics", icon: MdAnalytics },
    { label: "Invoice", path: "invoice", icon: RiExchangeDollarFill },
    { label: "Subscription", path: "subscription", icon: FaDollarSign },
    { label: "Document Management", path: "document-management", icon: FaUser },
    { label: "User Management", path: "user-management", icon: FaUser },
    { label: "Taxes", path: "taxes", icon: FaFileInvoiceDollar },
    { label: "Settings", path: "settings", icon: IoMdSettings },
  ],

  ADMIN: [
    { label: "Dashboard", path: "dashboard", icon: HiHome },
    { label: "Employer Details", path: "employer-details", icon: FaUser },
    { label: "Employees", path: "employees", icon: FaUser },
    { label: "Process Payroll", path: "process-payroll", icon: FaDollarSign },
    { label: "Taxes", path: "taxes", icon: FaFileInvoiceDollar },
    { label: "Reports", path: "reports", icon: MdAnalytics },
    { label: "User Management", path: "user-management", icon: FaUser },
    { label: "Settings", path: "settings", icon: IoMdSettings },
  ],
};

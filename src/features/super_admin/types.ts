import type { ElementType } from "react";

// tickets.types.ts
export type Ticket = {
  ticketId: string;
  submittedBy: string;
  requested: string;
  issueType: string;
  raisedOn: string;
  priority: "High" | "Medium" | "Low";
  status: "Open" | "Closed";
  lastUpdated: string;
};

export type Notifications = {
  headline: string;
  content: string;
  timestamp: string;
}

export type UserStatus = "Active" | "Inactive" | "Pending";

export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  client: string;
  status: UserStatus;
  lastLogin: string;
};

export type StatCardProps = {
  label: string;
  value: number;
  description: string;
  accent?: "orange" | "green" | "blue" | "red";
  icon: ElementType;
};

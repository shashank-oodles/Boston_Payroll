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

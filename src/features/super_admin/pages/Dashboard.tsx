import React from "react";
import { useState } from "react";
import {
  ClientDistributionChart,
  SubscriptionBreakdown,
  RecentTicketsTable,
  TicketCard,
  StatCard
} from "../components";
import { FaUser, FaUserCircle } from "react-icons/fa";
import { tickets } from "../constants";

export function Dashboard() {

  return (
    <div className="flex flex-col gap-4 px-2 sm:px-0 max-w-full overflow-x-hidden">
      {/* Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-700">
          Welcome to Boston Payroll, John
        </h1>
        <p className="text-sm text-gray-600">
          Monitor payroll runs, client activity, and subscription performance.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <StatCard
          icon={FaUser}
          label="Total Clients"
          value={1850}
          description="Active clients currently linked with your organization."
        />
        <StatCard
          icon={FaUserCircle}
          label="Active Clients"
          value={128}
          description="Clients currently active on the platform."
        />
        <StatCard
          icon={FaUser}
          label="Upcoming Payroll Runs"
          value={15}
          description="Payroll runs scheduled this week."
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <ClientDistributionChart />
        </div>
        <SubscriptionBreakdown />
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block">
        <RecentTicketsTable data={tickets} />
      </div>

      {/* Mobile Ticket Cards */}
      <div className="lg:hidden flex flex-col gap-3">
        {tickets.map(ticket => (
          <TicketCard key={ticket.ticketId} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}

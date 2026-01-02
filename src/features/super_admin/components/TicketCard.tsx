import type { Ticket } from "../types";

export function TicketCard({ ticket }: { ticket: Ticket }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 max-w-full overflow-hidden">
      <div className="flex justify-between mb-2">
        <p className="font-semibold">{ticket.ticketId}</p>
        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
          {ticket.status}
        </span>
      </div>

      <div className="text-sm text-gray-600 space-y-1">
        <p className="break-words"><span className="text-gray-400">Submitted By:</span> {ticket.submittedBy}</p>
        <p className="break-words"><span className="text-gray-400">Requested:</span> {ticket.requested}</p>
        <p className="break-words"><span className="text-gray-400">Issue:</span> {ticket.issueType}</p>
        <p className="break-words"><span className="text-gray-400">Raised On:</span> {ticket.raisedOn}</p>
        <p className="break-words"><span className="text-gray-400">Updated:</span> {ticket.lastUpdated}</p>
      </div>

      <button className="mt-3 text-orange-500 font-medium text-sm">
        Assign
      </button>
    </div>
  );
}

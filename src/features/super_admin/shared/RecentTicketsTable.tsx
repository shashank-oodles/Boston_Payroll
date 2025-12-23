import {
    type ColumnDef,
    type SortingState,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import type { Ticket } from "../types";
import { IoSearch } from "react-icons/io5";

type Props = {
    data: Ticket[];
};

export function RecentTicketsTable({ data }: Props) {
    const [sorting, setSorting] = useState<SortingState>([]);

    const columns: ColumnDef<Ticket>[] = [
        {
            accessorKey: "ticketId",
            header: "Ticket ID",
        },
        {
            accessorKey: "submittedBy",
            header: "Submitted By",
        },
        {
            accessorKey: "requested",
            header: "Requested",
        },
        {
            accessorKey: "issueType",
            header: "Issue Type",
        },
        {
            accessorKey: "raisedOn",
            header: "Raised On",
        },
        {
            accessorKey: "priority",
            header: "Priority",
            cell: ({ getValue }) => {
                const value = getValue<string>();
                return (
                    <span
                        className={`px-2.5 py-1 text-xs font-medium rounded-full inline-flex items-center gap-1
              ${value === "High"
                                ? "bg-red-100 text-red-600"
                                : value === "Medium"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-gray-100 text-gray-600"
                            }
            `}
                    >
                        ● {value}
                    </span>
                );
            },
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ getValue }) => (
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700 inline-flex items-center gap-1">
                    {getValue<string>()}
                </span>
            ),
        },
        {
            accessorKey: "lastUpdated",
            header: "Last Updated",
        },
        {
            id: "action",
            header: "Action",
            cell: () => (
                <button className="text-orange-500 text-sm font-medium hover:text-orange-600 cursor-pointer">
                    Assign
                </button>
            ),
        },
    ];

    const table = useReactTable({
        data,
        columns,
        state: { sorting },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            {/* Header + Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <h3 className="text-sm font-semibold text-gray-800">
                    Recent Active Tickets
                </h3>

                <div className="flex items-center gap-2 ">
                    {/* Search */}
                    <div className="
                        flex items-center px-2 py-1.5 gap-2 text-sm
                        border border-gray-200 rounded-md
                        focus-within:ring-2 focus-within:ring-orange-400
                        focus-within:border-orange-400
                        ">
                        <IoSearch className="text-xl text-gray-400" />
                        <input
                            placeholder="Search"
                            className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                        />
                    </div>


                    {/* Filters */}
                    <select className="text-sm border border-gray-200 rounded-md px-2 py-1.5">
                        <option>Status</option>
                    </select>
                    <select className="text-sm border border-gray-200 rounded-md px-2 py-1.5">
                        <option>Priority</option>
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="max-h-[70vh] overflow-x-auto rounded-lg border-1 border-gray-200">
                <table className="w-full text-sm">
                    <thead className="border-b border-gray-200 bg-gray-50">
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <th
                                        key={header.id}
                                        onClick={header.column.getToggleSortingHandler()}
                                        className="text-left py-2 px-2 text-xs font-medium text-gray-500 cursor-pointer select-none"
                                    >
                                        <div className="flex items-center gap-1">
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                            <span className="text-gray-400 text-xs">
                                                {header.column.getIsSorted() === "asc" && "↑"}
                                                {header.column.getIsSorted() === "desc" && "↓"}
                                                {!header.column.getIsSorted() && "↕"}
                                            </span>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>

                    <tbody>
                        {table.getRowModel().rows.map(row => (
                            <tr
                                key={row.id}
                                className="border-b border-gray-200 last:border-none hover:bg-gray-50"
                            >
                                {row.getVisibleCells().map(cell => (
                                    <td
                                        key={cell.id}
                                        className="py-2.5 px-2 text-sm text-gray-700"
                                    >
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

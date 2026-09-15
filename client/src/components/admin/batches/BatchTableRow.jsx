import { CalendarDays, Clock3, Users } from "lucide-react";

import BatchRowActions from "./BatchRowActions";

const BatchTableRow = ({ batch, onView, onEdit }) => {
    const {
        name = "Unnamed Batch",
        course = "—",
        session = "—",
        timing = "—",
        schedule = "—",
        capacity = "—",
        status = "Active",
    } = batch;

    const isActive = status?.toLowerCase() === "active";

    return (
        <div className="hidden border-b border-slate-100 px-5 py-4 transition hover:bg-slate-50/60 md:grid md:grid-cols-[1.4fr_0.8fr_1fr_1fr_0.8fr_0.5fr] md:items-center md:gap-4">
            <div className="min-w-0">
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <CalendarDays className="h-4 w-4" />
                    </div>

                    <div className="min-w-0">
                        <p className="truncate text-sm font-bold text-slate-800">
                            {name}
                        </p>

                        <p className="mt-0.5 truncate text-[11px] text-slate-400">
                            {schedule}
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <span className="inline-flex rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600">
                    {course}
                </span>
            </div>

            <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                    <Clock3 className="h-3.5 w-3.5 text-slate-400" />
                    {session}
                </div>
            </div>

            <div>
                <p className="text-xs font-semibold text-slate-600">
                    {timing}
                </p>

                <p className="mt-0.5 text-[10px] text-slate-400">
                    Teacher managed
                </p>
            </div>

            <div>
                <div className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-slate-400" />

                    <span className="text-xs font-semibold text-slate-600">
                        {capacity}
                    </span>
                </div>

                <p className="mt-0.5 text-[10px] text-slate-400">
                    Flexible capacity
                </p>
            </div>

            <div className="flex items-center justify-between gap-2">
                <span
                    className={`inline-flex rounded-full px-2 py-1 text-[10px] font-bold ${isActive
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-slate-100 text-slate-500"
                        }`}
                >
                    {status}
                </span>

                <BatchRowActions
                    onView={onView}
                    onEdit={onEdit}
                />
            </div>
        </div>
    );
};

export default BatchTableRow;
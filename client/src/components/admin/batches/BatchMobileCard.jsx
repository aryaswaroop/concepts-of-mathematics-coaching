import {
    CalendarDays,
    ChevronRight,
    Clock3,
    Users,
} from "lucide-react";
import { motion } from "framer-motion";

const BatchMobileCard = ({ batch, onView }) => {
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
        <motion.button
            type="button"
            whileTap={{ scale: 0.99 }}
            onClick={onView}
            className="w-full rounded-xl border border-slate-200/80 bg-white p-4 text-left shadow-[0_5px_20px_rgba(15,23,42,0.025)] transition hover:border-blue-200 hover:shadow-[0_8px_25px_rgba(15,23,42,0.05)]"
        >
            <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <CalendarDays className="h-4 w-4" />
                    </div>

                    <div className="min-w-0">
                        <p className="truncate text-sm font-extrabold text-slate-900">
                            {name}
                        </p>

                        <p className="mt-1 text-xs font-medium text-slate-400">
                            {course} · {session}
                        </p>
                    </div>
                </div>

                <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-slate-300" />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-slate-50 px-3 py-2">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-400">
                        <Clock3 className="h-3 w-3" />
                        Timing
                    </div>

                    <p className="mt-1 text-xs font-bold text-slate-700">
                        {timing}
                    </p>
                </div>

                <div className="rounded-lg bg-slate-50 px-3 py-2">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-400">
                        <Users className="h-3 w-3" />
                        Capacity
                    </div>

                    <p className="mt-1 text-xs font-bold text-slate-700">
                        {capacity}
                    </p>
                </div>
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                        Schedule
                    </p>

                    <p className="mt-1 text-xs font-semibold text-slate-600">
                        {schedule}
                    </p>
                </div>

                <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${isActive
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-slate-100 text-slate-500"
                        }`}
                >
                    {status}
                </span>
            </div>
        </motion.button>
    );
};

export default BatchMobileCard;
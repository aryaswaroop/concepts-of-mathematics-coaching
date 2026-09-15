import { AnimatePresence, motion } from "framer-motion";
import {
    CalendarDays,
    Clock3,
    Layers3,
    Pencil,
    Users,
    X,
} from "lucide-react";

const BatchDetailDrawer = ({
    batch,
    isOpen,
    onClose,
    onEdit,
}) => {
    if (!batch) return null;

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
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[90]">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-950/30 backdrop-blur-sm"
                    />

                    <motion.aside
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{
                            type: "spring",
                            stiffness: 320,
                            damping: 32,
                        }}
                        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-[-20px_0_60px_rgba(15,23,42,0.12)]"
                    >
                        <div className="flex items-start justify-between border-b border-slate-100 px-5 py-5 sm:px-6">
                            <div className="flex min-w-0 items-start gap-3">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                    <CalendarDays className="h-5 w-5" />
                                </div>

                                <div className="min-w-0">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                                        Batch Details
                                    </p>

                                    <h2 className="mt-1 truncate text-lg font-extrabold text-slate-950">
                                        {name}
                                    </h2>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={onClose}
                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">
                            <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                                        Status
                                    </p>

                                    <p className="mt-1 text-xs font-semibold text-slate-600">
                                        Current batch status
                                    </p>
                                </div>

                                <span
                                    className={`rounded-full px-3 py-1 text-[10px] font-bold ${isActive
                                            ? "bg-emerald-50 text-emerald-600"
                                            : "bg-slate-200 text-slate-500"
                                        }`}
                                >
                                    {status}
                                </span>
                            </div>

                            <div className="mt-5">
                                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                                    Academic Structure
                                </p>

                                <div className="mt-2 divide-y divide-slate-100 rounded-xl border border-slate-200">
                                    <DetailRow
                                        icon={Layers3}
                                        label="Class"
                                        value={course}
                                    />

                                    <DetailRow
                                        icon={Clock3}
                                        label="Session"
                                        value={session}
                                    />

                                    <DetailRow
                                        icon={Clock3}
                                        label="Timing"
                                        value={timing}
                                    />

                                    <DetailRow
                                        icon={CalendarDays}
                                        label="Weekly Schedule"
                                        value={schedule}
                                    />

                                    <DetailRow
                                        icon={Users}
                                        label="Capacity"
                                        value={capacity}
                                    />
                                </div>
                            </div>

                            <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                                <p className="text-xs font-extrabold text-blue-700">
                                    Teacher-managed batch
                                </p>

                                <p className="mt-1.5 text-[11px] leading-5 text-blue-600/80">
                                    Timing and capacity can be adjusted according
                                    to student demand and the current teaching
                                    schedule.
                                </p>
                            </div>
                        </div>

                        <div className="border-t border-slate-100 bg-slate-50/50 px-5 py-4 sm:px-6">
                            <button
                                type="button"
                                onClick={() => onEdit?.(batch)}
                                className="flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 text-sm font-bold text-white transition hover:bg-blue-700"
                            >
                                <Pencil className="h-4 w-4" />
                                Edit Batch
                            </button>
                        </div>
                    </motion.aside>
                </div>
            )}
        </AnimatePresence>
    );
};

const DetailRow = ({
    icon: Icon,
    label,
    value,
}) => (
    <div className="flex items-center gap-3 px-4 py-3.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
            <Icon className="h-4 w-4" />
        </div>

        <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                {label}
            </p>

            <p className="mt-0.5 truncate text-xs font-bold text-slate-700">
                {value}
            </p>
        </div>
    </div>
);

export default BatchDetailDrawer;
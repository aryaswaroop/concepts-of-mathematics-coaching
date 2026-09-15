import { ClipboardList, Filter, Search, X } from "lucide-react";
import { motion } from "framer-motion";

const EnrollmentFilters = ({
    search,
    setSearch,
    grade,
    setGrade,
    status,
    setStatus,
    paymentStatus,
    setPaymentStatus,
}) => {
    const hasFilters =
        search.trim() ||
        grade !== "all" ||
        status !== "all" ||
        paymentStatus !== "all";

    const clearFilters = () => {
        setSearch("");
        setGrade("all");
        setStatus("all");
        setPaymentStatus("all");
    };

    return (
        <section>
            <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6 lg:px-7">
                <div className="rounded-2xl border border-slate-200/80 bg-white/85 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.03)]">
                    <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
                        <div className="relative min-w-0 flex-1">
                            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                            <input
                                type="text"
                                value={search}
                                onChange={(event) =>
                                    setSearch(event.target.value)
                                }
                                placeholder="Search by student or enrollment..."
                                className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-9 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-400">
                                <Filter className="h-4 w-4" />
                            </div>

                            <select
                                value={grade}
                                onChange={(event) =>
                                    setGrade(event.target.value)
                                }
                                className="h-10 min-w-[140px] rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-600 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-50"
                            >
                                <option value="all">All Classes</option>
                                <option value="11">Class 11</option>
                                <option value="12">Class 12</option>
                            </select>
                        </div>

                        <select
                            value={status}
                            onChange={(event) =>
                                setStatus(event.target.value)
                            }
                            className="h-10 min-w-[145px] rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-600 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-50"
                        >
                            <option value="all">All Status</option>
                            <option value="active">Active</option>
                            <option value="completed">Completed</option>
                            <option value="inactive">Inactive</option>
                        </select>

                        <select
                            value={paymentStatus}
                            onChange={(event) =>
                                setPaymentStatus(event.target.value)
                            }
                            className="h-10 min-w-[150px] rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-600 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-50"
                        >
                            <option value="all">All Payments</option>
                            <option value="paid">Paid</option>
                            <option value="partial">Partial</option>
                            <option value="pending">Pending</option>
                        </select>

                        {hasFilters && (
                            <motion.button
                                type="button"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                onClick={clearFilters}
                                className="inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-xl px-3 text-xs font-bold text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
                            >
                                <X className="h-3.5 w-3.5" />
                                Clear
                            </motion.button>
                        )}
                    </div>

                    <div className="mt-3 flex items-center gap-2 border-t border-slate-100 pt-3">
                        <ClipboardList className="h-3.5 w-3.5 text-slate-400" />

                        <p className="text-[11px] font-medium text-slate-400">
                            Enrollment connects a student with a course and
                            assigned batch.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnrollmentFilters;
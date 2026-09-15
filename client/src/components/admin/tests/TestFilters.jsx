import {
    CalendarDays,
    Search,
    SlidersHorizontal,
    X,
} from "lucide-react";

const TestFilters = ({
    search,
    type,
    status,
    grade,
    date,
    onSearchChange,
    onTypeChange,
    onStatusChange,
    onGradeChange,
    onDateChange,
    onClear,
}) => {
    const hasFilters =
        search.trim() !== "" ||
        type !== "all" ||
        status !== "all" ||
        grade !== "all" ||
        date !== "";

    return (
        <section>
            <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6 lg:px-7">
                <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-[0_8px_25px_rgba(15,23,42,0.025)]">
                    <div className="mb-3 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                            <SlidersHorizontal className="h-4 w-4 text-slate-400" />

                            <div>
                                <p className="text-xs font-extrabold text-slate-800">
                                    Test filters
                                </p>

                                <p className="text-[10px] text-slate-400">
                                    Narrow assessment records
                                </p>
                            </div>
                        </div>

                        {hasFilters && (
                            <button
                                type="button"
                                onClick={onClear}
                                className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-bold text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
                            >
                                <X className="h-3.5 w-3.5" />
                                Clear
                            </button>
                        )}
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                        {/* Search */}
                        <div className="relative lg:col-span-2">
                            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                            <input
                                type="text"
                                value={search}
                                onChange={(event) =>
                                    onSearchChange(
                                        event.target.value
                                    )
                                }
                                placeholder="Search test or topic..."
                                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-xs text-slate-700 outline-none transition placeholder:text-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                            />
                        </div>

                        {/* Grade */}
                        <select
                            value={grade}
                            onChange={(event) =>
                                onGradeChange(event.target.value)
                            }
                            className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-medium text-slate-600 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                        >
                            <option value="all">All classes</option>
                            <option value="11">Class 11</option>
                            <option value="12">Class 12</option>
                        </select>

                        {/* Type */}
                        <select
                            value={type}
                            onChange={(event) =>
                                onTypeChange(event.target.value)
                            }
                            className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-medium text-slate-600 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                        >
                            <option value="all">All test types</option>
                            <option value="weekly">
                                Weekly Test
                            </option>
                            <option value="monthly">
                                Monthly Test
                            </option>
                            <option value="pre_board">
                                Pre-Board
                            </option>
                            <option value="other">Other</option>
                        </select>

                        {/* Status */}
                        <select
                            value={status}
                            onChange={(event) =>
                                onStatusChange(event.target.value)
                            }
                            className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-medium text-slate-600 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                        >
                            <option value="all">All statuses</option>
                            <option value="scheduled">
                                Scheduled
                            </option>
                            <option value="completed">
                                Completed
                            </option>
                            <option value="results_pending">
                                Results Pending
                            </option>
                            <option value="cancelled">
                                Cancelled
                            </option>
                        </select>

                        {/* Date */}
                        <div className="relative">
                            <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                            <input
                                type="date"
                                value={date}
                                onChange={(event) =>
                                    onDateChange(
                                        event.target.value
                                    )
                                }
                                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-xs font-medium text-slate-600 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestFilters;
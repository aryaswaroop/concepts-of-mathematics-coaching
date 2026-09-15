import {
    CalendarDays,
    Filter,
    Search,
    X,
} from "lucide-react";

const SupportFilters = ({
    search,
    setSearch,
    supportType,
    setSupportType,
    priority,
    setPriority,
    status,
    setStatus,
    date,
    setDate,
    onClear,
}) => {
    const hasFilters =
        search ||
        supportType !== "all" ||
        priority !== "all" ||
        status !== "all" ||
        date;

    return (
        <section>
            <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6 lg:px-7">
                <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-[0_8px_30px_rgba(15,23,42,0.025)]">
                    <div className="mb-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Filter className="h-4 w-4 text-slate-400" />

                            <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                                Filters
                            </span>
                        </div>

                        {hasFilters && (
                            <button
                                type="button"
                                onClick={onClear}
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 transition hover:text-blue-600"
                            >
                                <X className="h-3.5 w-3.5" />
                                Clear
                            </button>
                        )}
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                        <div className="relative">
                            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                            <input
                                type="text"
                                value={search}
                                onChange={(event) =>
                                    setSearch(event.target.value)
                                }
                                placeholder="Search student/session..."
                                className="h-10 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            />
                        </div>

                        <select
                            value={supportType}
                            onChange={(event) =>
                                setSupportType(event.target.value)
                            }
                            className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-600 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                        >
                            <option value="all">
                                All support types
                            </option>

                            <option value="academic_guidance">
                                Academic Guidance
                            </option>

                            <option value="doubt_solving">
                                Doubt Solving
                            </option>

                            <option value="performance_support">
                                Performance Support
                            </option>

                            <option value="exam_preparation">
                                Exam Preparation
                            </option>

                            <option value="study_planning">
                                Study Planning
                            </option>

                            <option value="other">
                                Other
                            </option>
                        </select>

                        <select
                            value={priority}
                            onChange={(event) =>
                                setPriority(event.target.value)
                            }
                            className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-600 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                        >
                            <option value="all">
                                All priorities
                            </option>

                            <option value="low">Low</option>
                            <option value="normal">Normal</option>
                            <option value="high">High</option>
                            <option value="urgent">Urgent</option>
                        </select>

                        <select
                            value={status}
                            onChange={(event) =>
                                setStatus(event.target.value)
                            }
                            className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-600 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                        >
                            <option value="all">
                                All statuses
                            </option>

                            <option value="requested">
                                Requested
                            </option>

                            <option value="scheduled">
                                Scheduled
                            </option>

                            <option value="completed">
                                Completed
                            </option>

                            <option value="cancelled">
                                Cancelled
                            </option>
                        </select>

                        <div className="relative">
                            <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                            <input
                                type="date"
                                value={date}
                                onChange={(event) =>
                                    setDate(event.target.value)
                                }
                                className="h-10 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-sm text-slate-600 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SupportFilters;
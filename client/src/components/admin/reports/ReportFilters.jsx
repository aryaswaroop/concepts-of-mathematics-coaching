import {
    CalendarDays,
    Filter,
    GraduationCap,
    X,
} from "lucide-react";

const ReportFilters = ({
    period,
    setPeriod,
    grade,
    setGrade,
    reportType,
    setReportType,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    onClear,
}) => {
    return (
        <section>
            <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6 lg:px-7">
                <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.035)]">
                    <div className="mb-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Filter className="h-4 w-4 text-slate-400" />

                            <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                                Report filters
                            </span>
                        </div>

                        <button
                            type="button"
                            onClick={onClear}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 transition hover:text-slate-700"
                        >
                            <X className="h-3.5 w-3.5" />
                            Clear
                        </button>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        <select
                            value={period}
                            onChange={(event) =>
                                setPeriod(event.target.value)
                            }
                            className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-600 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="current_month">
                                Current month
                            </option>
                            <option value="current_quarter">
                                Current quarter
                            </option>
                            <option value="current_year">
                                Current year
                            </option>
                            <option value="custom">
                                Custom range
                            </option>
                        </select>

                        <div className="relative">
                            <GraduationCap className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                            <select
                                value={grade}
                                onChange={(event) =>
                                    setGrade(event.target.value)
                                }
                                className="h-10 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-sm text-slate-600 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                            >
                                <option value="all">All classes</option>
                                <option value="11">Class 11</option>
                                <option value="12">Class 12</option>
                            </select>
                        </div>

                        <select
                            value={reportType}
                            onChange={(event) =>
                                setReportType(event.target.value)
                            }
                            className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-600 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="overview">
                                Overall overview
                            </option>
                            <option value="academic">
                                Academic performance
                            </option>
                            <option value="enrollment">
                                Enrollment
                            </option>
                            <option value="finance">
                                Finance
                            </option>
                            <option value="enquiries">
                                Enquiries
                            </option>
                            <option value="support">
                                Student support
                            </option>
                        </select>

                        <div className="relative">
                            <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                            <input
                                type="date"
                                value={startDate}
                                onChange={(event) =>
                                    setStartDate(event.target.value)
                                }
                                disabled={period !== "custom"}
                                className="h-10 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-sm text-slate-600 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            />
                        </div>

                        <div className="relative">
                            <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                            <input
                                type="date"
                                value={endDate}
                                onChange={(event) =>
                                    setEndDate(event.target.value)
                                }
                                disabled={period !== "custom"}
                                className="h-10 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-sm text-slate-600 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReportFilters;
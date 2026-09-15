import { CalendarDays, RotateCcw, Search } from "lucide-react";

const ResultFilters = ({
    search,
    grade,
    status,
    testType,
    date,
    onSearchChange,
    onGradeChange,
    onStatusChange,
    onTestTypeChange,
    onDateChange,
    onClear,
}) => {
    return (
        <section className="px-4 py-3 sm:px-6 lg:px-7">
            <div className="mx-auto max-w-[1280px]">
                <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-3 shadow-[0_8px_24px_rgba(15,23,42,0.025)]">
                    <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-[1.6fr_0.8fr_1fr_1fr_0.9fr_auto]">
                        <div className="relative">
                            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                            <input
                                type="search"
                                value={search}
                                onChange={(event) =>
                                    onSearchChange(event.target.value)
                                }
                                placeholder="Search student or test..."
                                className="h-10 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-xs font-medium text-slate-700 outline-none transition placeholder:text-slate-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            />
                        </div>

                        <select
                            value={grade}
                            onChange={(event) =>
                                onGradeChange(event.target.value)
                            }
                            className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                        >
                            <option value="all">All classes</option>
                            <option value="11">Class 11</option>
                            <option value="12">Class 12</option>
                        </select>

                        <select
                            value={testType}
                            onChange={(event) =>
                                onTestTypeChange(event.target.value)
                            }
                            className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                        >
                            <option value="all">All test types</option>
                            <option value="Weekly Test">
                                Weekly Test
                            </option>
                            <option value="Monthly Test">
                                Monthly Test
                            </option>
                            <option value="Pre-Board">
                                Pre-Board
                            </option>
                            <option value="Other">Other</option>
                        </select>

                        <select
                            value={status}
                            onChange={(event) =>
                                onStatusChange(event.target.value)
                            }
                            className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                        >
                            <option value="all">All statuses</option>
                            <option value="Published">Published</option>
                            <option value="Draft">Draft</option>
                            <option value="Pending">Pending</option>
                        </select>

                        <div className="relative">
                            <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                            <input
                                type="date"
                                value={date}
                                onChange={(event) =>
                                    onDateChange(event.target.value)
                                }
                                className="h-10 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-xs font-semibold text-slate-600 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            />
                        </div>

                        <button
                            type="button"
                            onClick={onClear}
                            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-xs font-bold text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                        >
                            <RotateCcw className="h-3.5 w-3.5" />
                            Clear
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResultFilters;
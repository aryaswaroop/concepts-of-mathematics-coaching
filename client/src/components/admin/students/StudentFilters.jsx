import { Search, SlidersHorizontal, X } from "lucide-react";

const StudentFilters = ({
    search,
    setSearch,
    course,
    setCourse,
    status,
    setStatus,
}) => {
    const hasFilters = search || course !== "all" || status !== "all";

    const clearFilters = () => {
        setSearch("");
        setCourse("all");
        setStatus("all");
    };

    return (
        <section>
            <div className="mx-auto max-w-[1280px] px-4 py-3 sm:px-6 lg:px-7">
                <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.035)]">
                    <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
                        {/* Search */}
                        <div className="relative min-w-0 flex-1">
                            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                            <input
                                type="search"
                                value={search}
                                onChange={(event) =>
                                    setSearch(event.target.value)
                                }
                                placeholder="Search students..."
                                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
                            />
                        </div>

                        {/* Course */}
                        <select
                            value={course}
                            onChange={(event) =>
                                setCourse(event.target.value)
                            }
                            className="h-11 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-700 outline-none transition-all focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
                        >
                            <option value="all">All Courses</option>
                            <option value="class-11">Class 11</option>
                            <option value="class-12">Class 12</option>
                        </select>

                        {/* Status */}
                        <select
                            value={status}
                            onChange={(event) =>
                                setStatus(event.target.value)
                            }
                            className="h-11 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-700 outline-none transition-all focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
                        >
                            <option value="all">All Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>

                        {/* Filter indicator */}
                        <div className="flex items-center gap-2">
                            <div className="hidden h-10 items-center gap-2 rounded-xl bg-slate-50 px-3 text-xs font-semibold text-slate-400 lg:flex">
                                <SlidersHorizontal className="h-3.5 w-3.5" />
                                Filters
                            </div>

                            {hasFilters && (
                                <button
                                    type="button"
                                    onClick={clearFilters}
                                    className="inline-flex h-10 items-center gap-1.5 rounded-xl px-3 text-xs font-bold text-slate-500 transition-colors hover:bg-red-50 hover:text-red-600"
                                >
                                    <X className="h-3.5 w-3.5" />
                                    Clear
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StudentFilters;
import {
    CalendarDays,
    Filter,
    Search,
    X,
} from "lucide-react";

const EnquiryFilters = ({
    search,
    setSearch,
    enquiryType,
    setEnquiryType,
    grade,
    setGrade,
    status,
    setStatus,
    priority,
    setPriority,
    date,
    setDate,
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
                                Filters
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

                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                        <div className="relative xl:col-span-2">
                            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                            <input
                                type="text"
                                value={search}
                                onChange={(event) =>
                                    setSearch(event.target.value)
                                }
                                placeholder="Search name, phone or enquiry..."
                                className="h-10 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        <select
                            value={enquiryType}
                            onChange={(event) =>
                                setEnquiryType(event.target.value)
                            }
                            className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-600 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="all">All enquiry types</option>
                            <option value="course_information">
                                Course Information
                            </option>
                            <option value="batch_information">
                                Batch Information
                            </option>
                            <option value="admission_fees">
                                Admission & Fees
                            </option>
                            <option value="general_enquiry">
                                General Enquiry
                            </option>
                        </select>

                        <select
                            value={grade}
                            onChange={(event) =>
                                setGrade(event.target.value)
                            }
                            className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-600 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="all">All classes</option>
                            <option value="11">Class 11</option>
                            <option value="12">Class 12</option>
                        </select>

                        <select
                            value={status}
                            onChange={(event) =>
                                setStatus(event.target.value)
                            }
                            className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-600 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="all">All statuses</option>
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="follow_up">Follow-up</option>
                            <option value="converted">Converted</option>
                            <option value="closed">Closed</option>
                        </select>

                        <select
                            value={priority}
                            onChange={(event) =>
                                setPriority(event.target.value)
                            }
                            className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-600 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="all">All priorities</option>
                            <option value="low">Low</option>
                            <option value="normal">Normal</option>
                            <option value="high">High</option>
                        </select>

                        <div className="relative">
                            <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                            <input
                                type="date"
                                value={date}
                                onChange={(event) =>
                                    setDate(event.target.value)
                                }
                                className="h-10 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-sm text-slate-600 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnquiryFilters;
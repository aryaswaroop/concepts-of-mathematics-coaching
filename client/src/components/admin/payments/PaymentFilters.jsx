import { CreditCard, RotateCcw, Search, SlidersHorizontal } from "lucide-react";

const PaymentFilters = ({
    search,
    status,
    method,
    grade,
    onSearchChange,
    onStatusChange,
    onMethodChange,
    onGradeChange,
    onClear,
}) => {
    const hasFilters =
        search.trim() !== "" ||
        status !== "all" ||
        method !== "all" ||
        grade !== "all";

    return (
        <section>
            <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6 lg:px-7">
                <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-[0_8px_25px_rgba(15,23,42,0.025)]">
                    <div className="mb-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <SlidersHorizontal className="h-4 w-4 text-slate-400" />

                            <span className="text-xs font-extrabold text-slate-700">
                                Payment filters
                            </span>
                        </div>

                        {hasFilters && (
                            <button
                                type="button"
                                onClick={onClear}
                                className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-400 transition hover:text-blue-600"
                            >
                                <RotateCcw className="h-3 w-3" />
                                Clear filters
                            </button>
                        )}
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1.6fr_0.8fr_1fr_1fr]">
                        {/* Search */}
                        <div className="relative">
                            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                            <input
                                type="search"
                                value={search}
                                onChange={(event) =>
                                    onSearchChange(event.target.value)
                                }
                                placeholder="Search student or payment..."
                                className="h-10 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-xs font-medium text-slate-700 outline-none transition placeholder:text-slate-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            />
                        </div>

                        {/* Class */}
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

                        {/* Payment status */}
                        <select
                            value={status}
                            onChange={(event) =>
                                onStatusChange(event.target.value)
                            }
                            className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                        >
                            <option value="all">All payment status</option>
                            <option value="paid">Paid</option>
                            <option value="partial">Partial</option>
                            <option value="pending">Pending</option>
                        </select>

                        {/* Payment method */}
                        <div className="relative">
                            <CreditCard className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />

                            <select
                                value={method}
                                onChange={(event) =>
                                    onMethodChange(event.target.value)
                                }
                                className="h-10 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-xs font-semibold text-slate-600 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            >
                                <option value="all">All payment methods</option>
                                <option value="cash">Cash</option>
                                <option value="upi">UPI</option>
                                <option value="bank_transfer">
                                    Bank Transfer
                                </option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PaymentFilters;
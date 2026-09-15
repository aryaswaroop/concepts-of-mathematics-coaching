import {
    CalendarDays,
    ChevronRight,
    FileText,
} from "lucide-react";

import TestRowActions from "./TestRowActions";

const TestMobileCard = ({
    test,
    onView,
    onEdit,
}) => {
    const testName = test?.testName || test?.title || "Untitled Test";
    const topic = test?.topic || test?.topics || "Topic details pending";
    const grade = test?.grade || test?.class || "—";
    const type = test?.type || "—";
    const date = test?.date || test?.testDate || "—";
    const status = test?.status || "Scheduled";

    const normalizedStatus = String(status).toLowerCase();

    const statusStyles = {
        scheduled: "bg-blue-50 text-blue-700 border-blue-100",
        completed: "bg-emerald-50 text-emerald-700 border-emerald-100",
        "results pending":
            "bg-amber-50 text-amber-700 border-amber-100",
        cancelled: "bg-rose-50 text-rose-700 border-rose-100",
    };

    const statusClass =
        statusStyles[normalizedStatus] ||
        "bg-slate-50 text-slate-600 border-slate-100";

    const formattedDate =
        date !== "—"
            ? new Date(date).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            })
            : "—";

    return (
        <article className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.035)]">
            <div className="flex items-start justify-between gap-3">
                <button
                    type="button"
                    onClick={() => onView?.(test)}
                    className="flex min-w-0 items-start gap-3 text-left"
                >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <FileText className="h-4 w-4" />
                    </div>

                    <div className="min-w-0">
                        <p className="truncate text-sm font-bold text-slate-900">
                            {testName}
                        </p>

                        <p className="mt-1 truncate text-xs text-slate-400">
                            {topic}
                        </p>
                    </div>
                </button>

                <TestRowActions
                    test={test}
                    onView={onView}
                    onEdit={onEdit}
                />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">
                        Class
                    </p>

                    <p className="mt-1 text-xs font-bold text-slate-700">
                        {grade}
                    </p>
                </div>

                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">
                        Type
                    </p>

                    <p className="mt-1 text-xs font-bold text-slate-700">
                        {type}
                    </p>
                </div>

                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">
                        Date
                    </p>

                    <div className="mt-1 flex items-center gap-1.5 text-xs font-bold text-slate-700">
                        <CalendarDays className="h-3.5 w-3.5 text-slate-400" />
                        {formattedDate}
                    </div>
                </div>

                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">
                        Status
                    </p>

                    <span
                        className={`mt-1 inline-flex rounded-full border px-2 py-1 text-[9px] font-bold uppercase tracking-[0.08em] ${statusClass}`}
                    >
                        {status}
                    </span>
                </div>
            </div>
        </article>
    );
};

export default TestMobileCard;
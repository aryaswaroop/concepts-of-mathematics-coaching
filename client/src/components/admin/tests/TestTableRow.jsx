import { CalendarDays, FileText } from "lucide-react";

import TestRowActions from "./TestRowActions";

const TestTableRow = ({
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
        <div className="hidden border-b border-slate-100 px-5 py-4 transition-colors hover:bg-slate-50/70 md:grid md:grid-cols-[1.5fr_0.7fr_1fr_0.9fr_1fr_0.5fr] md:items-center md:gap-4">
            {/* Test */}
            <button
                type="button"
                onClick={() => onView?.(test)}
                className="group flex min-w-0 items-center gap-3 text-left"
            >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-transform duration-200 group-hover:scale-105">
                    <FileText className="h-4 w-4" />
                </div>

                <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-slate-900 group-hover:text-blue-600">
                        {testName}
                    </p>

                    <p className="mt-0.5 truncate text-xs text-slate-400">
                        {topic}
                    </p>
                </div>
            </button>

            {/* Class */}
            <div>
                <span className="inline-flex rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700">
                    {grade}
                </span>
            </div>

            {/* Type */}
            <div className="text-xs font-semibold text-slate-600">
                {type}
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <CalendarDays className="h-3.5 w-3.5 text-slate-400" />
                <span>{formattedDate}</span>
            </div>

            {/* Status */}
            <div>
                <span
                    className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] ${statusClass}`}
                >
                    {status}
                </span>
            </div>

            {/* Action */}
            <div className="flex justify-end">
                <TestRowActions
                    test={test}
                    onView={onView}
                    onEdit={onEdit}
                />
            </div>
        </div>
    );
};

export default TestTableRow;
import {
    CalendarDays,
    FileCheck2,
} from "lucide-react";

import ResultRowActions from "./ResultRowActions";

const ResultTableRow = ({
    result,
    onView,
    onEdit,
}) => {
    const studentName =
        result?.studentName ||
        result?.student?.name ||
        "Student";

    const testName =
        result?.testName ||
        result?.test?.name ||
        result?.test?.title ||
        "Test";

    const grade =
        result?.grade ||
        result?.class ||
        "—";

    const marks =
        result?.marks ??
        result?.score ??
        "—";

    const totalMarks =
        result?.totalMarks ??
        "—";

    const percentage =
        result?.percentage ??
        "—";

    const resultDate =
        result?.resultDate ||
        result?.date ||
        result?.testDate ||
        "—";

    const status =
        result?.status ||
        "Pending";

    const normalizedStatus =
        String(status).toLowerCase();

    const statusStyles = {
        published:
            "bg-emerald-50 text-emerald-700 border-emerald-100",
        draft:
            "bg-slate-50 text-slate-600 border-slate-200",
        pending:
            "bg-amber-50 text-amber-700 border-amber-100",
    };

    const statusClass =
        statusStyles[normalizedStatus] ||
        "bg-slate-50 text-slate-600 border-slate-100";

    const formattedDate =
        resultDate !== "—"
            ? new Date(resultDate).toLocaleDateString(
                "en-IN",
                {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                }
            )
            : "—";

    return (
        <div className="hidden border-b border-slate-100 px-5 py-4 transition-colors hover:bg-slate-50/70 md:grid md:grid-cols-[1.4fr_1.3fr_0.55fr_0.8fr_0.8fr_0.8fr_0.8fr_0.5fr] md:items-center md:gap-3">
            <button
                type="button"
                onClick={() => onView?.(result)}
                className="group flex min-w-0 items-center gap-3 text-left"
            >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:scale-105">
                    <FileCheck2 className="h-4 w-4" />
                </div>

                <div className="min-w-0">
                    <p className="truncate text-xs font-bold text-slate-900 group-hover:text-blue-600">
                        {studentName}
                    </p>

                    <p className="mt-0.5 truncate text-[11px] text-slate-400">
                        Student record
                    </p>
                </div>
            </button>

            <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-slate-700">
                    {testName}
                </p>
            </div>

            <div>
                <span className="inline-flex rounded-lg bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-700">
                    {grade}
                </span>
            </div>

            <div className="text-xs font-bold text-slate-700">
                {marks}
                {totalMarks !== "—" && (
                    <span className="font-medium text-slate-400">
                        {" "}
                        / {totalMarks}
                    </span>
                )}
            </div>

            <div className="text-xs font-bold text-slate-700">
                {percentage !== "—"
                    ? `${percentage}%`
                    : "—"}
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <CalendarDays className="h-3.5 w-3.5 text-slate-400" />
                {formattedDate}
            </div>

            <div>
                <span
                    className={`inline-flex rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.08em] ${statusClass}`}
                >
                    {status}
                </span>
            </div>

            <div className="flex justify-end">
                <ResultRowActions
                    result={result}
                    onView={onView}
                    onEdit={onEdit}
                />
            </div>
        </div>
    );
};

export default ResultTableRow;
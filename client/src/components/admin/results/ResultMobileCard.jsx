import {
    CalendarDays,
    FileCheck2,
} from "lucide-react";

import ResultRowActions from "./ResultRowActions";

const ResultMobileCard = ({
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
        <article className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.035)]">
            <div className="flex items-start justify-between gap-3">
                <button
                    type="button"
                    onClick={() => onView?.(result)}
                    className="flex min-w-0 items-start gap-3 text-left"
                >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <FileCheck2 className="h-4 w-4" />
                    </div>

                    <div className="min-w-0">
                        <p className="truncate text-sm font-bold text-slate-900">
                            {studentName}
                        </p>

                        <p className="mt-1 truncate text-xs text-slate-400">
                            {testName}
                        </p>
                    </div>
                </button>

                <ResultRowActions
                    result={result}
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
                        Score
                    </p>

                    <p className="mt-1 text-xs font-bold text-slate-700">
                        {marks}
                        {totalMarks !== "—" &&
                            ` / ${totalMarks}`}
                    </p>
                </div>

                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">
                        Percentage
                    </p>

                    <p className="mt-1 text-xs font-bold text-blue-600">
                        {percentage !== "—"
                            ? `${percentage}%`
                            : "—"}
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
            </div>

            <div className="mt-3 border-t border-slate-100 pt-3">
                <span
                    className={`inline-flex rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.08em] ${statusClass}`}
                >
                    {status}
                </span>
            </div>
        </article>
    );
};

export default ResultMobileCard;
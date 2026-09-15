import {
    CalendarDays,
    FileCheck2,
    Hash,
    Layers3,
    Trophy,
    X,
} from "lucide-react";

const ResultDetailDrawer = ({
    isOpen,
    result,
    onClose,
    onEdit,
}) => {
    if (!isOpen || !result) {
        return null;
    }

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

    const status =
        result?.status ||
        "Pending";

    const resultDate =
        result?.resultDate ||
        result?.date ||
        result?.testDate ||
        "—";

    const resultId =
        result?.id ||
        result?._id ||
        result?.resultId ||
        "Not assigned";

    const remarks =
        result?.remarks ||
        result?.description ||
        "No additional remarks have been added.";

    const formattedDate =
        resultDate !== "—"
            ? new Date(resultDate).toLocaleDateString(
                "en-IN",
                {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                }
            )
            : "Date not assigned";

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

    return (
        <div className="fixed inset-0 z-[100] bg-slate-950/25 backdrop-blur-[2px]">
            <button
                type="button"
                onClick={onClose}
                aria-label="Close result details"
                className="absolute inset-0 h-full w-full cursor-default"
            />

            <aside className="absolute right-0 top-0 flex h-full w-full max-w-xl flex-col border-l border-slate-200 bg-white shadow-[-20px_0_60px_rgba(15,23,42,0.14)]">
                <div className="flex items-start justify-between border-b border-slate-100 px-5 py-5 sm:px-6">
                    <div className="flex min-w-0 items-start gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <FileCheck2 className="h-5 w-5" />
                        </div>

                        <div className="min-w-0">
                            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600">
                                Result details
                            </p>

                            <h2 className="mt-1 truncate text-lg font-extrabold text-slate-950">
                                {studentName}
                            </h2>

                            <p className="mt-1 truncate text-xs text-slate-400">
                                {testName}
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close drawer"
                        className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto">
                    <div className="space-y-5 p-5 sm:p-6">
                        <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-5">
                            <div className="flex items-center gap-2">
                                <Trophy className="h-4 w-4 text-blue-600" />

                                <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-blue-700">
                                    Performance
                                </span>
                            </div>

                            <div className="mt-4 flex items-end justify-between gap-4">
                                <div>
                                    <p className="text-3xl font-extrabold tracking-tight text-slate-950">
                                        {percentage !== "—"
                                            ? `${percentage}%`
                                            : "—"}
                                    </p>

                                    <p className="mt-1 text-xs text-slate-400">
                                        Recorded performance
                                    </p>
                                </div>

                                <span
                                    className={`rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.08em] ${statusClass}`}
                                >
                                    {status}
                                </span>
                            </div>
                        </div>

                        <section>
                            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                                Result information
                            </p>

                            <div className="grid gap-3 sm:grid-cols-2">
                                <div className="rounded-xl border border-slate-200 p-4">
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <Layers3 className="h-4 w-4" />

                                        <span className="text-[10px] font-bold uppercase tracking-[0.08em]">
                                            Class
                                        </span>
                                    </div>

                                    <p className="mt-2 text-sm font-extrabold text-slate-900">
                                        {grade}
                                    </p>
                                </div>

                                <div className="rounded-xl border border-slate-200 p-4">
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <FileCheck2 className="h-4 w-4" />

                                        <span className="text-[10px] font-bold uppercase tracking-[0.08em]">
                                            Score
                                        </span>
                                    </div>

                                    <p className="mt-2 text-sm font-extrabold text-slate-900">
                                        {marks}
                                        {totalMarks !== "—" &&
                                            ` / ${totalMarks}`}
                                    </p>
                                </div>

                                <div className="rounded-xl border border-slate-200 p-4">
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <CalendarDays className="h-4 w-4" />

                                        <span className="text-[10px] font-bold uppercase tracking-[0.08em]">
                                            Result date
                                        </span>
                                    </div>

                                    <p className="mt-2 text-sm font-extrabold text-slate-900">
                                        {formattedDate}
                                    </p>
                                </div>

                                <div className="rounded-xl border border-slate-200 p-4">
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <Hash className="h-4 w-4" />

                                        <span className="text-[10px] font-bold uppercase tracking-[0.08em]">
                                            Result ID
                                        </span>
                                    </div>

                                    <p className="mt-2 break-all text-xs font-bold text-slate-700">
                                        {resultId}
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                                Remarks
                            </p>

                            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                                <p className="text-sm leading-6 text-slate-600">
                                    {remarks}
                                </p>
                            </div>
                        </section>
                    </div>
                </div>

                <div className="flex gap-2 border-t border-slate-100 bg-slate-50/70 px-5 py-4 sm:px-6">
                    <button
                        type="button"
                        onClick={onClose}
                        className="h-10 flex-1 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50"
                    >
                        Close
                    </button>

                    <button
                        type="button"
                        onClick={() => onEdit?.(result)}
                        className="h-10 flex-1 rounded-xl bg-slate-950 text-xs font-bold text-white hover:bg-blue-600"
                    >
                        Edit result
                    </button>
                </div>
            </aside>
        </div>
    );
};

export default ResultDetailDrawer;
import {
    CalendarDays,
    Clock3,
    FileText,
    Hash,
    Layers3,
    X,
} from "lucide-react";

const TestDetailDrawer = ({
    isOpen,
    test,
    onClose,
    onEdit,
}) => {
    if (!isOpen || !test) {
        return null;
    }

    const testName =
        test?.testName ||
        test?.title ||
        "Untitled Test";

    const topic =
        test?.topic ||
        test?.topics ||
        "Topic details pending";

    const grade =
        test?.grade ||
        test?.class ||
        "—";

    const type =
        test?.type ||
        "—";

    const date =
        test?.testDate ||
        test?.date ||
        "—";

    const duration =
        test?.duration ||
        "Not specified";

    const totalMarks =
        test?.totalMarks ||
        "Not specified";

    const status =
        test?.status ||
        "Scheduled";

    const testId =
        test?.id ||
        test?._id ||
        test?.testId ||
        "Not assigned";

    const description =
        test?.description ||
        "No additional notes have been added for this test.";

    const normalizedStatus = String(status).toLowerCase();

    const statusStyles = {
        scheduled:
            "bg-blue-50 text-blue-700 border-blue-100",
        completed:
            "bg-emerald-50 text-emerald-700 border-emerald-100",
        "results pending":
            "bg-amber-50 text-amber-700 border-amber-100",
        cancelled:
            "bg-rose-50 text-rose-700 border-rose-100",
    };

    const statusClass =
        statusStyles[normalizedStatus] ||
        "bg-slate-50 text-slate-600 border-slate-100";

    const formattedDate =
        date !== "—"
            ? new Date(date).toLocaleDateString(
                "en-IN",
                {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                }
            )
            : "Date not assigned";

    return (
        <div className="fixed inset-0 z-[100] bg-slate-950/25 backdrop-blur-[2px]">
            <button
                type="button"
                aria-label="Close test details"
                onClick={onClose}
                className="absolute inset-0 h-full w-full cursor-default"
            />

            <aside className="absolute right-0 top-0 flex h-full w-full max-w-xl flex-col border-l border-slate-200 bg-white shadow-[-20px_0_60px_rgba(15,23,42,0.14)]">
                {/* Header */}
                <div className="flex items-start justify-between border-b border-slate-100 px-5 py-5 sm:px-6">
                    <div className="flex min-w-0 items-start gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <FileText className="h-5 w-5" />
                        </div>

                        <div className="min-w-0">
                            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600">
                                Test details
                            </p>

                            <h2 className="mt-1 truncate text-lg font-extrabold text-slate-950">
                                {testName}
                            </h2>

                            <p className="mt-1 truncate text-xs text-slate-400">
                                {topic}
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close drawer"
                        className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto">
                    <div className="space-y-5 p-5 sm:p-6">
                        {/* Status */}
                        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                            <div className="flex items-center justify-between gap-3">
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
                                        Current status
                                    </p>

                                    <p className="mt-1 text-sm font-bold text-slate-800">
                                        Assessment status
                                    </p>
                                </div>

                                <span
                                    className={`rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.08em] ${statusClass}`}
                                >
                                    {status}
                                </span>
                            </div>
                        </div>

                        {/* Academic */}
                        <section>
                            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                                Academic information
                            </p>

                            <div className="grid gap-3 sm:grid-cols-2">
                                <div className="rounded-xl border border-slate-200 bg-white p-4">
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

                                <div className="rounded-xl border border-slate-200 bg-white p-4">
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <FileText className="h-4 w-4" />

                                        <span className="text-[10px] font-bold uppercase tracking-[0.08em]">
                                            Test type
                                        </span>
                                    </div>

                                    <p className="mt-2 text-sm font-extrabold text-slate-900">
                                        {type}
                                    </p>
                                </div>

                                <div className="rounded-xl border border-slate-200 bg-white p-4">
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <CalendarDays className="h-4 w-4" />

                                        <span className="text-[10px] font-bold uppercase tracking-[0.08em]">
                                            Test date
                                        </span>
                                    </div>

                                    <p className="mt-2 text-sm font-extrabold text-slate-900">
                                        {formattedDate}
                                    </p>
                                </div>

                                <div className="rounded-xl border border-slate-200 bg-white p-4">
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <Clock3 className="h-4 w-4" />

                                        <span className="text-[10px] font-bold uppercase tracking-[0.08em]">
                                            Duration
                                        </span>
                                    </div>

                                    <p className="mt-2 text-sm font-extrabold text-slate-900">
                                        {duration}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Assessment */}
                        <section>
                            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                                Assessment details
                            </p>

                            <div className="rounded-2xl border border-slate-200 bg-white">
                                <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-4 py-3">
                                    <span className="text-xs font-semibold text-slate-500">
                                        Topic / coverage
                                    </span>

                                    <span className="max-w-[60%] text-right text-xs font-bold text-slate-800">
                                        {topic}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-4 py-3">
                                    <span className="text-xs font-semibold text-slate-500">
                                        Total marks
                                    </span>

                                    <span className="text-xs font-bold text-slate-800">
                                        {totalMarks}
                                    </span>
                                </div>

                                <div className="flex items-start justify-between gap-4 px-4 py-3">
                                    <span className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                                        <Hash className="h-3.5 w-3.5" />
                                        Test ID
                                    </span>

                                    <span className="max-w-[60%] break-all text-right text-[11px] font-semibold text-slate-600">
                                        {testId}
                                    </span>
                                </div>
                            </div>
                        </section>

                        {/* Notes */}
                        <section>
                            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                                Notes
                            </p>

                            <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-4">
                                <p className="text-sm leading-6 text-slate-600">
                                    {description}
                                </p>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex gap-2 border-t border-slate-100 bg-slate-50/70 px-5 py-4 sm:px-6">
                    <button
                        type="button"
                        onClick={onClose}
                        className="h-10 flex-1 rounded-xl border border-slate-200 bg-white px-4 text-xs font-bold text-slate-600 transition hover:bg-slate-50"
                    >
                        Close
                    </button>

                    <button
                        type="button"
                        onClick={() => onEdit?.(test)}
                        className="h-10 flex-1 rounded-xl bg-slate-950 px-4 text-xs font-bold text-white transition hover:bg-blue-600"
                    >
                        Edit test
                    </button>
                </div>
            </aside>
        </div>
    );
};

export default TestDetailDrawer;
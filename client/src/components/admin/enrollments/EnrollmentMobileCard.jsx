import {
    ArrowUpRight,
    BookOpen,
    CalendarDays,
    CreditCard,
    UserRound,
} from "lucide-react";

const statusStyles = {
    active: "bg-emerald-50 text-emerald-700 border-emerald-100",
    completed: "bg-blue-50 text-blue-700 border-blue-100",
    inactive: "bg-slate-100 text-slate-500 border-slate-200",
};

const paymentStyles = {
    paid: "bg-emerald-50 text-emerald-700 border-emerald-100",
    partial: "bg-amber-50 text-amber-700 border-amber-100",
    pending: "bg-rose-50 text-rose-700 border-rose-100",
};

const formatLabel = (value) => {
    if (!value) return "—";

    return value
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

const EnrollmentMobileCard = ({
    enrollment,
    onView,
}) => {
    const {
        studentName = "Student",
        studentEmail = "",
        courseName = "Course not assigned",
        grade = "",
        batchName = "Batch not assigned",
        admissionStatus = "active",
        paymentStatus = "pending",
        admissionDate = "",
    } = enrollment || {};

    return (
        <article className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_8px_25px_rgba(15,23,42,0.035)]">
            <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <UserRound className="h-4 w-4" />
                    </div>

                    <div className="min-w-0">
                        <h3 className="truncate text-sm font-bold text-slate-900">
                            {studentName}
                        </h3>

                        {studentEmail && (
                            <p className="mt-0.5 truncate text-[11px] text-slate-400">
                                {studentEmail}
                            </p>
                        )}
                    </div>
                </div>

                <button
                    type="button"
                    onClick={() => onView?.(enrollment)}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-400 transition hover:bg-blue-50 hover:text-blue-600"
                    title="View enrollment"
                >
                    <ArrowUpRight className="h-4 w-4" />
                </button>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-50 p-3">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">
                        <BookOpen className="h-3 w-3" />
                        Course
                    </div>

                    <p className="mt-1.5 truncate text-xs font-semibold text-slate-700">
                        {courseName}
                    </p>

                    {grade && (
                        <p className="mt-0.5 text-[10px] text-slate-400">
                            Class {grade}
                        </p>
                    )}
                </div>

                <div className="rounded-xl bg-slate-50 p-3">
                    <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">
                        Batch
                    </div>

                    <p className="mt-1.5 truncate text-xs font-semibold text-slate-700">
                        {batchName}
                    </p>
                </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2">
                <span
                    className={`rounded-full border px-2.5 py-1 text-[10px] font-bold ${statusStyles[admissionStatus] || statusStyles.inactive}`}
                >
                    {formatLabel(admissionStatus)}
                </span>

                <span
                    className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-bold ${paymentStyles[paymentStatus] || paymentStyles.pending}`}
                >
                    <CreditCard className="h-3 w-3" />
                    {formatLabel(paymentStatus)}
                </span>

                {admissionDate && (
                    <span className="inline-flex items-center gap-1 text-[10px] text-slate-400">
                        <CalendarDays className="h-3 w-3" />
                        {admissionDate}
                    </span>
                )}
            </div>
        </article>
    );
};

export default EnrollmentMobileCard;
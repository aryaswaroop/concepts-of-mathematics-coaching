import {
    BookOpen,
    CalendarDays,
    CheckCircle2,
    ClipboardList,
    CreditCard,
    GraduationCap,
    UserRound,
    X,
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

const DetailItem = ({
    icon: Icon,
    label,
    value,
}) => (
    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3">
        <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">
            <Icon className="h-3.5 w-3.5" />
            {label}
        </div>

        <p className="mt-1.5 text-xs font-bold text-slate-800">
            {value || "—"}
        </p>
    </div>
);

const EnrollmentDetailDrawer = ({
    isOpen,
    enrollment,
    onClose,
    onEdit,
}) => {
    if (!isOpen || !enrollment) return null;

    const {
        studentName = "Student",
        studentEmail = "",
        studentId = "",
        courseName = "",
        grade = "",
        batchName = "",
        batchId = "",
        admissionDate = "",
        admissionStatus = "active",
        paymentStatus = "pending",
        notes = "",
    } = enrollment;

    return (
        <div className="fixed inset-0 z-[90] bg-slate-950/30 backdrop-blur-[2px]">
            <button
                type="button"
                aria-label="Close enrollment details"
                onClick={onClose}
                className="absolute inset-0 h-full w-full cursor-default"
            />

            <aside className="absolute right-0 top-0 flex h-full w-full max-w-lg flex-col bg-white shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <ClipboardList className="h-5 w-5" />
                        </div>

                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600">
                                Enrollment
                            </p>

                            <h2 className="mt-0.5 text-base font-extrabold text-slate-950">
                                Enrollment details
                            </h2>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto">
                    {/* Student */}
                    <div className="border-b border-slate-100 px-5 py-5">
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                                <UserRound className="h-5 w-5" />
                            </div>

                            <div className="min-w-0">
                                <h3 className="truncate text-base font-extrabold text-slate-950">
                                    {studentName}
                                </h3>

                                {studentEmail && (
                                    <p className="mt-0.5 truncate text-xs text-slate-400">
                                        {studentEmail}
                                    </p>
                                )}

                                {studentId && (
                                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-400">
                                        Student ID: {studentId}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                            <span
                                className={`rounded-full border px-2.5 py-1 text-[10px] font-bold ${statusStyles[admissionStatus] || statusStyles.inactive}`}
                            >
                                {formatLabel(admissionStatus)}
                            </span>

                            <span
                                className={`rounded-full border px-2.5 py-1 text-[10px] font-bold ${paymentStyles[paymentStatus] || paymentStyles.pending}`}
                            >
                                Payment: {formatLabel(paymentStatus)}
                            </span>
                        </div>
                    </div>

                    {/* Academic information */}
                    <div className="px-5 py-5">
                        <div className="mb-3 flex items-center gap-2">
                            <GraduationCap className="h-4 w-4 text-blue-600" />

                            <h3 className="text-xs font-extrabold uppercase tracking-[0.08em] text-slate-700">
                                Academic information
                            </h3>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            <DetailItem
                                icon={BookOpen}
                                label="Course"
                                value={courseName}
                            />

                            <DetailItem
                                icon={GraduationCap}
                                label="Class"
                                value={grade ? `Class ${grade}` : ""}
                            />

                            <DetailItem
                                icon={ClipboardList}
                                label="Batch"
                                value={batchName}
                            />

                            <DetailItem
                                icon={ClipboardList}
                                label="Batch ID"
                                value={batchId}
                            />
                        </div>
                    </div>

                    {/* Admission */}
                    <div className="border-t border-slate-100 px-5 py-5">
                        <div className="mb-3 flex items-center gap-2">
                            <CalendarDays className="h-4 w-4 text-blue-600" />

                            <h3 className="text-xs font-extrabold uppercase tracking-[0.08em] text-slate-700">
                                Admission
                            </h3>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            <DetailItem
                                icon={CalendarDays}
                                label="Admission date"
                                value={admissionDate}
                            />

                            <DetailItem
                                icon={CheckCircle2}
                                label="Status"
                                value={formatLabel(admissionStatus)}
                            />

                            <DetailItem
                                icon={CreditCard}
                                label="Payment status"
                                value={formatLabel(paymentStatus)}
                            />
                        </div>
                    </div>

                    {/* Notes */}
                    <div className="border-t border-slate-100 px-5 py-5">
                        <h3 className="text-xs font-extrabold uppercase tracking-[0.08em] text-slate-700">
                            Notes
                        </h3>

                        <div className="mt-3 rounded-xl border border-slate-100 bg-slate-50/70 p-4">
                            <p className="text-xs leading-5 text-slate-500">
                                {notes || "No additional enrollment notes."}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-end gap-2 border-t border-slate-100 bg-slate-50/70 px-5 py-3">
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-xl px-4 py-2.5 text-xs font-bold text-slate-500 transition hover:bg-white hover:text-slate-800"
                    >
                        Close
                    </button>

                    <button
                        type="button"
                        onClick={() => onEdit?.(enrollment)}
                        className="rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-blue-700"
                    >
                        Edit enrollment
                    </button>
                </div>
            </aside>
        </div>
    );
};

export default EnrollmentDetailDrawer;
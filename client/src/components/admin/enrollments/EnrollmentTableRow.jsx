import { BookOpen, CalendarDays, UserRound } from "lucide-react";

import EnrollmentRowActions from "./EnrollmentRowActions";

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

const EnrollmentTableRow = ({
    enrollment,
    onView,
    onEdit,
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
        <div className="hidden border-b border-slate-100 px-5 py-4 transition hover:bg-blue-50/25 md:grid md:grid-cols-[1.5fr_1fr_1fr_0.85fr_0.9fr_0.55fr] md:items-center md:gap-4">
            {/* Student */}
            <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <UserRound className="h-4 w-4" />
                </div>

                <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-slate-900">
                        {studentName}
                    </p>

                    {studentEmail && (
                        <p className="mt-0.5 truncate text-[11px] text-slate-400">
                            {studentEmail}
                        </p>
                    )}
                </div>
            </div>

            {/* Course */}
            <div className="min-w-0">
                <div className="flex items-center gap-2">
                    <BookOpen className="h-3.5 w-3.5 shrink-0 text-blue-500" />

                    <p className="truncate text-xs font-semibold text-slate-700">
                        {courseName}
                    </p>
                </div>

                {grade && (
                    <p className="mt-1 pl-5 text-[10px] font-medium uppercase tracking-[0.08em] text-slate-400">
                        Class {grade}
                    </p>
                )}
            </div>

            {/* Batch */}
            <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-slate-700">
                    {batchName}
                </p>

                <p className="mt-1 text-[10px] text-slate-400">
                    Teacher managed
                </p>
            </div>

            {/* Admission */}
            <div>
                <span
                    className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold ${statusStyles[admissionStatus] || statusStyles.inactive}`}
                >
                    {formatLabel(admissionStatus)}
                </span>

                {admissionDate && (
                    <div className="mt-1 flex items-center gap-1 text-[10px] text-slate-400">
                        <CalendarDays className="h-3 w-3" />
                        {admissionDate}
                    </div>
                )}
            </div>

            {/* Payment */}
            <div>
                <span
                    className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold ${paymentStyles[paymentStatus] || paymentStyles.pending}`}
                >
                    {formatLabel(paymentStatus)}
                </span>
            </div>

            {/* Actions */}
            <EnrollmentRowActions
                onView={() => onView?.(enrollment)}
                onEdit={() => onEdit?.(enrollment)}
            />
        </div>
    );
};

export default EnrollmentTableRow;
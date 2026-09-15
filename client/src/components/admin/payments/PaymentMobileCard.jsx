import {
    CalendarDays,
    CreditCard,
    Eye,
    IndianRupee,
    Pencil,
} from "lucide-react";

const statusStyles = {
    paid: "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-100",
    partial: "bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-100",
    pending: "bg-rose-50 text-rose-700 ring-1 ring-inset ring-rose-100",
};

const methodLabels = {
    cash: "Cash",
    upi: "UPI",
    bank_transfer: "Bank Transfer",
    other: "Other",
};

const formatAmount = (amount) => {
    if (amount === undefined || amount === null || amount === "") {
        return "—";
    }

    return `₹${Number(amount).toLocaleString("en-IN")}`;
};

const formatDate = (date) => {
    if (!date) {
        return "—";
    }

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
        return date;
    }

    return parsedDate.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
};

const PaymentMobileCard = ({
    payment,
    onView,
    onEdit,
}) => {
    const status = payment?.status || "pending";

    return (
        <article className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-[0_6px_20px_rgba(15,23,42,0.035)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(15,23,42,0.07)]">
            {/* Header */}
            <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                    <p className="truncate text-sm font-extrabold text-slate-900">
                        {payment?.studentName || "Student"}
                    </p>

                    <p className="mt-0.5 truncate text-[11px] text-slate-400">
                        {payment?.studentId
                            ? `ID: ${payment.studentId}`
                            : "Student record"}
                    </p>
                </div>

                <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold capitalize ${statusStyles[status] ||
                        "bg-slate-50 text-slate-600 ring-1 ring-inset ring-slate-200"
                        }`}
                >
                    {status}
                </span>
            </div>

            {/* Course */}
            <div className="mt-4 rounded-lg bg-slate-50/80 px-3 py-2.5">
                <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">
                    Course
                </p>

                <p className="mt-1 text-xs font-bold text-slate-700">
                    {payment?.courseName || "—"}
                </p>

                {payment?.grade && (
                    <p className="mt-0.5 text-[11px] text-slate-400">
                        Class {payment.grade}
                    </p>
                )}
            </div>

            {/* Payment details */}
            <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <IndianRupee className="h-4 w-4" />
                    </div>

                    <div className="min-w-0">
                        <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                            Amount
                        </p>
                        <p className="truncate text-xs font-extrabold text-slate-800">
                            {formatAmount(payment?.amount)}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-500">
                        <CalendarDays className="h-4 w-4" />
                    </div>

                    <div className="min-w-0">
                        <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                            Date
                        </p>
                        <p className="truncate text-xs font-bold text-slate-700">
                            {formatDate(
                                payment?.date || payment?.paymentDate
                            )}
                        </p>
                    </div>
                </div>
            </div>

            {/* Method */}
            <div className="mt-3 flex items-center gap-2">
                <CreditCard className="h-3.5 w-3.5 text-slate-400" />

                <span className="text-[11px] text-slate-400">
                    Payment method:
                </span>

                <span className="text-[11px] font-bold text-slate-600">
                    {methodLabels[payment?.method] ||
                        payment?.method ||
                        "—"}
                </span>
            </div>

            {/* Actions */}
            <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-3">
                <button
                    type="button"
                    onClick={() => onView?.(payment)}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                >
                    <Eye className="h-3.5 w-3.5" />
                    View
                </button>

                <button
                    type="button"
                    onClick={() => onEdit?.(payment)}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-950 px-3 py-2 text-xs font-bold text-white transition hover:bg-blue-600"
                >
                    <Pencil className="h-3.5 w-3.5" />
                    Edit
                </button>
            </div>
        </article>
    );
};

export default PaymentMobileCard;
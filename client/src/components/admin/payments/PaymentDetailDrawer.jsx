import {
    CalendarDays,
    CreditCard,
    FileText,
    IndianRupee,
    UserRound,
    X,
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
        month: "long",
        year: "numeric",
    });
};

const DetailItem = ({
    label,
    value,
    icon: Icon,
}) => (
    <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-3">
        <div className="flex items-center gap-2">
            {Icon && (
                <Icon className="h-3.5 w-3.5 text-slate-400" />
            )}

            <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">
                {label}
            </span>
        </div>

        <p className="mt-1.5 break-words text-sm font-bold text-slate-800">
            {value || "—"}
        </p>
    </div>
);

const PaymentDetailDrawer = ({
    isOpen,
    payment,
    onClose,
    onEdit,
}) => {
    if (!isOpen || !payment) {
        return null;
    }

    const status = payment.status || "pending";

    return (
        <div className="fixed inset-0 z-[110]">
            {/* Backdrop */}
            <button
                type="button"
                aria-label="Close payment details"
                onClick={onClose}
                className="absolute inset-0 bg-slate-950/35 backdrop-blur-[2px]"
            />

            {/* Drawer */}
            <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-[-20px_0_60px_rgba(15,23,42,0.15)]">
                {/* Header */}
                <div className="border-b border-slate-100 px-5 py-4">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600">
                                Payment record
                            </p>

                            <h2 className="mt-1 text-lg font-extrabold text-slate-950">
                                Payment details
                            </h2>

                            <p className="mt-0.5 text-xs text-slate-400">
                                Review the recorded payment information
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={onClose}
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-900"
                            aria-label="Close"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-5 py-5">
                    {/* Amount hero */}
                    <div className="rounded-2xl bg-slate-950 p-5 text-white">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                                    Recorded amount
                                </p>

                                <p className="mt-2 text-3xl font-extrabold tracking-tight">
                                    {formatAmount(payment.amount)}
                                </p>
                            </div>

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                                <IndianRupee className="h-5 w-5 text-blue-300" />
                            </div>
                        </div>

                        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                            <span className="text-xs text-slate-400">
                                Payment status
                            </span>

                            <span
                                className={`rounded-full px-2.5 py-1 text-[10px] font-bold capitalize ${statusStyles[status] ||
                                    "bg-white/10 text-white"
                                    }`}
                            >
                                {status}
                            </span>
                        </div>
                    </div>

                    {/* Student */}
                    <section className="mt-6">
                        <div className="mb-3 flex items-center gap-2">
                            <UserRound className="h-4 w-4 text-blue-600" />

                            <h3 className="text-sm font-extrabold text-slate-900">
                                Student
                            </h3>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            <DetailItem
                                label="Student name"
                                value={payment.studentName}
                            />

                            <DetailItem
                                label="Student ID"
                                value={payment.studentId}
                            />
                        </div>
                    </section>

                    {/* Academic */}
                    <section className="mt-6">
                        <div className="mb-3">
                            <h3 className="text-sm font-extrabold text-slate-900">
                                Academic information
                            </h3>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            <DetailItem
                                label="Course"
                                value={payment.courseName}
                            />

                            <DetailItem
                                label="Class"
                                value={
                                    payment.grade
                                        ? `Class ${payment.grade}`
                                        : "—"
                                }
                            />
                        </div>
                    </section>

                    {/* Payment */}
                    <section className="mt-6">
                        <div className="mb-3 flex items-center gap-2">
                            <CreditCard className="h-4 w-4 text-blue-600" />

                            <h3 className="text-sm font-extrabold text-slate-900">
                                Payment information
                            </h3>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            <DetailItem
                                label="Payment date"
                                value={formatDate(
                                    payment.paymentDate ||
                                    payment.date
                                )}
                                icon={CalendarDays}
                            />

                            <DetailItem
                                label="Method"
                                value={
                                    methodLabels[payment.method] ||
                                    payment.method ||
                                    "—"
                                }
                            />

                            <DetailItem
                                label="Installment"
                                value={payment.installment}
                            />

                            <DetailItem
                                label="Reference"
                                value={payment.referenceNumber}
                            />
                        </div>
                    </section>

                    {/* Notes */}
                    <section className="mt-6">
                        <div className="mb-3 flex items-center gap-2">
                            <FileText className="h-4 w-4 text-blue-600" />

                            <h3 className="text-sm font-extrabold text-slate-900">
                                Notes
                            </h3>
                        </div>

                        <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4">
                            <p className="text-xs leading-6 text-slate-500">
                                {payment.notes ||
                                    "No additional notes were recorded for this payment."}
                            </p>
                        </div>
                    </section>
                </div>

                {/* Footer */}
                <div className="border-t border-slate-100 bg-white px-5 py-4">
                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                        >
                            Close
                        </button>

                        <button
                            type="button"
                            onClick={() => onEdit?.(payment)}
                            className="flex-1 rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-blue-600"
                        >
                            Edit payment
                        </button>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default PaymentDetailDrawer;
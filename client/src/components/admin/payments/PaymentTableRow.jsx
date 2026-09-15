import PaymentRowActions from "./PaymentRowActions";

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

const PaymentTableRow = ({
    payment,
    onView,
    onEdit,
}) => {
    const status = payment?.status || "pending";

    return (
        <div className="hidden border-b border-slate-100 px-5 py-4 transition last:border-b-0 hover:bg-slate-50/60 md:grid md:grid-cols-[1.5fr_1fr_0.8fr_0.9fr_0.9fr_0.9fr_0.55fr] md:items-center md:gap-4">
            {/* Student */}
            <div className="min-w-0">
                <p className="truncate text-sm font-bold text-slate-900">
                    {payment?.studentName || "Student"}
                </p>

                <p className="mt-0.5 truncate text-[11px] text-slate-400">
                    {payment?.studentId
                        ? `ID: ${payment.studentId}`
                        : "Student record"}
                </p>
            </div>

            {/* Course */}
            <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-slate-700">
                    {payment?.courseName || "—"}
                </p>

                {payment?.grade && (
                    <p className="mt-0.5 text-[11px] text-slate-400">
                        Class {payment.grade}
                    </p>
                )}
            </div>

            {/* Amount */}
            <div>
                <p className="text-sm font-extrabold text-slate-900">
                    {formatAmount(payment?.amount)}
                </p>

                {payment?.installment && (
                    <p className="mt-0.5 text-[10px] text-slate-400">
                        Installment {payment.installment}
                    </p>
                )}
            </div>

            {/* Date */}
            <div>
                <p className="text-xs font-medium text-slate-600">
                    {formatDate(payment?.date || payment?.paymentDate)}
                </p>
            </div>

            {/* Method */}
            <div>
                <span className="inline-flex rounded-lg bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                    {methodLabels[payment?.method] ||
                        payment?.method ||
                        "—"}
                </span>
            </div>

            {/* Status */}
            <div>
                <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold capitalize ${statusStyles[status] ||
                        "bg-slate-50 text-slate-600 ring-1 ring-inset ring-slate-200"
                        }`}
                >
                    {status}
                </span>
            </div>

            {/* Actions */}
            <PaymentRowActions
                payment={payment}
                onView={onView}
                onEdit={onEdit}
            />
        </div>
    );
};

export default PaymentTableRow;
import { useEffect, useState } from "react";
import {
    CalendarDays,
    CreditCard,
    IndianRupee,
    X,
} from "lucide-react";

const EditPaymentModal = ({
    isOpen,
    payment,
    onClose,
    onSubmit,
}) => {
    const [form, setForm] = useState({
        studentName: "",
        studentId: "",
        courseName: "",
        grade: "",
        amount: "",
        paymentDate: "",
        method: "",
        status: "paid",
        installment: "",
        referenceNumber: "",
        notes: "",
    });

    useEffect(() => {
        if (!payment) {
            return;
        }

        setForm({
            studentName: payment.studentName || "",
            studentId: payment.studentId || "",
            courseName: payment.courseName || "",
            grade: payment.grade || "",
            amount: payment.amount ?? "",
            paymentDate:
                payment.paymentDate ||
                payment.date ||
                "",
            method: payment.method || "",
            status: payment.status || "paid",
            installment: payment.installment || "",
            referenceNumber:
                payment.referenceNumber || "",
            notes: payment.notes || "",
        });
    }, [payment]);

    if (!isOpen || !payment) {
        return null;
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit?.({
            ...payment,
            ...form,
        });
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <button
                type="button"
                aria-label="Close edit payment modal"
                className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]"
                onClick={onClose}
            />

            <div className="relative z-10 max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
                {/* Header */}
                <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600">
                            Finance / Payments
                        </p>

                        <h2 className="mt-1 text-lg font-extrabold text-slate-950">
                            Edit payment
                        </h2>

                        <p className="mt-0.5 text-xs text-slate-400">
                            Update payment and installment information
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-900"
                        aria-label="Close"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="space-y-6 p-5">
                        {/* Student */}
                        <section>
                            <div className="mb-3">
                                <h3 className="text-sm font-extrabold text-slate-900">
                                    Student information
                                </h3>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="edit-studentName"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Student name
                                    </label>

                                    <input
                                        id="edit-studentName"
                                        name="studentName"
                                        value={form.studentName}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="edit-studentId"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Student ID
                                    </label>

                                    <input
                                        id="edit-studentId"
                                        name="studentId"
                                        value={form.studentId}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Academic */}
                        <section>
                            <div className="mb-3">
                                <h3 className="text-sm font-extrabold text-slate-900">
                                    Academic information
                                </h3>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="edit-courseName"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Course
                                    </label>

                                    <select
                                        id="edit-courseName"
                                        name="courseName"
                                        value={form.courseName}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    >
                                        <option value="">
                                            Select course
                                        </option>
                                        <option value="Class 11 Mathematics">
                                            Class 11 Mathematics
                                        </option>
                                        <option value="Class 12 Mathematics">
                                            Class 12 Mathematics
                                        </option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="edit-grade"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Class
                                    </label>

                                    <select
                                        id="edit-grade"
                                        name="grade"
                                        value={form.grade}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    >
                                        <option value="">
                                            Select class
                                        </option>
                                        <option value="11">Class 11</option>
                                        <option value="12">Class 12</option>
                                    </select>
                                </div>
                            </div>
                        </section>

                        {/* Payment */}
                        <section>
                            <div className="mb-3">
                                <h3 className="text-sm font-extrabold text-slate-900">
                                    Payment information
                                </h3>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="edit-amount"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Amount
                                    </label>

                                    <div className="relative">
                                        <IndianRupee className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                        <input
                                            id="edit-amount"
                                            name="amount"
                                            type="number"
                                            min="0"
                                            value={form.amount}
                                            onChange={handleChange}
                                            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3.5 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="edit-paymentDate"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Payment date
                                    </label>

                                    <div className="relative">
                                        <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                        <input
                                            id="edit-paymentDate"
                                            name="paymentDate"
                                            type="date"
                                            value={form.paymentDate}
                                            onChange={handleChange}
                                            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="edit-method"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Payment method
                                    </label>

                                    <select
                                        id="edit-method"
                                        name="method"
                                        value={form.method}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    >
                                        <option value="">
                                            Select method
                                        </option>
                                        <option value="cash">Cash</option>
                                        <option value="upi">UPI</option>
                                        <option value="bank_transfer">
                                            Bank Transfer
                                        </option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="edit-status"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Payment status
                                    </label>

                                    <select
                                        id="edit-status"
                                        name="status"
                                        value={form.status}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    >
                                        <option value="paid">Paid</option>
                                        <option value="partial">
                                            Partial
                                        </option>
                                        <option value="pending">
                                            Pending
                                        </option>
                                    </select>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="edit-installment"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Installment
                                    </label>

                                    <input
                                        id="edit-installment"
                                        name="installment"
                                        value={form.installment}
                                        onChange={handleChange}
                                        placeholder="e.g. 1, 2, Final"
                                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm outline-none transition placeholder:text-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Additional */}
                        <section>
                            <div className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="edit-referenceNumber"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Reference number
                                    </label>

                                    <input
                                        id="edit-referenceNumber"
                                        name="referenceNumber"
                                        value={form.referenceNumber}
                                        onChange={handleChange}
                                        placeholder="Optional transaction/reference ID"
                                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm outline-none transition placeholder:text-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="edit-notes"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Notes
                                    </label>

                                    <textarea
                                        id="edit-notes"
                                        name="notes"
                                        rows={3}
                                        value={form.notes}
                                        onChange={handleChange}
                                        placeholder="Add any payment-related note"
                                        className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm outline-none transition placeholder:text-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    />
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Footer */}
                    <div className="sticky bottom-0 flex items-center justify-end gap-2 border-t border-slate-100 bg-white px-5 py-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-blue-600"
                        >
                            <CreditCard className="h-4 w-4" />
                            Update payment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditPaymentModal;
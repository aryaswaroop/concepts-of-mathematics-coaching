import { useEffect, useState } from "react";
import {
    CalendarDays,
    CreditCard,
    IndianRupee,
    X,
} from "lucide-react";

const initialForm = {
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
};

const AddPaymentModal = ({
    isOpen,
    onClose,
    onSubmit,
}) => {
    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if (isOpen) {
            setForm(initialForm);
        }
    }, [isOpen]);

    if (!isOpen) {
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

        onSubmit?.(form);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <button
                type="button"
                aria-label="Close add payment modal"
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
                            Add payment
                        </h2>

                        <p className="mt-0.5 text-xs text-slate-400">
                            Record a student payment or installment
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
                        {/* Student information */}
                        <section>
                            <div className="mb-3">
                                <h3 className="text-sm font-extrabold text-slate-900">
                                    Student information
                                </h3>

                                <p className="mt-0.5 text-xs text-slate-400">
                                    Link the payment to the correct student
                                </p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="studentName"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Student name
                                    </label>

                                    <input
                                        id="studentName"
                                        name="studentName"
                                        value={form.studentName}
                                        onChange={handleChange}
                                        placeholder="Enter student name"
                                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm outline-none transition placeholder:text-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="studentId"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Student ID
                                    </label>

                                    <input
                                        id="studentId"
                                        name="studentId"
                                        value={form.studentId}
                                        onChange={handleChange}
                                        placeholder="Enter student ID"
                                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm outline-none transition placeholder:text-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Academic information */}
                        <section>
                            <div className="mb-3">
                                <h3 className="text-sm font-extrabold text-slate-900">
                                    Academic information
                                </h3>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="courseName"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Course
                                    </label>

                                    <select
                                        id="courseName"
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
                                        htmlFor="grade"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Class
                                    </label>

                                    <select
                                        id="grade"
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

                        {/* Payment information */}
                        <section>
                            <div className="mb-3">
                                <h3 className="text-sm font-extrabold text-slate-900">
                                    Payment information
                                </h3>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="amount"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Amount
                                    </label>

                                    <div className="relative">
                                        <IndianRupee className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                        <input
                                            id="amount"
                                            name="amount"
                                            type="number"
                                            min="0"
                                            value={form.amount}
                                            onChange={handleChange}
                                            placeholder="Enter amount"
                                            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3.5 text-sm outline-none transition placeholder:text-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="paymentDate"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Payment date
                                    </label>

                                    <div className="relative">
                                        <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                        <input
                                            id="paymentDate"
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
                                        htmlFor="method"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Payment method
                                    </label>

                                    <select
                                        id="method"
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
                                        htmlFor="status"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Payment status
                                    </label>

                                    <select
                                        id="status"
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
                                        htmlFor="installment"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Installment
                                    </label>

                                    <input
                                        id="installment"
                                        name="installment"
                                        value={form.installment}
                                        onChange={handleChange}
                                        placeholder="e.g. 1, 2, Final"
                                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm outline-none transition placeholder:text-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Reference & notes */}
                        <section>
                            <div className="mb-3">
                                <h3 className="text-sm font-extrabold text-slate-900">
                                    Additional details
                                </h3>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="referenceNumber"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Reference number
                                    </label>

                                    <input
                                        id="referenceNumber"
                                        name="referenceNumber"
                                        value={form.referenceNumber}
                                        onChange={handleChange}
                                        placeholder="Optional transaction/reference ID"
                                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm outline-none transition placeholder:text-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="notes"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Notes
                                    </label>

                                    <textarea
                                        id="notes"
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
                            Save payment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPaymentModal;
import { useEffect, useState } from "react";
import { ClipboardList, X } from "lucide-react";

const emptyForm = {
    studentName: "",
    studentId: "",
    courseName: "",
    grade: "",
    batchName: "",
    batchId: "",
    admissionDate: "",
    admissionStatus: "active",
    paymentStatus: "pending",
    notes: "",
};

const EditEnrollmentModal = ({
    isOpen,
    enrollment,
    onClose,
    onSubmit,
}) => {
    const [form, setForm] = useState(emptyForm);

    useEffect(() => {
        if (!isOpen || !enrollment) return;

        setForm({
            studentName: enrollment.studentName || "",
            studentId: enrollment.studentId || "",
            courseName: enrollment.courseName || "",
            grade: enrollment.grade || "",
            batchName: enrollment.batchName || "",
            batchId: enrollment.batchId || "",
            admissionDate: enrollment.admissionDate || "",
            admissionStatus: enrollment.admissionStatus || "active",
            paymentStatus: enrollment.paymentStatus || "pending",
            notes: enrollment.notes || "",
        });
    }, [isOpen, enrollment]);

    if (!isOpen || !enrollment) return null;

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit?.({
            ...enrollment,
            ...form,
        });

        onClose?.();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm">
            <div className="max-h-[92vh] w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <ClipboardList className="h-5 w-5" />
                        </div>

                        <div>
                            <h2 className="text-base font-extrabold text-slate-950">
                                Edit enrollment
                            </h2>

                            <p className="mt-0.5 text-xs text-slate-400">
                                Update enrollment information
                            </p>
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

                <form
                    onSubmit={handleSubmit}
                    className="max-h-[calc(92vh-145px)] overflow-y-auto"
                >
                    <div className="grid gap-5 p-5 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                            <label className="mb-1.5 block text-xs font-bold text-slate-700">
                                Student
                            </label>

                            <input
                                name="studentName"
                                value={form.studentName}
                                onChange={handleChange}
                                placeholder="Student name"
                                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm outline-none transition placeholder:text-slate-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-700">
                                Student ID
                            </label>

                            <input
                                name="studentId"
                                value={form.studentId}
                                onChange={handleChange}
                                placeholder="Student ID"
                                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm outline-none transition placeholder:text-slate-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-700">
                                Course
                            </label>

                            <select
                                name="courseName"
                                value={form.courseName}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            >
                                <option value="">Select course</option>
                                <option value="Class 11 Mathematics">
                                    Class 11 Mathematics
                                </option>
                                <option value="Class 12 Mathematics">
                                    Class 12 Mathematics
                                </option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-700">
                                Class
                            </label>

                            <select
                                name="grade"
                                value={form.grade}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            >
                                <option value="">Select class</option>
                                <option value="11">Class 11</option>
                                <option value="12">Class 12</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-700">
                                Batch
                            </label>

                            <input
                                name="batchName"
                                value={form.batchName}
                                onChange={handleChange}
                                placeholder="Batch"
                                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm outline-none transition placeholder:text-slate-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-700">
                                Batch ID
                            </label>

                            <input
                                name="batchId"
                                value={form.batchId}
                                onChange={handleChange}
                                placeholder="Batch ID"
                                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm outline-none transition placeholder:text-slate-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-700">
                                Admission date
                            </label>

                            <input
                                type="date"
                                name="admissionDate"
                                value={form.admissionDate}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-700">
                                Admission status
                            </label>

                            <select
                                name="admissionStatus"
                                value={form.admissionStatus}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            >
                                <option value="active">Active</option>
                                <option value="completed">Completed</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-700">
                                Payment status
                            </label>

                            <select
                                name="paymentStatus"
                                value={form.paymentStatus}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            >
                                <option value="pending">Pending</option>
                                <option value="partial">Partial</option>
                                <option value="paid">Paid</option>
                            </select>
                        </div>

                        <div className="sm:col-span-2">
                            <label className="mb-1.5 block text-xs font-bold text-slate-700">
                                Notes
                            </label>

                            <textarea
                                name="notes"
                                value={form.notes}
                                onChange={handleChange}
                                rows={3}
                                placeholder="Optional notes"
                                className="w-full resize-none rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm outline-none transition placeholder:text-slate-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-2 border-t border-slate-100 bg-slate-50/60 px-5 py-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-xl px-4 py-2.5 text-xs font-bold text-slate-500 transition hover:bg-white hover:text-slate-800"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-blue-700"
                        >
                            Save changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditEnrollmentModal;
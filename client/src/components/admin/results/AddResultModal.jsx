import { useEffect, useState } from "react";
import {
    FileCheck2,
    X,
} from "lucide-react";

const initialForm = {
    studentName: "",
    studentId: "",
    testName: "",
    testId: "",
    grade: "11",
    marks: "",
    totalMarks: "",
    percentage: "",
    resultDate: "",
    status: "Draft",
    remarks: "",
};

const AddResultModal = ({
    isOpen,
    onClose,
    onSubmit,
}) => {
    const [form, setForm] =
        useState(initialForm);

    useEffect(() => {
        if (isOpen) {
            setForm(initialForm);
        }
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    const handleChange = (event) => {
        const {
            name,
            value,
        } = event.target;

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
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/35 p-4 backdrop-blur-sm">
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="add-result-title"
                className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.2)]"
            >
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <FileCheck2 className="h-4 w-4" />
                        </div>

                        <div>
                            <h2
                                id="add-result-title"
                                className="text-base font-extrabold text-slate-950"
                            >
                                Add result
                            </h2>

                            <p className="mt-0.5 text-xs text-slate-400">
                                Record a student's test performance
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                        aria-label="Close add result modal"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="overflow-y-auto"
                >
                    <div className="space-y-5 px-5 py-5 sm:px-6">
                        <div>
                            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                                Student & test
                            </p>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                        Student name
                                    </label>

                                    <input
                                        name="studentName"
                                        value={form.studentName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter student name"
                                        className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none transition placeholder:text-slate-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                                    />
                                </div>

                                <div>
                                    <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                        Student ID
                                    </label>

                                    <input
                                        name="studentId"
                                        value={form.studentId}
                                        onChange={handleChange}
                                        placeholder="Student ID"
                                        className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none transition placeholder:text-slate-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                                    />
                                </div>

                                <div>
                                    <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                        Test name
                                    </label>

                                    <input
                                        name="testName"
                                        value={form.testName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Select / enter test"
                                        className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none transition placeholder:text-slate-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                                    />
                                </div>

                                <div>
                                    <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                        Test ID
                                    </label>

                                    <input
                                        name="testId"
                                        value={form.testId}
                                        onChange={handleChange}
                                        placeholder="Test ID"
                                        className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none transition placeholder:text-slate-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                                    />
                                </div>

                                <div>
                                    <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                        Class
                                    </label>

                                    <select
                                        name="grade"
                                        value={form.grade}
                                        onChange={handleChange}
                                        className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                                    >
                                        <option value="11">
                                            Class 11
                                        </option>
                                        <option value="12">
                                            Class 12
                                        </option>
                                    </select>
                                </div>

                                <div>
                                    <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                        Result date
                                    </label>

                                    <input
                                        type="date"
                                        name="resultDate"
                                        value={form.resultDate}
                                        onChange={handleChange}
                                        className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                                Performance
                            </p>

                            <div className="grid gap-4 sm:grid-cols-3">
                                <div>
                                    <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                        Marks obtained
                                    </label>

                                    <input
                                        type="number"
                                        min="0"
                                        name="marks"
                                        value={form.marks}
                                        onChange={handleChange}
                                        placeholder="Marks"
                                        className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                                    />
                                </div>

                                <div>
                                    <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                        Total marks
                                    </label>

                                    <input
                                        type="number"
                                        min="0"
                                        name="totalMarks"
                                        value={form.totalMarks}
                                        onChange={handleChange}
                                        placeholder="Total"
                                        className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                                    />
                                </div>

                                <div>
                                    <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                        Percentage
                                    </label>

                                    <input
                                        type="number"
                                        min="0"
                                        max="100"
                                        step="0.01"
                                        name="percentage"
                                        value={form.percentage}
                                        onChange={handleChange}
                                        placeholder="%"
                                        className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Result status
                            </label>

                            <select
                                name="status"
                                value={form.status}
                                onChange={handleChange}
                                className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            >
                                <option value="Draft">
                                    Draft
                                </option>
                                <option value="Pending">
                                    Pending
                                </option>
                                <option value="Published">
                                    Published
                                </option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Remarks
                            </label>

                            <textarea
                                name="remarks"
                                value={form.remarks}
                                onChange={handleChange}
                                rows="3"
                                placeholder="Add performance remarks or internal notes..."
                                className="w-full resize-none rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col-reverse gap-2 border-t border-slate-100 bg-slate-50/60 px-5 py-4 sm:flex-row sm:justify-end sm:px-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="h-10 rounded-xl border border-slate-200 bg-white px-4 text-xs font-bold text-slate-600 hover:bg-slate-50"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="h-10 rounded-xl bg-slate-950 px-5 text-xs font-bold text-white transition hover:bg-blue-600"
                        >
                            Save result
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddResultModal;
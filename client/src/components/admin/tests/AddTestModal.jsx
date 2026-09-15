import { useEffect, useState } from "react";
import {
    CalendarDays,
    Clock3,
    FileText,
    X,
} from "lucide-react";

const initialForm = {
    testName: "",
    grade: "11",
    type: "Weekly Test",
    topic: "",
    testDate: "",
    duration: "",
    totalMarks: "",
    status: "Scheduled",
    description: "",
};

const AddTestModal = ({
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/35 p-4 backdrop-blur-sm">
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="add-test-title"
                className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.2)]"
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <FileText className="h-4 w-4" />
                        </div>

                        <div>
                            <h2
                                id="add-test-title"
                                className="text-base font-extrabold text-slate-950"
                            >
                                Add test
                            </h2>

                            <p className="mt-0.5 text-xs text-slate-400">
                                Create a new assessment record
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close add test modal"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="overflow-y-auto"
                >
                    <div className="space-y-5 px-5 py-5 sm:px-6">
                        {/* Test identity */}
                        <div>
                            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                                Test information
                            </p>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="testName"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Test name
                                    </label>

                                    <input
                                        id="testName"
                                        name="testName"
                                        value={form.testName}
                                        onChange={handleChange}
                                        placeholder="e.g. Weekly Test 01"
                                        required
                                        className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                                    />
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
                                        className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                                    >
                                        <option value="11">Class 11</option>
                                        <option value="12">Class 12</option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="type"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Test type
                                    </label>

                                    <select
                                        id="type"
                                        name="type"
                                        value={form.type}
                                        onChange={handleChange}
                                        className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                                    >
                                        <option value="Weekly Test">
                                            Weekly Test
                                        </option>
                                        <option value="Monthly Test">
                                            Monthly Test
                                        </option>
                                        <option value="Pre-Board">
                                            Pre-Board
                                        </option>
                                        <option value="Other">
                                            Other
                                        </option>
                                    </select>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="topic"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Topic / syllabus coverage
                                    </label>

                                    <input
                                        id="topic"
                                        name="topic"
                                        value={form.topic}
                                        onChange={handleChange}
                                        placeholder="Enter topic or covered chapters"
                                        className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Schedule */}
                        <div>
                            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                                Schedule & assessment
                            </p>

                            <div className="grid gap-4 sm:grid-cols-3">
                                <div>
                                    <label
                                        htmlFor="testDate"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Test date
                                    </label>

                                    <div className="relative">
                                        <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                        <input
                                            id="testDate"
                                            name="testDate"
                                            type="date"
                                            value={form.testDate}
                                            onChange={handleChange}
                                            className="h-10 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="duration"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Duration
                                    </label>

                                    <div className="relative">
                                        <Clock3 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                        <input
                                            id="duration"
                                            name="duration"
                                            value={form.duration}
                                            onChange={handleChange}
                                            placeholder="e.g. 60 min"
                                            className="h-10 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="totalMarks"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Total marks
                                    </label>

                                    <input
                                        id="totalMarks"
                                        name="totalMarks"
                                        type="number"
                                        min="0"
                                        value={form.totalMarks}
                                        onChange={handleChange}
                                        placeholder="e.g. 50"
                                        className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Status */}
                        <div>
                            <label
                                htmlFor="status"
                                className="mb-1.5 block text-xs font-bold text-slate-600"
                            >
                                Status
                            </label>

                            <select
                                id="status"
                                name="status"
                                value={form.status}
                                onChange={handleChange}
                                className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            >
                                <option value="Scheduled">
                                    Scheduled
                                </option>
                                <option value="Completed">
                                    Completed
                                </option>
                                <option value="Results Pending">
                                    Results Pending
                                </option>
                                <option value="Cancelled">
                                    Cancelled
                                </option>
                            </select>
                        </div>

                        {/* Description */}
                        <div>
                            <label
                                htmlFor="description"
                                className="mb-1.5 block text-xs font-bold text-slate-600"
                            >
                                Description / notes
                            </label>

                            <textarea
                                id="description"
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                rows="3"
                                placeholder="Add any internal notes about this test..."
                                className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            />
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex flex-col-reverse gap-2 border-t border-slate-100 bg-slate-50/60 px-5 py-4 sm:flex-row sm:justify-end sm:px-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="h-10 rounded-xl border border-slate-200 bg-white px-4 text-xs font-bold text-slate-600 transition hover:bg-slate-50"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="h-10 rounded-xl bg-slate-950 px-5 text-xs font-bold text-white transition hover:bg-blue-600"
                        >
                            Save test
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTestModal;
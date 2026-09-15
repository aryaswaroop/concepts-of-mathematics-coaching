import { Gift, X } from "lucide-react";
import { useEffect, useState } from "react";

const initialForm = {
    studentName: "",
    studentId: "",
    rewardName: "",
    rewardType: "weekly_performer",
    grade: "",
    value: "",
    rewardDate: "",
    status: "awarded",
    testName: "",
    testId: "",
    description: "",
};

const AddRewardModal = ({ isOpen, onClose, onSubmit }) => {
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

        setForm((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(form);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm">
            <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
                <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <Gift className="h-5 w-5" />
                        </div>

                        <div>
                            <h2 className="text-base font-extrabold text-slate-950">
                                Add reward
                            </h2>

                            <p className="text-xs text-slate-400">
                                Record student recognition
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Student name
                            </label>

                            <input
                                required
                                name="studentName"
                                value={form.studentName}
                                onChange={handleChange}
                                placeholder="Enter student name"
                                className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
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
                                className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Class
                            </label>

                            <select
                                required
                                name="grade"
                                value={form.grade}
                                onChange={handleChange}
                                className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            >
                                <option value="">Select class</option>
                                <option value="11">Class 11</option>
                                <option value="12">Class 12</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Reward name
                            </label>

                            <input
                                required
                                name="rewardName"
                                value={form.rewardName}
                                onChange={handleChange}
                                placeholder="e.g. Weekly Performer"
                                className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Reward type
                            </label>

                            <select
                                name="rewardType"
                                value={form.rewardType}
                                onChange={handleChange}
                                className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            >
                                <option value="weekly_performer">
                                    Weekly Performer
                                </option>
                                <option value="monthly_performer">
                                    Monthly Performer
                                </option>
                                <option value="academic_excellence">
                                    Academic Excellence
                                </option>
                                <option value="improvement">
                                    Improvement
                                </option>
                                <option value="special_recognition">
                                    Special Recognition
                                </option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Reward value
                            </label>

                            <input
                                name="value"
                                value={form.value}
                                onChange={handleChange}
                                placeholder="Gift / certificate / other"
                                className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Reward date
                            </label>

                            <input
                                required
                                type="date"
                                name="rewardDate"
                                value={form.rewardDate}
                                onChange={handleChange}
                                className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Status
                            </label>

                            <select
                                name="status"
                                value={form.status}
                                onChange={handleChange}
                                className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            >
                                <option value="awarded">Awarded</option>
                                <option value="pending">Pending</option>
                                <option value="cancelled">Cancelled</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Related test
                            </label>

                            <input
                                name="testName"
                                value={form.testName}
                                onChange={handleChange}
                                placeholder="Optional test name"
                                className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
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
                                placeholder="Optional test ID"
                                className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Description / remarks
                            </label>

                            <textarea
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Add any useful reward notes..."
                                className="w-full resize-none rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            />
                        </div>
                    </div>

                    <div className="mt-5 flex justify-end gap-2 border-t border-slate-100 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-600 transition hover:bg-slate-50"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-blue-600"
                        >
                            Save reward
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddRewardModal;
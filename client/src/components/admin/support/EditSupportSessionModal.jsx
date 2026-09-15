import {
    CalendarDays,
    Headphones,
    X,
} from "lucide-react";
import { useEffect, useState } from "react";

const EditSupportSessionModal = ({
    session,
    onClose,
    onSubmit,
}) => {
    const [form, setForm] = useState({});

    useEffect(() => {
        if (session) {
            setForm({
                studentName:
                    session.studentName ||
                    session.student?.name ||
                    "",

                studentId:
                    session.studentId ||
                    session.student?._id ||
                    "",

                batchName:
                    session.batchName ||
                    session.batch?.name ||
                    "",

                batchId:
                    session.batchId ||
                    session.batch?._id ||
                    "",

                supportType:
                    session.supportType ||
                    session.type ||
                    "academic_guidance",

                priority:
                    session.priority ||
                    "normal",

                status:
                    session.status ||
                    "requested",

                sessionDate:
                    session.sessionDate ||
                    session.date ||
                    "",

                sessionTime:
                    session.sessionTime ||
                    "",

                duration:
                    session.duration ||
                    "",

                topic:
                    session.topic ||
                    "",

                description:
                    session.description ||
                    "",

                teacherNotes:
                    session.teacherNotes ||
                    session.notes ||
                    "",
            });
        }
    }, [session]);

    if (!session) {
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

        onSubmit({
            ...session,
            ...form,
        });

        onClose();
    };

    return (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm">
            <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
                <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <Headphones className="h-5 w-5" />
                        </div>

                        <div>
                            <h2 className="text-base font-extrabold text-slate-950">
                                Edit support session
                            </h2>

                            <p className="text-xs text-slate-400">
                                Update guidance session information
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

                <form
                    onSubmit={handleSubmit}
                    className="p-5"
                >
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Student name
                            </label>

                            <input
                                required
                                name="studentName"
                                value={
                                    form.studentName ||
                                    ""
                                }
                                onChange={handleChange}
                                className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Student ID
                            </label>

                            <input
                                name="studentId"
                                value={
                                    form.studentId ||
                                    ""
                                }
                                onChange={handleChange}
                                className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Batch name
                            </label>

                            <input
                                name="batchName"
                                value={
                                    form.batchName ||
                                    ""
                                }
                                onChange={handleChange}
                                className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Batch ID
                            </label>

                            <input
                                name="batchId"
                                value={
                                    form.batchId ||
                                    ""
                                }
                                onChange={handleChange}
                                className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Support type
                            </label>

                            <select
                                name="supportType"
                                value={
                                    form.supportType ||
                                    "academic_guidance"
                                }
                                onChange={handleChange}
                                className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            >
                                <option value="academic_guidance">
                                    Academic Guidance
                                </option>

                                <option value="doubt_solving">
                                    Doubt Solving
                                </option>

                                <option value="performance_support">
                                    Performance Support
                                </option>

                                <option value="exam_preparation">
                                    Exam Preparation
                                </option>

                                <option value="study_planning">
                                    Study Planning
                                </option>

                                <option value="other">
                                    Other
                                </option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Priority
                            </label>

                            <select
                                name="priority"
                                value={
                                    form.priority ||
                                    "normal"
                                }
                                onChange={handleChange}
                                className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            >
                                <option value="low">
                                    Low
                                </option>

                                <option value="normal">
                                    Normal
                                </option>

                                <option value="high">
                                    High
                                </option>

                                <option value="urgent">
                                    Urgent
                                </option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Session date
                            </label>

                            <div className="relative">
                                <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                <input
                                    required
                                    type="date"
                                    name="sessionDate"
                                    value={
                                        form.sessionDate ||
                                        ""
                                    }
                                    onChange={handleChange}
                                    className="h-10 w-full rounded-xl border border-slate-200 pl-9 pr-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Session time
                            </label>

                            <input
                                type="time"
                                name="sessionTime"
                                value={
                                    form.sessionTime ||
                                    ""
                                }
                                onChange={handleChange}
                                className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Duration
                            </label>

                            <input
                                name="duration"
                                value={
                                    form.duration ||
                                    ""
                                }
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
                                value={
                                    form.status ||
                                    "requested"
                                }
                                onChange={handleChange}
                                className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            >
                                <option value="requested">
                                    Requested
                                </option>

                                <option value="scheduled">
                                    Scheduled
                                </option>

                                <option value="completed">
                                    Completed
                                </option>

                                <option value="cancelled">
                                    Cancelled
                                </option>
                            </select>
                        </div>

                        <div className="sm:col-span-2">
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Topic / focus
                            </label>

                            <input
                                name="topic"
                                value={
                                    form.topic || ""
                                }
                                onChange={handleChange}
                                className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Session description
                            </label>

                            <textarea
                                name="description"
                                value={
                                    form.description ||
                                    ""
                                }
                                onChange={handleChange}
                                rows={4}
                                className="w-full resize-none rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Teacher notes
                            </label>

                            <textarea
                                name="teacherNotes"
                                value={
                                    form.teacherNotes ||
                                    ""
                                }
                                onChange={handleChange}
                                rows={4}
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
                            Update support session
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditSupportSessionModal;
import {
    Bell,
    X,
} from "lucide-react";
import { useEffect, useState } from "react";

const EditAnnouncementModal = ({
    announcement,
    onClose,
    onSubmit,
}) => {
    const [form, setForm] = useState({});

    useEffect(() => {
        if (announcement) {
            setForm({
                title:
                    announcement.title ||
                    announcement.name ||
                    "",

                category:
                    announcement.category ||
                    announcement.type ||
                    "general",

                audience:
                    announcement.audience ||
                    announcement.targetAudience ||
                    "all_students",

                status:
                    announcement.status ||
                    "draft",

                publishDate:
                    announcement.publishDate ||
                    announcement.publishedAt ||
                    announcement.date ||
                    "",

                batchId:
                    announcement.batchId ||
                    announcement.batch?._id ||
                    "",

                batchName:
                    announcement.batchName ||
                    announcement.batch?.name ||
                    "",

                description:
                    announcement.description ||
                    "",

                content:
                    announcement.content ||
                    announcement.message ||
                    "",
            });
        }
    }, [announcement]);

    if (!announcement) {
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
            ...announcement,
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
                            <Bell className="h-5 w-5" />
                        </div>

                        <div>
                            <h2 className="text-base font-extrabold text-slate-950">
                                Edit announcement
                            </h2>

                            <p className="text-xs text-slate-400">
                                Update announcement information
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
                        <div className="sm:col-span-2">
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Announcement title
                            </label>

                            <input
                                required
                                name="title"
                                value={form.title || ""}
                                onChange={handleChange}
                                className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Category
                            </label>

                            <select
                                name="category"
                                value={
                                    form.category ||
                                    "general"
                                }
                                onChange={handleChange}
                                className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            >
                                <option value="academic">
                                    Academic
                                </option>

                                <option value="test">
                                    Tests
                                </option>

                                <option value="admission">
                                    Admission
                                </option>

                                <option value="fees">
                                    Fees & Payments
                                </option>

                                <option value="batch">
                                    Batch
                                </option>

                                <option value="general">
                                    General
                                </option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Target audience
                            </label>

                            <select
                                name="audience"
                                value={
                                    form.audience ||
                                    "all_students"
                                }
                                onChange={handleChange}
                                className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            >
                                <option value="all_students">
                                    All Students
                                </option>

                                <option value="class_11">
                                    Class 11
                                </option>

                                <option value="class_12">
                                    Class 12
                                </option>

                                <option value="specific_batch">
                                    Specific Batch
                                </option>
                            </select>
                        </div>

                        {form.audience ===
                            "specific_batch" && (
                            <>
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
                                        onChange={
                                            handleChange
                                        }
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
                                        onChange={
                                            handleChange
                                        }
                                        className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                                    />
                                </div>
                            </>
                        )}

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Publish date
                            </label>

                            <input
                                required
                                type="date"
                                name="publishDate"
                                value={
                                    form.publishDate ||
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
                                    "draft"
                                }
                                onChange={handleChange}
                                className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            >
                                <option value="draft">
                                    Draft
                                </option>

                                <option value="published">
                                    Published
                                </option>

                                <option value="scheduled">
                                    Scheduled
                                </option>

                                <option value="archived">
                                    Archived
                                </option>
                            </select>
                        </div>

                        <div className="sm:col-span-2">
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Short description
                            </label>

                            <input
                                name="description"
                                value={
                                    form.description ||
                                    ""
                                }
                                onChange={handleChange}
                                className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                Announcement content
                            </label>

                            <textarea
                                required
                                name="content"
                                value={
                                    form.content ||
                                    ""
                                }
                                onChange={handleChange}
                                rows={6}
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
                            Update announcement
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditAnnouncementModal;
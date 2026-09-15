import { AnimatePresence, motion } from "framer-motion";
import {
    CalendarDays,
    Clock3,
    Layers3,
    Users,
    X,
} from "lucide-react";
import { useEffect, useState } from "react";

const EditBatchModal = ({
    isOpen,
    batch,
    onClose,
    onSubmit,
}) => {
    const [formData, setFormData] = useState({
        name: "",
        course: "",
        session: "",
        timing: "",
        schedule: "",
        capacity: "",
        status: "Active",
    });

    useEffect(() => {
        if (batch) {
            setFormData({
                name: batch.name || "",
                course: batch.course || "",
                session: batch.session || "",
                timing: batch.timing || "",
                schedule: batch.schedule || "",
                capacity: batch.capacity || "",
                status: batch.status || "Active",
            });
        }
    }, [batch]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit?.({
            ...batch,
            ...formData,
        });
    };

    if (!batch) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-950/35 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.18)]"
                    >
                        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4 sm:px-6">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                                    Batch Management
                                </p>

                                <h2 className="mt-1 text-lg font-extrabold text-slate-950">
                                    Edit batch
                                </h2>

                                <p className="mt-0.5 text-xs text-slate-400">
                                    Update the batch schedule and management details.
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={onClose}
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="space-y-5 p-5 sm:p-6">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="sm:col-span-2">
                                        <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                            Batch Name
                                        </label>

                                        <div className="relative">
                                            <Layers3 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                            <input
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-10 pr-3 text-sm outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                            Class
                                        </label>

                                        <select
                                            name="course"
                                            value={formData.course}
                                            onChange={handleChange}
                                            required
                                            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-600 outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-50"
                                        >
                                            <option value="">
                                                Select class
                                            </option>
                                            <option value="Class 11">
                                                Class 11
                                            </option>
                                            <option value="Class 12">
                                                Class 12
                                            </option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                            Session
                                        </label>

                                        <select
                                            name="session"
                                            value={formData.session}
                                            onChange={handleChange}
                                            required
                                            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-600 outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-50"
                                        >
                                            <option value="">
                                                Select session
                                            </option>
                                            <option value="Morning">
                                                Morning
                                            </option>
                                            <option value="Evening">
                                                Evening
                                            </option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                            Timing
                                        </label>

                                        <div className="relative">
                                            <Clock3 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                            <input
                                                name="timing"
                                                value={formData.timing}
                                                onChange={handleChange}
                                                required
                                                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-10 pr-3 text-sm outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                            Weekly Schedule
                                        </label>

                                        <div className="relative">
                                            <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                            <input
                                                name="schedule"
                                                value={formData.schedule}
                                                onChange={handleChange}
                                                required
                                                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-10 pr-3 text-sm outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                            Capacity
                                        </label>

                                        <div className="relative">
                                            <Users className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                            <input
                                                name="capacity"
                                                type="number"
                                                min="1"
                                                value={formData.capacity}
                                                onChange={handleChange}
                                                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-10 pr-3 text-sm outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="mb-1.5 block text-xs font-bold text-slate-600">
                                            Status
                                        </label>

                                        <select
                                            name="status"
                                            value={formData.status}
                                            onChange={handleChange}
                                            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-600 outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-50"
                                        >
                                            <option value="Active">
                                                Active
                                            </option>
                                            <option value="Inactive">
                                                Inactive
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                                    <Users className="h-4 w-4 shrink-0 text-slate-400" />

                                    <p className="text-[11px] leading-5 text-slate-500">
                                        Capacity and timing remain teacher-managed
                                        and can be adjusted when required.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col-reverse gap-2 border-t border-slate-100 bg-slate-50/50 px-5 py-4 sm:flex-row sm:justify-end sm:px-6">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="h-10 rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="h-10 rounded-xl bg-blue-600 px-5 text-sm font-bold text-white transition hover:bg-blue-700"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default EditBatchModal;
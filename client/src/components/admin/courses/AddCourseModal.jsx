import { AnimatePresence, motion } from "framer-motion";
import {
    BookOpen,
    IndianRupee,
    X,
} from "lucide-react";
import { useEffect, useState } from "react";

const initialForm = {
    name: "",
    grade: "11",
    fee: "",
    description: "",
    status: "active",
};

const AddCourseModal = ({ isOpen, onClose }) => {
    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if (isOpen) {
            setForm(initialForm);
        }
    }, [isOpen]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        /*
         * Backend integration will be connected later.
         * At that stage this form will submit through the course API.
         */

        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Overlay */}
                    <motion.button
                        type="button"
                        aria-label="Close modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 cursor-default bg-slate-950/35 backdrop-blur-[2px]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, y: 16, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{
                            duration: 0.2,
                            ease: "easeOut",
                        }}
                        className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.18)]"
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
                            <div className="flex items-start gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                    <BookOpen className="h-5 w-5" />
                                </div>

                                <div>
                                    <h2 className="text-base font-extrabold text-slate-950">
                                        Add course
                                    </h2>

                                    <p className="mt-0.5 text-xs text-slate-400">
                                        Create a new academic course
                                    </p>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={onClose}
                                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4 px-5 py-5 sm:px-6">
                                {/* Course Name */}
                                <div>
                                    <label
                                        htmlFor="course-name"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Course Name
                                    </label>

                                    <input
                                        id="course-name"
                                        name="name"
                                        type="text"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="e.g. Class 11 Mathematics"
                                        required
                                        className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:ring-4 focus:ring-blue-50"
                                    />
                                </div>

                                {/* Grade + Fee */}
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="course-grade"
                                            className="mb-1.5 block text-xs font-bold text-slate-600"
                                        >
                                            Class / Grade
                                        </label>

                                        <select
                                            id="course-grade"
                                            name="grade"
                                            value={form.grade}
                                            onChange={handleChange}
                                            className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-600 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-50"
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
                                        <label
                                            htmlFor="course-fee"
                                            className="mb-1.5 block text-xs font-bold text-slate-600"
                                        >
                                            Annual Fee
                                        </label>

                                        <div className="relative">
                                            <IndianRupee className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />

                                            <input
                                                id="course-fee"
                                                name="fee"
                                                type="number"
                                                min="0"
                                                value={form.fee}
                                                onChange={handleChange}
                                                placeholder="Annual fee"
                                                className="h-10 w-full rounded-xl border border-slate-200 bg-white pl-8 pr-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:ring-4 focus:ring-blue-50"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <div>
                                    <label
                                        htmlFor="course-description"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Description
                                    </label>

                                    <textarea
                                        id="course-description"
                                        name="description"
                                        value={form.description}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Brief academic description..."
                                        className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm leading-6 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:ring-4 focus:ring-blue-50"
                                    />
                                </div>

                                {/* Status */}
                                <div>
                                    <label
                                        htmlFor="course-status"
                                        className="mb-1.5 block text-xs font-bold text-slate-600"
                                    >
                                        Status
                                    </label>

                                    <select
                                        id="course-status"
                                        name="status"
                                        value={form.status}
                                        onChange={handleChange}
                                        className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-600 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-50"
                                    >
                                        <option value="active">
                                            Active
                                        </option>

                                        <option value="inactive">
                                            Inactive
                                        </option>
                                    </select>
                                </div>

                                {/* Backend Notice */}
                                <div className="rounded-xl border border-blue-100 bg-blue-50/60 px-3.5 py-3">
                                    <p className="text-xs leading-5 text-blue-700">
                                        Course saving will be connected to
                                        the backend during the integration
                                        phase.
                                    </p>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="flex flex-col-reverse gap-2 border-t border-slate-100 px-5 py-4 sm:flex-row sm:justify-end sm:px-6">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="h-10 rounded-xl border border-slate-200 px-4 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="h-10 rounded-xl bg-blue-600 px-5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(37,99,235,0.15)] transition hover:bg-blue-700"
                                >
                                    Create Course
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AddCourseModal;
import {
    ArrowRight,
    Bell,
    CalendarDays,
    ChevronRight,
    Megaphone,
    Pin,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const announcementCategories = [
    "Class Updates",
    "Test Updates",
    "Admission & Fees",
    "General Notices",
];

const StudentAnnouncements = () => {
    return (
        <div className="relative">
            {/* Header */}
            <section className="mx-auto max-w-[1280px] px-4 pb-6 pt-7 sm:px-6 lg:px-7 lg:pt-9">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end"
                >
                    <div>
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-blue-600 shadow-sm backdrop-blur">
                            <Bell size={13} />
                            Latest updates
                        </div>

                        <h1 className="font-[var(--font-heading)] text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                            Announcements
                        </h1>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-[15px]">
                            Stay informed about classes, tests, schedules and
                            important coaching centre updates.
                        </p>
                    </div>

                    <Link
                        to="/student/support"
                        className="group inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
                    >
                        Need help?
                        <ArrowRight
                            size={16}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                    </Link>
                </motion.div>
            </section>

            {/* Notice Hero */}
            <section className="mx-auto max-w-[1280px] px-4 pb-6 sm:px-6 lg:px-7">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 }}
                    className="relative overflow-hidden rounded-2xl border border-blue-100 bg-blue-50/70 p-6 sm:p-8"
                >
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-200/50 blur-3xl"
                    />

                    <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                                <Megaphone size={21} />
                            </div>

                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
                                    Coaching centre updates
                                </p>

                                <h2 className="mt-1 font-[var(--font-heading)] text-xl font-extrabold tracking-[-0.03em] text-slate-950 sm:text-2xl">
                                    Important information, all in one place.
                                </h2>

                                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                                    Announcements published by the coaching
                                    centre will be available here so you can
                                    quickly stay updated.
                                </p>
                            </div>
                        </div>

                        <div className="flex shrink-0 items-center gap-2 rounded-xl border border-blue-100 bg-white px-4 py-3 text-xs font-bold text-slate-600 shadow-sm">
                            <Bell size={15} className="text-blue-600" />
                            Stay updated
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Categories */}
            <section className="mx-auto max-w-[1280px] px-4 pb-6 sm:px-6 lg:px-7">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {announcementCategories.map((category, index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.35,
                                delay: 0.1 + index * 0.05,
                            }}
                            className="group rounded-2xl border border-slate-200/80 bg-white/85 p-4 shadow-[0_12px_35px_rgba(15,23,42,0.04)] transition-shadow duration-200 hover:shadow-md"
                        >
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                    <span className="text-xs font-extrabold">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                <ChevronRight
                                    size={16}
                                    className="text-slate-300 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-blue-500"
                                />
                            </div>

                            <p className="mt-4 text-sm font-extrabold text-slate-800">
                                {category}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Announcements Workspace */}
            <section className="mx-auto max-w-[1280px] px-4 pb-6 sm:px-6 lg:px-7">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="rounded-2xl border border-slate-200/80 bg-white/85 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.05)] backdrop-blur-sm sm:p-6"
                >
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
                                Notice board
                            </p>

                            <h2 className="mt-1 font-[var(--font-heading)] text-xl font-extrabold tracking-[-0.03em] text-slate-950">
                                Latest announcements
                            </h2>
                        </div>

                        <div className="hidden h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-500 sm:flex">
                            <Pin size={18} />
                        </div>
                    </div>

                    <div className="mt-6 rounded-xl border border-dashed border-slate-200 bg-slate-50/70 p-8 text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
                            <Megaphone size={21} />
                        </div>

                        <h3 className="mt-4 text-base font-extrabold text-slate-900">
                            No announcements available yet
                        </h3>

                        <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
                            New notices from the coaching centre will appear
                            here when they are published.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Announcement Note */}
            <section className="mx-auto max-w-[1280px] px-4 pb-10 sm:px-6 lg:px-7">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.25 }}
                    className="flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6"
                >
                    <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                            <CalendarDays size={17} />
                        </div>

                        <div>
                            <h3 className="text-sm font-extrabold text-slate-900">
                                Check regularly
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-slate-500">
                                Important class and assessment updates may be
                                published throughout the academic session.
                            </p>
                        </div>
                    </div>

                    <Link
                        to="/student/batch"
                        className="group inline-flex shrink-0 items-center gap-2 text-sm font-extrabold text-blue-600"
                    >
                        View my batch
                        <ArrowRight
                            size={16}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default StudentAnnouncements;
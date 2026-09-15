import { motion } from "framer-motion";
import {
    ArrowUpRight,
    BookOpen,
    Layers3,
    UserPlus,
} from "lucide-react";
import { Link } from "react-router-dom";

const academicAreas = [
    {
        title: "Courses",
        description:
            "Manage Class 11 and Class 12 Mathematics course information.",
        icon: BookOpen,
        route: "/admin/courses",
    },
    {
        title: "Batches",
        description:
            "Control schedules, capacity and teacher-managed batch structure.",
        icon: Layers3,
        route: "/admin/batches",
    },
    {
        title: "Enrollments",
        description:
            "Track student admission and course-batch assignments.",
        icon: UserPlus,
        route: "/admin/enrollments",
    },
];

const AdminAcademicOverview = () => {
    return (
        <section>
            <div className="mx-auto max-w-[1280px] px-4 py-5 sm:px-6 lg:px-7">
                <div className="mb-4 flex items-end justify-between gap-4">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-600">
                            Academic management
                        </p>

                        <h2 className="mt-1 text-xl font-extrabold tracking-[-0.03em] text-slate-950">
                            Academic overview
                        </h2>
                    </div>

                    <span className="hidden text-xs font-medium text-slate-400 sm:block">
                        Centralised academic control
                    </span>
                </div>

                <div className="grid gap-4 lg:grid-cols-3">
                    {academicAreas.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.35,
                                    delay: index * 0.06,
                                }}
                                className="group rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.035)] transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-all duration-200 group-hover:bg-blue-50 group-hover:text-blue-600">
                                        <Icon className="h-5 w-5" />
                                    </div>

                                    <Link
                                        to={item.route}
                                        className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-600"
                                        aria-label={`Open ${item.title}`}
                                    >
                                        <ArrowUpRight className="h-4 w-4" />
                                    </Link>
                                </div>

                                <h3 className="mt-5 text-base font-bold text-slate-950">
                                    {item.title}
                                </h3>

                                <p className="mt-1.5 text-sm leading-6 text-slate-500">
                                    {item.description}
                                </p>

                                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3">
                                    <span className="text-xs font-semibold text-slate-400">
                                        Backend data pending
                                    </span>

                                    <span className="text-xs font-bold text-blue-600">
                                        Manage
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AdminAcademicOverview;
import { motion } from "framer-motion";
import {
    Award,
    ClipboardCheck,
    Medal,
} from "lucide-react";

const assessmentItems = [
    {
        title: "Tests",
        description: "Create and manage weekly mathematics assessments.",
        icon: ClipboardCheck,
    },
    {
        title: "Results",
        description: "Review marks, rankings and student performance.",
        icon: Medal,
    },
    {
        title: "Rewards",
        description: "Manage recognition for performance and progress.",
        icon: Award,
    },
];

const AdminAssessmentOverview = () => {
    return (
        <section>
            <div className="mx-auto max-w-[1280px] px-4 py-5 sm:px-6 lg:px-7">
                <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.035)] sm:p-6">
                    <div className="mb-5">
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-600">
                            Assessment
                        </p>

                        <h2 className="mt-1 text-xl font-extrabold tracking-[-0.03em] text-slate-950">
                            Testing & performance
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Manage the complete assessment cycle from tests to
                            recognition.
                        </p>
                    </div>

                    <div className="grid gap-3 md:grid-cols-3">
                        {assessmentItems.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    whileHover={{ y: -2 }}
                                    transition={{ duration: 0.18 }}
                                    className="rounded-xl border border-slate-100 bg-slate-50/80 p-4"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
                                            <Icon className="h-4 w-4" />
                                        </div>

                                        <div>
                                            <h3 className="text-sm font-bold text-slate-950">
                                                {item.title}
                                            </h3>

                                            <span className="text-[11px] font-semibold text-slate-400">
                                                Data pending
                                            </span>
                                        </div>
                                    </div>

                                    <p className="mt-3 text-xs leading-5 text-slate-500">
                                        {item.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminAssessmentOverview;
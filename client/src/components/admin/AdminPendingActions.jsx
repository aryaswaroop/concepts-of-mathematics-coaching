import { motion } from "framer-motion";
import {
    AlertCircle,
    ArrowUpRight,
    ClipboardCheck,
    MessageSquareText,
} from "lucide-react";
import { Link } from "react-router-dom";

const pendingAreas = [
    {
        title: "Review Enquiries",
        description:
            "Check new student and admission enquiries when available.",
        icon: MessageSquareText,
        route: "/admin/enquiries",
    },
    {
        title: "Review Test Results",
        description:
            "Publish or review assessment results after evaluation.",
        icon: ClipboardCheck,
        route: "/admin/results",
    },
    {
        title: "Check Support",
        description:
            "Review academic support requests and guidance sessions.",
        icon: AlertCircle,
        route: "/admin/support",
    },
];

const AdminPendingActions = () => {
    return (
        <section>
            <div className="mx-auto max-w-[1280px] px-4 py-5 sm:px-6 lg:px-7">
                <div className="rounded-2xl border border-blue-100 bg-blue-50/45 p-5 sm:p-6">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-600">
                                Attention centre
                            </p>

                            <h2 className="mt-1 text-xl font-extrabold tracking-[-0.03em] text-slate-950">
                                Management follow-ups
                            </h2>
                        </div>

                        <p className="text-xs font-medium text-slate-400">
                            Live status will appear after integration
                        </p>
                    </div>

                    <div className="mt-5 grid gap-3 lg:grid-cols-3">
                        {pendingAreas.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    whileHover={{ y: -2 }}
                                    transition={{ duration: 0.18 }}
                                    className="rounded-xl border border-blue-100/80 bg-white/80 p-4"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                            <Icon className="h-4 w-4" />
                                        </div>

                                        <div className="min-w-0">
                                            <h3 className="text-sm font-bold text-slate-950">
                                                {item.title}
                                            </h3>

                                            <p className="mt-1 text-xs leading-5 text-slate-500">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    <Link
                                        to={item.route}
                                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
                                    >
                                        Open
                                        <ArrowUpRight className="h-3.5 w-3.5" />
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminPendingActions;
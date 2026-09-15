import { motion } from "framer-motion";
import {
    BellPlus,
    ClipboardPlus,
    UserPlus,
    WalletCards,
} from "lucide-react";
import { Link } from "react-router-dom";

const actions = [
    {
        title: "Add Student",
        description: "Create a new student record",
        icon: UserPlus,
        route: "/admin/students",
    },
    {
        title: "Create Test",
        description: "Set up a mathematics assessment",
        icon: ClipboardPlus,
        route: "/admin/tests",
    },
    {
        title: "Add Announcement",
        description: "Publish a student update",
        icon: BellPlus,
        route: "/admin/announcements",
    },
    {
        title: "Record Payment",
        description: "Manage a payment entry",
        icon: WalletCards,
        route: "/admin/payments",
    },
];

const AdminQuickActions = () => {
    return (
        <section>
            <div className="mx-auto max-w-[1280px] px-4 py-5 sm:px-6 lg:px-7">
                <div className="rounded-2xl border border-slate-200/80 bg-white/75 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.035)] sm:p-6">
                    <div className="mb-5">
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-600">
                            Shortcuts
                        </p>

                        <h2 className="mt-1 text-xl font-extrabold tracking-[-0.03em] text-slate-950">
                            Quick management actions
                        </h2>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                        {actions.map((action, index) => {
                            const Icon = action.icon;

                            return (
                                <motion.div
                                    key={action.title}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.25,
                                        delay: index * 0.05,
                                    }}
                                >
                                    <Link
                                        to={action.route}
                                        className="group block rounded-xl border border-slate-100 bg-slate-50/80 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/40"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm transition-transform duration-200 group-hover:scale-105">
                                                <Icon className="h-5 w-5" />
                                            </div>

                                            <div className="min-w-0">
                                                <h3 className="truncate text-sm font-bold text-slate-950">
                                                    {action.title}
                                                </h3>

                                                <p className="mt-0.5 text-xs text-slate-500">
                                                    {action.description}
                                                </p>
                                            </div>
                                        </div>
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

export default AdminQuickActions;
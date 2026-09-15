import { motion } from "framer-motion";
import {
    Bell,
    Headphones,
    MailQuestion,
} from "lucide-react";
import { Link } from "react-router-dom";

const activityItems = [
    {
        title: "Enquiries",
        description: "Review new admission and general enquiries.",
        icon: MailQuestion,
        route: "/admin/enquiries",
    },
    {
        title: "Announcements",
        description: "Publish important updates for students.",
        icon: Bell,
        route: "/admin/announcements",
    },
    {
        title: "Support Sessions",
        description: "Manage academic guidance and support requests.",
        icon: Headphones,
        route: "/admin/support",
    },
];

const AdminActivityOverview = () => {
    return (
        <section>
            <div className="mx-auto max-w-[1280px] px-4 py-5 sm:px-6 lg:px-7">
                <div className="mb-4">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-600">
                        Communication
                    </p>

                    <h2 className="mt-1 text-xl font-extrabold tracking-[-0.03em] text-slate-950">
                        Recent activity
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Stay on top of student communication and support.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    {activityItems.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.06,
                                }}
                                className="group rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.035)] transition-all duration-200 hover:-translate-y-1 hover:border-blue-200"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600">
                                        <Icon className="h-5 w-5" />
                                    </div>

                                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                        Awaiting data
                                    </span>
                                </div>

                                <h3 className="mt-5 text-base font-bold text-slate-950">
                                    {item.title}
                                </h3>

                                <p className="mt-1.5 text-sm leading-6 text-slate-500">
                                    {item.description}
                                </p>

                                <Link
                                    to={item.route}
                                    className="mt-4 inline-flex text-xs font-bold text-blue-600 transition-colors hover:text-blue-700"
                                >
                                    Open workspace →
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AdminActivityOverview;
import { motion } from "framer-motion";
import {
    BookOpen,
    CreditCard,
    GraduationCap,
    Users,
} from "lucide-react";

const overviewItems = [
    {
        label: "Students",
        description: "Student records and academic profiles",
        icon: Users,
        route: "/admin/students",
    },
    {
        label: "Courses",
        description: "Class 11 and Class 12 mathematics",
        icon: BookOpen,
        route: "/admin/courses",
    },
    {
        label: "Batches",
        description: "Schedules and capacity management",
        icon: GraduationCap,
        route: "/admin/batches",
    },
    {
        label: "Payments",
        description: "Admission and installment records",
        icon: CreditCard,
        route: "/admin/payments",
    },
];

const AdminOverviewCards = () => {
    return (
        <section>
            <div className="mx-auto max-w-[1280px] px-4 py-3 sm:px-6 lg:px-7">
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {overviewItems.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.35,
                                    delay: index * 0.05,
                                }}
                                className="group rounded-2xl border border-slate-200/80 bg-white/85 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_16px_36px_rgba(37,99,235,0.08)]"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-transform duration-200 group-hover:scale-105">
                                        <Icon className="h-5 w-5" />
                                    </div>

                                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                        Pending
                                    </span>
                                </div>

                                <div className="mt-5">
                                    <p className="text-sm font-bold text-slate-950">
                                        {item.label}
                                    </p>

                                    <p className="mt-1 text-xs leading-5 text-slate-500">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="mt-4 border-t border-slate-100 pt-3">
                                    <p className="text-xs font-semibold text-slate-400">
                                        Data will appear after integration
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AdminOverviewCards;
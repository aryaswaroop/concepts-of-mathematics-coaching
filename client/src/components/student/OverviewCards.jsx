import { motion } from "framer-motion";
import {
    BarChart3,
    BookOpen,
    CalendarDays,
    CircleDollarSign,
} from "lucide-react";

const cards = [
    {
        label: "Current Course",
        value: "Class 11 / 12",
        meta: "Mathematics",
        icon: BookOpen,
        accent: "blue",
    },
    {
        label: "My Batch",
        value: "Assigned Batch",
        meta: "Schedule available",
        icon: CalendarDays,
        accent: "slate",
    },
    {
        label: "Test Activity",
        value: "Weekly Tests",
        meta: "Performance tracking",
        icon: BarChart3,
        accent: "blue",
    },
    {
        label: "Fee Overview",
        value: "Payment Status",
        meta: "View payment history",
        icon: CircleDollarSign,
        accent: "slate",
    },
];

const OverviewCards = () => {
    return (
        <section className="px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-[1280px] gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {cards.map((card, index) => {
                    const Icon = card.icon;

                    return (
                        <motion.div
                            key={card.label}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.3,
                                delay: index * 0.06,
                            }}
                            whileHover={{ y: -3 }}
                            className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-[0_8px_30px_rgba(15,23,42,0.035)] transition-shadow duration-200 hover:shadow-[0_14px_35px_rgba(15,23,42,0.07)]"
                        >
                            {/* Accent */}
                            <div className="absolute right-0 top-0 h-16 w-16 rounded-bl-full bg-blue-50/70 transition-transform duration-300 group-hover:scale-125" />

                            <div className="relative flex items-start justify-between gap-3">
                                <div>
                                    <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-slate-400">
                                        {card.label}
                                    </p>

                                    <p className="mt-2 font-[var(--font-heading)] text-[17px] font-extrabold tracking-[-0.025em] text-slate-900">
                                        {card.value}
                                    </p>

                                    <p className="mt-1 text-[11px] font-medium text-slate-400">
                                        {card.meta}
                                    </p>
                                </div>

                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-200 group-hover:bg-blue-600 group-hover:text-white">
                                    <Icon size={16} strokeWidth={1.9} />
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default OverviewCards;
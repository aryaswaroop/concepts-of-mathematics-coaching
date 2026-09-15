import { motion } from "framer-motion";
import {
    ArrowUpRight,
    CalendarClock,
    ClipboardCheck,
} from "lucide-react";

const UpcomingTest = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-600 to-blue-700 p-5 text-white shadow-[0_14px_35px_rgba(37,99,235,0.16)] sm:p-6"
        >
            {/* Mathematical Decoration */}
            <span className="absolute -right-3 -top-5 select-none font-serif text-[100px] font-bold leading-none text-white/[0.06]">
                ∑
            </span>

            <span className="absolute bottom-3 right-7 select-none font-serif text-2xl font-bold text-white/[0.08]">
                x² + y²
            </span>

            <div className="relative">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                        <ClipboardCheck size={18} />
                    </div>

                    <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.1em] text-white/80">
                        Upcoming
                    </span>
                </div>

                <p className="mt-6 text-[10px] font-extrabold uppercase tracking-[0.14em] text-blue-100">
                    Next assessment
                </p>

                <h3 className="mt-1.5 font-[var(--font-heading)] text-[20px] font-extrabold tracking-[-0.035em]">
                    Upcoming Test
                </h3>

                <p className="mt-2 max-w-sm text-[11px] leading-5 text-blue-100">
                    Details of your next scheduled test will appear here
                    once it is assigned.
                </p>

                <div className="mt-5 flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 p-3">
                    <CalendarClock size={15} className="text-blue-100" />

                    <span className="text-[11px] font-semibold text-white/90">
                        Test schedule will be available here
                    </span>
                </div>

                <button
                    type="button"
                    className="group mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-3.5 py-2.5 text-[11px] font-extrabold text-blue-700 transition hover:bg-blue-50"
                >
                    View tests
                    <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                </button>
            </div>
        </motion.div>
    );
};

export default UpcomingTest;
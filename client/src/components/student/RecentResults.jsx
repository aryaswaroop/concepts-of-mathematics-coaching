import { motion } from "framer-motion";
import {
    ArrowRight,
    ClipboardCheck,
    Clock3,
} from "lucide-react";

const RecentResults = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.06 }}
            className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_8px_30px_rgba(15,23,42,0.035)] sm:p-6"
        >
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-blue-600">
                        Assessment history
                    </p>

                    <h3 className="mt-1.5 font-[var(--font-heading)] text-[19px] font-extrabold tracking-[-0.035em] text-slate-950">
                        Recent results
                    </h3>
                </div>

                <button
                    type="button"
                    className="group hidden items-center gap-1 text-[10px] font-bold text-blue-600 sm:flex"
                >
                    View all
                    <ArrowRight
                        size={13}
                        className="transition-transform group-hover:translate-x-1"
                    />
                </button>
            </div>

            {/* Empty Result State */}
            <div className="mt-5 flex min-h-[150px] flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/50 px-5 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-400 shadow-sm">
                    <ClipboardCheck size={17} />
                </div>

                <p className="mt-3 text-[11px] font-bold text-slate-600">
                    No recent results to display
                </p>

                <p className="mt-1 max-w-xs text-[10px] leading-5 text-slate-400">
                    Once your tests are evaluated, your results and
                    performance details will appear here.
                </p>
            </div>

            <div className="mt-4 flex items-center gap-2 text-[10px] font-medium text-slate-400">
                <Clock3 size={13} />
                Results may appear after evaluation.
            </div>
        </motion.div>
    );
};

export default RecentResults;
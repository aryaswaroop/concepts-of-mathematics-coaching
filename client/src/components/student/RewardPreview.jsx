import { motion } from "framer-motion";
import {
    ArrowRight,
    Award,
    Sparkles,
} from "lucide-react";

const RewardPreview = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-white via-blue-50/50 to-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.035)] sm:p-6"
        >
            {/* Decorative Math */}
            <span className="absolute -right-3 -top-4 select-none font-serif text-[90px] font-bold leading-none text-blue-600/[0.035]">
                ∑
            </span>

            <div className="relative">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm shadow-blue-600/20">
                        <Award size={18} />
                    </div>

                    <Sparkles
                        size={16}
                        className="text-blue-300"
                    />
                </div>

                <p className="mt-6 text-[10px] font-extrabold uppercase tracking-[0.14em] text-blue-600">
                    Recognition
                </p>

                <h3 className="mt-1.5 font-[var(--font-heading)] text-[20px] font-extrabold tracking-[-0.035em] text-slate-950">
                    Your Rewards
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-slate-500">
                    Weekly and monthly performance recognition,
                    achievements and rewards will appear here.
                </p>

                <div className="mt-5 rounded-xl border border-blue-100 bg-white/80 p-3.5">
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-slate-400">
                        Current recognition
                    </p>

                    <p className="mt-1 text-[12px] font-bold text-slate-700">
                        No rewards recorded yet
                    </p>
                </div>

                <button
                    type="button"
                    className="group mt-4 inline-flex items-center gap-1.5 text-[10px] font-bold text-blue-600"
                >
                    Explore rewards
                    <ArrowRight
                        size={13}
                        className="transition-transform group-hover:translate-x-1"
                    />
                </button>
            </div>
        </motion.div>
    );
};

export default RewardPreview;
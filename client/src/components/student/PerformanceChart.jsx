import { motion } from "framer-motion";
import { BarChart3, Info } from "lucide-react";

const PerformanceChart = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_8px_30px_rgba(15,23,42,0.035)] sm:p-6"
        >
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-blue-600">
                        Performance
                    </p>

                    <h3 className="mt-1.5 font-[var(--font-heading)] text-[19px] font-extrabold tracking-[-0.035em] text-slate-950">
                        Test performance
                    </h3>

                    <p className="mt-1 text-[12px] text-slate-400">
                        Your assessment trend will appear here.
                    </p>
                </div>

                <button
                    type="button"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-400 transition hover:border-blue-100 hover:bg-blue-50 hover:text-blue-600"
                    aria-label="Performance information"
                >
                    <Info size={15} />
                </button>
            </div>

            {/* Chart Area */}
            <div className="relative mt-6 h-[190px] overflow-hidden rounded-xl border border-slate-100 bg-slate-50/50">
                {/* Grid */}
                <div
                    className="absolute inset-0 opacity-70"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.12) 1px, transparent 1px)",
                        backgroundSize: "48px 38px",
                    }}
                />

                {/* Mathematical Axis */}
                <div className="absolute bottom-7 left-8 right-5 h-px bg-slate-200" />

                <div className="absolute bottom-7 left-8 top-5 w-px bg-slate-200" />

                {/* Empty Chart State */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.div
                        animate={{
                            y: [0, -4, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm"
                    >
                        <BarChart3 size={19} />
                    </motion.div>

                    <p className="mt-3 text-[11px] font-bold text-slate-600">
                        Performance data will appear here
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                        Complete tests to build your performance history.
                    </p>
                </div>

                {/* Formula */}
                <span className="absolute right-4 top-3 select-none font-serif text-2xl font-bold text-blue-600/[0.07]">
                    f(x)
                </span>
            </div>

            <div className="mt-4 flex items-center justify-between text-[10px] font-medium text-slate-400">
                <span>Assessment history</span>

                <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    Results
                </span>
            </div>
        </motion.div>
    );
};

export default PerformanceChart;
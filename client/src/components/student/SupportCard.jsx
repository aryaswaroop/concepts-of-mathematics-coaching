import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Headphones,
    MessageCircle,
} from "lucide-react";

const SupportCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-950 p-5 text-white shadow-[0_12px_35px_rgba(15,23,42,0.12)] sm:p-6"
        >
            {/* Background Grid */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.055) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />

            {/* Math Decoration */}
            <span className="absolute -right-2 -top-7 select-none font-serif text-[100px] font-bold leading-none text-white/[0.045]">
                √
            </span>

            <div className="relative">
                <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                        <Headphones size={18} />
                    </div>

                    <MessageCircle
                        size={17}
                        className="text-slate-500"
                    />
                </div>

                <p className="mt-6 text-[10px] font-extrabold uppercase tracking-[0.14em] text-blue-300">
                    Personal guidance
                </p>

                <h3 className="mt-1.5 font-[var(--font-heading)] text-[20px] font-extrabold tracking-[-0.035em]">
                    Need academic support?
                </h3>

                <p className="mt-2 max-w-md text-[11px] leading-5 text-slate-400">
                    Request additional guidance or connect with the
                    coaching support system when you need help.
                </p>

                <button
                    type="button"
                    className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-3.5 py-2.5 text-[11px] font-extrabold text-slate-950 transition hover:bg-blue-50"
                >
                    Request support

                    <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                </button>
            </div>
        </motion.div>
    );
};

export default SupportCard;
import { motion } from "framer-motion";
import {
    ArrowRight,
    Megaphone,
    Pin,
} from "lucide-react";

const AnnouncementPreview = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_8px_30px_rgba(15,23,42,0.035)] sm:p-6"
        >
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-blue-600">
                        Stay updated
                    </p>

                    <h3 className="mt-1.5 font-[var(--font-heading)] text-[19px] font-extrabold tracking-[-0.035em] text-slate-950">
                        Announcements
                    </h3>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Megaphone size={17} />
                </div>
            </div>

            <div className="mt-5 rounded-xl border border-dashed border-slate-200 bg-slate-50/50 p-5 text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-400 shadow-sm">
                    <Pin size={16} />
                </div>

                <p className="mt-3 text-[11px] font-bold text-slate-600">
                    No announcements yet
                </p>

                <p className="mx-auto mt-1 max-w-xs text-[10px] leading-5 text-slate-400">
                    Important coaching updates, class notices and
                    announcements will appear here.
                </p>
            </div>

            <button
                type="button"
                className="group mt-4 inline-flex items-center gap-1.5 text-[10px] font-bold text-blue-600"
            >
                View all announcements
                <ArrowRight
                    size={13}
                    className="transition-transform group-hover:translate-x-1"
                />
            </button>
        </motion.div>
    );
};

export default AnnouncementPreview;
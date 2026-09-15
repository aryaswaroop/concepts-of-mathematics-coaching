import { motion } from "framer-motion";
import {
    CalendarDays,
    CheckCircle2,
    ClipboardCheck,
    Clock3,
} from "lucide-react";

const TestCard = ({
    title,
    date,
    scope,
    status = "Assessment",
    description,
}) => {
    return (
        <motion.article
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="group rounded-2xl border border-slate-200/80 bg-white/85 p-6 shadow-[0_15px_40px_rgba(15,23,42,0.05)] backdrop-blur"
        >
            <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <ClipboardCheck size={20} />
                </div>

                <span className="rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-bold text-blue-700">
                    {status}
                </span>
            </div>

            <h3 className="mt-5 text-lg font-extrabold tracking-tight text-slate-950">
                {title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
                {description}
            </p>

            <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                    <CalendarDays
                        size={17}
                        className="text-blue-600"
                    />
                    <span>{date}</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Clock3
                        size={17}
                        className="text-blue-600"
                    />
                    <span>Teacher managed schedule</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2
                        size={17}
                        className="text-blue-600"
                    />
                    <span>{scope}</span>
                </div>
            </div>
        </motion.article>
    );
};

export default TestCard;
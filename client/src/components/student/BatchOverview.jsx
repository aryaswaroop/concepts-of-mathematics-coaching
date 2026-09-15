import { motion } from "framer-motion";
import {
    CalendarDays,
    Clock3,
    GraduationCap,
    UsersRound,
} from "lucide-react";

const BatchOverview = () => {
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
                        Your schedule
                    </p>

                    <h3 className="mt-1.5 font-[var(--font-heading)] text-[19px] font-extrabold tracking-[-0.035em] text-slate-950">
                        My Batch
                    </h3>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <GraduationCap size={18} />
                </div>
            </div>

            <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50/70 p-4">
                <div className="flex items-center justify-between gap-3">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                            Assigned batch
                        </p>

                        <p className="mt-1 text-[15px] font-extrabold text-slate-800">
                            Batch information
                        </p>
                    </div>

                    <span className="rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.1em] text-blue-600">
                        Active
                    </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                    <InfoItem
                        icon={Clock3}
                        label="Timing"
                        value="Schedule available"
                    />

                    <InfoItem
                        icon={CalendarDays}
                        label="Schedule"
                        value="Weekly classes"
                    />

                    <InfoItem
                        icon={UsersRound}
                        label="Capacity"
                        value="Batch capacity"
                    />

                    <InfoItem
                        icon={GraduationCap}
                        label="Teacher"
                        value="Teacher guided"
                    />
                </div>
            </div>
        </motion.div>
    );
};

const InfoItem = ({ icon: Icon, label, value }) => {
    return (
        <div className="rounded-xl border border-slate-200/70 bg-white p-3">
            <Icon
                size={15}
                className="text-blue-600"
                strokeWidth={1.8}
            />

            <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.1em] text-slate-400">
                {label}
            </p>

            <p className="mt-0.5 text-[11px] font-bold text-slate-700">
                {value}
            </p>
        </div>
    );
};

export default BatchOverview;
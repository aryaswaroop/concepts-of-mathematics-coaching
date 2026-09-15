import { motion } from "framer-motion";
import {
    Bell,
    ChevronDown,
    Command,
    Menu,
    Search,
    Sparkles,
} from "lucide-react";
import { useLocation } from "react-router-dom";

const pageMeta = {
    "/student/dashboard": {
        title: "Dashboard",
        eyebrow: "Learning overview",
    },
    "/student/learning": {
        title: "My Learning",
        eyebrow: "Academic journey",
    },
    "/student/batch": {
        title: "My Batch",
        eyebrow: "Class & schedule",
    },
    "/student/tests": {
        title: "Tests & Results",
        eyebrow: "Assessment centre",
    },
    "/student/results": {
        title: "Results",
        eyebrow: "Performance insights",
    },
    "/student/rewards": {
        title: "Rewards",
        eyebrow: "Achievements",
    },
    "/student/announcements": {
        title: "Announcements",
        eyebrow: "Latest updates",
    },
    "/student/support": {
        title: "Support",
        eyebrow: "Personal guidance",
    },
    "/student/payments": {
        title: "Fees & Payments",
        eyebrow: "Payment overview",
    },
    "/student/profile": {
        title: "My Profile",
        eyebrow: "Personal information",
    },
    "/student/settings": {
        title: "Settings",
        eyebrow: "Account preferences",
    },
};

const StudentTopbar = ({ onMenuClick }) => {
    const location = useLocation();

    const current =
        pageMeta[location.pathname] || pageMeta["/student/dashboard"];

    return (
        <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
            <div className="flex h-[76px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
                {/* LEFT */}
                <div className="flex min-w-0 items-center gap-3">
                    {/* Mobile Menu */}
                    <motion.button
                        whileTap={{ scale: 0.92 }}
                        onClick={onMenuClick}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 lg:hidden"
                        aria-label="Open navigation"
                    >
                        <Menu size={19} strokeWidth={2} />
                    </motion.button>

                    {/* Page Identity */}
                    <div className="min-w-0">
                        <div className="mb-0.5 flex items-center gap-2">
                            <span className="hidden text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600 sm:block">
                                {current.eyebrow}
                            </span>

                            <span className="hidden h-1 w-1 rounded-full bg-blue-400 sm:block" />

                            <span className="hidden text-[10px] font-medium text-slate-400 sm:block">
                                Student Portal
                            </span>
                        </div>

                        <h1 className="truncate font-[var(--font-heading)] text-[20px] font-extrabold tracking-[-0.035em] text-slate-950 sm:text-[22px]">
                            {current.title}
                        </h1>
                    </div>
                </div>

                {/* CENTER COMMAND AREA */}
                <div className="hidden flex-1 justify-center px-4 lg:flex">
                    <button
                        type="button"
                        className="group flex h-11 w-full max-w-[430px] items-center gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 text-left transition-all duration-200 hover:border-blue-200 hover:bg-white hover:shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
                    >
                        <Search
                            size={17}
                            className="shrink-0 text-slate-400 transition-colors group-hover:text-blue-500"
                        />

                        <span className="flex-1 truncate text-[13px] font-medium text-slate-400">
                            Search lessons, tests, results...
                        </span>

                        <span className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2 py-1 text-[10px] font-bold text-slate-400 shadow-sm">
                            <Command size={10} />
                            K
                        </span>
                    </button>
                </div>

                {/* RIGHT */}
                <div className="flex shrink-0 items-center gap-2">
                    {/* Quick Action */}
                    <motion.button
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden h-10 items-center gap-2 rounded-xl bg-slate-950 px-3.5 text-[12px] font-bold text-white shadow-sm transition hover:bg-blue-600 xl:flex"
                    >
                        <Sparkles size={14} />
                        <span>Quick View</span>
                    </motion.button>

                    {/* Notification */}
                    <motion.button
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                        aria-label="Notifications"
                    >
                        <Bell size={18} strokeWidth={1.9} />

                        <span className="absolute right-[9px] top-[8px] h-2 w-2 rounded-full border-2 border-white bg-blue-600" />
                    </motion.button>

                    {/* Divider */}
                    <div className="mx-1 hidden h-7 w-px bg-slate-200 sm:block" />

                    {/* Profile */}
                    <motion.button
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.97 }}
                        className="group flex items-center gap-2 rounded-xl border border-transparent p-1.5 pr-2 transition hover:border-slate-200 hover:bg-slate-50"
                    >
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-[12px] font-extrabold text-white shadow-sm shadow-blue-600/20">
                            S
                        </div>

                        <div className="hidden text-left sm:block">
                            <p className="max-w-[90px] truncate text-[12px] font-bold text-slate-800">
                                Student
                            </p>
                            <p className="text-[10px] font-medium text-slate-400">
                                Learner
                            </p>
                        </div>

                        <ChevronDown
                            size={15}
                            className="hidden text-slate-400 transition-transform group-hover:translate-y-0.5 sm:block"
                        />
                    </motion.button>
                </div>
            </div>

            {/* Mathematical Accent Line */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        </header>
    );
};

export default StudentTopbar;
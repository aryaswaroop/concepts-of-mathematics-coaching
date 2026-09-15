import { motion } from "framer-motion";
import {
    Bell,
    ChevronDown,
    Command,
    Menu,
    Search,
} from "lucide-react";
import { useLocation } from "react-router-dom";

const pageMeta = {
    "/admin/dashboard": {
        title: "Dashboard",
        subtitle: "Coaching overview",
    },
    "/admin/students": {
        title: "Students",
        subtitle: "Student management",
    },
    "/admin/courses": {
        title: "Courses",
        subtitle: "Academic programs",
    },
    "/admin/batches": {
        title: "Batches",
        subtitle: "Batch management",
    },
    "/admin/enrollments": {
        title: "Enrollments",
        subtitle: "Admission records",
    },
    "/admin/tests": {
        eyebrow: "Assessment",
        title: "Tests",
        subtitle: "Assessment management",
    },
    "/admin/results": {
        eyebrow: "Assessment",
        title: "Results",
        subtitle: "Performance records",
    },
    "/admin/rewards": {
        eyebrow: "Recognition",
        title: "Rewards",
        subtitle: "Student recognition",
    },
    "/admin/payments": {
        title: "Payments",
        subtitle: "Fee management",
    },
    "/admin/announcements": {
        eyebrow: "Communication",
        title: "Announcements",
        subtitle: "Communication centre",
    },
    "/admin/support": {
        title: "Support Sessions",
        subtitle: "Student guidance",
    },
    "/admin/enquiries": {
        title: "Enquiries",
        subtitle: "Admission enquiries",
    },
    "/admin/reports": {
        title: "Reports",
        subtitle: "Management insights",
    },
    "/admin/profile": {
        title: "My Profile",
        subtitle: "Administrator profile",
    },
    "/admin/settings": {
        title: "Settings",
        subtitle: "Account preferences",
    },
};

const AdminTopbar = ({ onMenuClick }) => {
    const location = useLocation();

    const current =
        pageMeta[location.pathname] || pageMeta["/admin/dashboard"];

    return (
        <header className="sticky top-0 z-30 h-[76px] border-b border-slate-200 bg-white/90 backdrop-blur-xl">
            <div className="flex h-full items-center justify-between gap-4 px-4 sm:px-6 lg:px-7">
                {/* Left */}
                <div className="flex min-w-0 items-center gap-3">
                    <button
                        type="button"
                        onClick={onMenuClick}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-blue-200 hover:text-blue-600 lg:hidden"
                        aria-label="Open admin navigation"
                    >
                        <Menu className="h-5 w-5" />
                    </button>

                    <div className="min-w-0">
                        <p className="hidden text-[10px] font-extrabold uppercase tracking-[0.16em] text-blue-600 sm:block">
                            {current.subtitle}
                        </p>

                        <h1 className="truncate text-lg font-extrabold tracking-tight text-slate-950 sm:text-xl">
                            {current.title}
                        </h1>
                    </div>
                </div>

                {/* Search */}
                <div className="hidden max-w-md flex-1 lg:block">
                    <button
                        type="button"
                        className="group mx-auto flex h-11 w-full max-w-md items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-left transition hover:border-blue-200 hover:bg-white"
                    >
                        <Search className="h-4 w-4 text-slate-400 group-hover:text-blue-600" />

                        <span className="flex-1 text-sm text-slate-400">
                            Search students, batches, payments...
                        </span>

                        <span className="flex items-center gap-1 rounded-md border border-slate-200 bg-white px-1.5 py-1 text-[10px] font-bold text-slate-400">
                            <Command className="h-3 w-3" />
                            K
                        </span>
                    </button>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    <motion.button
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.97 }}
                        type="button"
                        className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:border-blue-200 hover:text-blue-600"
                        aria-label="Notifications"
                    >
                        <Bell className="h-4.5 w-4.5" />

                        <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                    </motion.button>

                    <button
                        type="button"
                        className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-2.5 py-2 transition hover:border-blue-200 sm:flex"
                    >
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-950 text-[10px] font-extrabold text-white">
                            A
                        </span>

                        <span className="hidden text-left md:block">
                            <span className="block text-xs font-bold text-slate-800">
                                Admin
                            </span>

                            <span className="block text-[10px] text-slate-400">
                                Administrator
                            </span>
                        </span>

                        <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
                    </button>
                </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        </header>
    );
};

export default AdminTopbar;
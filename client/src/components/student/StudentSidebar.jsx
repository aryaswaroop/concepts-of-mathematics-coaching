import { AnimatePresence, motion } from "framer-motion";
import {
    Award,
    BarChart3,
    BookOpen,
    CalendarDays,
    ChevronRight,
    CircleDollarSign,
    GraduationCap,
    Headphones,
    LayoutDashboard,
    LogOut,
    Megaphone,
    Settings,
    UserRound,
    X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const primaryNavigation = [
    {
        label: "Dashboard",
        path: "/student/dashboard",
        icon: LayoutDashboard,
    },
    {
        label: "My Learning",
        path: "/student/learning",
        icon: BookOpen,
    },
    {
        label: "My Batch",
        path: "/student/batch",
        icon: CalendarDays,
    },
];

const performanceNavigation = [
    {
        label: "Tests & Results",
        path: "/student/tests",
        icon: BarChart3,
    },
    {
        label: "Rewards",
        path: "/student/rewards",
        icon: Award,
    },
    {
        label: "Announcements",
        path: "/student/announcements",
        icon: Megaphone,
    },
    {
        label: "Support",
        path: "/student/support",
        icon: Headphones,
    },
];

const accountNavigation = [
    {
        label: "Fees & Payments",
        path: "/student/payments",
        icon: CircleDollarSign,
    },
    {
        label: "My Profile",
        path: "/student/profile",
        icon: UserRound,
    },
    {
        label: "Settings",
        path: "/student/settings",
        icon: Settings,
    },
];

const NavItem = ({ item, onClose }) => {
    const Icon = item.icon;

    return (
        <NavLink
            to={item.path}
            onClick={onClose}
            className={({ isActive }) =>
                `group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-semibold transition-all duration-200 ${isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                }`
            }
        >
            {({ isActive }) => (
                <>
                    {/* Active Indicator */}
                    {isActive && (
                        <motion.span
                            layoutId="student-sidebar-active"
                            className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-blue-600"
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                            }}
                        />
                    )}

                    {/* Icon */}
                    <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ${isActive
                                ? "bg-white text-blue-600 shadow-sm"
                                : "bg-transparent text-slate-400 group-hover:bg-white group-hover:text-blue-600 group-hover:shadow-sm"
                            }`}
                    >
                        <Icon size={16} strokeWidth={isActive ? 2.2 : 1.8} />
                    </span>

                    <span className="flex-1">{item.label}</span>

                    <ChevronRight
                        size={14}
                        className={`transition-all duration-200 ${isActive
                                ? "translate-x-0 text-blue-400"
                                : "-translate-x-1 text-slate-300 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                            }`}
                    />
                </>
            )}
        </NavLink>
    );
};

const NavigationGroup = ({ title, items, onClose }) => {
    return (
        <div className="mb-6">
            <p className="mb-2 px-3 text-[9px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
                {title}
            </p>

            <div className="space-y-1">
                {items.map((item) => (
                    <NavItem key={item.path} item={item} onClose={onClose} />
                ))}
            </div>
        </div>
    );
};

const StudentSidebar = ({ isOpen, onClose }) => {
    return (
        <>
            {/* Mobile Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.button
                        type="button"
                        aria-label="Close navigation"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-[2px] lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 flex w-[280px] flex-col border-r border-slate-200/80 bg-white transition-transform duration-300 ease-out lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Brand */}
                <div className="relative flex h-[76px] shrink-0 items-center border-b border-slate-100 px-5">
                    {/* Decorative grid */}
                    <div
                        className="pointer-events-none absolute inset-0 opacity-40"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, rgba(37,99,235,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.055) 1px, transparent 1px)",
                            backgroundSize: "22px 22px",
                        }}
                    />

                    <div className="relative flex min-w-0 flex-1 items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-[11px] font-black tracking-[-0.06em] text-blue-700">
                            CM
                        </div>

                        <div className="min-w-0">
                            <p className="truncate font-[var(--font-heading)] text-[18px] font-extrabold tracking-wider text-slate-950">
                                Concepts
                            </p>

                            <p className="truncate text-[10px] font-semibold text-slate-400">
                                of Mathematics
                            </p>
                        </div>
                    </div>

                    {/* Mobile Close */}
                    <button
                        type="button"
                        onClick={onClose}
                        className="relative flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 lg:hidden"
                        aria-label="Close navigation"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Portal Identity */}
                <div className="px-4 pt-5">
                    <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-white p-3.5">
                        <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-blue-100/60 blur-2xl" />

                        <div className="relative flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white shadow-sm">
                                <GraduationCap
                                    size={18}
                                    strokeWidth={1.8}
                                />
                            </div>

                            <div className="min-w-0">
                                <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-blue-600">
                                    Student Portal
                                </p>

                                <p className="mt-0.5 truncate text-[12px] font-semibold text-slate-600">
                                    Your learning workspace
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="scrollbar-thin flex-1 overflow-y-auto px-4 pt-6">
                    <NavigationGroup
                        title="Learning"
                        items={primaryNavigation}
                        onClose={onClose}
                    />

                    <NavigationGroup
                        title="Performance"
                        items={performanceNavigation}
                        onClose={onClose}
                    />

                    <NavigationGroup
                        title="Account"
                        items={accountNavigation}
                        onClose={onClose}
                    />
                </nav>

                {/* Bottom Student Card */}
                <div className="shrink-0 border-t border-slate-100 p-4">
                    <div className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/70 p-2.5 transition hover:border-blue-100 hover:bg-blue-50/50">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-[11px] font-extrabold text-white">
                            S
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="truncate text-[12px] font-bold text-slate-800">
                                Student
                            </p>

                            <p className="truncate text-[10px] font-medium text-slate-400">
                                Learning Portal
                            </p>
                        </div>

                        <button
                            type="button"
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white hover:text-red-500"
                            aria-label="Logout"
                        >
                            <LogOut size={15} />
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default StudentSidebar;
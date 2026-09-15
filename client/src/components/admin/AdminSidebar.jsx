import { AnimatePresence, motion } from "framer-motion";
import {
    BarChart3,
    Bell,
    BookOpen,
    ChevronRight,
    ClipboardCheck,
    CreditCard,
    FileText,
    GraduationCap,
    Headphones,
    LayoutDashboard,
    LogOut,
    Megaphone,
    Settings,
    ShieldCheck,
    Trophy,
    UserRound,
    Users,
    WalletCards,
    X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navigationGroups = [
    {
        label: "Overview",
        items: [
            {
                label: "Dashboard",
                path: "/admin/dashboard",
                icon: LayoutDashboard,
            },
        ],
    },
    {
        label: "Academic Management",
        items: [
            {
                label: "Students",
                path: "/admin/students",
                icon: Users,
            },
            {
                label: "Courses",
                path: "/admin/courses",
                icon: BookOpen,
            },
            {
                label: "Batches",
                path: "/admin/batches",
                icon: GraduationCap,
            },
            {
                label: "Enrollments",
                path: "/admin/enrollments",
                icon: FileText,
            },
        ],
    },
    {
        label: "Assessment",
        items: [
            {
                label: "Tests",
                path: "/admin/tests",
                icon: ClipboardCheck,
            },
            {
                label: "Results",
                path: "/admin/results",
                icon: BarChart3,
            },
            {
                label: "Rewards",
                path: "/admin/rewards",
                icon: Trophy,
            },
        ],
    },
    {
        label: "Finance",
        items: [
            {
                label: "Payments",
                path: "/admin/payments",
                icon: CreditCard,
            },
        ],
    },
    {
        label: "Communication",
        items: [
            {
                label: "Announcements",
                path: "/admin/announcements",
                icon: Megaphone,
            },
            {
                label: "Support Sessions",
                path: "/admin/support",
                icon: Headphones,
            },
            {
                label: "Enquiries",
                path: "/admin/enquiries",
                icon: Bell,
            },
        ],
    },
    {
        label: "Insights",
        items: [
            {
                label: "Reports",
                path: "/admin/reports",
                icon: BarChart3,
            },
        ],
    },
    {
        label: "Account",
        items: [
            {
                label: "My Profile",
                path: "/admin/profile",
                icon: UserRound,
            },
            {
                label: "Settings",
                path: "/admin/settings",
                icon: Settings,
            },
        ],
    },
];

const AdminSidebar = ({ isOpen, onClose }) => {
    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.button
                        type="button"
                        aria-label="Close admin navigation"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm lg:hidden"
                    />
                )}
            </AnimatePresence>

            <aside
                className={`fixed inset-y-0 left-0 z-50 flex w-[280px] flex-col border-r border-slate-200 bg-white transition-transform duration-300 lg:translate-x-0 ${isOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }`}
            >
                {/* Brand */}
                <div className="border-b border-slate-100 px-5 py-5">
                    <div className="flex items-center justify-between">
                        <NavLink
                            to="/admin/dashboard"
                            onClick={onClose}
                            className="group flex items-center gap-3"
                        >
                            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-blue-100 bg-blue-50 text-xs font-extrabold tracking-tight text-blue-700">
                                <span className="relative z-10">
                                    CM
                                </span>

                                <span
                                    aria-hidden="true"
                                    className="absolute inset-0 opacity-50"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(to right, rgba(37,99,235,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.12) 1px, transparent 1px)",
                                        backgroundSize: "10px 10px",
                                    }}
                                />
                            </div>

                            <div>
                                <p className="text-[17px] font-extrabold tracking-[-0.04em] text-slate-950">
                                    Concepts
                                </p>

                                <p className="text-[11px] font-semibold text-slate-400">
                                    of Mathematics
                                </p>
                            </div>
                        </NavLink>

                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 lg:hidden"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Admin identity */}
                    <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50/60 p-3">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-xs font-extrabold text-white">
                                A
                            </div>

                            <div className="min-w-0">
                                <p className="truncate text-sm font-extrabold text-slate-900">
                                    Admin
                                </p>

                                <div className="mt-0.5 flex items-center gap-1.5">
                                    <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />

                                    <span className="text-[11px] font-semibold text-slate-500">
                                        Management Portal
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto px-3 py-4">
                    <div className="space-y-5">
                        {navigationGroups.map((group) => (
                            <div key={group.label}>
                                <p className="mb-2 px-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
                                    {group.label}
                                </p>

                                <div className="space-y-1">
                                    {group.items.map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <NavLink
                                                key={item.path}
                                                to={item.path}
                                                onClick={onClose}
                                                className={({ isActive }) =>
                                                    `group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${isActive
                                                        ? "bg-blue-50 text-blue-700"
                                                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                                                    }`
                                                }
                                            >
                                                {({ isActive }) => (
                                                    <>
                                                        {isActive && (
                                                            <motion.span
                                                                layoutId="admin-sidebar-active"
                                                                className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-blue-600"
                                                            />
                                                        )}

                                                        <span
                                                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition ${isActive
                                                                    ? "bg-blue-600 text-white shadow-sm"
                                                                    : "bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600"
                                                                }`}
                                                        >
                                                            <Icon className="h-4 w-4" />
                                                        </span>

                                                        <span className="flex-1">
                                                            {item.label}
                                                        </span>

                                                        <ChevronRight
                                                            className={`h-4 w-4 transition ${isActive
                                                                    ? "translate-x-0 text-blue-500"
                                                                    : "-translate-x-1 text-slate-300 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                                                                }`}
                                                        />
                                                    </>
                                                )}
                                            </NavLink>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </nav>

                {/* Bottom */}
                <div className="border-t border-slate-100 p-3">
                    <div className="mb-3 rounded-xl bg-slate-50 px-3 py-2.5">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-500" />

                            <span className="text-[11px] font-semibold text-slate-500">
                                Admin workspace
                            </span>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-500 transition hover:bg-red-50 hover:text-red-600"
                    >
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 transition group-hover:bg-red-100">
                            <LogOut className="h-4 w-4" />
                        </span>

                        Logout
                    </button>
                </div>
            </aside>
        </>
    );
};

export default AdminSidebar;
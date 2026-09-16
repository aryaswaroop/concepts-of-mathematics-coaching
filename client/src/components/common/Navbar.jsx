import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowRight,
    ArrowUpRight,
    Menu,
    X,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navigation = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Courses", path: "/courses" },
    { label: "Batches", path: "/batches" },
    { label: "Tests & Results", path: "/tests-results" },
    { label: "Admission & Fees", path: "/admission-fees" },
    { label: "Contact", path: "/contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
            <nav className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center px-4 sm:px-6 lg:px-8">

                {/* Brand */}
                <Link
                    to="/"
                    onClick={closeMenu}
                    aria-label="Concepts of Mathematics home"
                    className="group flex shrink-0 items-center"
                >
                    <span className="mr-2.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-[11px] font-extrabold tracking-tight text-blue-700 transition-all duration-200 group-hover:border-blue-200 group-hover:bg-blue-100">
                        CM
                    </span>

                    <span className="whitespace-nowrap text-[18px] font-extrabold leading-none tracking-tight text-slate-950 xl:text-[20px]">
                        Concepts
                        <span className="ml-1 font-semibold text-slate-500">
                            of Mathematics
                        </span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden min-w-0 flex-1 justify-center px-4 xl:flex">
                    <div className="flex items-center rounded-2xl border border-slate-200/80 bg-slate-50/70 p-1">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    [
                                        "group relative whitespace-nowrap rounded-lg px-2.5 py-2 text-[13px] font-semibold transition-colors duration-200",
                                        "2xl:px-3 2xl:text-[14px]",
                                        isActive
                                            ? "text-blue-600"
                                            : "text-slate-600 hover:text-blue-600",
                                    ].join(" ")
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <span className="relative z-10">
                                            {item.label}
                                        </span>

                                        <span
                                            className={[
                                                "absolute inset-0 rounded-lg bg-blue-50 transition-all duration-200",
                                                isActive
                                                    ? "scale-100 opacity-100"
                                                    : "scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100",
                                            ].join(" ")}
                                        />

                                        <span
                                            className={[
                                                "absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-blue-600 transition-all duration-200",
                                                isActive
                                                    ? "w-5"
                                                    : "w-0 group-hover:w-5",
                                            ].join(" ")}
                                        />
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>
                </div>

                {/* Desktop Actions */}
                <div className="hidden shrink-0 items-center gap-2 xl:flex">
                    {/* Login */}
                    <Link
                        to="/login"
                        onClick={closeMenu}
                        className="group inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 text-[13px] font-bold text-slate-700 shadow-sm transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-blue-100"
                    >
                        <span>Login</span>

                        <ArrowRight
                            size={14}
                            strokeWidth={2.4}
                            className="transition-transform duration-200 group-hover:translate-x-0.5"
                        />
                    </Link>

                    {/* Enquire Now */}
                    <Link
                        to="/contact"
                        onClick={closeMenu}
                        className="group inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-blue-600 px-4 text-[13px] font-bold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-blue-200"
                    >
                        <span>Enquire Now</span>

                        <ArrowUpRight
                            size={15}
                            strokeWidth={2.3}
                            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </Link>
                </div>

                {/* Mobile / Tablet Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsOpen((value) => !value)}
                    aria-label={
                        isOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    aria-expanded={isOpen}
                    className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 transition-colors hover:bg-slate-50 xl:hidden"
                >
                    {isOpen ? (
                        <X size={18} strokeWidth={2} />
                    ) : (
                        <Menu size={18} strokeWidth={2} />
                    )}
                </button>
            </nav>

            {/* Mobile / Tablet Navigation */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                            duration: 0.22,
                            ease: "easeOut",
                        }}
                        className="overflow-hidden border-t border-slate-100 bg-white xl:hidden"
                    >
                        <div className="mx-auto max-w-[1440px] px-4 py-4 sm:px-6 lg:px-8">
                            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-1.5">
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        onClick={closeMenu}
                                        className={({ isActive }) =>
                                            [
                                                "block rounded-xl px-4 py-3 text-[14px] font-semibold transition-colors",
                                                isActive
                                                    ? "bg-white text-blue-600 shadow-sm ring-1 ring-slate-200/70"
                                                    : "text-slate-600 hover:bg-white hover:text-slate-950",
                                            ].join(" ")
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}
                            </div>

                            {/* Mobile Actions */}
                            <div className="mt-3 grid grid-cols-2 gap-2">
                                <Link
                                    to="/login"
                                    onClick={closeMenu}
                                    className="group flex h-11 items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 shadow-sm transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                                >
                                    Login

                                    <ArrowRight
                                        size={15}
                                        strokeWidth={2.3}
                                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                                    />
                                </Link>

                                <Link
                                    to="/contact"
                                    onClick={closeMenu}
                                    className="group flex h-11 items-center justify-center gap-1.5 rounded-full bg-blue-600 px-4 text-sm font-bold text-white transition-colors hover:bg-blue-700"
                                >
                                    Enquire Now

                                    <ArrowUpRight
                                        size={15}
                                        strokeWidth={2.3}
                                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
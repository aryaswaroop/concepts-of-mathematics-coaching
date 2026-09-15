import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowUpRight,
    Menu,
    X,
} from "lucide-react";
import {
    Link,
    NavLink,
} from "react-router-dom";

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
            <nav className="mx-auto flex h-[70px] max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-7">

                {/* =========================
                    Brand / Text Logo
                ========================== */}
                <Link
                    to="/"
                    onClick={closeMenu}
                    aria-label="Concepts of Mathematics home"
                    className="group flex shrink-0 items-center"
                >
                    <span className="mr-3 flex h-9 w-9 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-[11px] font-extrabold tracking-[-0.06em] text-blue-700 transition-all duration-200 group-hover:border-blue-200 group-hover:bg-blue-100">
                        CM
                    </span>

                    <span className="whitespace-nowrap text-[20px] font-extrabold leading-none tracking-[-0.04em] text-slate-950 sm:text-[21px]">
                        Concepts
                        <span className="ml-1 font-semibold text-slate-500">
                            of Mathematics
                        </span>
                    </span>
                </Link>

                {/* =========================
                    Desktop Navigation
                ========================== */}
                <div className="hidden items-center lg:flex">
                    <div className="flex items-center gap-0.5 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-1">
                        {navigation.map((item) => (
                            <NavLink
                                to={item.path}
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `group relative whitespace-nowrap px-3 py-2 text-[15px] font-semibold transition-colors duration-300 ${isActive
                                        ? "text-blue-600"
                                        : "text-slate-600 hover:text-blue-600"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <span className="relative z-10">
                                            {item.label}
                                        </span>

                                        {/* Hover background */}
                                        <span
                                            className={`absolute inset-0 -z-0 rounded-lg bg-blue-50 transition-all duration-300 ${isActive
                                                    ? "scale-100 opacity-100"
                                                    : "scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                                                }`}
                                        />

                                        {/* Animated underline */}
                                        <span
                                            className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-blue-600 transition-all duration-300 ${isActive
                                                    ? "w-5"
                                                    : "w-0 group-hover:w-5"
                                                }`}
                                        />
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>
                </div>

                {/* =========================
                    Desktop CTA
                ========================== */}
                <Link
                    to="/contact"
                    className="group hidden items-center gap-2 rounded-full border border-transparent bg-blue-600 px-4 py-2.5 text-sm font-medium leading-5 text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-blue-200 lg:inline-flex"
                >
                    <span>Enquire Now</span>

                    <ArrowUpRight
                        size={16}
                        strokeWidth={2.2}
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                </Link>

                {/* =========================
                    Mobile Menu Button
                ========================== */}
                <button
                    type="button"
                    onClick={() => setIsOpen((value) => !value)}
                    aria-label={
                        isOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    aria-expanded={isOpen}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 transition-colors hover:bg-slate-50 lg:hidden"
                >
                    {isOpen ? (
                        <X size={18} strokeWidth={2} />
                    ) : (
                        <Menu size={18} strokeWidth={2} />
                    )}
                </button>
            </nav>

            {/* =========================
                Mobile Navigation
            ========================== */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{
                            height: 0,
                            opacity: 0,
                        }}
                        animate={{
                            height: "auto",
                            opacity: 1,
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.22,
                            ease: "easeOut",
                        }}
                        className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
                    >
                        <div className="mx-auto max-w-[1280px] px-4 py-3 sm:px-6">

                            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-1.5">
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        onClick={closeMenu}
                                        className={({ isActive }) =>
                                            `block rounded-xl px-4 py-3 text-[14px] font-semibold transition-colors ${isActive
                                                ? "bg-white text-blue-600 shadow-sm ring-1 ring-slate-200/70"
                                                : "text-slate-600 hover:bg-white hover:text-slate-950"
                                            }`
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}
                            </div>

                            {/* Mobile CTA */}
                            <Link
                                to="/contact"
                                onClick={closeMenu}
                                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-sm font-medium leading-5 text-white transition-colors hover:bg-blue-700"
                            >
                                Enquire Now
                                <ArrowUpRight
                                    size={16}
                                    strokeWidth={2.2}
                                />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
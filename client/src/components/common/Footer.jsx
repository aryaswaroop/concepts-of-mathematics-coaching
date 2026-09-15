import { motion } from "framer-motion";
import {
    ArrowUpRight,
    MapPin,
    Phone,
    Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import MathPattern from "./MathPattern";

const footerNavigation = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Courses", path: "/courses" },
    { label: "Batches", path: "/batches" },
    { label: "Tests & Results", path: "/tests-results" },
    { label: "Admission & Fees", path: "/admission-fees" },
    { label: "Contact", path: "/contact" },
];

const footerItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const Footer = () => {
    return (
        <footer className="relative isolate overflow-hidden bg-slate-50">
            <MathPattern variant="grid" />

            {/* Ambient mathematical glow */}
            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl"
                animate={{
                    scale: [1, 1.12, 1],
                    opacity: [0.45, 0.7, 0.45],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-blue-50/80 blur-3xl"
                animate={{
                    scale: [1.1, 1, 1.1],
                    opacity: [0.5, 0.75, 0.5],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="relative mx-auto max-w-[1280px] px-5 py-14 sm:px-6 lg:px-8 lg:py-16">

                {/* Main Footer */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.25fr]"
                >

                    {/* BRAND */}
                    <motion.div
                        variants={footerItemVariants}
                        className="max-w-md"
                    >
                        <Link
                            to="/"
                            className="group inline-flex items-center gap-3"
                        >
                            <motion.span
                                whileHover={{
                                    rotate: -5,
                                    scale: 1.08,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 350,
                                    damping: 15,
                                }}
                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-sm font-extrabold tracking-[-0.07em] text-blue-700 shadow-sm transition-shadow duration-300 group-hover:shadow-md group-hover:shadow-blue-500/10"
                            >
                                CM
                            </motion.span>

                            <span className="text-[22px] font-extrabold leading-tight tracking-[-0.04em] text-slate-950 transition-colors duration-300 group-hover:text-blue-600 sm:text-[24px]">
                                Concepts
                                <span className="ml-1.5 font-semibold text-slate-500">
                                    of Mathematics
                                </span>
                            </span>
                        </Link>

                        <p className="mt-6 text-[16px] font-medium leading-7 text-slate-600 sm:text-[17px]">
                            Focused Mathematics coaching for Class 11 and 12,
                            built around concept clarity, regular practice,
                            personal guidance and board preparation.
                        </p>

                        <motion.div
                            whileHover={{
                                y: -3,
                                scale: 1.02,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                            }}
                            className="mt-7 inline-flex cursor-default items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-[14px] font-semibold text-blue-700 shadow-sm"
                        >
                            <motion.span
                                animate={{
                                    scale: [1, 1.3, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                                className="h-2 w-2 rounded-full bg-blue-500"
                            />

                            Class 11 & 12 Mathematics
                        </motion.div>
                    </motion.div>

                    {/* NAVIGATION */}
                    <motion.div variants={footerItemVariants}>
                        <h3 className="text-[17px] font-extrabold tracking-[-0.02em] text-slate-950">
                            Explore
                        </h3>

                        <nav className="mt-5 flex flex-col gap-3">
                            {footerNavigation.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className="group relative flex w-fit items-center text-[15px] font-medium text-slate-600 transition-colors duration-300 hover:text-blue-600"
                                >
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                        {item.label}
                                    </span>

                                    <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-full" />

                                    <ArrowUpRight
                                        size={14}
                                        className="ml-1 -translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:opacity-100"
                                    />
                                </Link>
                            ))}
                        </nav>
                    </motion.div>

                    {/* CONTACT */}
                    <motion.div variants={footerItemVariants}>
                        <h3 className="text-[17px] font-extrabold tracking-[-0.02em] text-slate-950">
                            Contact
                        </h3>

                        <div className="mt-5 space-y-4">

                            <motion.div
                                whileHover={{ x: 4 }}
                                className="group flex cursor-default items-start gap-3"
                            >
                                <motion.div
                                    whileHover={{
                                        rotate: -8,
                                        scale: 1.1,
                                    }}
                                    className="rounded-lg bg-blue-50 p-2 text-blue-600 transition-shadow duration-300 group-hover:shadow-md group-hover:shadow-blue-500/10"
                                >
                                    <MapPin size={17} />
                                </motion.div>

                                <p className="text-[15px] font-medium leading-6 text-slate-600">
                                    Near Shiv Mandir,
                                    <br />
                                    Babugaon, Hazaribagh,
                                    <br />
                                    Jharkhand 825301
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 4 }}
                                className="group flex items-center gap-3"
                            >
                                <motion.div
                                    whileHover={{
                                        rotate: 8,
                                        scale: 1.1,
                                    }}
                                    className="rounded-lg bg-blue-50 p-2 text-blue-600"
                                >
                                    <Phone size={17} />
                                </motion.div>

                                <span className="text-[15px] font-medium text-slate-500">
                                    Contact details coming soon
                                </span>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 4 }}
                                className="group flex items-center gap-3"
                            >
                                <motion.div
                                    whileHover={{
                                        rotate: -8,
                                        scale: 1.1,
                                    }}
                                    className="rounded-lg bg-blue-50 p-2 text-blue-600"
                                >
                                    <Mail size={17} />
                                </motion.div>

                                <span className="text-[15px] font-medium text-slate-500">
                                    Email details coming soon
                                </span>
                            </motion.div>

                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div variants={footerItemVariants}>
                        <motion.div
                            whileHover={{
                                y: -6,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                            }}
                            className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-white/80 p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm"
                        >
                            {/* Animated border glow */}
                            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                <div className="absolute inset-0 rounded-2xl ring-2 ring-blue-500/10" />
                            </div>

                            {/* Moving math symbol */}
                            <motion.span
                                aria-hidden="true"
                                className="absolute -right-3 -top-5 text-7xl font-bold text-blue-600/[0.05]"
                                animate={{
                                    rotate: [0, 8, 0],
                                    y: [0, 5, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                ∫
                            </motion.span>

                            <span className="relative text-[13px] font-bold uppercase tracking-[0.16em] text-blue-600">
                                Start your journey
                            </span>

                            <h3 className="relative mt-3 text-[23px] font-extrabold leading-tight tracking-[-0.035em] text-slate-950">
                                Build stronger
                                <br />
                                mathematical confidence.
                            </h3>

                            <p className="relative mt-3 text-[15px] leading-6 text-slate-600">
                                Explore our courses or get in touch about
                                admission.
                            </p>

                            <div className="relative mt-5 flex flex-wrap gap-3">
                                <Link
                                    to="/contact"
                                    className="group/btn inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-[14px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
                                >
                                    Enquire Now

                                    <ArrowUpRight
                                        size={16}
                                        className="transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                                    />
                                </Link>

                                <Link
                                    to="/courses"
                                    className="group/btn inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-3 text-[14px] font-bold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
                                >
                                    Courses
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Mathematical Interactive Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative mt-12 overflow-hidden rounded-2xl border border-blue-100 bg-white/60 px-5 py-4 backdrop-blur-sm"
                >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                        <p className="text-[14px] font-semibold text-slate-500">
                            Learn with purpose. Practice with consistency.
                        </p>

                        <div className="flex items-center gap-5 text-[18px] font-semibold text-blue-600/60">
                            {["∑", "π", "√x", "f(x)", "∫"].map(
                                (symbol, index) => (
                                    <motion.span
                                        key={symbol}
                                        whileHover={{
                                            scale: 1.35,
                                            y: -4,
                                            rotate: index % 2 ? 5 : -5,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 12,
                                        }}
                                        className="cursor-default transition-colors duration-300 hover:text-blue-600"
                                    >
                                        {symbol}
                                    </motion.span>
                                )
                            )}
                        </div>
                    </div>
                </motion.div>

                {/* Bottom */}
                <div className="mt-7 flex flex-col gap-3 border-t border-slate-200/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[14px] font-medium text-slate-500">
                        © {new Date().getFullYear()} Concepts of Mathematics.
                        All rights reserved.
                    </p>

                    <p className="text-[14px] font-semibold text-slate-400">
                        Mathematics • Concepts • Progress
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
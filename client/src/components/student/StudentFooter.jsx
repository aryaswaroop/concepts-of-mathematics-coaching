import { motion } from "framer-motion";
import {
    ArrowUpRight,
    BookOpen,
    GraduationCap,
    Headphones,
    ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const StudentFooter = () => {
    return (
        <footer className="relative mt-10 overflow-hidden border-t border-slate-200/70 bg-white">
            {/* Mathematical Grid */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(37,99,235,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.045) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            {/* Ambient Glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-blue-50/70 blur-3xl"
            />

            <div className="relative mx-auto max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8">
                {/* Main Footer */}
                <div className="grid gap-8 lg:grid-cols-[1.35fr_0.75fr_0.75fr_1fr]">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3">
                            <motion.div
                                whileHover={{
                                    rotate: -4,
                                    scale: 1.04,
                                }}
                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-[11px] font-black tracking-[-0.06em] text-blue-700"
                            >
                                CM
                            </motion.div>

                            <div>
                                <p className="font-[var(--font-heading)] text-[16px] font-extrabold tracking-[-0.03em] text-slate-950">
                                    Concepts
                                </p>

                                <p className="text-[10px] font-semibold text-slate-400">
                                    of Mathematics
                                </p>
                            </div>
                        </div>

                        <p className="mt-5 max-w-sm text-[12px] leading-6 text-slate-500">
                            A focused learning workspace designed to help
                            students build stronger mathematical concepts,
                            practice consistently and track their academic
                            journey.
                        </p>

                        {/* Mathematical Strip */}
                        <div className="mt-5 flex items-center gap-2">
                            {["∑", "π", "√x", "f(x)", "∫"].map(
                                (symbol) => (
                                    <motion.span
                                        key={symbol}
                                        whileHover={{
                                            y: -3,
                                            scale: 1.08,
                                        }}
                                        className="flex h-7 min-w-7 items-center justify-center rounded-lg border border-slate-200 bg-white px-2 font-serif text-[11px] font-bold text-slate-400 shadow-sm transition-colors hover:border-blue-100 hover:text-blue-600"
                                    >
                                        {symbol}
                                    </motion.span>
                                )
                            )}
                        </div>
                    </div>

                    {/* Learning */}
                    <FooterColumn title="Learning">
                        <FooterLink
                            to="/student/dashboard"
                            icon={GraduationCap}
                        >
                            Dashboard
                        </FooterLink>

                        <FooterLink
                            to="/student/learning"
                            icon={BookOpen}
                        >
                            My Learning
                        </FooterLink>

                        <FooterLink
                            to="/student/tests"
                            icon={ShieldCheck}
                        >
                            Tests & Results
                        </FooterLink>
                    </FooterColumn>

                    {/* Account */}
                    <FooterColumn title="Account">
                        <FooterLink to="/student/batch">
                            My Batch
                        </FooterLink>

                        <FooterLink to="/student/payments">
                            Fees & Payments
                        </FooterLink>

                        <FooterLink to="/student/profile">
                            My Profile
                        </FooterLink>

                        <FooterLink to="/student/settings">
                            Settings
                        </FooterLink>
                    </FooterColumn>

                    {/* Support */}
                    <div>
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
                            Student Support
                        </p>

                        <h3 className="mt-2 font-[var(--font-heading)] text-[17px] font-extrabold tracking-[-0.03em] text-slate-950">
                            Need guidance?
                        </h3>

                        <p className="mt-2 text-[11px] leading-5 text-slate-500">
                            Get academic support whenever you need help with
                            your learning journey.
                        </p>

                        <Link
                            to="/student/support"
                            className="group mt-4 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-3.5 py-2.5 text-[11px] font-extrabold text-white transition-all duration-200 hover:bg-blue-600"
                        >
                            <Headphones size={14} />

                            Open Support

                            <ArrowUpRight
                                size={13}
                                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </Link>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-9 flex flex-col gap-3 border-t border-slate-200/80 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[10px] font-medium text-slate-400">
                        © {new Date().getFullYear()} Concepts of Mathematics.
                        Student Portal.
                    </p>

                    <div className="flex items-center gap-4 text-[10px] font-semibold text-slate-400">
                        <span className="transition-colors hover:text-blue-600">
                            Learn
                        </span>

                        <span className="h-1 w-1 rounded-full bg-slate-300" />

                        <span className="transition-colors hover:text-blue-600">
                            Practice
                        </span>

                        <span className="h-1 w-1 rounded-full bg-slate-300" />

                        <span className="transition-colors hover:text-blue-600">
                            Improve
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterColumn = ({ title, children }) => {
    return (
        <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
                {title}
            </p>

            <div className="mt-4 space-y-2.5">{children}</div>
        </div>
    );
};

const FooterLink = ({ to, children, icon: Icon }) => {
    return (
        <Link
            to={to}
            className="group flex w-fit items-center gap-2 text-[11px] font-semibold text-slate-500 transition-colors hover:text-blue-600"
        >
            {Icon && (
                <Icon
                    size={13}
                    className="text-slate-400 transition-colors group-hover:text-blue-500"
                />
            )}

            <span>{children}</span>

            <ArrowUpRight
                size={11}
                className="-translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
            />
        </Link>
    );
};

export default StudentFooter;
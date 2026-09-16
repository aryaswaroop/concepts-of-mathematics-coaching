import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import MathPattern from "../common/MathPattern";

const AboutHero = () => {
    return (
        <section className="relative isolate overflow-hidden bg-white">
            <MathPattern variant="grid" />

            {/* Ambient mathematical elements */}
            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 top-16 text-[11rem] font-extrabold leading-none text-blue-600/[0.035] sm:text-[15rem]"
                animate={{
                    rotate: [0, 4, 0],
                    y: [0, 14, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                ∑
            </motion.div>

            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -left-8 bottom-10 text-[8rem] font-extrabold leading-none text-blue-600/[0.035] sm:text-[11rem]"
                animate={{
                    rotate: [0, -4, 0],
                    y: [0, -12, 0],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                √x
            </motion.div>

            <div className="relative mx-auto max-w-[1280px] px-5 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24">
                <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.7,
                            ease: "easeOut",
                        }}
                        className="max-w-2xl"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-4 py-2 text-[13px] font-bold uppercase tracking-[0.14em] text-blue-700">
                            <span className="h-2 w-2 rounded-full bg-blue-500" />
                            About Concepts of Mathematics
                        </span>

                        <h1 className="mt-6 text-[clamp(2.75rem,6vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950">
                            Mathematics becomes
                            <span className="block text-blue-600">
                                clearer with the right approach.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-xl text-[17px] leading-8 text-slate-600 sm:text-[18px]">
                            Focused Mathematics coaching for Class 11 and 12
                            students, built around concept clarity, regular
                            practice, evaluation and personal guidance.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="#our-approach"
                                className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-[15px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20"
                            >
                                Explore Our Approach

                                <ArrowDown
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-y-1"
                                />
                            </a>

                            <Link
                                to="/contact"
                                className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-5 py-3.5 text-[15px] font-bold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
                            >
                                Get in Touch

                                <ArrowUpRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Mathematical Visual */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 30,
                            scale: 0.96,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.15,
                            ease: "easeOut",
                        }}
                        className="relative mx-auto w-full max-w-[560px]"
                    >
                        <div className="relative min-h-[390px] overflow-hidden rounded-[2rem] border border-blue-100 bg-white/70 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:min-h-[440px] sm:p-8">

                            {/* Orbit */}
                            <motion.div
                                aria-hidden="true"
                                className="absolute right-[-70px] top-[-70px] h-56 w-56 rounded-full border border-blue-200/60"
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 22,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />

                            <motion.div
                                aria-hidden="true"
                                className="absolute right-[-35px] top-[-35px] h-40 w-40 rounded-full border border-blue-100"
                                animate={{
                                    rotate: -360,
                                }}
                                transition={{
                                    duration: 16,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />

                            {/* Formula labels */}
                            <span className="absolute left-7 top-7 text-sm font-semibold text-blue-600/60">
                                f(x) → understanding
                            </span>

                            <span className="absolute right-7 top-20 text-5xl font-extrabold text-blue-600/[0.08]">
                                π
                            </span>

                            {/* Central equation */}
                            <motion.div
                                whileHover={{
                                    y: -5,
                                    scale: 1.015,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 280,
                                    damping: 20,
                                }}
                                className="absolute inset-x-6 top-1/2 -translate-y-1/2 rounded-2xl border border-blue-100 bg-blue-50/60 p-7 text-center shadow-inner"
                            >
                                <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-blue-600">
                                    Our learning equation
                                </p>

                                <p className="mt-4 text-[clamp(1.7rem,4vw,2.0rem)] font-extrabold tracking-[-0.05em] text-slate-950">
                                    Concept
                                    <span className="mx-2 text-blue-600">
                                        +
                                    </span>
                                    Practice
                                    <span className="mx-2 text-blue-600">
                                        =
                                    </span>
                                    Progress
                                </p>
                            </motion.div>

                            {/* Floating cards */}
                            <motion.div
                                animate={{
                                    y: [0, -8, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute bottom-7 left-7 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg"
                            >
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                    Focus
                                </span>

                                <p className="mt-1 text-sm font-bold text-slate-900">
                                    Concept Clarity
                                </p>
                            </motion.div>

                            <motion.div
                                animate={{
                                    y: [0, 8, 0],
                                }}
                                transition={{
                                    duration: 4.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute bottom-7 right-7 rounded-xl border border-blue-100 bg-white px-4 py-3 shadow-lg"
                            >
                                <span className="text-xs font-bold uppercase tracking-wider text-blue-500">
                                    Result
                                </span>

                                <p className="mt-1 text-sm font-bold text-slate-900">
                                    Consistent Progress
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
    ArrowRight,
    ArrowUpRight,
    BookOpenCheck,
    CheckCircle2,
    MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

import MathPattern from "../common/MathPattern";

const CTASection = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, {
        stiffness: 120,
        damping: 20,
        mass: 0.5,
    });

    const springY = useSpring(mouseY, {
        stiffness: 120,
        damping: 20,
        mass: 0.5,
    });

    const orbitX = useTransform(springX, [-1, 1], [-12, 12]);
    const orbitY = useTransform(springY, [-1, 1], [-12, 12]);

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) / rect.width;
        const y =
            (event.clientY - rect.top) / rect.height;

        mouseX.set(x * 2 - 1);
        mouseY.set(y * 2 - 1);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section
            className="relative isolate overflow-hidden bg-transparent"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Mathematical background */}
            <MathPattern
                variant="grid"
                opacity="opacity-100"
                className="z-0"
            />

            {/* Ambient blue atmosphere */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/35 blur-3xl"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-40 bottom-[-100px] z-0 h-[320px] w-[320px] rounded-full bg-blue-100/25 blur-3xl"
            />

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.25,
                    }}
                    transition={{
                        duration: 0.65,
                        ease: "easeOut",
                    }}
                    className="relative overflow-hidden rounded-[2.25rem] border border-blue-100/80 bg-white/70 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-2xl"
                >
                    {/* Animated top beam */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute left-0 right-0 top-0 h-px overflow-hidden"
                    >
                        <motion.div
                            animate={{
                                x: ["-100%", "100%"],
                            }}
                            transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="h-full w-1/3 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                        />
                    </div>

                    {/* Inner mathematical canvas */}
                    <div className="relative min-h-[520px] overflow-hidden">
                        {/* Orbit system */}
                        <motion.div
                            style={{
                                x: orbitX,
                                y: orbitY,
                            }}
                            className="pointer-events-none absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 sm:h-[480px] sm:w-[480px] lg:h-[570px] lg:w-[570px]"
                        >
                            {/* Outer orbit */}
                            <motion.div
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 28,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute inset-0 rounded-full border border-blue-100/80"
                            />

                            {/* Middle orbit */}
                            <motion.div
                                animate={{
                                    rotate: -360,
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute inset-[12%] rounded-full border border-dashed border-blue-200/80"
                            />

                            {/* Inner orbit */}
                            <motion.div
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 14,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute inset-[25%] rounded-full border border-blue-100/70"
                            />

                            {/* Orbit dots */}
                            <motion.span
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-blue-500 shadow-[0_0_0_5px_rgba(37,99,235,0.08)]"
                            />

                            <motion.span
                                animate={{
                                    rotate: -360,
                                }}
                                transition={{
                                    duration: 13,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute bottom-[11%] right-[8%] h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_0_5px_rgba(59,130,246,0.07)]"
                            />

                            <motion.span
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.4, 1, 0.4],
                                }}
                                transition={{
                                    duration: 2.4,
                                    repeat: Infinity,
                                }}
                                className="absolute bottom-[18%] left-[9%] h-2.5 w-2.5 rounded-full bg-yellow-400"
                            />
                        </motion.div>

                        {/* Mathematical symbols */}
                        <motion.span
                            style={{
                                x: useTransform(
                                    springX,
                                    [-1, 1],
                                    [-18, 18]
                                ),
                                y: useTransform(
                                    springY,
                                    [-1, 1],
                                    [-12, 12]
                                ),
                            }}
                            className="pointer-events-none absolute left-[7%] top-[16%] select-none font-[var(--font-heading)] text-5xl font-extrabold text-blue-100 sm:text-6xl"
                        >
                            ∑
                        </motion.span>

                        <motion.span
                            style={{
                                x: useTransform(
                                    springX,
                                    [-1, 1],
                                    [15, -15]
                                ),
                                y: useTransform(
                                    springY,
                                    [-1, 1],
                                    [10, -10]
                                ),
                            }}
                            className="pointer-events-none absolute right-[8%] top-[14%] select-none font-[var(--font-heading)] text-5xl font-extrabold text-blue-100 sm:text-6xl"
                        >
                            π
                        </motion.span>

                        <motion.span
                            style={{
                                x: useTransform(
                                    springX,
                                    [-1, 1],
                                    [-12, 12]
                                ),
                                y: useTransform(
                                    springY,
                                    [-1, 1],
                                    [15, -15]
                                ),
                            }}
                            className="pointer-events-none absolute bottom-[15%] left-[9%] select-none font-[var(--font-heading)] text-4xl font-extrabold text-blue-100 sm:text-5xl"
                        >
                            √x
                        </motion.span>

                        <motion.span
                            style={{
                                x: useTransform(
                                    springX,
                                    [-1, 1],
                                    [18, -18]
                                ),
                                y: useTransform(
                                    springY,
                                    [-1, 1],
                                    [-12, 12]
                                ),
                            }}
                            className="pointer-events-none absolute bottom-[16%] right-[8%] select-none font-[var(--font-heading)] text-3xl font-extrabold text-blue-100 sm:text-4xl"
                        >
                            f(x)
                        </motion.span>

                        {/* Central CTA */}
                        <div className="relative z-20 flex min-h-[520px] items-center justify-center px-6 py-16 text-center sm:px-10">
                            <div className="max-w-2xl">
                                {/* Eyebrow */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 10,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.45,
                                        delay: 0.1,
                                    }}
                                    className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/90 px-3.5 py-1.5 shadow-sm backdrop-blur-sm"
                                >
                                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                                        <BookOpenCheck
                                            size={11}
                                            strokeWidth={2.4}
                                        />
                                    </span>

                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700">
                                        Your next step starts here
                                    </span>
                                </motion.div>

                                {/* Heading */}
                                <motion.h2
                                    initial={{
                                        opacity: 0,
                                        y: 18,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.18,
                                    }}
                                    className="mt-6 font-[var(--font-heading)] text-4xl font-extrabold leading-[1.04] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-[4rem]"
                                >
                                    Build stronger
                                    <span className="block text-blue-600">
                                        mathematical confidence.
                                    </span>
                                </motion.h2>

                                {/* Description */}
                                <motion.p
                                    initial={{
                                        opacity: 0,
                                        y: 14,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.55,
                                        delay: 0.28,
                                    }}
                                    className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-[15px]"
                                >
                                    Explore the courses, understand the batch
                                    options and take the next step toward
                                    focused Mathematics learning for Class 11
                                    and Class 12.
                                </motion.p>

                                {/* CTA buttons */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 15,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.55,
                                        delay: 0.36,
                                    }}
                                    className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
                                >
                                    <Link
                                        to="/contact"
                                        className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200"
                                    >
                                        Enquire About Admission

                                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
                                            <ArrowRight
                                                size={14}
                                                strokeWidth={2.4}
                                            />
                                        </span>
                                    </Link>

                                    <Link
                                        to="/courses"
                                        className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-slate-200 bg-white/85 px-6 py-3.5 text-sm font-bold text-slate-800 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                                    >
                                        Explore Courses

                                        <ArrowUpRight
                                            size={15}
                                            strokeWidth={2.1}
                                            className="text-blue-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </Link>
                                </motion.div>

                                {/* Trust points */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.48,
                                    }}
                                    className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
                                >
                                    {[
                                        "Classes 11 & 12",
                                        "Regular assessments",
                                        "Personal guidance",
                                    ].map((item) => (
                                        <span
                                            key={item}
                                            className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-500"
                                        >
                                            <CheckCircle2
                                                size={13}
                                                strokeWidth={2.2}
                                                className="text-blue-500"
                                            />

                                            {item}
                                        </span>
                                    ))}
                                </motion.div>
                            </div>
                        </div>

                        {/* Floating enquiry node */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.8,
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: 0.6,
                            }}
                            animate={{
                                y: [0, -7, 0],
                            }}
                            className="absolute bottom-7 left-7 z-30 hidden rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-xl sm:block"
                        >
                            <div className="flex items-center gap-2.5">
                                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                    <MessageCircle
                                        size={15}
                                        strokeWidth={1.9}
                                    />
                                </span>

                                <div>
                                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                                        Need guidance?
                                    </p>

                                    <p className="mt-0.5 text-xs font-bold text-slate-800">
                                        Let’s talk
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating concept node */}
                        <motion.div
                            animate={{
                                y: [0, 8, 0],
                                rotate: [0, 1.5, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute right-7 top-7 z-30 hidden rounded-2xl border border-blue-100 bg-blue-50/90 px-4 py-3 shadow-lg backdrop-blur-xl sm:block"
                        >
                            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-blue-400">
                                Learning
                            </p>

                            <p className="mt-0.5 font-[var(--font-heading)] text-sm font-extrabold text-blue-700">
                                Concept → Practice
                            </p>
                        </motion.div>
                    </div>

                    {/* Bottom brand strip */}
                    <div className="relative border-t border-blue-100/70 bg-white/55 px-5 py-4 backdrop-blur-xl sm:px-7">
                        <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                                Concepts of Mathematics
                            </p>

                            <div className="flex items-center justify-center gap-2">
                                <span className="h-px w-7 bg-blue-200" />

                                <span className="font-[var(--font-heading)] text-[10px] font-extrabold tracking-[0.12em] text-blue-500">
                                    Understand · Practice · Progress
                                </span>

                                <span className="h-px w-7 bg-blue-200" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
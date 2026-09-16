import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
    ArrowRight,
    BookOpen,
    CheckCircle2,
    Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import MathPattern from "../common/MathPattern";

const AboutCTA = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, {
        stiffness: 100,
        damping: 20,
    });

    const smoothY = useSpring(mouseY, {
        stiffness: 100,
        damping: 20,
    });

    const moveX = useTransform(smoothX, [-500, 500], [-18, 18]);
    const moveY = useTransform(smoothY, [-500, 500], [-18, 18]);

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();

        mouseX.set(
            event.clientX - (rect.left + rect.width / 2)
        );

        mouseY.set(
            event.clientY - (rect.top + rect.height / 2)
        );
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section
            className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Consistent mathematical background */}
            <MathPattern variant="grid" />

            {/* Soft ambient light */}
            <motion.div
                style={{
                    x: moveX,
                    y: moveY,
                }}
                className="pointer-events-none absolute left-[8%] top-[18%] h-56 w-56 rounded-full bg-blue-500/10 blur-3xl"
            />

            <motion.div
                style={{
                    x: useTransform(moveX, (value) => -value),
                    y: useTransform(moveY, (value) => -value),
                }}
                className="pointer-events-none absolute bottom-[8%] right-[8%] h-64 w-64 rounded-full bg-blue-400/10 blur-3xl"
            />

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-7">
                <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/75 px-6 py-12 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-10 sm:py-14 lg:px-16 lg:py-16">

                    {/* Decorative mathematical symbols */}
                    <motion.span
                        animate={{
                            y: [0, -8, 0],
                            rotate: [0, 4, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="pointer-events-none absolute right-[8%] top-[8%] text-5xl font-bold text-blue-600/[0.08] sm:text-7xl"
                    >
                        π
                    </motion.span>

                    <motion.span
                        animate={{
                            y: [0, 10, 0],
                            rotate: [0, -5, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="pointer-events-none absolute bottom-[10%] left-[5%] text-5xl font-bold text-blue-600/[0.07] sm:text-7xl"
                    >
                        ∫
                    </motion.span>

                    <span className="pointer-events-none absolute right-[24%] bottom-[15%] text-3xl font-bold text-slate-900/[0.05]">
                        √x
                    </span>

                    <span className="pointer-events-none absolute left-[22%] top-[12%] text-2xl font-bold text-slate-900/[0.05]">
                        x² + y²
                    </span>

                    {/* Content */}
                    <div className="relative mx-auto max-w-4xl text-center">

                        {/* Eyebrow */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5 }}
                            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
                        >
                            <Sparkles className="h-4 w-4" />
                            Start your mathematical journey
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.05,
                            }}
                            className="mx-auto max-w-3xl text-2xl font-extrabold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-5xl"
                        >
                            Build stronger mathematical
                            <span className="text-blue-600">
                                {" "}confidence.
                            </span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.12,
                            }}
                            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg"
                        >
                            Understand concepts, practise consistently,
                            evaluate your progress and prepare with a
                            focused approach to Class 11 and Class 12
                            Mathematics.
                        </motion.p>

                        {/* Mathematical equation */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.18,
                            }}
                            className="mx-auto mt-7 flex w-fit items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50/90 px-5 py-3 font-mono text-sm font-semibold text-slate-600 shadow-sm sm:gap-3 sm:px-6 sm:text-base"
                        >
                            <span>Understanding</span>

                            <span className="text-blue-600">
                                →
                            </span>

                            <span>Practice</span>

                            <span className="text-blue-600">
                                →
                            </span>

                            <span>Confidence</span>
                        </motion.div>

                        {/* Benefits */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.24,
                            }}
                            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-600"
                        >
                            <span className="inline-flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                Concept-focused learning
                            </span>

                            <span className="inline-flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                Regular assessment
                            </span>

                            <span className="inline-flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                Personal guidance
                            </span>
                        </motion.div>

                        {/* CTA buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3,
                            }}
                            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
                        >
                            <Link
                                to="/contact"
                                className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-[15px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20"
                            >
                                Enquire About Admission

                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>

                            <Link
                                to="/courses"
                                className="group inline-flex min-w-[170px] items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                            >
                                <BookOpen className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />

                                Explore Courses
                            </Link>
                        </motion.div>
                    </div>

                    {/* Bottom mathematical strip */}
                    <div className="relative mt-12 border-t border-slate-200/70 pt-7">
                        <div className="flex flex-wrap items-center justify-center gap-6 text-2xl font-bold text-slate-300 sm:gap-10">
                            {["∑", "π", "√x", "f(x)", "∫", "x²"].map(
                                (symbol) => (
                                    <motion.span
                                        key={symbol}
                                        whileHover={{
                                            y: -5,
                                            scale: 1.12,
                                            color: "#2563eb",
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 15,
                                        }}
                                        className="cursor-default select-none"
                                    >
                                        {symbol}
                                    </motion.span>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCTA;
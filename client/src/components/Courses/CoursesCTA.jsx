import {
    ArrowRight,
    CheckCircle2,
    Sparkles,
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import MathPattern from "../common/MathPattern";

const CoursesCTA = () => {
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

    const moveX = useTransform(smoothX, [-500, 500], [-16, 16]);
    const moveY = useTransform(smoothY, [-500, 500], [-16, 16]);

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
            <MathPattern variant="grid" />

            <motion.div
                style={{
                    x: moveX,
                    y: moveY,
                }}
                className="pointer-events-none absolute left-[8%] top-[15%] h-56 w-56 rounded-full bg-blue-500/10 blur-3xl"
            />

            <motion.div
                style={{
                    x: useTransform(moveX, (value) => -value),
                    y: useTransform(moveY, (value) => -value),
                }}
                className="pointer-events-none absolute bottom-[8%] right-[8%] h-64 w-64 rounded-full bg-blue-400/10 blur-3xl"
            />

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-7">
                <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/75 px-6 py-12 text-center shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-10 sm:py-14 lg:px-16 lg:py-16">

                    {/* Decorative symbols */}
                    <motion.span
                        animate={{
                            y: [0, -8, 0],
                            rotate: [0, 5, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="pointer-events-none absolute right-[8%] top-[8%] text-6xl font-bold text-blue-600/[0.07] sm:text-8xl"
                    >
                        π
                    </motion.span>

                    <motion.span
                        animate={{
                            y: [0, 9, 0],
                            rotate: [0, -5, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="pointer-events-none absolute bottom-[10%] left-[6%] text-6xl font-bold text-blue-600/[0.06] sm:text-8xl"
                    >
                        ∫
                    </motion.span>

                    <div className="relative mx-auto max-w-3xl">

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
                        >
                            <Sparkles className="h-4 w-4" />
                            Choose your learning path
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: 0.05,
                            }}
                            className="text-3xl font-extrabold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-5xl"
                        >
                            Ready to strengthen your
                            <span className="text-blue-600">
                                {" "}Mathematics?
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: 0.1,
                            }}
                            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg"
                        >
                            Choose the right course for your academic stage
                            and take the next step toward clearer concepts,
                            better practice and stronger confidence.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: 0.15,
                            }}
                            className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-600"
                        >
                            <span className="inline-flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                Class 11
                            </span>

                            <span className="inline-flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                Class 12
                            </span>

                            <span className="inline-flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                Focused Mathematics
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: 0.2,
                            }}
                            className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
                        >
                            <Link
                                to="/contact"
                                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600"
                            >
                                Enquire About Admission
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>

                            <Link
                                to="/batches"
                                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                            >
                                View Batches
                            </Link>
                        </motion.div>

                        <div className="mt-10 font-mono text-sm font-semibold text-slate-400">
                            Understand → Practise → Evaluate → Improve
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursesCTA;
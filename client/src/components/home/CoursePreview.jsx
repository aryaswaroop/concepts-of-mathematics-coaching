import { motion } from "framer-motion";
import {
    ArrowRight,
    BookOpen,
    GraduationCap,
    Sigma,
} from "lucide-react";
import { Link } from "react-router-dom";

import MathPattern from "../common/MathPattern";

const courses = [
    {
        className: "Class 11",
        shortLabel: "Foundation",
        title: "Build the foundation.",
        description:
            "Develop strong mathematical fundamentals, understand core concepts and build the problem-solving habits needed for senior-secondary Mathematics.",
        topics: [
            "Concept clarity",
            "Problem solving",
            "Regular practice",
        ],
        formula: "f(x) = y",
        number: "01",
    },
    {
        className: "Class 12",
        shortLabel: "Board Focus",
        title: "Strengthen your preparation.",
        description:
            "Focused preparation for advanced Mathematics with consistent practice, assessment and board-oriented problem solving.",
        topics: [
            "Advanced concepts",
            "Board preparation",
            "Regular assessment",
        ],
        formula: "∫ f(x) dx",
        number: "02",
    },
];

const CoursePreview = () => {
    return (
        <section className="relative isolate overflow-hidden bg-transparent">
            {/* Same mathematical grid pattern used across the main sections */}
            <MathPattern
                variant="grid"
                opacity="opacity-100"
                className="z-0"
            />

            {/* Large mathematical symbol */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 top-4 z-0 select-none font-[var(--font-heading)] text-[15rem] font-extrabold leading-none tracking-[-0.12em] text-blue-50/70 sm:text-[20rem]"
            >
                ∑
            </div>

            {/* Soft atmospheric glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-40 bottom-[-100px] z-0 h-[360px] w-[360px] rounded-full bg-blue-100/25 blur-3xl"
            />

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55 }}
                    className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
                >
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2.5">
                            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                <BookOpen size={13} strokeWidth={2.2} />
                            </span>

                            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-600">
                                Our Courses
                            </span>
                        </div>

                        <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-extrabold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-[2.75rem]">
                            Focused Mathematics
                            <span className="text-blue-600">
                                {" "}
                                courses.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-lg text-sm leading-7 text-slate-500 lg:text-[15px]">
                        Dedicated coaching for Class 11 and Class 12 students,
                        with an approach built around understanding, practice
                        and academic progress.
                    </p>
                </motion.div>

                {/* Course Cards */}
                <div className="mt-10 grid gap-5 lg:grid-cols-2">
                    {courses.map((course, index) => (
                        <motion.article
                            key={course.className}
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
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.55,
                                delay: index * 0.1,
                            }}
                            whileHover={{ y: -5 }}
                            className="group relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/55 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.07)] backdrop-blur-xl transition-all duration-300 hover:border-blue-200/80 hover:bg-white/70 hover:shadow-[0_24px_65px_rgba(37,99,235,0.11)] sm:p-7 lg:p-8"
                        >
                            {/* Glass highlight */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
                            />

                            {/* Mathematical circular geometry */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-blue-100/60 transition-transform duration-700 group-hover:scale-110"
                            />

                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-dashed border-blue-100/70 transition-transform duration-700 group-hover:rotate-12"
                            />

                            {/* Top Row */}
                            <div className="relative flex items-start justify-between">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-[var(--font-heading)] text-[10px] font-extrabold tracking-[0.16em] text-blue-500">
                                            {course.number}
                                        </span>

                                        <span className="h-px w-7 bg-blue-200" />

                                        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                                            {course.shortLabel}
                                        </span>
                                    </div>

                                    <h3 className="mt-5 font-[var(--font-heading)] text-2xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-3xl">
                                        {course.className}
                                    </h3>
                                </div>

                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50/80 text-blue-600 transition-all duration-300 group-hover:rotate-3 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white">
                                    <GraduationCap
                                        size={19}
                                        strokeWidth={1.9}
                                    />
                                </div>
                            </div>

                            {/* Formula */}
                            <div className="relative mt-7 flex items-center gap-3">
                                <span className="font-[var(--font-heading)] text-2xl font-extrabold tracking-[-0.05em] text-blue-100 transition-colors duration-300 group-hover:text-blue-200">
                                    {course.formula}
                                </span>

                                <span className="h-px flex-1 bg-slate-100" />
                            </div>

                            {/* Course Title */}
                            <h4 className="relative mt-5 max-w-md font-[var(--font-heading)] text-xl font-extrabold tracking-[-0.03em] text-slate-900">
                                {course.title}
                            </h4>

                            {/* Description */}
                            <p className="relative mt-3 max-w-xl text-sm leading-7 text-slate-500">
                                {course.description}
                            </p>

                            {/* Topics */}
                            <div className="relative mt-6 grid gap-2.5 sm:grid-cols-3">
                                {course.topics.map((topic) => (
                                    <div
                                        key={topic}
                                        className="rounded-xl border border-slate-200/70 bg-slate-50/55 px-3 py-2.5 text-[11px] font-semibold text-slate-600 backdrop-blur-sm transition-colors duration-300 group-hover:border-blue-100 group-hover:bg-blue-50/50 group-hover:text-blue-700"
                                    >
                                        {topic}
                                    </div>
                                ))}
                            </div>

                            {/* Bottom Action */}
                            <div className="relative mt-7 flex items-center justify-between border-t border-slate-200/60 pt-5">
                                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                                    Mathematics
                                </span>

                                <Link
                                    to="/courses"
                                    className="group/link inline-flex items-center gap-2 text-xs font-bold text-blue-600"
                                >
                                    Explore course

                                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 transition-all duration-300 group-hover/link:bg-blue-600 group-hover/link:text-white">
                                        <ArrowRight
                                            size={13}
                                            strokeWidth={2.3}
                                        />
                                    </span>
                                </Link>
                            </div>

                            {/* Bottom hover indicator */}
                            <span className="absolute bottom-0 left-8 right-8 h-0.5 origin-left scale-x-0 rounded-full bg-blue-600 transition-transform duration-300 group-hover:scale-x-100" />
                        </motion.article>
                    ))}
                </div>

                {/* Supporting Mathematics Line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-7 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400"
                >
                    <Sigma size={13} className="text-blue-400" />

                    <span>
                        Understand · Practice · Progress
                    </span>

                    <span className="h-px w-8 bg-blue-200" />
                </motion.div>
            </div>
        </section>
    );
};

export default CoursePreview;
import { motion } from "framer-motion";
import {
    Award,
    BookOpen,
    GraduationCap,
    Sparkles,
    Target,
} from "lucide-react";
import MathPattern from "../common/MathPattern";

const highlights = [
    {
        icon: GraduationCap,
        title: "Experienced Educator",
        description:
            "Years of teaching experience focused on helping students understand Mathematics with clarity and confidence.",
    },
    {
        icon: Award,
        title: "Recognised Excellence",
        description:
            "Recognised and awarded for contributions and achievements across several areas.",
    },
    {
        icon: Target,
        title: "Student Focused",
        description:
            "Teaching is centred around understanding student needs and improving individual performance.",
    },
    {
        icon: BookOpen,
        title: "Mathematics Specialist",
        description:
            "Focused academic guidance for Class 11 and Class 12 Mathematics.",
    },
];

const TeacherProfile = () => {
    return (
        <section className="relative overflow-hidden bg-slate-50/70">
            <MathPattern variant="grid" />

            {/* Decorative mathematics */}
            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 top-12 text-[11rem] font-extrabold leading-none text-blue-600/[0.035]"
                animate={{
                    rotate: [0, 5, 0],
                    y: [0, 12, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                π
            </motion.div>

            <div className="relative mx-auto max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <span className="text-[13px] font-bold uppercase tracking-[0.16em] text-blue-600">
                        Meet the Teacher
                    </span>

                    <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight tracking-[-0.045em] text-slate-950">
                        Experience that shapes{" "}
                        <span className="text-blue-600">
                            better learning.
                        </span>
                    </h2>

                    <p className="mt-5 text-[16px] leading-7 text-slate-600 sm:text-[17px]">
                        Behind Concepts of Mathematics is an experienced
                        educator committed to helping students develop
                        stronger mathematical understanding and confidence.
                    </p>
                </motion.div>

                {/* Profile */}
                <div className="mt-12 grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">

                    {/* Teacher visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="relative mx-auto max-w-[460px] overflow-hidden rounded-[2rem] border border-blue-100 bg-white/80 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-8">

                            {/* Decorative orbit */}
                            <motion.div
                                aria-hidden="true"
                                className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-blue-200/60"
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />

                            <motion.div
                                aria-hidden="true"
                                className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full border border-blue-100"
                                animate={{
                                    rotate: -360,
                                }}
                                transition={{
                                    duration: 24,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />

                            {/* Teacher placeholder */}
                            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-blue-50/70">
                                <div className="text-center">
                                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-600 shadow-sm">
                                        <GraduationCap size={36} />
                                    </div>

                                    <p className="mt-4 text-[13px] font-bold uppercase tracking-[0.14em] text-blue-600">
                                        Mathematics Educator
                                    </p>

                                    <p className="mt-1 text-sm font-medium text-slate-500">
                                        Experienced • Dedicated • Recognised
                                    </p>
                                </div>
                            </div>

                            {/* Formula */}
                            <div className="relative mt-5 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                                <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-slate-400">
                                    Teaching principle
                                </span>

                                <span className="text-sm font-extrabold text-blue-600">
                                    Knowledge → Impact
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Teacher information */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.1,
                        }}
                    >
                        <span className="text-[13px] font-bold uppercase tracking-[0.16em] text-blue-600">
                            The Educator Behind the Classroom
                        </span>

                        <h3 className="mt-4 text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold leading-tight tracking-[-0.045em] text-slate-950">
                            Teaching Mathematics with{" "}
                            <span className="text-blue-600">
                                experience and purpose.
                            </span>
                        </h3>

                        <p className="mt-6 text-[16px] leading-7 text-slate-600 sm:text-[17px]">
                            With extensive teaching experience and recognition
                            across several areas, the teacher brings a
                            practical and student-focused approach to
                            Mathematics education.
                        </p>

                        <p className="mt-4 text-[16px] leading-7 text-slate-600 sm:text-[17px]">
                            The emphasis is not simply on completing chapters.
                            Students are encouraged to understand concepts,
                            practise consistently, learn from mistakes and
                            gradually develop confidence in solving problems.
                        </p>

                        {/* Highlights */}
                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {highlights.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={item.title}
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
                                            duration: 0.4,
                                            delay: index * 0.07,
                                        }}
                                        whileHover={{
                                            y: -4,
                                        }}
                                        className="group rounded-xl border border-slate-200/80 bg-white/80 p-4 transition-all duration-300 hover:border-blue-200 hover:shadow-[0_12px_30px_rgba(37,99,235,0.08)]"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-transform duration-300 group-hover:scale-110">
                                                <Icon size={17} />
                                            </div>

                                            <div>
                                                <h4 className="text-[15px] font-extrabold text-slate-950">
                                                    {item.title}
                                                </h4>

                                                <p className="mt-1.5 text-[13px] leading-5 text-slate-600">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Recognition strip */}
                        <motion.div
                            whileHover={{ y: -3 }}
                            className="mt-6 flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50/60 p-4"
                        >
                            <Sparkles
                                size={19}
                                className="mt-0.5 shrink-0 text-blue-600"
                            />

                            <div>
                                <p className="text-[14px] font-extrabold text-slate-950">
                                    Experience recognised through
                                    achievements
                                </p>

                                <p className="mt-1 text-[13px] leading-5 text-slate-600">
                                    The teacher has received recognition and
                                    awards in several areas. Specific
                                    achievements can be highlighted here once
                                    their official details are added.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TeacherProfile;
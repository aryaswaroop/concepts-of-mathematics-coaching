import { motion } from "framer-motion";
import {
    CalendarDays,
    GraduationCap,
    LineChart,
    Trophy,
} from "lucide-react";
import MathPattern from "../common/MathPattern";

const journey = [
    {
        icon: GraduationCap,
        title: "Learn the syllabus",
        description:
            "Build understanding across Class 11 or Class 12 Mathematics topics.",
    },
    {
        icon: CalendarDays,
        title: "Practice regularly",
        description:
            "Regular classroom practice and weekly tests reinforce learning.",
    },
    {
        icon: LineChart,
        title: "Track performance",
        description:
            "Test performance helps identify strengths and areas that need improvement.",
    },
    {
        icon: Trophy,
        title: "Prepare with purpose",
        description:
            "Focused preparation supports board-oriented practice and confidence.",
    },
];

const AcademicJourney = () => {
    return (
        <section className="relative overflow-hidden bg-white">
            <MathPattern variant="grid" />

            <div className="relative mx-auto max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <span className="text-[13px] font-bold uppercase tracking-[0.16em] text-blue-600">
                        Academic Journey
                    </span>

                    <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.045em] text-slate-950">
                        From learning to{" "}
                        <span className="text-blue-600">
                            confident preparation.
                        </span>
                    </h2>

                    <p className="mt-5 text-[16px] leading-7 text-slate-600 sm:text-[17px]">
                        The academic journey combines classroom learning,
                        practice, assessment and focused preparation.
                    </p>
                </motion.div>

                <div className="relative mt-14">
                    {/* Connecting path */}
                    <div className="absolute left-[12%] right-[12%] top-14 hidden h-px bg-blue-100 lg:block" />

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {journey.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
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
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className="group relative text-center"
                                >
                                    <motion.div
                                        whileHover={{
                                            scale: 1.08,
                                            y: -3,
                                        }}
                                        className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-blue-100 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)]"
                                    >
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-100">
                                            <Icon size={25} />
                                        </div>
                                    </motion.div>

                                    <span className="mt-6 block text-[12px] font-extrabold uppercase tracking-[0.14em] text-blue-500">
                                        0{index + 1}
                                    </span>

                                    <h3 className="mt-2 text-[20px] font-extrabold tracking-[-0.025em] text-slate-950">
                                        {item.title}
                                    </h3>

                                    <p className="mx-auto mt-3 max-w-xs text-[14px] leading-6 text-slate-600">
                                        {item.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AcademicJourney;
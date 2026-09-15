import { motion } from "framer-motion";
import {
    BookOpen,
    Calculator,
    FileText,
    Library,
} from "lucide-react";
import MathPattern from "../common/MathPattern";

const resources = [
    {
        icon: BookOpen,
        title: "NCERT",
        description:
            "A core resource for building textbook-aligned understanding and strengthening fundamentals.",
        label: "Core Resource",
    },
    {
        icon: Library,
        title: "R.D. Sharma",
        description:
            "Additional practice for developing problem-solving ability across important mathematical concepts.",
        label: "Practice",
    },
    {
        icon: FileText,
        title: "Test Material",
        description:
            "Regular assessment material helps students practise concepts and identify areas that need attention.",
        label: "Assessment",
    },
    {
        icon: Calculator,
        title: "Additional Resources",
        description:
            "Other books and study material can be used according to academic requirements and student needs.",
        label: "Support",
    },
];

const StudyResources = () => {
    return (
        <section className="relative overflow-hidden bg-white">
            <MathPattern variant="grid" />

            <div className="relative mx-auto max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl"
                >
                    <span className="text-[13px] font-bold uppercase tracking-[0.16em] text-blue-600">
                        Books & Study Resources
                    </span>

                    <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.045em] text-slate-950">
                        The right resources for{" "}
                        <span className="text-blue-600">
                            the right practice.
                        </span>
                    </h2>

                    <p className="mt-5 text-[16px] leading-7 text-slate-600 sm:text-[17px]">
                        Students work with established textbooks and supporting
                        material to strengthen concepts, practise questions
                        and prepare for assessments.
                    </p>
                </motion.div>

                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {resources.map((resource, index) => {
                        const Icon = resource.icon;

                        return (
                            <motion.div
                                key={resource.title}
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
                                    amount: 0.15,
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                                whileHover={{
                                    y: -7,
                                }}
                                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(37,99,235,0.10)]"
                            >
                                <span className="absolute -right-3 -top-5 text-7xl font-extrabold text-blue-600/[0.04]">
                                    {index + 1}
                                </span>

                                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-100">
                                    <Icon size={20} />
                                </div>

                                <span className="relative mt-5 inline-block text-[11px] font-bold uppercase tracking-[0.13em] text-blue-500">
                                    {resource.label}
                                </span>

                                <h3 className="relative mt-2 text-[20px] font-extrabold text-slate-950">
                                    {resource.title}
                                </h3>

                                <p className="relative mt-3 text-[14px] leading-6 text-slate-600">
                                    {resource.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default StudyResources;
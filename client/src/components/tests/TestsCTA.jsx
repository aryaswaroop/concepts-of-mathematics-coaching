import { motion } from "framer-motion";
import {
    ArrowRight,
    ClipboardCheck,
    Pi,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import MathPattern from "../common/MathPattern";

const TestsCTA = () => {
    const sectionRef = useRef(null);
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    const handleMouseMove = (event) => {
        if (!sectionRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();

        setPosition({
            x: (event.clientX - rect.left - rect.width / 2) * 0.025,
            y: (event.clientY - rect.top - rect.height / 2) * 0.025,
        });
    };

    return (
        <section
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            className="relative overflow-hidden bg-white py-16 sm:py-20"
        >
            <MathPattern variant="grid" />

            <motion.div
                animate={{
                    x: position.x,
                    y: position.y,
                }}
                transition={{
                    type: "spring",
                    stiffness: 70,
                    damping: 20,
                }}
                className="relative z-10 mx-auto max-w-[1000px] px-4 sm:px-6"
            >
                <div className="relative overflow-hidden rounded-[2.5rem] border border-blue-100 bg-blue-50/70 px-6 py-12 text-center shadow-[0_20px_60px_rgba(37,99,235,0.08)] backdrop-blur sm:px-10 sm:py-16">
                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/60" />

                    <div className="relative z-10">
                        <motion.div
                            animate={{
                                y: [0, -7, 0],
                                rotate: [0, 4, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-blue-300 shadow-lg"
                        >
                            <ClipboardCheck size={24} />
                        </motion.div>

                        <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                            Keep Learning
                        </p>

                        <h2 className="mx-auto mt-2 max-w-2xl text-3xl font-extrabold tracking-[-0.05em] text-slate-950 sm:text-4xl">
                            Every test is another opportunity to improve.
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                            Want to understand how our tests, results and
                            performance support work? Get in touch with
                            Concepts of Mathematics.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            <Link
                                to="/contact"
                                className="group inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600"
                            >
                                Ask About Assessment
                                <ArrowRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>

                            <Link
                                to="/courses"
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600"
                            >
                                Explore Courses
                            </Link>
                        </div>

                        <div className="mt-9 flex items-center justify-center gap-3 text-xs font-semibold text-slate-400">
                            <span>Test</span>
                            <span>→</span>
                            <span>Result</span>
                            <span>→</span>
                            <span>Feedback</span>
                            <span>→</span>
                            <span>Improvement</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default TestsCTA;
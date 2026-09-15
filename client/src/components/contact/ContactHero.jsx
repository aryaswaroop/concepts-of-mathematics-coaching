import { motion } from "framer-motion";
import {
    ArrowDown,
    MessageCircle,
    PhoneCall,
} from "lucide-react";
import { Link } from "react-router-dom";
import MathPattern from "../common/MathPattern";

const ContactHero = () => {
    return (
        <section className="relative overflow-hidden bg-white">
            <MathPattern variant="grid" />

            <div className="relative z-10 mx-auto grid min-h-[620px] max-w-[1280px] items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-7 lg:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-2xl"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-700">
                        <MessageCircle size={15} />
                        Contact Us
                    </div>

                    <h1 className="font-['Manrope'] text-4xl font-extrabold leading-[1.05] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-6xl">
                        Let’s talk about
                        <br />
                        your
                        <br />
                        <span className="text-blue-600">
                            mathematics journey.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                        Have a question about courses, batches, admission,
                        fees or the learning process? Get in touch with
                        Concepts of Mathematics.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            to="#enquiry"
                            className="group inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600"
                        >
                            Send an Enquiry

                            <ArrowDown
                                size={17}
                                className="transition-transform duration-300 group-hover:translate-y-1"
                            />
                        </Link>

                        <Link
                            to="#location"
                            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600"
                        >
                            View Location
                        </Link>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <span className="rounded-full border border-slate-200 bg-white/80 px-3.5 py-2 text-xs font-semibold text-slate-600 backdrop-blur">
                            Class 11 & 12
                        </span>

                        <span className="rounded-full border border-slate-200 bg-white/80 px-3.5 py-2 text-xs font-semibold text-slate-600 backdrop-blur">
                            Admission Enquiries
                        </span>

                        <span className="rounded-full border border-slate-200 bg-white/80 px-3.5 py-2 text-xs font-semibold text-slate-600 backdrop-blur">
                            Batch Information
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="relative"
                >
                    <div className="relative mx-auto max-w-[520px]">
                        <div className="absolute -inset-8 rounded-[3rem] bg-blue-500/5 blur-3xl" />

                        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/85 p-5 shadow-[0_25px_80px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:p-7">
                            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
                                        Start a Conversation
                                    </p>

                                    <h2 className="mt-1 text-lg font-extrabold text-slate-950">
                                        How can we help?
                                    </h2>
                                </div>

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                    <PhoneCall size={21} />
                                </div>
                            </div>

                            <div className="space-y-3 py-6">
                                {[
                                    [
                                        "01",
                                        "Course Information",
                                        "Class 11 or Class 12",
                                    ],
                                    [
                                        "02",
                                        "Batch Information",
                                        "Morning or evening options",
                                    ],
                                    [
                                        "03",
                                        "Admission & Fees",
                                        "Enrollment and payment questions",
                                    ],
                                    [
                                        "04",
                                        "General Enquiry",
                                        "Ask about the coaching system",
                                    ],
                                ].map(([number, title, description]) => (
                                    <motion.div
                                        key={number}
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-4"
                                    >
                                        <span className="text-xs font-extrabold text-blue-600">
                                            {number}
                                        </span>

                                        <div className="flex-1">
                                            <p className="text-sm font-bold text-slate-900">
                                                {title}
                                            </p>

                                            <p className="mt-0.5 text-xs text-slate-500">
                                                {description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="rounded-2xl bg-slate-950 p-5 text-white">
                                <p className="text-xs font-semibold text-slate-400">
                                    Conversation equation
                                </p>

                                <p className="mt-2 text-xl font-extrabold tracking-tight">
                                    Question
                                    <span className="mx-2 text-blue-400">
                                        +
                                    </span>
                                    Guidance
                                </p>

                                <p className="mt-1 text-sm font-semibold text-blue-300">
                                    → Clear Next Step
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactHero;
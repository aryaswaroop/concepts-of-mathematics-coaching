import { motion } from "framer-motion";
import {
    AlertCircle,
    ArrowRight,
    CheckCircle2,
    PlusCircle,
    UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import MathPattern from "../common/MathPattern";

const BatchCapacity = () => {
    return (
        <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
            <MathPattern variant="grid" />

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-7">

                <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">

                    {/* Capacity visual */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -25,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                    >
                        <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-8">

                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                                        Capacity
                                    </p>

                                    <h3 className="mt-2 text-2xl font-extrabold text-slate-950">
                                        Batch Availability
                                    </h3>
                                </div>

                                <UsersRound className="h-7 w-7 text-blue-600" />
                            </div>

                            <div className="mt-8">
                                <div className="flex items-end justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-slate-500">
                                            Capacity is teacher-managed
                                        </p>

                                        <p className="mt-2 text-3xl font-extrabold text-slate-950">
                                            Flexible
                                        </p>
                                    </div>

                                    <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                                        Managed
                                    </span>
                                </div>

                                <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
                                    <motion.div
                                        initial={{
                                            width: 0,
                                        }}
                                        whileInView={{
                                            width: "72%",
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        transition={{
                                            duration: 1,
                                            delay: 0.2,
                                        }}
                                        className="h-full rounded-full bg-blue-600"
                                    />
                                </div>

                                <p className="mt-3 text-xs leading-5 text-slate-500">
                                    The visual represents capacity management,
                                    not a live seat count. Live availability
                                    will be connected to the backend later.
                                </p>
                            </div>

                            <div className="mt-7 grid gap-3">
                                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                                    <CheckCircle2 className="h-5 w-5 text-blue-600" />

                                    <p className="text-sm font-semibold text-slate-700">
                                        Existing batch capacity is respected
                                    </p>
                                </div>

                                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                                    <PlusCircle className="h-5 w-5 text-blue-600" />

                                    <p className="text-sm font-semibold text-slate-700">
                                        Additional batches can be introduced
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Explanation */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                            Capacity Management
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                            When a batch fills up,
                            <span className="text-blue-600">
                                {" "}the system can adapt.
                            </span>
                        </h2>

                        <p className="mt-5 text-base leading-7 text-slate-600">
                            Batch capacity is not treated as a fixed marketing
                            number. It is part of the actual coaching
                            management process and can be adjusted by the
                            teacher according to the number of students and
                            available teaching capacity.
                        </p>

                        <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
                            <div className="flex gap-3">
                                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />

                                <div>
                                    <p className="text-sm font-bold text-slate-900">
                                        Schedule flexibility
                                    </p>

                                    <p className="mt-1 text-sm leading-6 text-slate-600">
                                        Timings may be adjusted by the teacher,
                                        and new batches may be added when
                                        existing capacity is reached.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Link
                            to="/contact"
                            className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-600"
                        >
                            Ask about current availability
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BatchCapacity;
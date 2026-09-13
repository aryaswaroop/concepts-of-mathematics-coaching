import React from "react";
import MathBackground from "../common/MathBackground";

const BatchPreview = () => {
    return (
        <MathBackground variant="dark">

            <section className="px-5 py-20 sm:py-24 lg:px-8">

                <div className="mx-auto max-w-7xl">

                    <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">

                        {/* Heading */}
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF62]">
                                Batch Structure
                            </p>

                            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                                A schedule designed around students.
                            </h2>

                            <p className="mt-6 max-w-md text-sm leading-7 text-slate-300 sm:text-base">
                                The coaching currently operates morning and
                                evening batches. Batch schedules can be
                                adjusted according to student strength and
                                practical requirements.
                            </p>
                        </div>

                        {/* Schedule Board */}
                        <div className="border border-white/15 bg-white/[0.04]">

                            {/* Morning */}
                            <div className="grid gap-4 border-b border-white/10 p-6 sm:grid-cols-[0.7fr_1fr] sm:p-8">
                                <div>
                                    <span className="font-mono text-xs text-[#D4AF62]">
                                        01
                                    </span>

                                    <h3 className="mt-2 font-serif text-2xl font-bold">
                                        Morning
                                    </h3>
                                </div>

                                <div>
                                    <p className="text-sm text-slate-300">
                                        3 regular batches
                                    </p>

                                    <p className="mt-2 text-xs leading-6 text-slate-400">
                                        Suitable for students who prefer
                                        early-day learning sessions.
                                    </p>
                                </div>
                            </div>

                            {/* Evening */}
                            <div className="grid gap-4 border-b border-white/10 p-6 sm:grid-cols-[0.7fr_1fr] sm:p-8">
                                <div>
                                    <span className="font-mono text-xs text-[#D4AF62]">
                                        02
                                    </span>

                                    <h3 className="mt-2 font-serif text-2xl font-bold">
                                        Evening
                                    </h3>
                                </div>

                                <div>
                                    <p className="text-sm text-slate-300">
                                        2 regular batches
                                    </p>

                                    <p className="mt-2 text-xs leading-6 text-slate-400">
                                        Designed around school schedules and
                                        after-school availability.
                                    </p>
                                </div>
                            </div>

                            {/* Capacity */}
                            <div className="grid gap-4 p-6 sm:grid-cols-[0.7fr_1fr] sm:p-8">
                                <div>
                                    <span className="font-mono text-xs text-[#D4AF62]">
                                        03
                                    </span>

                                    <h3 className="mt-2 font-serif text-2xl font-bold">
                                        Capacity
                                    </h3>
                                </div>

                                <div>
                                    <p className="text-sm text-slate-300">
                                        Approximately 30–70 students
                                    </p>

                                    <p className="mt-2 text-xs leading-6 text-slate-400">
                                        Additional batches may be introduced
                                        when student demand increases.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </MathBackground>
    );
};

export default BatchPreview;
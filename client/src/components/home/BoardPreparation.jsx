import React from "react";
import MathBackground from "../common/MathBackground";

const BoardPreparation = () => {
    return (
        <MathBackground>

            <section className="px-5 py-20 sm:py-24 lg:px-8">

                <div className="mx-auto max-w-7xl">

                    <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">

                        {/* Left */}
                        <div className="bg-[#14213D] p-8 text-white sm:p-10 lg:p-12">

                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF62]">
                                Before the Boards
                            </p>

                            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                                Prepare for the questions that matter.
                            </h2>

                            <p className="mt-6 text-sm leading-7 text-slate-300 sm:text-base">
                                As board examinations approach, preparation
                                becomes more targeted through pre-board
                                examinations and focused practice around
                                commonly asked and high-priority question
                                patterns.
                            </p>

                        </div>

                        {/* Right */}
                        <div className="border border-[#DCD4C5] bg-white p-8 sm:p-10 lg:p-12">

                            <div className="space-y-8">

                                <div className="flex gap-5">
                                    <span className="font-mono text-sm text-[#B58B3C]">
                                        01
                                    </span>

                                    <div>
                                        <h3 className="font-serif text-xl font-bold text-[#14213D]">
                                            Pattern-focused practice
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            Focus on important and commonly
                                            tested question styles.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <span className="font-mono text-sm text-[#B58B3C]">
                                        02
                                    </span>

                                    <div>
                                        <h3 className="font-serif text-xl font-bold text-[#14213D]">
                                            Pre-board examination
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            Practice in an examination-like
                                            environment before the actual
                                            board examination.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <span className="font-mono text-sm text-[#B58B3C]">
                                        03
                                    </span>

                                    <div>
                                        <h3 className="font-serif text-xl font-bold text-[#14213D]">
                                            Faster exam readiness
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            Targeted preparation helps
                                            students spend more time on
                                            high-value practice.
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </MathBackground>
    );
};

export default BoardPreparation;
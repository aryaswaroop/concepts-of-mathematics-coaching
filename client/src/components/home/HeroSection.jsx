import React from "react";
import Button from "../common/Button";
import MathBackground from "../common/MathBackground";

const HeroSection = () => {
    return (
        <MathBackground className="border-b border-[#DDD5C5]">

            <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">

                {/* Hero Content */}
                <div>

                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-px w-10 bg-[#B58B3C]" />

                        <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B58B3C]">
                            Mathematics Coaching
                        </span>
                    </div>

                    <h1 className="max-w-4xl font-serif text-5xl font-bold leading-[0.98] tracking-tight text-[#14213D] sm:text-6xl lg:text-7xl">
                        Mathematics is not
                        <span className="block text-[#B58B3C]">
                            about memorising.
                        </span>
                        It is about understanding.
                    </h1>

                    <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                        Focused Mathematics coaching for Class 11 and Class 12
                        students, built around strong concepts, regular
                        practice, continuous testing and individual guidance.
                    </p>

                    {/* CTA */}
                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <Button href="/admission-fees">
                            Explore Admission
                        </Button>

                        <Button
                            href="/courses"
                            variant="secondary"
                        >
                            View Courses
                        </Button>
                    </div>

                    {/* Small trust line */}
                    <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-500">
                        <span>Class 11 & 12</span>
                        <span>Weekly Tests</span>
                        <span>Board Preparation</span>
                    </div>
                </div>

                {/* Academic Visual */}
                <div className="relative">

                    {/* Main mathematical card */}
                    <div className="relative border border-[#D6CBB7] bg-white p-5 shadow-[0_25px_70px_rgba(20,33,61,0.12)] sm:p-7">

                        <div className="border border-slate-200 bg-[#FCFBF8] p-7 sm:p-9">

                            <div className="flex items-center justify-between">
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B58B3C]">
                                    Concepts
                                </span>

                                <span className="font-mono text-xs text-slate-400">
                                    01
                                </span>
                            </div>

                            <div className="mt-12 font-serif text-4xl text-[#14213D] sm:text-5xl">
                                f(x) = ax² + bx + c
                            </div>

                            <div className="my-8 h-px bg-slate-200" />

                            <div className="space-y-5 font-mono text-sm text-slate-500">
                                <div className="flex justify-between">
                                    <span>Concept</span>
                                    <span>✓</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Practice</span>
                                    <span>✓</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Assessment</span>
                                    <span>✓</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Improvement</span>
                                    <span>→</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Floating information card */}
                    <div className="absolute -bottom-7 -left-5 w-56 border border-[#D6CBB7] bg-[#14213D] p-5 text-white shadow-xl sm:-left-8">
                        <p className="text-xs uppercase tracking-[0.18em] text-[#D4AF62]">
                            Every Week
                        </p>

                        <p className="mt-2 font-serif text-2xl font-bold">
                            Test & Analyse
                        </p>

                        <p className="mt-2 text-xs leading-5 text-slate-300">
                            Regular assessment keeps preparation on track.
                        </p>
                    </div>

                    {/* Floating formula */}
                    <div className="absolute -right-3 -top-7 hidden border border-[#D6CBB7] bg-white px-5 py-4 font-mono text-sm text-[#14213D] shadow-lg sm:block">
                        ∑ Practice = Progress
                    </div>

                </div>

            </div>

        </MathBackground>
    );
};

export default HeroSection;
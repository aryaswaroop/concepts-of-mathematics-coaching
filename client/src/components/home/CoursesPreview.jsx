import React from "react";
import SectionTitle from "../common/SectionTitle";

const CoursesPreview = () => {
    return (
        <section className="bg-white px-5 py-20 sm:py-24 lg:px-8">

            <div className="mx-auto max-w-7xl">

                <SectionTitle
                    eyebrow="The Courses"
                    title="Two classes. One focused subject."
                    description="Dedicated Mathematics coaching for students in Class 11 and Class 12."
                />

                <div className="mt-16 grid gap-6 lg:grid-cols-2">

                    {/* Class 11 */}
                    <article className="group relative overflow-hidden bg-[#14213D] p-8 text-white sm:p-10 lg:p-12">

                        <div className="absolute -right-10 -top-16 font-serif text-[180px] font-bold leading-none text-white/[0.035]">
                            11
                        </div>

                        <div className="relative">

                            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4AF62]">
                                Class 11
                            </span>

                            <h3 className="mt-5 font-serif text-4xl font-bold">
                                Build the foundation.
                            </h3>

                            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
                                Develop strong fundamentals and learn how
                                mathematical concepts connect with each
                                other.
                            </p>

                            <div className="mt-9 grid grid-cols-2 gap-4 border-t border-white/10 pt-7 text-sm">
                                <div>
                                    <p className="text-[#D4AF62]">
                                        Core Focus
                                    </p>
                                    <p className="mt-1 text-slate-300">
                                        Fundamentals
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[#D4AF62]">
                                        Resources
                                    </p>
                                    <p className="mt-1 text-slate-300">
                                        NCERT + RD Sharma
                                    </p>
                                </div>
                            </div>

                        </div>
                    </article>

                    {/* Class 12 */}
                    <article className="group relative overflow-hidden border border-[#DCD4C5] bg-[#F8F5ED] p-8 sm:p-10 lg:p-12">

                        <div className="absolute -right-10 -top-16 font-serif text-[180px] font-bold leading-none text-[#14213D]/[0.035]">
                            12
                        </div>

                        <div className="relative">

                            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#B58B3C]">
                                Class 12
                            </span>

                            <h3 className="mt-5 font-serif text-4xl font-bold text-[#14213D]">
                                Prepare with purpose.
                            </h3>

                            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
                                Strengthen board preparation through
                                cumulative testing, targeted practice and
                                pre-board examination strategy.
                            </p>

                            <div className="mt-9 grid grid-cols-2 gap-4 border-t border-[#DCD4C5] pt-7 text-sm">
                                <div>
                                    <p className="text-[#B58B3C]">
                                        Core Focus
                                    </p>
                                    <p className="mt-1 text-slate-600">
                                        Board Preparation
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[#B58B3C]">
                                        Resources
                                    </p>
                                    <p className="mt-1 text-slate-600">
                                        NCERT + RD Sharma
                                    </p>
                                </div>
                            </div>

                        </div>
                    </article>

                </div>

            </div>

        </section>
    );
};

export default CoursesPreview;
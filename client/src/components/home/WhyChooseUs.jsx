import React from "react";
import SectionTitle from "../common/SectionTitle";
import MathBackground from "../common/MathBackground";

const WhyChooseUs = () => {
    const methods = [
        {
            number: "01",
            title: "Understand",
            text: "Every topic begins with concepts, logic and the reasoning behind the formula.",
        },
        {
            number: "02",
            title: "Practice",
            text: "Students work through NCERT, RD Sharma and selected reference problems.",
        },
        {
            number: "03",
            title: "Test",
            text: "Weekly and cumulative assessments reveal what students actually understand.",
        },
        {
            number: "04",
            title: "Improve",
            text: "Performance is reviewed and additional guidance is provided where required.",
        },
    ];

    return (
        <MathBackground>

            <section className="px-5 py-20 sm:py-24 lg:px-8">

                <div className="mx-auto max-w-7xl">

                    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

                        <div>
                            <SectionTitle
                                eyebrow="Our Approach"
                                title="A simple system built around understanding."
                                description="The goal is not to make students memorise more. The goal is to help them think better."
                                align="left"
                            />
                        </div>

                        <div className="border-l-2 border-[#B58B3C] pl-6 lg:pl-8">
                            <p className="font-serif text-2xl leading-relaxed text-[#14213D] sm:text-3xl">
                                “Strong concepts create confident
                                problem-solvers.”
                            </p>
                        </div>

                    </div>

                    {/* Methodology */}
                    <div className="mt-16 grid border border-[#DCD4C5] bg-white md:grid-cols-2 lg:grid-cols-4">

                        {methods.map((method, index) => (
                            <article
                                key={method.number}
                                className={`p-7 sm:p-8 ${
                                    index !== 0
                                        ? "border-t border-[#DCD4C5] md:border-l md:border-t-0"
                                        : ""
                                }`}
                            >
                                <span className="font-mono text-xs font-bold text-[#B58B3C]">
                                    {method.number}
                                </span>

                                <h3 className="mt-7 font-serif text-2xl font-bold text-[#14213D]">
                                    {method.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-slate-600">
                                    {method.text}
                                </p>
                            </article>
                        ))}

                    </div>

                </div>

            </section>

        </MathBackground>
    );
};

export default WhyChooseUs;
import React from "react";
import SectionTitle from "../common/SectionTitle";

const TestSystemPreview = () => {
    const steps = [
        {
            number: "01",
            title: "Learn",
            description:
                "Understand concepts through classroom teaching and guided examples.",
        },
        {
            number: "02",
            title: "Practice",
            description:
                "Solve questions from NCERT, RD Sharma and selected reference material.",
        },
        {
            number: "03",
            title: "Test",
            description:
                "Attempt weekly or cumulative tests covering the topics selected by the teacher.",
        },
        {
            number: "04",
            title: "Improve",
            description:
                "Identify weak areas and receive additional guidance where necessary.",
        },
    ];

    return (
        <section className="bg-white px-5 py-20 sm:py-24 lg:px-8">

            <div className="mx-auto max-w-7xl">

                <SectionTitle
                    eyebrow="Testing System"
                    title="Progress is measured, not assumed."
                    description="Regular assessments create a feedback loop between learning and performance."
                />

                <div className="relative mt-20">

                    {/* Desktop connecting line */}
                    <div className="absolute left-0 right-0 top-7 hidden h-px bg-[#DCD4C5] lg:block" />

                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

                        {steps.map((step) => (
                            <article
                                key={step.number}
                                className="relative"
                            >

                                <div className="relative z-10 flex h-14 w-14 items-center justify-center border border-[#CFC5B2] bg-[#F8F5ED] font-mono text-sm font-bold text-[#B58B3C]">
                                    {step.number}
                                </div>

                                <h3 className="mt-6 font-serif text-2xl font-bold text-[#14213D]">
                                    {step.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    {step.description}
                                </p>

                            </article>
                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default TestSystemPreview;
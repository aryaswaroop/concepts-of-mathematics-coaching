import React from "react";

const StatsSection = () => {
    const stats = [
        {
            number: "11–12",
            label: "Classes",
        },
        {
            number: "05+",
            label: "Regular Batches",
        },
        {
            number: "01",
            label: "Focused Teacher",
        },
        {
            number: "Weekly",
            label: "Testing System",
        },
    ];

    return (
        <section className="border-b border-slate-200 bg-white">
            <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">

                {stats.map((stat, index) => (
                    <div
                        key={stat.label}
                        className={`px-5 py-8 sm:px-8 sm:py-10 ${
                            index !== 0
                                ? "border-l border-slate-200"
                                : ""
                        }`}
                    >
                        <p className="font-serif text-3xl font-bold text-[#14213D] sm:text-4xl">
                            {stat.number}
                        </p>

                        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                            {stat.label}
                        </p>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default StatsSection;
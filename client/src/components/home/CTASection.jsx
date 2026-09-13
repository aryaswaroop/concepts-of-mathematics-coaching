import React from "react";
import Button from "../common/Button";
import MathBackground from "../common/MathBackground";

const CTASection = () => {
    return (
        <MathBackground variant="dark">

            <section className="px-5 py-20 sm:py-24 lg:px-8">

                <div className="mx-auto max-w-5xl text-center">

                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF62]">
                        Admissions
                    </p>

                    <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                        Your next chapter in Mathematics starts here.
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                        Explore the courses, batch structure and fee
                        information for Class 11 and Class 12 Mathematics.
                    </p>

                    <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                        <Button
                            href="/admission-fees"
                            variant="light"
                        >
                            Admission & Fees
                        </Button>

                        <Button
                            href="/contact"
                            variant="secondary"
                            className="border-white/30 text-white hover:bg-white hover:text-[#14213D]"
                        >
                            Contact Us
                        </Button>
                    </div>

                </div>

            </section>

        </MathBackground>
    );
};

export default CTASection;
import { motion } from "framer-motion";
import {
    ArrowRight,
    BookOpen,
    CreditCard,
    UserRound,
} from "lucide-react";
import MathPattern from "../common/MathPattern";

const EnrollmentFlow = () => {
    const flow = [
        {
            icon: UserRound,
            title: "Student",
            text: "Student admission details are recorded for enrollment.",
        },
        {
            icon: BookOpen,
            title: "Course",
            text: "Choose Class 11 or Class 12 Mathematics.",
        },
        {
            icon: BookOpen,
            title: "Batch",
            text: "Admission is associated with the selected available batch.",
        },
        {
            icon: CreditCard,
            title: "Payment",
            text: "Installment payments and remaining balance can be tracked.",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-white py-16 sm:py-20">
            <MathPattern variant="grid" />

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-7">
                <div className="rounded-[2rem] border border-slate-200/80 bg-slate-50/80 p-6 sm:p-8 lg:p-10">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                            Enrollment Flow
                        </p>

                        <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.045em] text-slate-950 sm:text-4xl">
                            Admission is connected, not isolated.
                        </h2>

                        <p className="mt-4 text-base leading-7 text-slate-600">
                            Once admission is confirmed, the student's course,
                            batch and payment information can be managed
                            together through the enrollment system.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                        {flow.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="relative"
                                >
                                    <motion.div
                                        whileHover={{
                                            y: -4,
                                        }}
                                        className="h-full rounded-2xl border border-slate-200 bg-white p-5"
                                    >
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                            <Icon size={19} />
                                        </div>

                                        <h3 className="mt-5 font-extrabold text-slate-950">
                                            {item.title}
                                        </h3>

                                        <p className="mt-1 text-sm leading-6 text-slate-500">
                                            {item.text}
                                        </p>
                                    </motion.div>

                                    {index < flow.length - 1 && (
                                        <ArrowRight
                                            size={17}
                                            className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-blue-300 lg:block"
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnrollmentFlow;
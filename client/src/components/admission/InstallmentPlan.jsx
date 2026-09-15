import { motion } from "framer-motion";
import {
    Calculator,
    CircleDollarSign,
    Receipt,
} from "lucide-react";
import MathPattern from "../common/MathPattern";

const InstallmentPlan = () => {
    return (
        <section className="relative overflow-hidden bg-white py-16 sm:py-20">
            <MathPattern variant="grid" />

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-7">
                <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                            Installment Payments
                        </p>

                        <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.045em] text-slate-950 sm:text-4xl">
                            Pay according to the agreed arrangement.
                        </h2>

                        <p className="mt-4 text-base leading-7 text-slate-600">
                            The system supports payment records against an
                            enrollment, making it possible to track payments
                            made in multiple installments.
                        </p>

                        <div className="mt-7 space-y-3">
                            {[
                                "Payment recorded against enrollment",
                                "Multiple payment entries can be tracked",
                                "Remaining balance can be determined from records",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                                >
                                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                        <Receipt size={15} />
                                    </span>

                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                        {[
                            {
                                icon: CircleDollarSign,
                                title: "Total Fee",
                                text: "Course-level fee",
                            },
                            {
                                icon: Receipt,
                                title: "Paid",
                                text: "Recorded payments",
                            },
                            {
                                icon: Calculator,
                                title: "Balance",
                                text: "Remaining amount",
                            },
                        ].map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{
                                        opacity: 0,
                                        y: 15,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        delay: index * 0.08,
                                    }}
                                    whileHover={{
                                        y: -5,
                                    }}
                                    className="rounded-2xl border border-slate-200/80 bg-white/85 p-5 shadow-[0_15px_40px_rgba(15,23,42,0.05)] backdrop-blur"
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

                                    <div className="mt-5 h-10 rounded-xl bg-slate-50" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstallmentPlan;
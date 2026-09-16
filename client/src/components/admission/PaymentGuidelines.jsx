import { motion } from "framer-motion";
import {
    CheckCircle2,
    FileText,
    Info,
    ShieldCheck,
} from "lucide-react";
import MathPattern from "../common/MathPattern";

const PaymentGuidelines = () => {
    const guidelines = [
        {
            icon: FileText,
            title: "Keep Payment Records Clear",
            text: "Each payment is recorded against the student's enrollment so the payment history remains organized.",
        },
        {
            icon: CheckCircle2,
            title: "Approved Discounts",
            text: "Any discount approved by the coaching institute is reflected in the applicable enrollment fee arrangement.",
        },
        {
            icon: ShieldCheck,
            title: "Enrollment-Based Tracking",
            text: "Payment information remains connected with the student's admission and enrollment record.",
        },
        {
            icon: Info,
            title: "Confirm Before Payment",
            text: "Students should confirm the current payable amount and agreed installment arrangement before making a payment.",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-white py-16 sm:py-20">
            <MathPattern variant="grid" />

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-7">
                <div className="max-w-2xl">
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                        Payment Guidelines
                    </p>

                    <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.045em] text-slate-950 sm:text-4xl">
                        Keep the financial side simple and transparent.
                    </h2>

                    <p className="mt-4 text-base leading-7 text-slate-600">
                        The website explains the payment structure, while
                        actual payment information is maintained through the
                        student's enrollment and payment records.
                    </p>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                    {guidelines.map((item, index) => {
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
                                    delay: index * 0.07,
                                }}
                                whileHover={{
                                    y: -4,
                                }}
                                className="flex gap-4 rounded-2xl border border-slate-200/80 bg-white/85 p-6 shadow-[0_12px_35px_rgba(15,23,42,0.04)] backdrop-blur"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                    <Icon size={19} />
                                </div>

                                <div>
                                    <h3 className="font-extrabold text-slate-950">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        {item.text}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PaymentGuidelines;
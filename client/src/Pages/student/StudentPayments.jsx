import {
    ArrowRight,
    CheckCircle2,
    CreditCard,
    FileText,
    IndianRupee,
    ReceiptText,
    WalletCards,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const paymentAreas = [
    {
        icon: FileText,
        title: "Admission Details",
        description:
            "Your course and admission information will be linked to your student account.",
    },
    {
        icon: CreditCard,
        title: "Payment History",
        description:
            "Recorded payments and their details will be available in your account.",
    },
    {
        icon: ReceiptText,
        title: "Payment Records",
        description:
            "Your payment records can be reviewed whenever transaction data is available.",
    },
];

const StudentPayments = () => {
    return (
        <div className="relative">
            {/* Header */}
            <section className="mx-auto max-w-[1280px] px-4 pb-6 pt-7 sm:px-6 lg:px-7 lg:pt-9">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end"
                >
                    <div>
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-blue-600 shadow-sm backdrop-blur">
                            <WalletCards size={13} />
                            Account finance
                        </div>

                        <h1 className="font-[var(--font-heading)] text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                            Fees & Payments
                        </h1>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-[15px]">
                            View your admission fee information, payment
                            records and account payment status.
                        </p>
                    </div>

                    <Link
                        to="/student/profile"
                        className="group inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
                    >
                        My Profile
                        <ArrowRight
                            size={16}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                    </Link>
                </motion.div>
            </section>

            {/* Financial Overview */}
            <section className="mx-auto max-w-[1280px] px-4 pb-6 sm:px-6 lg:px-7">
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {[
                        {
                            icon: IndianRupee,
                            label: "Course Fee",
                            value: "Data pending",
                        },
                        {
                            icon: CheckCircle2,
                            label: "Paid",
                            value: "Data pending",
                        },
                        {
                            icon: WalletCards,
                            label: "Remaining",
                            value: "Data pending",
                        },
                        {
                            icon: ReceiptText,
                            label: "Payments",
                            value: "Data pending",
                        },
                    ].map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.35,
                                    delay: index * 0.05,
                                }}
                                whileHover={{ y: -3 }}
                                className="rounded-2xl border border-slate-200/80 bg-white/85 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.05)] backdrop-blur-sm"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">
                                    <Icon size={19} />
                                </div>

                                <p className="mt-5 text-xs font-bold uppercase tracking-[0.1em] text-slate-400">
                                    {item.label}
                                </p>

                                <h3 className="mt-1 text-base font-extrabold text-slate-900">
                                    {item.value}
                                </h3>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Account Summary */}
            <section className="mx-auto max-w-[1280px] px-4 pb-6 sm:px-6 lg:px-7">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="relative overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-[0_20px_55px_rgba(15,23,42,0.14)] sm:p-8"
                >
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-[0.07]"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.7) 1px, transparent 1px)",
                            backgroundSize: "32px 32px",
                        }}
                    />

                    <div
                        aria-hidden="true"
                        className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"
                    />

                    <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-300">
                                Payment overview
                            </p>

                            <h2 className="mt-2 font-[var(--font-heading)] text-2xl font-extrabold tracking-[-0.035em] sm:text-3xl">
                                Your fee account
                            </h2>

                            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                                Your course fee, paid amount, remaining amount
                                and payment history will be connected to your
                                enrollment and payment records.
                            </p>
                        </div>

                        <div className="shrink-0 rounded-2xl border border-white/10 bg-white/[0.06] px-6 py-5 backdrop-blur-sm">
                            <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                                Account status
                            </p>

                            <p className="mt-2 text-lg font-extrabold text-white">
                                Awaiting payment data
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Information Areas */}
            <section className="mx-auto max-w-[1280px] px-4 pb-6 sm:px-6 lg:px-7">
                <div className="grid gap-3 md:grid-cols-3">
                    {paymentAreas.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.35,
                                    delay: 0.15 + index * 0.05,
                                }}
                                className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.04)]"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                    <Icon size={19} />
                                </div>

                                <h3 className="mt-5 text-base font-extrabold text-slate-900">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Payment History */}
            <section className="mx-auto max-w-[1280px] px-4 pb-6 sm:px-6 lg:px-7">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="rounded-2xl border border-slate-200/80 bg-white/85 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.05)] backdrop-blur-sm sm:p-6"
                >
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
                                Transaction history
                            </p>

                            <h2 className="mt-1 font-[var(--font-heading)] text-xl font-extrabold tracking-[-0.03em] text-slate-950">
                                Payment records
                            </h2>
                        </div>

                        <div className="hidden h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-500 sm:flex">
                            <ReceiptText size={18} />
                        </div>
                    </div>

                    <div className="mt-6 rounded-xl border border-dashed border-slate-200 bg-slate-50/70 p-8 text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
                            <CreditCard size={21} />
                        </div>

                        <h3 className="mt-4 text-base font-extrabold text-slate-900">
                            Payment history will appear here
                        </h3>

                        <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
                            Your recorded installments and payment details
                            will be displayed here once payment data is
                            connected.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Payment Note */}
            <section className="mx-auto max-w-[1280px] px-4 pb-10 sm:px-6 lg:px-7">
                <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5">
                    <div className="flex items-start gap-3">
                        <CheckCircle2
                            size={18}
                            className="mt-0.5 shrink-0 text-blue-600"
                        />

                        <div>
                            <h3 className="text-sm font-extrabold text-slate-900">
                                Payment information
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-slate-600">
                                Payment records shown here will be based on
                                officially recorded coaching-centre
                                transactions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StudentPayments;
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    CreditCard,
    History,
    WalletCards,
} from "lucide-react";
import { Link } from "react-router-dom";

const financeItems = [
    {
        title: "Payment Records",
        description:
            "Review admission payments and installment transactions.",
        icon: CreditCard,
        route: "/admin/payments",
    },
    {
        title: "Payment History",
        description:
            "Track historical payment activity for enrolled students.",
        icon: History,
        route: "/admin/payments",
    },
    {
        title: "Financial Overview",
        description:
            "Monitor collected, pending and remaining fee information.",
        icon: WalletCards,
        route: "/admin/payments",
    },
];

const AdminFinanceOverview = () => {
    return (
        <section>
            <div className="mx-auto max-w-[1280px] px-4 py-5 sm:px-6 lg:px-7">
                <div className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
                    {/* Finance panel */}
                    <div className="rounded-2xl bg-slate-950 p-5 text-white shadow-[0_18px_45px_rgba(15,23,42,0.1)] sm:p-6">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-300">
                                    Finance
                                </p>

                                <h2 className="mt-1 text-xl font-extrabold tracking-[-0.03em]">
                                    Payment management
                                </h2>

                                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                                    Keep admission fees, installments and
                                    payment records organised in one place.
                                </p>
                            </div>

                            <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-blue-300 sm:flex">
                                <CreditCard className="h-5 w-5" />
                            </div>
                        </div>

                        <div className="mt-6 grid gap-3 sm:grid-cols-3">
                            {[
                                "Fee overview",
                                "Payment status",
                                "Transaction history",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
                                >
                                    <p className="text-xs font-semibold text-slate-400">
                                        {item}
                                    </p>

                                    <p className="mt-2 text-sm font-bold text-slate-200">
                                        Data pending
                                    </p>

                                    <p className="mt-1 text-[11px] text-slate-500">
                                        Available after API integration
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Payment shortcut */}
                    <motion.div
                        whileHover={{ y: -2 }}
                        className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.035)]"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <WalletCards className="h-5 w-5" />
                        </div>

                        <h3 className="mt-5 text-base font-bold text-slate-950">
                            Payment workspace
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                            Open the payment management area to review student
                            fee records.
                        </p>

                        <Link
                            to="/admin/payments"
                            className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-600"
                        >
                            Open Payments
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AdminFinanceOverview;
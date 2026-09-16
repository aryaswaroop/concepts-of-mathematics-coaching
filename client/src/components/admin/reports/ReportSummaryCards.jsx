import {
    ClipboardCheck,
    IndianRupee,
    MessageSquareText,
    Users,
} from "lucide-react";

const cards = [
    {
        key: "students",
        label: "Students",
        description: "Student records",
        icon: Users,
    },
    {
        key: "assessments",
        label: "Assessments",
        description: "Tests & results",
        icon: ClipboardCheck,
    },
    {
        key: "payments",
        label: "Payments",
        description: "Fee activity",
        icon: IndianRupee,
    },
    {
        key: "enquiries",
        label: "Enquiries",
        description: "Admission interest",
        icon: MessageSquareText,
    },
];

const ReportSummaryCards = ({ data = {} }) => {
    return (
        <section>
            <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6 lg:px-7">
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {cards.map((card) => {
                        const Icon = card.icon;
                        const value = data[card.key];

                        return (
                            <div
                                key={card.key}
                                className="rounded-2xl border border-slate-200/80 bg-white/85 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.035)]"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                                            {card.label}
                                        </p>

                                        <p className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950">
                                            {value ?? "—"}
                                        </p>

                                        <p className="mt-1 text-xs text-slate-400">
                                            {card.description}
                                        </p>
                                    </div>

                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                        <Icon className="h-4 w-4" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ReportSummaryCards;
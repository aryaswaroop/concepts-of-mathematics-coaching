import {
    ArrowRight,
    Lightbulb,
} from "lucide-react";

const ReportInsights = ({
    insights = [],
}) => {
    const hasInsights =
        Array.isArray(insights) && insights.length > 0;

    return (
        <section className="rounded-2xl border border-slate-200/80 bg-white/85 shadow-[0_10px_30px_rgba(15,23,42,0.035)]">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600">
                        Interpretation
                    </p>

                    <h2 className="mt-1 text-sm font-extrabold text-slate-950">
                        Key insights
                    </h2>

                    <p className="mt-0.5 text-xs text-slate-400">
                        Important observations generated from connected data
                    </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Lightbulb className="h-4 w-4" />
                </div>
            </div>

            {hasInsights ? (
                <div className="divide-y divide-slate-100">
                    {insights.map((insight, index) => (
                        <div
                            key={insight.id || index}
                            className="flex items-start gap-4 px-5 py-4"
                        >
                            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                <span className="text-[10px] font-extrabold">
                                    {index + 1}
                                </span>
                            </div>

                            <div className="min-w-0 flex-1">
                                <h3 className="text-sm font-bold text-slate-800">
                                    {insight.title}
                                </h3>

                                <p className="mt-1 text-xs leading-5 text-slate-500">
                                    {insight.description}
                                </p>
                            </div>

                            <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-300" />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="px-6 py-10 text-center">
                    <p className="text-sm font-extrabold text-slate-800">
                        Insights will appear after data integration
                    </p>

                    <p className="mx-auto mt-1 max-w-lg text-xs leading-5 text-slate-400">
                        The reporting engine can later identify academic,
                        enrollment, payment and student-support patterns from
                        real records.
                    </p>
                </div>
            )}
        </section>
    );
};

export default ReportInsights;
import {
    BarChart3,
    Download,
    RefreshCw,
} from "lucide-react";

const ReportsPageHeader = ({
    onRefresh,
    onExport,
}) => {
    return (
        <section className="border-b border-slate-200/70 bg-white/80">
            <div className="mx-auto max-w-[1280px] px-4 py-5 sm:px-6 lg:px-7">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <div className="mb-2 flex items-center gap-2">
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                <BarChart3 className="h-3.5 w-3.5" />
                            </div>

                            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">
                                Insights / Reports
                            </span>
                        </div>

                        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                            Reports & insights
                        </h1>

                        <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                            Understand academic performance, admissions,
                            payments, enquiries and student support activity.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <button
                            type="button"
                            onClick={onRefresh}
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                        >
                            <RefreshCw className="h-3.5 w-3.5" />
                            Refresh
                        </button>

                        <button
                            type="button"
                            onClick={onExport}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md"
                        >
                            <Download className="h-3.5 w-3.5" />
                            Export report
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReportsPageHeader;
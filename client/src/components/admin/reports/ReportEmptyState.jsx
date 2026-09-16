import {
    BarChart3,
    Database,
} from "lucide-react";

const ReportEmptyState = () => {
    return (
        <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6 lg:px-7">
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white/70 px-6 py-12 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <BarChart3 className="h-5 w-5" />
                </div>

                <h2 className="mt-4 text-sm font-extrabold text-slate-900">
                    Reports workspace ready
                </h2>

                <p className="mx-auto mt-1 max-w-lg text-xs leading-5 text-slate-400">
                    Connect the reporting APIs to populate academic,
                    enrollment, finance, enquiry and support insights.
                </p>

                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 text-[10px] font-bold text-slate-400">
                    <Database className="h-3 w-3" />
                    Waiting for live data
                </div>
            </div>
        </div>
    );
};

export default ReportEmptyState;
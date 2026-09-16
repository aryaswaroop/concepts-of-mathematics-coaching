import {
    Inbox,
    MessageSquareText,
} from "lucide-react";

const EnquiryReport = ({
    data = [],
}) => {
    const hasData = Array.isArray(data) && data.length > 0;

    return (
        <section className="rounded-2xl border border-slate-200/80 bg-white/85 shadow-[0_10px_30px_rgba(15,23,42,0.035)]">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600">
                        Enquiries
                    </p>

                    <h2 className="mt-1 text-sm font-extrabold text-slate-950">
                        Enquiry conversion overview
                    </h2>

                    <p className="mt-0.5 text-xs text-slate-400">
                        Enquiry status and admission interest
                    </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <MessageSquareText className="h-4 w-4" />
                </div>
            </div>

            {hasData ? (
                <div className="p-5">
                    <div className="h-52 rounded-xl border border-slate-100 bg-slate-50/60" />
                </div>
            ) : (
                <div className="flex min-h-[220px] flex-col items-center justify-center px-6 py-10 text-center">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
                        <Inbox className="h-5 w-5" />
                    </div>

                    <h3 className="mt-4 text-sm font-extrabold text-slate-800">
                        Enquiry insights pending
                    </h3>

                    <p className="mt-1 max-w-sm text-xs leading-5 text-slate-400">
                        Enquiry records will later provide insights into
                        enquiry sources, status and conversions.
                    </p>
                </div>
            )}
        </section>
    );
};

export default EnquiryReport;
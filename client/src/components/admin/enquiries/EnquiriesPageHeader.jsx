import { Inbox, Plus } from "lucide-react";

const EnquiriesPageHeader = ({ onAddEnquiry }) => {
    return (
        <section className="border-b border-slate-200/70 bg-white/80">
            <div className="mx-auto max-w-[1280px] px-4 py-5 sm:px-6 lg:px-7">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <div className="mb-2 flex items-center gap-2">
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                <Inbox className="h-3.5 w-3.5" />
                            </div>

                            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">
                                Communication / Enquiries
                            </span>
                        </div>

                        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                            Enquiries management
                        </h1>

                        <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                            Manage admission questions, course enquiries and
                            follow-ups from prospective students and guardians.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onAddEnquiry}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md"
                    >
                        <Plus className="h-4 w-4" />
                        Add enquiry
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EnquiriesPageHeader;
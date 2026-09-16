import { Inbox, Plus } from "lucide-react";

const EnquiryEmptyState = ({ hasFilters, onAddEnquiry }) => {
    return (
        <div className="px-6 py-14 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Inbox className="h-5 w-5" />
            </div>

            <h3 className="mt-4 text-sm font-extrabold text-slate-900">
                {hasFilters
                    ? "No matching enquiries"
                    : "No enquiries recorded yet"}
            </h3>

            <p className="mx-auto mt-1 max-w-md text-xs leading-5 text-slate-400">
                {hasFilters
                    ? "Try adjusting the filters to find the enquiry you are looking for."
                    : "Enquiries submitted through the website will appear here once API integration is connected."}
            </p>

            {!hasFilters && (
                <button
                    type="button"
                    onClick={onAddEnquiry}
                    className="mt-5 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                    <Plus className="h-3.5 w-3.5" />
                    Add enquiry
                </button>
            )}
        </div>
    );
};

export default EnquiryEmptyState;
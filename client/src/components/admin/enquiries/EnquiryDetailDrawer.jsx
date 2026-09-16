import { X } from "lucide-react";
import {
    formatDate,
    formatLabel,
    getPriorityClasses,
    getStatusClasses,
} from "./EnquiryTableRow";

const EnquiryDetailDrawer = ({
    enquiry,
    isOpen,
    onClose,
}) => {
    if (!isOpen || !enquiry) {
        return null;
    }

    const name =
        enquiry.name ||
        enquiry.studentName ||
        enquiry.student?.name ||
        "Prospective Student";

    const type =
        enquiry.enquiryType ||
        enquiry.type ||
        "general_enquiry";

    const grade =
        enquiry.grade ||
        enquiry.class ||
        enquiry.student?.grade ||
        "";

    const status = enquiry.status || "new";
    const priority = enquiry.priority || "normal";

    const date =
        enquiry.enquiryDate ||
        enquiry.createdAt ||
        enquiry.date;

    return (
        <div className="fixed inset-0 z-50 bg-slate-950/30 backdrop-blur-[2px]">
            <button
                type="button"
                aria-label="Close enquiry details"
                onClick={onClose}
                className="absolute inset-0 cursor-default"
            />

            <aside className="absolute right-0 top-0 h-full w-full max-w-lg overflow-y-auto border-l border-slate-200 bg-white shadow-2xl">
                <div className="sticky top-0 z-10 border-b border-slate-100 bg-white/95 px-5 py-4 backdrop-blur">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                                Enquiry details
                            </p>

                            <h2 className="mt-1 text-xl font-extrabold text-slate-950">
                                {name}
                            </h2>

                            <p className="mt-1 text-xs text-slate-400">
                                {formatLabel(type)}
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={onClose}
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                <div className="space-y-5 p-5">
                    <div className="rounded-2xl bg-slate-950 p-5 text-white">
                        <div className="flex items-center justify-between gap-3">
                            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-300">
                                Current state
                            </span>

                            <span
                                className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${getStatusClasses(
                                    status
                                )}`}
                            >
                                {formatLabel(status)}
                            </span>
                        </div>

                        <div className="mt-5 grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-[10px] text-slate-400">
                                    Priority
                                </p>

                                <span
                                    className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold ${getPriorityClasses(
                                        priority
                                    )}`}
                                >
                                    {formatLabel(priority)}
                                </span>
                            </div>

                            <div>
                                <p className="text-[10px] text-slate-400">
                                    Class
                                </p>

                                <p className="mt-1 text-sm font-bold">
                                    {grade ? `Class ${grade}` : "Not specified"}
                                </p>
                            </div>
                        </div>
                    </div>

                    <section>
                        <h3 className="text-xs font-extrabold uppercase tracking-[0.1em] text-slate-400">
                            Contact information
                        </h3>

                        <div className="mt-3 space-y-2 rounded-xl border border-slate-200 p-4">
                            <div className="flex justify-between gap-4">
                                <span className="text-xs text-slate-400">
                                    Phone
                                </span>

                                <span className="text-right text-xs font-semibold text-slate-700">
                                    {enquiry.phone ||
                                        enquiry.mobile ||
                                        "Not provided"}
                                </span>
                            </div>

                            <div className="flex justify-between gap-4">
                                <span className="text-xs text-slate-400">
                                    Email
                                </span>

                                <span className="break-all text-right text-xs font-semibold text-slate-700">
                                    {enquiry.email || "Not provided"}
                                </span>
                            </div>

                            <div className="flex justify-between gap-4">
                                <span className="text-xs text-slate-400">
                                    Enquiry date
                                </span>

                                <span className="text-right text-xs font-semibold text-slate-700">
                                    {formatDate(date)}
                                </span>
                            </div>

                            <div className="flex justify-between gap-4">
                                <span className="text-xs text-slate-400">
                                    Follow-up date
                                </span>

                                <span className="text-right text-xs font-semibold text-slate-700">
                                    {formatDate(enquiry.followUpDate)}
                                </span>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-xs font-extrabold uppercase tracking-[0.1em] text-slate-400">
                            Enquiry message
                        </h3>

                        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50/70 p-4">
                            <p className="whitespace-pre-wrap text-sm leading-6 text-slate-600">
                                {enquiry.message ||
                                    "No enquiry message recorded."}
                            </p>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-xs font-extrabold uppercase tracking-[0.1em] text-slate-400">
                            Admin notes
                        </h3>

                        <div className="mt-3 rounded-xl border border-slate-200 p-4">
                            <p className="whitespace-pre-wrap text-sm leading-6 text-slate-600">
                                {enquiry.adminNotes ||
                                    enquiry.notes ||
                                    "No internal notes recorded."}
                            </p>
                        </div>
                    </section>

                    {(enquiry._id || enquiry.id) && (
                        <div className="border-t border-slate-100 pt-4">
                            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                                Enquiry ID
                            </p>

                            <p className="mt-1 break-all font-mono text-[11px] text-slate-500">
                                {enquiry._id || enquiry.id}
                            </p>
                        </div>
                    )}
                </div>
            </aside>
        </div>
    );
};

export default EnquiryDetailDrawer;
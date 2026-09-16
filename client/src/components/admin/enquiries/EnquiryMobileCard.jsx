import { CalendarDays, Mail, Phone } from "lucide-react";
import {
    formatDate,
    formatLabel,
    getPriorityClasses,
    getStatusClasses,
} from "./EnquiryTableRow";

const EnquiryMobileCard = ({ enquiry, onView, onEdit }) => {
    const studentName =
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
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <h3 className="text-sm font-extrabold text-slate-900">
                        {studentName}
                    </h3>

                    <p className="mt-1 text-xs font-semibold text-blue-600">
                        {formatLabel(type)}
                    </p>
                </div>

                <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${getStatusClasses(
                        status
                    )}`}
                >
                    {formatLabel(status)}
                </span>
            </div>

            <div className="mt-4 grid gap-2 text-xs text-slate-500">
                {enquiry.phone || enquiry.mobile ? (
                    <div className="flex items-center gap-2">
                        <Phone className="h-3.5 w-3.5 text-slate-400" />
                        {enquiry.phone || enquiry.mobile}
                    </div>
                ) : null}

                {enquiry.email ? (
                    <div className="flex items-center gap-2 truncate">
                        <Mail className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                        <span className="truncate">{enquiry.email}</span>
                    </div>
                ) : null}

                <div className="flex items-center gap-2">
                    <CalendarDays className="h-3.5 w-3.5 text-slate-400" />
                    {formatDate(date)}
                </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                <div className="flex items-center gap-2">
                    {grade && (
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-600">
                            Class {grade}
                        </span>
                    )}

                    <span
                        className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${getPriorityClasses(
                            priority
                        )}`}
                    >
                        {formatLabel(priority)}
                    </span>
                </div>

                <div className="flex gap-2">
                    <button
                        type="button"
                        onClick={() => onView(enquiry)}
                        className="rounded-lg border border-slate-200 px-3 py-1.5 text-[11px] font-bold text-slate-600 transition hover:bg-slate-50"
                    >
                        View
                    </button>

                    <button
                        type="button"
                        onClick={() => onEdit(enquiry)}
                        className="rounded-lg bg-slate-950 px-3 py-1.5 text-[11px] font-bold text-white transition hover:bg-blue-700"
                    >
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EnquiryMobileCard;
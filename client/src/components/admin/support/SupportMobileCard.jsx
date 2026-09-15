import {
    CalendarDays,
    Eye,
    Headphones,
    Pencil,
} from "lucide-react";

const getStatusClasses = (status) => {
    switch (status) {
        case "scheduled":
            return "bg-blue-50 text-blue-700";

        case "completed":
            return "bg-emerald-50 text-emerald-700";

        case "requested":
            return "bg-amber-50 text-amber-700";

        case "cancelled":
            return "bg-rose-50 text-rose-700";

        default:
            return "bg-slate-100 text-slate-600";
    }
};

const getPriorityClasses = (priority) => {
    switch (priority) {
        case "urgent":
            return "bg-rose-50 text-rose-700";

        case "high":
            return "bg-orange-50 text-orange-700";

        case "normal":
            return "bg-blue-50 text-blue-700";

        default:
            return "bg-slate-100 text-slate-600";
    }
};

const formatValue = (value) => {
    if (!value) return "—";

    return String(value)
        .replaceAll("_", " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

const formatDate = (date) => {
    if (!date) return "—";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
        return date;
    }

    return parsedDate.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
};

const SupportMobileCard = ({
    session,
    onView,
    onEdit,
}) => {
    const studentName =
        session.studentName ||
        session.student?.name ||
        "Student";

    const supportType =
        session.supportType ||
        session.type ||
        "other";

    const sessionDate =
        session.sessionDate ||
        session.date ||
        session.scheduledAt;

    const status =
        session.status ||
        "requested";

    const priority =
        session.priority ||
        "normal";

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Headphones className="h-4 w-4" />
                    </div>

                    <div className="min-w-0">
                        <h3 className="truncate text-sm font-extrabold text-slate-900">
                            {studentName}
                        </h3>

                        <p className="mt-1 text-xs text-slate-500">
                            {formatValue(supportType)}
                        </p>
                    </div>
                </div>

                <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold ${getStatusClasses(
                        status
                    )}`}
                >
                    {formatValue(status)}
                </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
                        Date
                    </p>

                    <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-slate-700">
                        <CalendarDays className="h-3.5 w-3.5 text-slate-400" />
                        {formatDate(sessionDate)}
                    </p>
                </div>

                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
                        Priority
                    </p>

                    <span
                        className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold ${getPriorityClasses(
                            priority
                        )}`}
                    >
                        {formatValue(priority)}
                    </span>
                </div>
            </div>

            {session.description && (
                <p className="mt-4 line-clamp-2 text-xs leading-5 text-slate-500">
                    {session.description}
                </p>
            )}

            <div className="mt-4 flex gap-2 border-t border-slate-100 pt-3">
                <button
                    type="button"
                    onClick={() => onView(session)}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                >
                    <Eye className="h-3.5 w-3.5" />
                    View
                </button>

                <button
                    type="button"
                    onClick={() => onEdit(session)}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-slate-950 px-3 py-2 text-xs font-bold text-white transition hover:bg-blue-600"
                >
                    <Pencil className="h-3.5 w-3.5" />
                    Edit
                </button>
            </div>
        </div>
    );
};

export default SupportMobileCard;
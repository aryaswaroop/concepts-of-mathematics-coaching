import SupportRowActions from "./SupportRowActions";

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

        case "low":
            return "bg-slate-100 text-slate-600";

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

const SupportTableRow = ({
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

    const batchName =
        session.batchName ||
        session.batch?.name;

    return (
        <div className="hidden items-center border-b border-slate-100 px-5 py-4 transition hover:bg-slate-50/70 md:grid md:grid-cols-[1.4fr_1.2fr_1fr_0.9fr_0.8fr_0.5fr] md:gap-4">
            <div className="min-w-0">
                <p className="truncate text-sm font-bold text-slate-800">
                    {studentName}
                </p>

                {session.studentId && (
                    <p className="mt-0.5 truncate text-[11px] text-slate-400">
                        ID: {session.studentId}
                    </p>
                )}
            </div>

            <div>
                <p className="truncate text-xs font-semibold text-slate-600">
                    {formatValue(supportType)}
                </p>

                {batchName && (
                    <p className="mt-0.5 truncate text-[11px] text-slate-400">
                        {batchName}
                    </p>
                )}
            </div>

            <div>
                <span className="text-xs font-medium text-slate-500">
                    {formatDate(sessionDate)}
                </span>

                {session.sessionTime && (
                    <p className="mt-0.5 text-[11px] text-slate-400">
                        {session.sessionTime}
                    </p>
                )}
            </div>

            <div>
                <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold ${getPriorityClasses(
                        priority
                    )}`}
                >
                    {formatValue(priority)}
                </span>
            </div>

            <div>
                <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold ${getStatusClasses(
                        status
                    )}`}
                >
                    {formatValue(status)}
                </span>
            </div>

            <div className="flex justify-end">
                <SupportRowActions
                    session={session}
                    onView={onView}
                    onEdit={onEdit}
                />
            </div>
        </div>
    );
};

export default SupportTableRow;
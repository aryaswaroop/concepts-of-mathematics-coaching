import EnquiryRowActions from "./EnquiryRowActions";

const getStatusClasses = (status = "") => {
    const styles = {
        new: "bg-blue-50 text-blue-700",
        contacted: "bg-slate-100 text-slate-700",
        follow_up: "bg-amber-50 text-amber-700",
        converted: "bg-emerald-50 text-emerald-700",
        closed: "bg-slate-100 text-slate-500",
    };

    return styles[status] || "bg-slate-100 text-slate-600";
};

const getPriorityClasses = (priority = "") => {
    const styles = {
        low: "bg-slate-100 text-slate-500",
        normal: "bg-blue-50 text-blue-600",
        high: "bg-red-50 text-red-600",
    };

    return styles[priority] || "bg-slate-100 text-slate-500";
};

const formatValue = (value, fallback = "—") => {
    return value || fallback;
};

const formatLabel = (value = "") => {
    return value
        .replaceAll("_", " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

const formatDate = (value) => {
    if (!value) return "—";

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        return value;
    }

    return date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
};

const EnquiryTableRow = ({ enquiry, onView, onEdit }) => {
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
        <div className="grid items-center gap-4 border-b border-slate-100 px-5 py-4 transition hover:bg-slate-50/70 md:grid-cols-[1.35fr_1.3fr_0.7fr_0.75fr_0.85fr_0.45fr]">
            <div className="min-w-0">
                <p className="truncate text-sm font-bold text-slate-900">
                    {studentName}
                </p>

                <p className="mt-0.5 truncate text-[11px] text-slate-400">
                    {formatValue(enquiry.phone || enquiry.mobile)}
                </p>
            </div>

            <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-slate-700">
                    {formatLabel(type)}
                </p>

                {enquiry.email && (
                    <p className="mt-0.5 truncate text-[11px] text-slate-400">
                        {enquiry.email}
                    </p>
                )}
            </div>

            <div>
                <span className="text-xs font-semibold text-slate-600">
                    {grade ? `Class ${grade}` : "—"}
                </span>
            </div>

            <div>
                <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold capitalize ${getPriorityClasses(
                        priority
                    )}`}
                >
                    {formatLabel(priority)}
                </span>
            </div>

            <div>
                <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold capitalize ${getStatusClasses(
                        status
                    )}`}
                >
                    {formatLabel(status)}
                </span>

                <p className="mt-1 text-[10px] text-slate-400">
                    {formatDate(date)}
                </p>
            </div>

            <EnquiryRowActions
                enquiry={enquiry}
                onView={onView}
                onEdit={onEdit}
            />
        </div>
    );
};

export { formatDate, formatLabel, getPriorityClasses, getStatusClasses };

export default EnquiryTableRow;
import AnnouncementRowActions from "./AnnouncementRowActions";

const getStatusClasses = (status) => {
    switch (status) {
        case "published":
            return "bg-emerald-50 text-emerald-700";

        case "scheduled":
            return "bg-blue-50 text-blue-700";

        case "draft":
            return "bg-amber-50 text-amber-700";

        case "archived":
            return "bg-slate-100 text-slate-600";

        default:
            return "bg-slate-100 text-slate-600";
    }
};

const formatStatus = (status) => {
    if (!status) return "Draft";

    return status
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

const AnnouncementTableRow = ({
    announcement,
    onView,
    onEdit,
}) => {
    const title =
        announcement.title ||
        announcement.name ||
        "Announcement";

    const category =
        announcement.category ||
        announcement.type ||
        "general";

    const audience =
        announcement.audience ||
        announcement.targetAudience ||
        "all_students";

    const publishDate =
        announcement.publishDate ||
        announcement.publishedAt ||
        announcement.date;

    const status = announcement.status || "draft";

    return (
        <div className="hidden items-center border-b border-slate-100 px-5 py-4 transition hover:bg-slate-50/70 md:grid md:grid-cols-[1.7fr_1fr_1fr_0.9fr_0.9fr_0.5fr] md:gap-4">
            <div className="min-w-0">
                <p className="truncate text-sm font-bold text-slate-800">
                    {title}
                </p>

                {announcement.description && (
                    <p className="mt-0.5 truncate text-[11px] text-slate-400">
                        {announcement.description}
                    </p>
                )}
            </div>

            <div>
                <span className="text-xs font-semibold text-slate-600">
                    {formatStatus(category)}
                </span>
            </div>

            <div>
                <span className="text-xs font-semibold text-slate-600">
                    {formatStatus(audience)}
                </span>
            </div>

            <div>
                <span className="text-xs font-medium text-slate-500">
                    {formatDate(publishDate)}
                </span>
            </div>

            <div>
                <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold ${getStatusClasses(
                        status
                    )}`}
                >
                    {formatStatus(status)}
                </span>
            </div>

            <div className="flex justify-end">
                <AnnouncementRowActions
                    announcement={announcement}
                    onView={onView}
                    onEdit={onEdit}
                />
            </div>
        </div>
    );
};

export default AnnouncementTableRow;
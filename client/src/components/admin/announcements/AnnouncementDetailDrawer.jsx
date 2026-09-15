import {
    Bell,
    CalendarDays,
    FileText,
    Target,
    X,
} from "lucide-react";

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

const AnnouncementDetailDrawer = ({
    announcement,
    onClose,
}) => {
    if (!announcement) {
        return null;
    }

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

    const status =
        announcement.status ||
        "draft";

    const publishDate =
        announcement.publishDate ||
        announcement.publishedAt ||
        announcement.date;

    const content =
        announcement.content ||
        announcement.message ||
        "No announcement content available.";

    return (
        <div className="fixed inset-0 z-[90]">
            <div
                className="absolute inset-0 bg-slate-950/30 backdrop-blur-sm"
                onClick={onClose}
            />

            <aside className="absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto bg-white shadow-2xl">
                <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                            Announcement details
                        </p>

                        <h2 className="mt-1 text-base font-extrabold text-slate-950">
                            Notice preview
                        </h2>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                <div className="p-5">
                    <div className="rounded-2xl bg-slate-950 p-5 text-white">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                                <Bell className="h-5 w-5" />
                            </div>

                            <span
                                className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${getStatusClasses(
                                    status
                                )}`}
                            >
                                {formatStatus(status)}
                            </span>
                        </div>

                        <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                            {formatStatus(category)}
                        </p>

                        <h3 className="mt-1 text-xl font-extrabold leading-7">
                            {title}
                        </h3>
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-xl border border-slate-200 p-4">
                            <div className="flex items-center gap-2">
                                <Target className="h-4 w-4 text-blue-600" />

                                <span className="text-xs font-bold text-slate-500">
                                    Audience
                                </span>
                            </div>

                            <p className="mt-2 text-sm font-extrabold text-slate-900">
                                {formatStatus(audience)}
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-200 p-4">
                            <div className="flex items-center gap-2">
                                <CalendarDays className="h-4 w-4 text-blue-600" />

                                <span className="text-xs font-bold text-slate-500">
                                    Publish date
                                </span>
                            </div>

                            <p className="mt-2 text-sm font-extrabold text-slate-900">
                                {formatDate(publishDate)}
                            </p>
                        </div>
                    </div>

                    {announcement.description && (
                        <div className="mt-3 rounded-xl border border-slate-200 p-4">
                            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                                Summary
                            </p>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                {announcement.description}
                            </p>
                        </div>
                    )}

                    <div className="mt-3 rounded-xl border border-slate-200 p-4">
                        <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-blue-600" />

                            <span className="text-xs font-bold text-slate-500">
                                Announcement content
                            </span>
                        </div>

                        <div className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-600">
                            {content}
                        </div>
                    </div>

                    {announcement.batchName && (
                        <div className="mt-3 rounded-xl border border-slate-200 p-4">
                            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                                Target batch
                            </p>

                            <p className="mt-2 text-sm font-extrabold text-slate-900">
                                {announcement.batchName}
                            </p>

                            {announcement.batchId && (
                                <p className="mt-1 text-xs text-slate-400">
                                    Batch ID: {announcement.batchId}
                                </p>
                            )}
                        </div>
                    )}

                    {announcement._id && (
                        <div className="mt-3 rounded-xl bg-slate-50 p-4">
                            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                                Announcement ID
                            </p>

                            <p className="mt-1 break-all text-xs font-semibold text-slate-600">
                                {announcement._id}
                            </p>
                        </div>
                    )}
                </div>
            </aside>
        </div>
    );
};

export default AnnouncementDetailDrawer;
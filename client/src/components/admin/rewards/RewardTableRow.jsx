import RewardRowActions from "./RewardRowActions";

const getStatusClasses = (status) => {
    switch (status) {
        case "awarded":
            return "bg-emerald-50 text-emerald-700";

        case "pending":
            return "bg-amber-50 text-amber-700";

        case "cancelled":
            return "bg-rose-50 text-rose-700";

        default:
            return "bg-slate-100 text-slate-600";
    }
};

const formatStatus = (status) => {
    if (!status) return "Pending";

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

const RewardTableRow = ({ reward, onView, onEdit }) => {
    const studentName =
        reward.studentName ||
        reward.student?.name ||
        reward.student?.fullName ||
        "Student";

    const rewardName =
        reward.rewardName ||
        reward.title ||
        reward.reward?.name ||
        "Reward";

    const rewardType =
        reward.rewardType ||
        reward.type ||
        "other";

    const grade =
        reward.grade ||
        reward.class ||
        reward.course?.grade ||
        "—";

    const rewardDate =
        reward.rewardDate ||
        reward.date ||
        reward.awardedAt;

    const status = reward.status || "pending";

    return (
        <div className="hidden items-center border-b border-slate-100 px-5 py-4 transition hover:bg-slate-50/70 md:grid md:grid-cols-[1.35fr_1.25fr_0.9fr_0.7fr_0.95fr_0.5fr] md:gap-4">
            <div className="min-w-0">
                <p className="truncate text-sm font-bold text-slate-800">
                    {studentName}
                </p>

                {reward.studentId && (
                    <p className="mt-0.5 truncate text-[11px] text-slate-400">
                        ID: {reward.studentId}
                    </p>
                )}
            </div>

            <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-700">
                    {rewardName}
                </p>

                <p className="mt-0.5 truncate text-[11px] text-slate-400">
                    {formatStatus(rewardType)}
                </p>
            </div>

            <div>
                <span className="text-sm font-semibold text-slate-600">
                    Class {grade}
                </span>
            </div>

            <div>
                <span className="text-sm font-semibold text-slate-600">
                    {reward.value || reward.amount || "—"}
                </span>
            </div>

            <div>
                <p className="text-xs font-medium text-slate-500">
                    {formatDate(rewardDate)}
                </p>
            </div>

            <div className="flex justify-end">
                <div className="flex items-center gap-1">
                    <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold ${getStatusClasses(
                            status
                        )}`}
                    >
                        {formatStatus(status)}
                    </span>

                    <RewardRowActions
                        reward={reward}
                        onView={onView}
                        onEdit={onEdit}
                    />
                </div>
            </div>
        </div>
    );
};

export default RewardTableRow;
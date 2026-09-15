import {
    CalendarDays,
    FileText,
    Gift,
    GraduationCap,
    UserRound,
    X,
} from "lucide-react";

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

const RewardDetailDrawer = ({ reward, onClose }) => {
    if (!reward) {
        return null;
    }

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
        <div className="fixed inset-0 z-[90]">
            <div
                className="absolute inset-0 bg-slate-950/30 backdrop-blur-sm"
                onClick={onClose}
            />

            <aside className="absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto bg-white shadow-2xl">
                <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                            Reward details
                        </p>

                        <h2 className="mt-1 text-base font-extrabold text-slate-950">
                            Recognition record
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
                                <Gift className="h-5 w-5" />
                            </div>

                            <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-bold text-blue-100">
                                {formatStatus(status)}
                            </span>
                        </div>

                        <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                            Reward
                        </p>

                        <h3 className="mt-1 text-xl font-extrabold">
                            {rewardName}
                        </h3>

                        <p className="mt-1 text-xs text-slate-400">
                            {formatStatus(rewardType)}
                        </p>
                    </div>

                    <div className="mt-5 space-y-3">
                        <div className="rounded-xl border border-slate-200 p-4">
                            <div className="flex items-center gap-2">
                                <UserRound className="h-4 w-4 text-blue-600" />

                                <span className="text-xs font-bold text-slate-500">
                                    Student
                                </span>
                            </div>

                            <p className="mt-2 text-sm font-extrabold text-slate-900">
                                {studentName}
                            </p>

                            {reward.studentId && (
                                <p className="mt-1 text-xs text-slate-400">
                                    ID: {reward.studentId}
                                </p>
                            )}
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            <div className="rounded-xl border border-slate-200 p-4">
                                <div className="flex items-center gap-2">
                                    <GraduationCap className="h-4 w-4 text-blue-600" />

                                    <span className="text-xs font-bold text-slate-500">
                                        Class
                                    </span>
                                </div>

                                <p className="mt-2 text-sm font-extrabold text-slate-900">
                                    Class {grade}
                                </p>
                            </div>

                            <div className="rounded-xl border border-slate-200 p-4">
                                <div className="flex items-center gap-2">
                                    <CalendarDays className="h-4 w-4 text-blue-600" />

                                    <span className="text-xs font-bold text-slate-500">
                                        Award date
                                    </span>
                                </div>

                                <p className="mt-2 text-sm font-extrabold text-slate-900">
                                    {formatDate(rewardDate)}
                                </p>
                            </div>
                        </div>

                        <div className="rounded-xl border border-slate-200 p-4">
                            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                                Reward value
                            </p>

                            <p className="mt-1 text-sm font-extrabold text-slate-900">
                                {reward.value || reward.amount || "Not specified"}
                            </p>
                        </div>

                        {(reward.testName || reward.test?.name) && (
                            <div className="rounded-xl border border-slate-200 p-4">
                                <div className="flex items-center gap-2">
                                    <FileText className="h-4 w-4 text-blue-600" />

                                    <span className="text-xs font-bold text-slate-500">
                                        Related test
                                    </span>
                                </div>

                                <p className="mt-2 text-sm font-extrabold text-slate-900">
                                    {reward.testName || reward.test?.name}
                                </p>

                                {reward.testId && (
                                    <p className="mt-1 text-xs text-slate-400">
                                        Test ID: {reward.testId}
                                    </p>
                                )}
                            </div>
                        )}

                        {(reward.description || reward.remarks) && (
                            <div className="rounded-xl border border-slate-200 p-4">
                                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                                    Remarks
                                </p>

                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    {reward.description || reward.remarks}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default RewardDetailDrawer;
import { useMemo } from "react";
import { motion } from "framer-motion";
import {
    Gift,
    Medal,
    Sparkles,
    Trophy,
} from "lucide-react";
import MathPattern from "../common/MathPattern";

const rewardIcons = [Trophy, Medal, Gift];

const RewardsRecognition = ({
    rewards = [],
    loading = false,
    error = null,
}) => {
    const publicRewards = useMemo(() => {
        return rewards.filter(
            (reward) =>
                reward &&
                reward.title &&
                reward.description
        );
    }, [rewards]);

    const displayRewards = useMemo(() => {
        return publicRewards.slice(0, 3);
    }, [publicRewards]);

    const formatDate = (date) => {
        if (!date) return "";

        const parsedDate = new Date(date);

        if (Number.isNaN(parsedDate.getTime())) {
            return "";
        }

        return parsedDate.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    const getRewardTypeLabel = (rewardType) => {
        if (!rewardType) return "Recognition";

        return rewardType
            .toString()
            .replace(/_/g, " ")
            .toLowerCase()
            .replace(/\b\w/g, (letter) => letter.toUpperCase());
    };

    const hasRewards = displayRewards.length > 0;

    return (
        <section className="relative overflow-hidden bg-white py-16 sm:py-20">
            <MathPattern variant="grid" />

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-7">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                        Recognition
                    </p>

                    <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.045em] text-slate-950 sm:text-4xl">
                        Good work deserves to be noticed.
                    </h2>

                    <p className="mt-4 text-base leading-7 text-slate-600">
                        Results are not only about marks. Recognition can
                        encourage students to keep learning, practising and
                        improving.
                    </p>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    {loading &&
                        Array.from({ length: 3 }).map((_, index) => (
                            <div
                                key={`reward-skeleton-${index}`}
                                className="animate-pulse rounded-2xl border border-slate-200/80 bg-white/85 p-6 text-center shadow-[0_15px_40px_rgba(15,23,42,0.05)]"
                            >
                                <div className="mx-auto h-12 w-12 rounded-xl bg-slate-200" />

                                <div className="mx-auto mt-5 h-5 w-32 rounded bg-slate-200" />

                                <div className="mx-auto mt-3 h-4 w-full rounded bg-slate-100" />

                                <div className="mx-auto mt-2 h-4 w-4/5 rounded bg-slate-100" />
                            </div>
                        ))}

                    {!loading &&
                        hasRewards &&
                        displayRewards.map((reward, index) => {
                            const Icon =
                                rewardIcons[index % rewardIcons.length];

                            const awardedDate = formatDate(
                                reward.awardedDate
                            );

                            return (
                                <motion.div
                                    key={reward._id || `${reward.title}-${index}`}
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: index * 0.08,
                                    }}
                                    whileHover={{ y: -6 }}
                                    className="rounded-2xl border border-slate-200/80 bg-white/85 p-6 text-center shadow-[0_15px_40px_rgba(15,23,42,0.05)] backdrop-blur"
                                >
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                        <Icon size={21} />
                                    </div>

                                    <div className="mt-4 inline-flex rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-blue-600">
                                        {getRewardTypeLabel(
                                            reward.rewardType
                                        )}
                                    </div>

                                    <h3 className="mt-4 font-extrabold text-slate-950">
                                        {reward.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        {reward.description}
                                    </p>

                                    {reward.testId?.title && (
                                        <p className="mt-4 text-xs font-semibold text-slate-500">
                                            {reward.testId.title}
                                        </p>
                                    )}

                                    {awardedDate && (
                                        <p className="mt-2 text-xs font-medium text-slate-400">
                                            Awarded on {awardedDate}
                                        </p>
                                    )}
                                </motion.div>
                            );
                        })}

                    {!loading &&
                        !hasRewards &&
                        !error && (
                            <div className="md:col-span-3 rounded-2xl border border-slate-200/80 bg-white/85 px-6 py-10 text-center shadow-[0_15px_40px_rgba(15,23,42,0.05)]">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                    <Trophy size={21} />
                                </div>

                                <h3 className="mt-4 font-extrabold text-slate-950">
                                    Recognition records will appear here.
                                </h3>

                                <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-600">
                                    Achievement and reward information will
                                    appear as recognition is awarded through
                                    the coaching system.
                                </p>
                            </div>
                        )}

                    {!loading && error && (
                        <div className="md:col-span-3 rounded-2xl border border-red-100 bg-red-50/70 px-6 py-8 text-center">
                            <h3 className="font-extrabold text-slate-950">
                                Recognition data is temporarily unavailable.
                            </h3>

                            <p className="mt-2 text-sm text-slate-600">
                                Please check again later.
                            </p>
                        </div>
                    )}
                </div>

                <div className="mx-auto mt-8 flex max-w-2xl items-center justify-center gap-3 rounded-2xl border border-blue-100 bg-blue-50/60 px-5 py-4 text-center">
                    <Sparkles
                        size={18}
                        className="shrink-0 text-blue-600"
                    />

                    <p className="text-sm font-semibold text-slate-700">
                        Recognition is designed to encourage learning, not
                        create unnecessary pressure.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default RewardsRecognition;
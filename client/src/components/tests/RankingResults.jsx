import { motion } from "framer-motion";
import {
    Award,
    BarChart3,
    Medal,
    Trophy,
} from "lucide-react";
import MathPattern from "../common/MathPattern";

const RankingResults = () => {
    const rankingFeatures = [
        {
            icon: Trophy,
            title: "Performance Ranking",
            text: "Test performance can be organised into a ranking for meaningful comparison.",
        },
        {
            icon: Medal,
            title: "Result Visibility",
            text: "Students can understand their position after results are recorded.",
        },
        {
            icon: Award,
            title: "Recognition",
            text: "Strong and consistent performance can be connected with recognition and rewards.",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-white py-16 sm:py-20">
            <MathPattern variant="grid" />

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-7">
                <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                            Results & Ranking
                        </p>

                        <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.045em] text-slate-950 sm:text-4xl">
                            Make progress visible.
                        </h2>

                        <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                            Once test results are recorded, performance and
                            ranking can provide students with a clearer view
                            of where they stand and where they can improve.
                        </p>

                        <div className="mt-8 space-y-4">
                            {rankingFeatures.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={item.title}
                                        initial={{
                                            opacity: 0,
                                            x: -15,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        transition={{
                                            delay: index * 0.08,
                                        }}
                                        className="flex gap-4"
                                    >
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                            <Icon size={19} />
                                        </div>

                                        <div>
                                            <h3 className="font-extrabold text-slate-950">
                                                {item.title}
                                            </h3>
                                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                                {item.text}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_20px_55px_rgba(15,23,42,0.07)] backdrop-blur sm:p-8">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
                                    Results Dashboard
                                </p>
                                <h3 className="mt-1 text-xl font-extrabold text-slate-950">
                                    Test Result
                                </h3>
                            </div>

                            <BarChart3
                                size={24}
                                className="text-blue-600"
                            />
                        </div>

                        <div className="py-8 text-center">
                            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-8 border-blue-50">
                                <span className="text-2xl font-extrabold text-slate-300">
                                    —
                                </span>
                            </div>

                            <p className="mt-5 font-bold text-slate-800">
                                Result awaiting data
                            </p>

                            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
                                Actual marks, ranking and performance
                                information will appear here after backend
                                integration.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="rounded-xl bg-slate-50 p-4">
                                <p className="text-xs font-semibold text-slate-400">
                                    Score
                                </p>
                                <p className="mt-1 text-xl font-extrabold text-slate-300">
                                    —
                                </p>
                            </div>

                            <div className="rounded-xl bg-slate-50 p-4">
                                <p className="text-xs font-semibold text-slate-400">
                                    Rank
                                </p>
                                <p className="mt-1 text-xl font-extrabold text-slate-300">
                                    —
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RankingResults;
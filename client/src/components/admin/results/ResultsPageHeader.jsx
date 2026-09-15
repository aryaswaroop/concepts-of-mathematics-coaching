import { Plus, Trophy } from "lucide-react";

const ResultsPageHeader = ({ onAddResult }) => {
    return (
        <section className="px-4 pb-2 pt-5 sm:px-6 lg:px-7">
            <div className="mx-auto max-w-[1280px]">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1">
                            <Trophy className="h-3.5 w-3.5 text-blue-600" />

                            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-700">
                                Assessment / Results
                            </span>
                        </div>

                        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                            Results management
                        </h1>

                        <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-500">
                            Record student performance, publish results and
                            track academic progress across tests.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onAddResult}
                        className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 text-xs font-bold text-white shadow-sm transition hover:bg-blue-600"
                    >
                        <Plus className="h-4 w-4" />
                        Add result
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ResultsPageHeader;
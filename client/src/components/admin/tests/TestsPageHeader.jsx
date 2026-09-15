import { Plus, ClipboardCheck } from "lucide-react";

const TestsPageHeader = ({ onAddTest }) => {
    return (
        <section className="relative overflow-hidden border-b border-slate-100 bg-white/80">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-50 blur-3xl"
            />

            <div className="relative mx-auto max-w-[1280px] px-4 py-5 sm:px-6 lg:px-7">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                <ClipboardCheck className="h-4 w-4" />
                            </div>

                            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600">
                                Assessment / Tests
                            </span>
                        </div>

                        <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                            Test management
                        </h1>

                        <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                            Create and manage weekly tests, topic coverage,
                            schedules and assessment status.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onAddTest}
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/10"
                    >
                        <Plus className="h-4 w-4" />
                        Add test
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestsPageHeader;
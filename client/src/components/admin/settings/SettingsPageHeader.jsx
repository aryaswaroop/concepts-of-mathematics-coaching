import {
    Settings,
    SlidersHorizontal,
} from "lucide-react";

const SettingsPageHeader = () => {
    return (
        <section className="border-b border-slate-200/70 bg-white/80">
            <div className="mx-auto max-w-[1280px] px-4 py-5 sm:px-6 lg:px-7">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Settings className="h-5 w-5" />
                    </div>

                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">
                                Account
                            </span>

                            <SlidersHorizontal className="h-3.5 w-3.5 text-slate-400" />
                        </div>

                        <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                            Settings
                        </h1>

                        <p className="mt-1 text-sm text-slate-500">
                            Control account security, notifications and
                            workspace preferences.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SettingsPageHeader;
import {
    CalendarDays,
    KeyRound,
    ShieldCheck,
} from "lucide-react";

const AdminAccountSummary = ({ account = {} }) => {
    return (
        <section className="rounded-2xl border border-slate-200/80 bg-white/85 shadow-[0_10px_30px_rgba(15,23,42,0.035)]">
            <div className="border-b border-slate-100 px-5 py-4">
                <h2 className="text-sm font-extrabold text-slate-950">
                    Account summary
                </h2>

                <p className="mt-0.5 text-xs text-slate-400">
                    Account access and security information.
                </p>
            </div>

            <div className="divide-y divide-slate-100">
                <div className="flex items-center gap-3 px-5 py-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <ShieldCheck className="h-4 w-4" />
                    </div>

                    <div>
                        <p className="text-xs font-bold text-slate-800">
                            Account role
                        </p>

                        <p className="mt-0.5 text-[11px] text-slate-400">
                            {account.role || "Administrator"}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3 px-5 py-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <KeyRound className="h-4 w-4" />
                    </div>

                    <div>
                        <p className="text-xs font-bold text-slate-800">
                            Password
                        </p>

                        <p className="mt-0.5 text-[11px] text-slate-400">
                            Password management is available in Settings.
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3 px-5 py-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <CalendarDays className="h-4 w-4" />
                    </div>

                    <div>
                        <p className="text-xs font-bold text-slate-800">
                            Member since
                        </p>

                        <p className="mt-0.5 text-[11px] text-slate-400">
                            {account.createdAt || "Account data pending"}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminAccountSummary;
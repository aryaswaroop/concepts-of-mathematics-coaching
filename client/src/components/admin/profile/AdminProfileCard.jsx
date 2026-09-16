import {
    ShieldCheck,
    UserRound,
} from "lucide-react";

const AdminProfileCard = ({ profile = {} }) => {
    const name = profile.name || "Administrator";
    const role = profile.role || "Admin";
    const email = profile.email || "Account information pending";

    return (
        <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/85 shadow-[0_10px_30px_rgba(15,23,42,0.035)]">
            <div className="relative overflow-hidden bg-slate-950 px-5 py-6 text-white">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-30"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, rgba(96,165,250,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(96,165,250,0.14) 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                    }}
                />

                <div className="relative flex items-center gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-blue-300 ring-1 ring-white/10">
                        <UserRound className="h-7 w-7" />
                    </div>

                    <div className="min-w-0">
                        <div className="flex items-center gap-2">
                            <h2 className="truncate text-lg font-extrabold">
                                {name}
                            </h2>

                            <ShieldCheck className="h-4 w-4 shrink-0 text-blue-300" />
                        </div>

                        <p className="mt-0.5 text-xs text-slate-400">
                            {role}
                        </p>

                        <p className="mt-2 truncate text-xs text-slate-300">
                            {email}
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid divide-y divide-slate-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                <div className="px-5 py-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                        Access
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-800">
                        Administrator
                    </p>
                </div>

                <div className="px-5 py-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                        Workspace
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-800">
                        Coaching Management
                    </p>
                </div>

                <div className="px-5 py-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                        Status
                    </p>

                    <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Active
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AdminProfileCard;
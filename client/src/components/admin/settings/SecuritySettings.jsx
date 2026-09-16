import {
    KeyRound,
    LockKeyhole,
    ShieldCheck,
} from "lucide-react";
import SettingsSection from "./SettingsSection";

const SecuritySettings = ({
    onChangePassword,
}) => {
    return (
        <SettingsSection
            title="Security"
            description="Manage password and administrator account security."
            icon={ShieldCheck}
        >
            <div className="divide-y divide-slate-100">
                <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                        <LockKeyhole className="h-4 w-4 text-slate-400" />

                        <div>
                            <p className="text-xs font-bold text-slate-800">
                                Password
                            </p>

                            <p className="mt-0.5 text-[11px] text-slate-400">
                                Change your administrator login password.
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onChangePassword}
                        className="inline-flex items-center justify-center gap-2 self-start rounded-lg border border-slate-200 px-3 py-2 text-[11px] font-bold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 sm:self-auto"
                    >
                        <KeyRound className="h-3.5 w-3.5" />
                        Change password
                    </button>
                </div>

                <div className="flex items-center gap-3 px-5 py-4">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" />

                    <div>
                        <p className="text-xs font-bold text-slate-800">
                            Administrator access
                        </p>

                        <p className="mt-0.5 text-[11px] text-slate-400">
                            Security controls will be connected to the
                            authentication system later.
                        </p>
                    </div>
                </div>
            </div>
        </SettingsSection>
    );
};

export default SecuritySettings;
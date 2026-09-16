import {
    AtSign,
    UserRound,
} from "lucide-react";
import SettingsSection from "./SettingsSection";

const AccountSettings = ({
    settings,
    onChange,
}) => {
    return (
        <SettingsSection
            title="Account preferences"
            description="Manage the basic preferences associated with your admin account."
            icon={UserRound}
        >
            <div className="divide-y divide-slate-100">
                <div className="flex items-center justify-between gap-4 px-5 py-4">
                    <div className="flex items-center gap-3">
                        <AtSign className="h-4 w-4 text-slate-400" />

                        <div>
                            <p className="text-xs font-bold text-slate-800">
                                Email notifications
                            </p>

                            <p className="mt-0.5 text-[11px] text-slate-400">
                                Receive important account-related updates.
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={() =>
                            onChange(
                                "emailNotifications",
                                !settings.emailNotifications
                            )
                        }
                        className={`relative h-6 w-11 rounded-full transition ${
                            settings.emailNotifications
                                ? "bg-blue-600"
                                : "bg-slate-200"
                        }`}
                        aria-label="Toggle email notifications"
                    >
                        <span
                            className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
                                settings.emailNotifications
                                    ? "left-6"
                                    : "left-1"
                            }`}
                        />
                    </button>
                </div>
            </div>
        </SettingsSection>
    );
};

export default AccountSettings;
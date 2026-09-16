import {
    Bell,
    Megaphone,
    MessageSquareText,
} from "lucide-react";
import SettingsSection from "./SettingsSection";

const NotificationSettings = ({
    settings,
    onChange,
}) => {
    const options = [
        {
            key: "announcementAlerts",
            title: "Announcement alerts",
            description:
                "Notify you when important coaching announcements are created.",
            icon: Megaphone,
        },
        {
            key: "supportAlerts",
            title: "Support-session alerts",
            description:
                "Notify you about student support requests and sessions.",
            icon: MessageSquareText,
        },
    ];

    return (
        <SettingsSection
            title="Notifications"
            description="Choose which administrative events should trigger notifications."
            icon={Bell}
        >
            <div className="divide-y divide-slate-100">
                {options.map((option) => {
                    const Icon = option.icon;

                    return (
                        <div
                            key={option.key}
                            className="flex items-center justify-between gap-4 px-5 py-4"
                        >
                            <div className="flex items-center gap-3">
                                <Icon className="h-4 w-4 text-slate-400" />

                                <div>
                                    <p className="text-xs font-bold text-slate-800">
                                        {option.title}
                                    </p>

                                    <p className="mt-0.5 text-[11px] text-slate-400">
                                        {option.description}
                                    </p>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={() =>
                                    onChange(
                                        option.key,
                                        !settings[option.key]
                                    )
                                }
                                className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                                    settings[option.key]
                                        ? "bg-blue-600"
                                        : "bg-slate-200"
                                }`}
                            >
                                <span
                                    className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
                                        settings[option.key]
                                            ? "left-6"
                                            : "left-1"
                                    }`}
                                />
                            </button>
                        </div>
                    );
                })}
            </div>
        </SettingsSection>
    );
};

export default NotificationSettings;
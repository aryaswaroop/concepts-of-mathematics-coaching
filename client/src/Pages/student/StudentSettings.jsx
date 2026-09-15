import { motion } from "framer-motion";
import {
    Bell,
    Check,
    LockKeyhole,
    Mail,
    Settings as SettingsIcon,
    ShieldCheck,
} from "lucide-react";
import { useState } from "react";

const Toggle = ({ enabled, onToggle }) => {
    return (
        <button
            type="button"
            onClick={onToggle}
            aria-pressed={enabled}
            className={`relative h-7 w-12 rounded-full transition ${enabled ? "bg-blue-600" : "bg-slate-200"
                }`}
        >
            <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition ${enabled ? "left-6" : "left-1"
                    }`}
            >
                {enabled && (
                    <Check className="mx-auto mt-1 h-3 w-3 text-blue-600" />
                )}
            </span>
        </button>
    );
};

const SettingRow = ({
    icon: Icon,
    title,
    description,
    enabled,
    onToggle,
}) => {
    return (
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 p-4">
            <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                    <h3 className="text-sm font-bold text-slate-900">
                        {title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                        {description}
                    </p>
                </div>
            </div>

            <Toggle enabled={enabled} onToggle={onToggle} />
        </div>
    );
};

const StudentSettings = () => {
    const [emailUpdates, setEmailUpdates] = useState(true);
    const [testNotifications, setTestNotifications] = useState(true);
    const [announcementNotifications, setAnnouncementNotifications] =
        useState(true);

    return (
        <div className="mx-auto w-full max-w-[1280px] px-4 py-6 sm:px-6 lg:px-7 lg:py-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
            >
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                    <SettingsIcon className="h-3.5 w-3.5" />
                    Account preferences
                </div>

                <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                    Settings
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                    Manage your student portal preferences, notifications and
                    account security.
                </p>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
                {/* Preferences */}
                <div className="space-y-6">
                    <motion.section
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 }}
                        className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
                    >
                        <div className="mb-5">
                            <h2 className="font-extrabold text-slate-950">
                                Notification Preferences
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                Choose the updates you would like to receive.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <SettingRow
                                icon={Mail}
                                title="Email Updates"
                                description="Receive important learning and account updates."
                                enabled={emailUpdates}
                                onToggle={() =>
                                    setEmailUpdates((value) => !value)
                                }
                            />

                            <SettingRow
                                icon={Bell}
                                title="Test Notifications"
                                description="Get notified when test-related information is available."
                                enabled={testNotifications}
                                onToggle={() =>
                                    setTestNotifications((value) => !value)
                                }
                            />

                            <SettingRow
                                icon={Bell}
                                title="Announcement Notifications"
                                description="Stay informed about important coaching updates."
                                enabled={announcementNotifications}
                                onToggle={() =>
                                    setAnnouncementNotifications(
                                        (value) => !value
                                    )
                                }
                            />
                        </div>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
                    >
                        <div className="mb-5 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                <LockKeyhole className="h-5 w-5" />
                            </div>

                            <div>
                                <h2 className="font-extrabold text-slate-950">
                                    Security
                                </h2>

                                <p className="text-xs text-slate-400">
                                    Protect your student account
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h3 className="text-sm font-bold text-slate-900">
                                    Password & Account Security
                                </h3>

                                <p className="mt-1 text-xs leading-5 text-slate-500">
                                    Password management will be connected with
                                    authentication services later.
                                </p>
                            </div>

                            <button
                                type="button"
                                className="w-fit rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
                            >
                                Manage Security
                            </button>
                        </div>
                    </motion.section>
                </div>

                {/* Side Panel */}
                <motion.aside
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                    className="h-fit overflow-hidden rounded-[24px] bg-slate-950 p-6 text-white shadow-xl"
                >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-blue-300 ring-1 ring-white/10">
                        <ShieldCheck className="h-6 w-6" />
                    </div>

                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
                        Student Portal
                    </p>

                    <h2 className="mt-2 text-2xl font-extrabold">
                        Your account, your preferences.
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-300">
                        These controls are currently part of the portal UI.
                        They will be connected to your account system when
                        authentication and user preferences are integrated.
                    </p>

                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                                <Check className="h-4 w-4" />
                            </div>

                            <div>
                                <p className="text-sm font-bold">
                                    Interface ready
                                </p>

                                <p className="mt-0.5 text-xs text-slate-400">
                                    Preference sync: Coming with API
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.aside>
            </div>
        </div>
    );
};

export default StudentSettings;
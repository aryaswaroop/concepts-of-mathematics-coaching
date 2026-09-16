import { useState } from "react";

import SettingsPageHeader from "../../components/admin/settings/SettingsPageHeader";
import AccountSettings from "../../components/admin/settings/AccountSettings";
import SecuritySettings from "../../components/admin/settings/SecuritySettings";
import NotificationSettings from "../../components/admin/settings/NotificationSettings";
import InterfaceSettings from "../../components/admin/settings/InterfaceSettings";

const AdminSettings = () => {
    const [settings, setSettings] = useState({
        emailNotifications: true,
        announcementAlerts: true,
        supportAlerts: true,
        compactWorkspace: true,
    });

    const updateSetting = (key, value) => {
        setSettings((current) => ({
            ...current,
            [key]: value,
        }));
    };

    const handleChangePassword = () => {
        console.log("Change admin password");
    };

    return (
        <div className="min-h-full">
            <SettingsPageHeader />

            <div className="mx-auto max-w-[1000px] px-4 py-5 sm:px-6 lg:px-7">
                <div className="space-y-4">
                    <AccountSettings
                        settings={settings}
                        onChange={updateSetting}
                    />

                    <SecuritySettings
                        onChangePassword={handleChangePassword}
                    />

                    <NotificationSettings
                        settings={settings}
                        onChange={updateSetting}
                    />

                    <InterfaceSettings
                        settings={settings}
                        onChange={updateSetting}
                    />

                    <div className="rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3 text-xs leading-5 text-blue-700">
                        Settings currently apply to this UI session only.
                        Persistent account and authentication settings will be
                        connected during the backend integration phase.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminSettings;
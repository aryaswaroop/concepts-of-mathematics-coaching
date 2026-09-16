import {
    LayoutDashboard,
    Monitor,
} from "lucide-react";
import SettingsSection from "./SettingsSection";

const InterfaceSettings = ({
    settings,
    onChange,
}) => {
    return (
        <SettingsSection
            title="Workspace interface"
            description="Control how the administrator workspace behaves locally."
            icon={Monitor}
        >
            <div className="divide-y divide-slate-100">
                <div className="flex items-center justify-between gap-4 px-5 py-4">
                    <div className="flex items-center gap-3">
                        <LayoutDashboard className="h-4 w-4 text-slate-400" />

                        <div>
                            <p className="text-xs font-bold text-slate-800">
                                Compact workspace
                            </p>

                            <p className="mt-0.5 text-[11px] text-slate-400">
                                Keep management tables and controls visually
                                compact.
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={() =>
                            onChange(
                                "compactWorkspace",
                                !settings.compactWorkspace
                            )
                        }
                        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                            settings.compactWorkspace
                                ? "bg-blue-600"
                                : "bg-slate-200"
                        }`}
                    >
                        <span
                            className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
                                settings.compactWorkspace
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

export default InterfaceSettings;
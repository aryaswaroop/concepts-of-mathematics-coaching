const SettingsSection = ({
    title,
    description,
    icon: Icon,
    children,
}) => {
    return (
        <section className="rounded-2xl border border-slate-200/80 bg-white/85 shadow-[0_10px_30px_rgba(15,23,42,0.035)]">
            <div className="flex items-start gap-3 border-b border-slate-100 px-5 py-4">
                {Icon && (
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <Icon className="h-4 w-4" />
                    </div>
                )}

                <div>
                    <h2 className="text-sm font-extrabold text-slate-950">
                        {title}
                    </h2>

                    <p className="mt-0.5 text-xs leading-5 text-slate-400">
                        {description}
                    </p>
                </div>
            </div>

            <div>{children}</div>
        </section>
    );
};

export default SettingsSection;
const SectionTitle = ({
    eyebrow,
    title,
    description,
    align = "center",
}) => {
    const alignment =
        align === "left"
            ? "items-start text-left"
            : "items-center text-center";

    return (
        <div className={`mx-auto flex max-w-2xl flex-col ${alignment}`}>
            {eyebrow && (
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                    {eyebrow}
                </span>
            )}

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {title}
            </h2>

            {description && (
                <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionTitle;
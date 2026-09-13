import React from "react";

/**
 * Reusable section heading.
 *
 * Keeps heading structure consistent
 * throughout the website.
 */

const SectionTitle = ({
    eyebrow,
    title,
    description,
    align = "center",
}) => {
    const alignment =
        align === "left"
            ? "text-left items-start"
            : "text-center items-center";

    return (
        <div className={`mx-auto flex max-w-3xl flex-col ${alignment}`}>
            {eyebrow && (
                <span className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#B58B3C]">
                    {eyebrow}
                </span>
            )}

            <h2 className="font-serif text-3xl font-bold leading-tight text-[#14213D] sm:text-4xl lg:text-5xl">
                {title}
            </h2>

            {description && (
                <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionTitle;
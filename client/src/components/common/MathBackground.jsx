import React from "react";

/**
 * Reusable mathematical background.
 *
 * This component creates a subtle academic / mathematical
 * visual layer without using external images.
 */

const MathBackground = ({
    children,
    variant = "light",
    className = "",
}) => {
    const isDark = variant === "dark";

    return (
        <div
            className={`relative overflow-hidden ${isDark
                    ? "bg-[#101A2F] text-white"
                    : "bg-[#F8F5ED] text-[#14213D]"
                } ${className}`}
        >
            {/* Mathematical grid */}
            <div
                className={`pointer-events-none absolute inset-0 ${isDark ? "opacity-[0.06]" : "opacity-[0.055]"
                    }`}
                style={{
                    backgroundImage: `
                        linear-gradient(
                            ${isDark ? "#ffffff" : "#14213D"} 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            ${isDark ? "#ffffff" : "#14213D"} 1px,
                            transparent 1px
                        )
                    `,
                    backgroundSize: "42px 42px",
                }}
            />

            {/* Large mathematical formula */}
            <div
                className={`pointer-events-none absolute -right-10 top-10 select-none font-serif text-[120px] font-bold leading-none ${isDark
                        ? "text-white/[0.025]"
                        : "text-[#14213D]/[0.035]"
                    } sm:text-[180px] lg:text-[240px]`}
                aria-hidden="true"
            >
                ∫
            </div>

            {/* Decorative circle */}
            <div
                className={`pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full border ${isDark
                        ? "border-white/10"
                        : "border-[#B58B3C]/15"
                    }`}
                aria-hidden="true"
            />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default MathBackground;
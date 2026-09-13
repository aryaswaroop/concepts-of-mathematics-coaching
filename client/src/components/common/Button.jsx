import React from "react";

/**
 * Reusable Button Component
 *
 * Supports:
 * - Internal navigation
 * - External links
 * - Primary / secondary variants
 * - Responsive design
 */

const Button = ({
    children,
    href,
    variant = "primary",
    className = "",
    type = "button",
    onClick,
}) => {
    const baseStyles =
        "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary:
            "bg-[#14213D] text-white hover:bg-[#0d172b] focus:ring-[#14213D]",

        secondary:
            "border border-[#14213D] bg-transparent text-[#14213D] hover:bg-[#14213D] hover:text-white focus:ring-[#14213D]",

        light:
            "border border-white/40 bg-white text-[#14213D] hover:bg-transparent hover:text-white focus:ring-white",
    };

    const classes = `${baseStyles} ${variants[variant]} ${className}`;

    // Use anchor when href is provided
    if (href) {
        return (
            <a
                href={href}
                className={classes}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={classes}
        >
            {children}
        </button>
    );
};

export default Button;
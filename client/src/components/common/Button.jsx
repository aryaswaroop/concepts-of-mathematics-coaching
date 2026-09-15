import { Link } from "react-router-dom";

const Button = ({
    children,
    to,
    type = "button",
    variant = "primary",
    onClick,
    className = "",
}) => {
    const baseClasses =
        "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";

    const variants = {
        primary:
            "bg-blue-600 text-white shadow-sm hover:bg-blue-700 hover:shadow-md",
        secondary:
            "border border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50",
        dark:
            "bg-slate-900 text-white hover:bg-slate-800",
    };

    const classes = `${baseClasses} ${variants[variant]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={classes}>
                {children}
            </Link>
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
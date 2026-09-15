const MathPattern = ({
    variant = "grid",
    className = "",
    opacity = "opacity-100",
}) => {
    const patterns = {
        grid: (
            <div
                className="absolute inset-0 opacity-[0.55]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(37, 99, 235, 0.07) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(37, 99, 235, 0.07) 1px, transparent 1px)
                    `,
                    backgroundSize: "32px 32px",
                }}
            />
        ),

        dots: (
            <div
                className="absolute inset-0 opacity-[0.55]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(37, 99, 235, 0.22) 1px, transparent 1px)",
                    backgroundSize: "18px 18px",
                }}
            />
        ),

        coordinates: (
            <div
                className="absolute inset-0 opacity-[0.4]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(37, 99, 235, 0.08) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(37, 99, 235, 0.08) 1px, transparent 1px)
                    `,
                    backgroundSize: "48px 48px",
                }}
            >
                <div className="absolute left-1/2 top-0 h-full w-px bg-blue-500/10" />
                <div className="absolute left-0 top-1/2 h-px w-full bg-blue-500/10" />
            </div>
        ),

        equations: (
            <div className="absolute inset-0 overflow-hidden select-none text-blue-600/[0.055]">
                <span className="absolute left-[8%] top-[15%] text-6xl font-bold">
                    ∑
                </span>

                <span className="absolute right-[12%] top-[12%] text-5xl font-bold">
                    π
                </span>

                <span className="absolute left-[18%] bottom-[18%] text-5xl font-bold">
                    √x
                </span>

                <span className="absolute right-[20%] bottom-[12%] text-4xl font-bold">
                    f(x)
                </span>

                <span className="absolute left-[48%] top-[28%] text-4xl font-bold">
                    x² + y²
                </span>

                <span className="absolute right-[38%] bottom-[25%] text-4xl font-bold">
                    ∫
                </span>
            </div>
        ),
    };

    return (
        <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 overflow-hidden ${opacity} ${className}`}
        >
            {patterns[variant] || patterns.grid}
        </div>
    );
};

export default MathPattern;
import { motion } from "framer-motion";

const symbols = [
    { value: "∑", className: "left-[7%] top-[14%]", size: "text-6xl" },
    { value: "π", className: "right-[10%] top-[12%]", size: "text-5xl" },
    { value: "√x", className: "left-[12%] bottom-[18%]", size: "text-5xl" },
    { value: "f(x)", className: "right-[13%] bottom-[16%]", size: "text-4xl" },
    { value: "∫", className: "left-[38%] top-[18%]", size: "text-5xl" },
    { value: "x²+y²", className: "right-[32%] bottom-[13%]", size: "text-3xl" },
];

const AuthBackground = () => {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
        >
            {/* Mathematical grid */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        linear-gradient(
                            to right,
                            rgba(96,165,250,0.075) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            to bottom,
                            rgba(96,165,250,0.075) 1px,
                            transparent 1px
                        )
                    `,
                    backgroundSize: "34px 34px",
                }}
            />

            {/* Large radial atmosphere */}
            <motion.div
                className="absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[120px]"
                animate={{
                    x: [0, 35, 0],
                    y: [0, 20, 0],
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute -bottom-40 -right-40 h-[580px] w-[580px] rounded-full bg-blue-400/10 blur-[130px]"
                animate={{
                    x: [0, -30, 0],
                    y: [0, -25, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 17,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Coordinate axes */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px bg-blue-400/[0.08] lg:block" />
            <div className="absolute left-0 top-1/2 hidden h-px w-full bg-blue-400/[0.08] lg:block" />

            {/* Mathematical symbols */}
            {symbols.map((symbol, index) => (
                <motion.span
                    key={symbol.value}
                    className={`absolute select-none font-bold text-blue-200/[0.14] ${symbol.className} ${symbol.size}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{
                        opacity: [0.04, 0.14, 0.04],
                        y: [0, index % 2 === 0 ? -18 : 18, 0],
                        rotate: [0, index % 2 === 0 ? 4 : -4, 0],
                    }}
                    transition={{
                        duration: 7 + index,
                        delay: index * 0.35,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {symbol.value}
                </motion.span>
            ))}

            {/* Decorative orbit */}
            <motion.div
                className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/[0.07]"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 45,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            <motion.div
                className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/[0.05]"
                animate={{ rotate: -360 }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
        </div>
    );
};

export default AuthBackground;
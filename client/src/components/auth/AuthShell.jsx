import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import AuthBackground from "./AuthBackground";
import AuthBrand from "./AuthBrand";

const AuthShell = ({
    children,
    title,
    description,
    eyebrow = "Secure learning workspace",
    backLabel = "Back to website",
    backTo = "/",
}) => {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#07111f]">
            <AuthBackground />

            <div className="relative z-10 min-h-screen">
                <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col px-5 py-6 sm:px-8 lg:px-10">
                    {/* Top brand */}
                    <div className="flex items-center justify-between">
                        <AuthBrand />

                        <Link
                            to={backTo}
                            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 shadow-lg shadow-black/10 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/20"
                        >
                            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
                            {backLabel}
                        </Link>
                    </div>

                    {/* Main */}
                    <div className="flex flex-1 items-center justify-center py-10 lg:py-12">
                        <div className="grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr_480px] lg:gap-20">
                            {/* Left content */}
                            <motion.div
                                initial={{ opacity: 0, x: -25 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.7,
                                    ease: "easeOut",
                                }}
                                className="hidden lg:block"
                            >
                                <div className="max-w-xl">
                                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/10 bg-blue-400/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200/70">
                                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]" />
                                        {eyebrow}
                                    </div>

                                    <h1 className="font-[var(--font-heading)] text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-white xl:text-6xl">
                                        {title}
                                    </h1>

                                    <p className="mt-6 max-w-lg text-sm leading-7 text-slate-300/75 xl:text-base">
                                        {description}
                                    </p>

                                    <div className="mt-10 flex items-center gap-8 text-xs font-semibold text-slate-400">
                                        <span>Concept clarity</span>
                                        <span className="h-1 w-1 rounded-full bg-blue-400/70" />
                                        <span>Regular testing</span>
                                        <span className="h-1 w-1 rounded-full bg-blue-400/70" />
                                        <span>Personal guidance</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Form area */}
                            <motion.div
                                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                }}
                                transition={{
                                    duration: 0.65,
                                    delay: 0.1,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                <div className="rounded-[28px] border border-white/60 bg-white/95 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-7">
                                    <div className="mb-7 lg:hidden">
                                        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600">
                                            {eyebrow}
                                        </p>

                                        <h1 className="text-3xl font-extrabold tracking-tight text-slate-950">
                                            {title}
                                        </h1>

                                        <p className="mt-3 text-sm leading-6 text-slate-500">
                                            {description}
                                        </p>
                                    </div>

                                    {children}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center pb-1">
                        <p className="text-[10px] font-medium tracking-wide text-slate-500/60">
                            Concepts of Mathematics • Learning with purpose
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AuthShell;
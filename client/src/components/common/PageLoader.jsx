import { motion } from "framer-motion";

const PageLoader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-slate-950"
        >
            <div className="flex flex-col items-center text-center">
                {/* Text-based brand identity */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">
                        Concepts
                    </p>

                    <h1 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        of Mathematics
                    </h1>
                </motion.div>

                {/* Loading indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8"
                >
                    <div className="h-1 w-36 overflow-hidden rounded-full bg-slate-800">
                        <motion.div
                            className="h-full w-1/2 rounded-full bg-blue-500"
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </div>

                    <p className="mt-4 text-xs text-slate-500">
                        Preparing your learning experience...
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default PageLoader;
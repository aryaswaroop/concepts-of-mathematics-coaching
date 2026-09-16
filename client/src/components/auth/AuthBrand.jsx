import { motion } from "framer-motion";

const AuthBrand = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
        >
            <motion.div
                whileHover={{
                    scale: 1.06,
                    rotate: -2,
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 18,
                }}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-sm font-extrabold tracking-tight text-white shadow-lg shadow-blue-950/20 backdrop-blur-md"
            >
                CM
            </motion.div>

            <div>
                <p className="text-sm font-extrabold tracking-tight text-white">
                    Concepts of Mathematics
                </p>

                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200/70">
                    Mathematics Learning
                </p>
            </div>
        </motion.div>
    );
};

export default AuthBrand;
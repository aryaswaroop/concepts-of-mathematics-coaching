import { motion } from "framer-motion";
import MathPattern from "./MathPattern";

const PageHero = ({
    eyebrow,
    title,
    description,
    pattern = "grid",
}) => {
    return (
        <section className="relative isolate overflow-hidden border-b border-slate-200 bg-slate-950">
            <MathPattern
                variant={pattern}
                opacity="opacity-100"
            />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_35%)]" />

            <div className="relative mx-auto max-w-[1280px] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65 }}
                    className="max-w-3xl"
                >
                    {eyebrow && (
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
                            {eyebrow}
                        </p>
                    )}

                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        {title}
                    </h1>

                    {description && (
                        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                            {description}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default PageHero;
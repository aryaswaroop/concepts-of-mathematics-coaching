import { motion } from "framer-motion";
import {
    ExternalLink,
    MapPin,
} from "lucide-react";
import MathPattern from "../common/MathPattern";

const LocationSection = () => {
    return (
        <section
            id="location"
            className="relative overflow-hidden bg-white py-16 sm:py-20"
        >
            <MathPattern variant="grid" />

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-7">
                <div className="grid items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                            Location
                        </p>

                        <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.045em] text-slate-950 sm:text-4xl">
                            Find Concepts of Mathematics.
                        </h2>

                        <p className="mt-4 text-base leading-7 text-slate-600">
                            Visit the coaching centre for admission,
                            batch information or a direct conversation with
                            the teacher.
                        </p>

                        <motion.div
                            whileHover={{ y: -4 }}
                            className="mt-7 rounded-2xl border border-slate-200/80 bg-white/85 p-6 shadow-[0_15px_40px_rgba(15,23,42,0.05)] backdrop-blur"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                <MapPin size={20} />
                            </div>

                            <h3 className="mt-5 font-extrabold text-slate-950">
                                Coaching Centre
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Near Shiv Mandir,
                                <br />
                                Babugaon,
                                <br />
                                Hazaribagh, Jharkhand 825301
                            </p>

                            <button
                                type="button"
                                className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600"
                            >
                                Open location

                                <ExternalLink
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </button>
                        </motion.div>
                    </div>

                    <div className="relative min-h-[340px] overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-50 shadow-[0_20px_55px_rgba(15,23,42,0.06)]">
                        <div className="absolute inset-0 opacity-70">
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: `
                                        linear-gradient(to right, rgba(37, 99, 235, 0.08) 1px, transparent 1px),
                                        linear-gradient(to bottom, rgba(37, 99, 235, 0.08) 1px, transparent 1px)
                                    `,
                                    backgroundSize: "32px 32px",
                                }}
                            />
                        </div>

                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <motion.div
                                animate={{
                                    scale: [1, 1.08, 1],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="flex h-20 w-20 items-center justify-center rounded-full border-8 border-blue-100 bg-white text-blue-600 shadow-xl"
                            >
                                <MapPin size={27} />
                            </motion.div>
                        </div>

                        <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-lg backdrop-blur">
                            <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-600">
                                Location
                            </p>

                            <p className="mt-1 text-sm font-bold text-slate-800">
                                Near Shiv Mandir, Babugaon
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;
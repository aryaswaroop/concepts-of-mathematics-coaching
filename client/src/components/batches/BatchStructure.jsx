import { motion } from "framer-motion";
import {
    BookOpen,
    Clock3,
    Settings2,
    UsersRound,
} from "lucide-react";
import MathPattern from "../common/MathPattern";

const structure = [
    {
        icon: BookOpen,
        title: "Course Linked",
        description:
            "Each batch is associated with a Class 11 or Class 12 Mathematics course.",
    },
    {
        icon: Clock3,
        title: "Teacher Managed Timing",
        description:
            "Batch timings can be adjusted according to the actual teaching schedule.",
    },
    {
        icon: UsersRound,
        title: "Capacity Controlled",
        description:
            "Each batch has a defined capacity so admissions can be managed responsibly.",
    },
    {
        icon: Settings2,
        title: "Flexible Structure",
        description:
            "New batches can be introduced when existing capacity becomes insufficient.",
    },
];

const BatchStructure = () => {
    return (
        <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
            <MathPattern variant="grid" />

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-7">

                <div className="grid items-end gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                            How Batches Work
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                            A simple structure with
                            <span className="text-blue-600">
                                {" "}flexibility.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">
                        The batch system is designed around the actual
                        requirements of the coaching institute rather than
                        forcing students into a rigid timetable.
                    </p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {structure.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.07,
                                }}
                                whileHover={{
                                    y: -4,
                                }}
                                className="rounded-2xl border border-slate-200 bg-white/75 p-6 shadow-sm backdrop-blur-xl"
                            >
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                    <Icon className="h-5 w-5" />
                                </div>

                                <h3 className="mt-6 text-lg font-extrabold text-slate-950">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-slate-600">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BatchStructure;
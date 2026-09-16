import { useMemo } from "react";
import { motion } from "framer-motion";
import {
    BookOpen,
    CheckCircle2,
    GraduationCap,
} from "lucide-react";
import MathPattern from "../common/MathPattern";

const FeeStructure = ({
    courses = [],
    loading = false,
    error = null,
}) => {
    const displayCourses = useMemo(() => {
        return courses
            .filter(
                (course) =>
                    course &&
                    course.isActive !== false
            )
            .filter(
                (course) =>
                    String(course.class) === "11" ||
                    String(course.class) === "12"
            )
            .sort(
                (a, b) =>
                    Number(a.class || 0) -
                    Number(b.class || 0)
            );
    }, [courses]);

    const getCourseIcon = (courseClass) => {
        return String(courseClass) === "11"
            ? BookOpen
            : GraduationCap;
    };

    const getCoursePoints = (course) => {
        if (String(course.class) === "11") {
            return [
                "Mathematics-focused coaching",
                "Regular practice and testing",
                "Concept-oriented learning",
            ];
        }

        return [
            "Board-oriented Mathematics preparation",
            "Regular testing and revision",
            "Focused academic guidance",
        ];
    };

    const formatFee = (fee) => {
        if (
            fee === undefined ||
            fee === null ||
            fee === ""
        ) {
            return "Fee on enquiry";
        }

        const numericFee = Number(fee);

        if (Number.isNaN(numericFee)) {
            return String(fee);
        }

        return `₹${numericFee.toLocaleString("en-IN")}`;
    };

    return (
        <section className="relative overflow-hidden bg-white py-16 sm:py-20">
            <MathPattern variant="grid" />

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-7">
                <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                            Fee Structure
                        </p>

                        <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.045em] text-slate-950 sm:text-4xl">
                            Simple course-based fee structure.
                        </h2>

                        <p className="mt-4 text-base leading-7 text-slate-600">
                            The current coaching fee is organised according to
                            the student's Class 11 or Class 12 Mathematics
                            course.
                        </p>
                    </div>

                    <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-500">
                        Current base fee
                    </div>
                </div>

                <div className="mt-10 grid gap-5 lg:grid-cols-2">
                    {loading &&
                        Array.from({ length: 2 }).map(
                            (_, index) => (
                                <div
                                    key={`fee-skeleton-${index}`}
                                    className="animate-pulse rounded-[1.75rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_15px_45px_rgba(15,23,42,0.06)] sm:p-8"
                                >
                                    <div className="flex items-start justify-between gap-5">
                                        <div className="h-12 w-12 rounded-xl bg-slate-200" />

                                        <div className="text-right">
                                            <div className="ml-auto h-3 w-20 rounded bg-slate-200" />
                                            <div className="mt-2 ml-auto h-8 w-24 rounded bg-slate-200" />
                                        </div>
                                    </div>

                                    <div className="mt-6 h-3 w-20 rounded bg-slate-200" />

                                    <div className="mt-2 h-6 w-48 rounded bg-slate-200" />

                                    <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                                        <div className="h-4 w-4/5 rounded bg-slate-100" />
                                        <div className="h-4 w-3/4 rounded bg-slate-100" />
                                        <div className="h-4 w-2/3 rounded bg-slate-100" />
                                    </div>
                                </div>
                            )
                        )}

                    {!loading &&
                        !error &&
                        displayCourses.map(
                            (course, index) => {
                                const Icon = getCourseIcon(
                                    course.class
                                );

                                const points =
                                    getCoursePoints(course);

                                return (
                                    <motion.article
                                        key={
                                            course._id ||
                                            course.class
                                        }
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
                                        }}
                                        transition={{
                                            delay:
                                                index * 0.08,
                                        }}
                                        whileHover={{
                                            y: -5,
                                        }}
                                        className="relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_15px_45px_rgba(15,23,42,0.06)] backdrop-blur sm:p-8"
                                    >
                                        <div className="flex items-start justify-between gap-5">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                                <Icon
                                                    size={21}
                                                />
                                            </div>

                                            <div className="text-right">
                                                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                                                    Course Fee
                                                </p>

                                                <p className="mt-1 text-3xl font-extrabold tracking-[-0.04em] text-slate-950">
                                                    {formatFee(
                                                        course.originalFee
                                                    )}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
                                            Class{" "}
                                            {course.class}
                                        </p>

                                        <h3 className="mt-1 text-xl font-extrabold text-slate-950">
                                            {course.name ||
                                                `Class ${course.class} Mathematics`}
                                        </h3>

                                        <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                                            {points.map(
                                                (point) => (
                                                    <div
                                                        key={
                                                            point
                                                        }
                                                        className="flex items-center gap-3 text-sm font-medium text-slate-600"
                                                    >
                                                        <CheckCircle2
                                                            size={
                                                                17
                                                            }
                                                            className="shrink-0 text-blue-600"
                                                        />

                                                        {
                                                            point
                                                        }
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </motion.article>
                                );
                            }
                        )}

                    {!loading &&
                        !error &&
                        displayCourses.length ===
                        0 && (
                            <div className="rounded-[1.75rem] border border-slate-200/80 bg-white/85 px-6 py-10 text-center shadow-[0_15px_45px_rgba(15,23,42,0.06)] lg:col-span-2">
                                <h3 className="font-extrabold text-slate-950">
                                    Fee information is
                                    currently unavailable.
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    Please check again later or
                                    contact the coaching centre
                                    for current fee details.
                                </p>
                            </div>
                        )}

                    {!loading && error && (
                        <div className="rounded-[1.75rem] border border-red-100 bg-red-50/70 px-6 py-10 text-center lg:col-span-2">
                            <h3 className="font-extrabold text-slate-950">
                                Fee information is temporarily
                                unavailable.
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Please check again later.
                            </p>
                        </div>
                    )}
                </div>

                <p className="mt-5 text-xs leading-5 text-slate-500">
                    The displayed base fees reflect the current coaching fee
                    structure. Any approved discount or payment adjustment
                    should be represented by the payment/enrollment records
                    rather than by changing the base course fee.
                </p>
            </div>
        </section>
    );
};

export default FeeStructure;
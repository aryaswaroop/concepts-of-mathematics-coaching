import { motion } from "framer-motion";
import {
    BookOpen,
    CheckCircle2,
    Edit3,
    GraduationCap,
    ShieldCheck,
    UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

const infoItem = (label, value) => (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
            {label}
        </p>

        <p className="mt-2 text-sm font-semibold text-slate-800">
            {value}
        </p>
    </div>
);

const StudentProfile = () => {
    return (
        <div className="mx-auto w-full max-w-[1280px] px-4 py-6 sm:px-6 lg:px-7 lg:py-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
            >
                <div>
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                        <UserRound className="h-3.5 w-3.5" />
                        Personal information
                    </div>

                    <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                        My Profile
                    </h1>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                        Manage your personal and academic information from one
                        place.
                    </p>
                </div>

                <button
                    type="button"
                    className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600"
                >
                    <Edit3 className="h-4 w-4" />
                    Edit Profile
                </button>
            </motion.div>

            {/* Profile Hero */}
            <motion.section
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="relative mb-6 overflow-hidden rounded-[28px] bg-slate-950 p-6 text-white shadow-xl sm:p-8"
            >
                <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, rgba(96,165,250,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(96,165,250,0.35) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                    }}
                />

                <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-xl font-extrabold ring-1 ring-white/15">
                            S
                        </div>

                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
                                Student Account
                            </p>

                            <h2 className="mt-1 text-2xl font-extrabold">
                                Student
                            </h2>

                            <p className="mt-1 text-sm text-slate-300">
                                Profile information will appear here after
                                account data is connected.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-bold text-emerald-300">
                        <CheckCircle2 className="h-4 w-4" />
                        Account status: Data pending
                    </div>
                </div>
            </motion.section>

            {/* Information */}
            <div className="grid gap-6 lg:grid-cols-2">
                <motion.section
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
                >
                    <div className="mb-5 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <UserRound className="h-5 w-5" />
                        </div>

                        <div>
                            <h2 className="font-extrabold text-slate-950">
                                Personal Information
                            </h2>
                            <p className="text-xs text-slate-400">
                                Connected account information
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                        {infoItem("Full Name", "Data pending")}
                        {infoItem("Email Address", "Data pending")}
                        {infoItem("Mobile Number", "Data pending")}
                        {infoItem("Date of Birth", "Data pending")}
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
                >
                    <div className="mb-5 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <GraduationCap className="h-5 w-5" />
                        </div>

                        <div>
                            <h2 className="font-extrabold text-slate-950">
                                Academic Information
                            </h2>
                            <p className="text-xs text-slate-400">
                                Learning and enrollment details
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                        {infoItem("Course", "Mathematics")}
                        {infoItem("Class", "Data pending")}
                        {infoItem("Batch", "Data pending")}
                        {infoItem("Enrollment", "Data pending")}
                    </div>
                </motion.section>
            </div>

            {/* Account Areas */}
            <motion.section
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
            >
                <div className="mb-5">
                    <h2 className="font-extrabold text-slate-950">
                        Account Overview
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                        Important account areas available through the student
                        portal.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <Link
                        to="/student/learning"
                        className="group rounded-2xl border border-slate-200 p-4 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                    >
                        <BookOpen className="h-5 w-5 text-blue-600 transition group-hover:scale-110" />
                        <h3 className="mt-3 font-bold text-slate-900">
                            My Learning
                        </h3>
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                            View your academic journey and study resources.
                        </p>
                    </Link>

                    <Link
                        to="/student/payments"
                        className="group rounded-2xl border border-slate-200 p-4 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                    >
                        <ShieldCheck className="h-5 w-5 text-blue-600 transition group-hover:scale-110" />
                        <h3 className="mt-3 font-bold text-slate-900">
                            Fees & Payments
                        </h3>
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                            Review admission and payment information.
                        </p>
                    </Link>

                    <Link
                        to="/student/settings"
                        className="group rounded-2xl border border-slate-200 p-4 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                    >
                        <UserRound className="h-5 w-5 text-blue-600 transition group-hover:scale-110" />
                        <h3 className="mt-3 font-bold text-slate-900">
                            Account Settings
                        </h3>
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                            Manage your portal preferences and security.
                        </p>
                    </Link>
                </div>
            </motion.section>
        </div>
    );
};

export default StudentProfile;
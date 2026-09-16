import { useState } from "react";
import { useForm } from "react-hook-form";
import {
    ArrowRight,
    CheckCircle2,
    Mail,
    MessageSquare,
    Phone,
    User,
} from "lucide-react";

import { createEnquiry } from "../../services/api";
import useApi from "../../hooks/useApi";

const EnquiryForm = () => {
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const {
        loading,
        error,
        execute,
    } = useApi(createEnquiry);

    const onSubmit = async (data) => {
        setIsSuccess(false);

        try {
            await execute(data);

            reset();
            setIsSuccess(true);
        } catch (error) {
            setIsSuccess(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-8"
        >
            {/* Header */}
            <div className="mb-7">
                <div className="mb-2 flex items-center gap-2 text-sm font-bold text-blue-600">
                    <MessageSquare className="h-4 w-4" />
                    <span>Send an Enquiry</span>
                </div>

                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                    Let&apos;s talk about your admission
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                    Fill in your details and send us your enquiry. Our team
                    will get back to you with the relevant information.
                </p>
            </div>

            {/* Form Fields */}
            <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                    <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-bold text-slate-700"
                    >
                        Full Name
                    </label>

                    <div className="relative">
                        <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                        <input
                            id="name"
                            type="text"
                            disabled={loading}
                            placeholder="Enter your full name"
                            {...register("name", {
                                required: "Please enter your name.",
                            })}
                            className={`w-full rounded-xl border bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10 ${errors.name
                                    ? "border-red-300 focus:border-red-400"
                                    : "border-slate-200 focus:border-blue-500"
                                } ${loading
                                    ? "cursor-not-allowed opacity-60"
                                    : ""
                                }`}
                        />
                    </div>

                    {errors.name && (
                        <p className="mt-1.5 text-xs font-medium text-red-500">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                {/* Phone */}
                <div>
                    <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-bold text-slate-700"
                    >
                        Phone Number
                    </label>

                    <div className="relative">
                        <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                        <input
                            id="phone"
                            type="tel"
                            disabled={loading}
                            placeholder="Enter your phone number"
                            {...register("phone", {
                                required: "Please enter your phone number.",
                            })}
                            className={`w-full rounded-xl border bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10 ${errors.phone
                                    ? "border-red-300 focus:border-red-400"
                                    : "border-slate-200 focus:border-blue-500"
                                } ${loading
                                    ? "cursor-not-allowed opacity-60"
                                    : ""
                                }`}
                        />
                    </div>

                    {errors.phone && (
                        <p className="mt-1.5 text-xs font-medium text-red-500">
                            {errors.phone.message}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-bold text-slate-700"
                    >
                        Email Address
                        <span className="ml-1 font-normal text-slate-400">
                            (Optional)
                        </span>
                    </label>

                    <div className="relative">
                        <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                        <input
                            id="email"
                            type="email"
                            disabled={loading}
                            placeholder="Enter your email"
                            {...register("email", {
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message:
                                        "Please enter a valid email address.",
                                },
                            })}
                            className={`w-full rounded-xl border bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10 ${errors.email
                                    ? "border-red-300 focus:border-red-400"
                                    : "border-slate-200 focus:border-blue-500"
                                } ${loading
                                    ? "cursor-not-allowed opacity-60"
                                    : ""
                                }`}
                        />
                    </div>

                    {errors.email && (
                        <p className="mt-1.5 text-xs font-medium text-red-500">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                {/* Subject */}
                <div>
                    <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-bold text-slate-700"
                    >
                        Enquiry About
                    </label>

                    <select
                        id="subject"
                        disabled={loading}
                        {...register("subject", {
                            required: "Please select an enquiry type.",
                        })}
                        className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:bg-white focus:ring-4 focus:ring-blue-500/10 ${errors.subject
                                ? "border-red-300 focus:border-red-400"
                                : "border-slate-200 focus:border-blue-500"
                            } ${loading
                                ? "cursor-not-allowed opacity-60"
                                : ""
                            }`}
                    >
                        <option value="">Select an option</option>
                        <option value="course">
                            Course Information
                        </option>
                        <option value="batch">
                            Batch Information
                        </option>
                        <option value="admission">
                            Admission
                        </option>
                        <option value="general">
                            General Enquiry
                        </option>
                    </select>

                    {errors.subject && (
                        <p className="mt-1.5 text-xs font-medium text-red-500">
                            {errors.subject.message}
                        </p>
                    )}
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                    <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-bold text-slate-700"
                    >
                        Message
                    </label>

                    <textarea
                        id="message"
                        rows={5}
                        disabled={loading}
                        placeholder="Write your enquiry here..."
                        {...register("message", {
                            required: "Please enter your message.",
                        })}
                        className={`w-full resize-none rounded-xl border bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10 ${errors.message
                                ? "border-red-300 focus:border-red-400"
                                : "border-slate-200 focus:border-blue-500"
                            } ${loading
                                ? "cursor-not-allowed opacity-60"
                                : ""
                            }`}
                    />

                    {errors.message && (
                        <p className="mt-1.5 text-xs font-medium text-red-500">
                            {errors.message.message}
                        </p>
                    )}
                </div>
            </div>

            {/* API Error */}
            {error && (
                <div className="mt-5 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                    <p className="font-bold">
                        Unable to submit your enquiry.
                    </p>

                    <p className="mt-0.5 text-xs text-red-600">
                        {error}
                    </p>
                </div>
            )}

            {/* Success Message */}
            {isSuccess && (
                <div className="mt-5 flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                    <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] shrink-0" />

                    <div>
                        <p className="font-bold">
                            Enquiry submitted successfully.
                        </p>

                        <p className="mt-0.5 text-xs text-emerald-600">
                            Thank you for contacting Concepts of Mathematics.
                            We will get back to you soon.
                        </p>
                    </div>
                </div>
            )}

            {/* Footer / Submit */}
            <div className="mt-6 flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-xs leading-5 text-slate-400">
                    Your enquiry will be recorded securely and handled by the
                    coaching institute.
                </p>

                <button
                    type="submit"
                    disabled={loading}
                    className={`group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25 focus:outline-none focus:ring-4 focus:ring-blue-500/20 ${loading
                            ? "cursor-not-allowed opacity-70 hover:translate-y-0"
                            : ""
                        }`}
                >
                    {loading ? "Sending..." : "Send Enquiry"}

                    {!loading && (
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    )}
                </button>
            </div>
        </form>
    );
};

export default EnquiryForm;
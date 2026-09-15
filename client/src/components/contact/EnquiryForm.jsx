import { useForm } from "react-hook-form";
import {
    ArrowRight,
    Mail,
    MessageSquare,
    Phone,
    User,
} from "lucide-react";

const EnquiryForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Enquiry form data:", data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-[0_20px_55px_rgba(15,23,42,0.06)] sm:p-8"
        >
            <div className="grid gap-5 sm:grid-cols-2">
                <div>
                    <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-bold text-slate-800"
                    >
                        Name
                    </label>

                    <div className="relative">
                        <User
                            size={17}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            {...register("name", {
                                required: "Name is required",
                            })}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                        />
                    </div>

                    {errors.name && (
                        <p className="mt-1.5 text-xs font-medium text-red-500">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-bold text-slate-800"
                    >
                        Phone
                    </label>

                    <div className="relative">
                        <Phone
                            size={17}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            {...register("phone", {
                                required: "Phone is required",
                            })}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                        />
                    </div>

                    {errors.phone && (
                        <p className="mt-1.5 text-xs font-medium text-red-500">
                            {errors.phone.message}
                        </p>
                    )}
                </div>

                <div className="sm:col-span-2">
                    <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-bold text-slate-800"
                    >
                        Email
                    </label>

                    <div className="relative">
                        <Mail
                            size={17}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            {...register("email")}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-bold text-slate-800"
                    >
                        Enquiry Type
                    </label>

                    <select
                        id="subject"
                        {...register("subject", {
                            required: "Please select an enquiry type",
                        })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    >
                        <option value="">
                            Select enquiry type
                        </option>
                        <option value="course">
                            Course Information
                        </option>
                        <option value="batch">
                            Batch Information
                        </option>
                        <option value="admission">
                            Admission & Fees
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

                <div className="sm:col-span-2">
                    <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-bold text-slate-800"
                    >
                        Message
                    </label>

                    <div className="relative">
                        <MessageSquare
                            size={17}
                            className="absolute left-4 top-4 text-slate-400"
                        />

                        <textarea
                            id="message"
                            rows="5"
                            placeholder="Write your enquiry..."
                            {...register("message", {
                                required: "Message is required",
                            })}
                            className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                        />
                    </div>

                    {errors.message && (
                        <p className="mt-1.5 text-xs font-medium text-red-500">
                            {errors.message.message}
                        </p>
                    )}
                </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6">
                <p className="max-w-md text-xs leading-5 text-slate-500">
                    Your enquiry will be connected to the coaching
                    enquiry workflow when backend integration is enabled.
                </p>

                <button
                    type="submit"
                    className="group inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600"
                >
                    Send Enquiry

                    <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                </button>
            </div>
        </form>
    );
};

export default EnquiryForm;
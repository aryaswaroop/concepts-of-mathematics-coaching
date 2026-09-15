import { motion } from "framer-motion";
import {
    Clock3,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";
import MathPattern from "../common/MathPattern";

const ContactInformation = () => {
    const information = [
        {
            icon: MapPin,
            title: "Visit the Coaching Centre",
            value: "Near Shiv Mandir, Babugaon, Hazaribagh, Jharkhand 825301",
        },
        {
            icon: Phone,
            title: "Phone",
            value: "Contact details available through the coaching centre",
        },
        {
            icon: Mail,
            title: "Email",
            value: "Email details available through the coaching centre",
        },
        {
            icon: Clock3,
            title: "Enquiry Timing",
            value: "Confirm the current suitable time before visiting",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-white py-16 sm:py-20">
            <MathPattern variant="grid" />

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-7">
                <div className="max-w-2xl">
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                        Contact Information
                    </p>

                    <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.045em] text-slate-950 sm:text-4xl">
                        Reach out when you need clarity.
                    </h2>

                    <p className="mt-4 text-base leading-7 text-slate-600">
                        Whether you are asking about admission, batches,
                        fees or Mathematics coaching, the enquiry system gives
                        you a direct way to start the conversation.
                    </p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {information.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{
                                    opacity: 0,
                                    y: 15,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: index * 0.07,
                                }}
                                whileHover={{ y: -5 }}
                                className="rounded-2xl border border-slate-200/80 bg-white/85 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.04)] backdrop-blur"
                            >
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                    <Icon size={19} />
                                </div>

                                <h3 className="mt-5 font-extrabold text-slate-950">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    {item.value}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ContactInformation;
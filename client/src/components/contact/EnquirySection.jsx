import { motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";
import MathPattern from "../common/MathPattern";
import EnquiryForm from "./EnquiryForm";

const EnquirySection = () => {
    return (
        <section
            id="enquiry"
            className="relative overflow-hidden bg-white py-16 sm:py-20"
        >
            <MathPattern variant="grid" />

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-7">
                <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                    <div className="lg:sticky lg:top-28">
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -15,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                <Send size={21} />
                            </div>

                            <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                                Send an Enquiry
                            </p>

                            <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.045em] text-slate-950 sm:text-4xl">
                                Have a question?
                                <br />
                                Let’s start there.
                            </h2>

                            <p className="mt-4 max-w-md text-base leading-7 text-slate-600">
                                Ask about courses, batches, admission,
                                fees or anything related to the Mathematics
                                coaching process.
                            </p>

                            <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
                                <div className="flex items-start gap-3">
                                    <MessageCircle
                                        size={19}
                                        className="mt-0.5 shrink-0 text-blue-600"
                                    />

                                    <p className="text-sm font-semibold leading-6 text-slate-700">
                                        Your enquiry is securely recorded
                                        through the coaching system and can
                                        be followed up by the institute.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <EnquiryForm />
                </div>
            </div>
        </section>
    );
};

export default EnquirySection;
import React from "react";

/**
 * Website footer.
 *
 * Contains:
 * - Brand
 * - Navigation
 * - Courses
 * - Contact placeholder
 * - Copyright
 */

const Footer = () => {
    return (
        <footer className="bg-[#101A2F] text-white">
            <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <a
                            href="/"
                            className="font-serif text-2xl font-bold"
                        >
                            Concepts of Mathematics
                        </a>

                        <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
                            Focused Mathematics coaching for Class 11 and
                            Class 12 students with regular testing,
                            personal guidance and board-focused preparation.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-[#D4AF62]">
                            Quick Links
                        </h3>

                        <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
                            <a href="/about" className="hover:text-white">
                                About
                            </a>

                            <a href="/courses" className="hover:text-white">
                                Courses
                            </a>

                            <a href="/batches" className="hover:text-white">
                                Batches
                            </a>

                            <a href="/tests-results" className="hover:text-white">
                                Tests & Results
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-[#D4AF62]">
                            Contact
                        </h3>

                        <div className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                            <p>Mathematics Coaching Centre</p>
                            <p>Class 11 & 12 Mathematics</p>
                            <p>Phone: +91 XXXXX XXXXX</p>
                            <p>Email: contact@example.com</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
                    © {new Date().getFullYear()} Concepts of Mathematics.
                    All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import React, { useState } from "react";
import Button from "./Button";

/**
 * Main website navigation.
 *
 * Mobile:
 * - Hamburger menu
 *
 * Desktop:
 * - Full navigation
 */

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navigation = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Courses", href: "/courses" },
        { name: "Batches", href: "/batches" },
        { name: "Tests & Results", href: "/tests-results" },
        { name: "Admission & Fees", href: "/admission-fees" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"
                aria-label="Main Navigation"
            >
                {/* Text based logo */}
                <a
                    href="/"
                    className="group flex flex-col leading-none"
                    aria-label="Concepts of Mathematics Home"
                >
                    <span className="font-serif text-xl font-bold tracking-wide text-[#14213D] sm:text-2xl">
                        Concepts of Mathematics
                    </span>

                    <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#B58B3C] sm:text-[10px]">
                        Mathematics Coaching
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-6 lg:flex">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-[#B58B3C]"
                        >
                            {item.name}
                        </a>
                    ))}

                    <Button href="/contact">
                        Enquire Now
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-[#14213D] lg:hidden"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? "Close" : "Menu"}
                </button>
            </nav>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="border-t border-slate-200 bg-white lg:hidden">
                    <div className="mx-auto flex max-w-7xl flex-col px-5 py-4">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700 hover:text-[#B58B3C]"
                            >
                                {item.name}
                            </a>
                        ))}

                        <a
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-4 text-center"
                        >
                            <Button className="w-full">
                                Enquire Now
                            </Button>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
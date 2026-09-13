import React from "react";

import SEO from "../components/seo/SEO";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CoursesPreview from "../components/home/CoursesPreview";
import BatchPreview from "../components/home/BatchPreview";
import TestSystemPreview from "../components/home/TestSystemPreview";
import BoardPreparation from "../components/home/BoardPreparation";
import CTASection from "../components/home/CTASection";

/**
 * Home Page
 *
 * Complete landing page for Concepts of Mathematics.
 */

const Home = () => {
    return (
        <>
            {/* Page SEO */}
            <SEO
                title="Concepts of Mathematics | Class 11 & 12 Mathematics Coaching"
                description="Concepts of Mathematics provides focused Mathematics coaching for Class 11 and Class 12 students with concept-based teaching, regular tests, personal guidance and board-focused preparation."
            />

            {/* Navigation */}
            <Navbar />

            <main>

                {/* Hero */}
                <HeroSection />

                {/* Key information */}
                <StatsSection />

                {/* Teaching philosophy */}
                <WhyChooseUs />

                {/* Class 11 & 12 */}
                <CoursesPreview />

                {/* Batch structure */}
                <BatchPreview />

                {/* Testing methodology */}
                <TestSystemPreview />

                {/* Board preparation */}
                <BoardPreparation />

                {/* Admission CTA */}
                <CTASection />

            </main>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default Home;
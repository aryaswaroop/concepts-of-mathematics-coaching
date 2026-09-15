import SEO from "../components/seo/SEO";

import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CoursePreview from "../components/home/CoursePreview";
import BatchPreview from "../components/home/BatchPreview";
import TestSystemPreview from "../components/home/TestSystemPreview";
import CTASection from "../components/home/CTASection";

const Home = () => {
    return (
        <>
            <SEO
                title="Concepts of Mathematics | Class 11 & 12 Mathematics Coaching"
                description="Concepts of Mathematics provides focused Class 11 and Class 12 Mathematics coaching with concept clarity, regular tests, personal guidance and board-oriented preparation."
                keywords="Concepts of Mathematics, Class 11 Mathematics coaching, Class 12 Mathematics coaching, Mathematics coaching Hazaribagh, Maths coaching"
            />

            <main>
                <HeroSection />

                <StatsSection />

                <WhyChooseUs />

                <CoursePreview />

                <BatchPreview />

                <TestSystemPreview />

                <CTASection />
            </main>
        </>
    );
};

export default Home;
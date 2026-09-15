import SEO from "../components/seo/SEO";

import AboutHero from "../components/about/AboutHero";
import TeacherProfile from "../components/about/TeacherProfile";
import OurApproach from "../components/about/OurApproach";
import TeachingPhilosophy from "../components/about/TeachingPhilosophy";
import StudyResources from "../components/about/StudyResources";
import StudentSupport from "../components/about/StudentSupport";
import AcademicJourney from "../components/about/AcademicJourney";
import AboutCTA from "../components/about/AboutCTA";

const About = () => {
  return (
    <>
      <SEO
        title="About | Concepts of Mathematics"
        description="Learn about Concepts of Mathematics, our experienced teaching approach, study resources, student support and academic preparation for Class 11 and 12 Mathematics."
        keywords="About Concepts of Mathematics, experienced Mathematics teacher, Mathematics coaching Hazaribagh, Class 11 Mathematics, Class 12 Mathematics, Mathematics teacher"
      />

      <main>
        {/* 01 — Introduction */}
        <AboutHero />

        {/* 02 — Teacher */}
        <TeacherProfile />

        {/* 03 — Learning System */}
        <OurApproach />

        {/* 04 — Teaching Philosophy */}
        <TeachingPhilosophy />

        {/* 05 — Books & Resources */}
        <StudyResources />

        {/* 06 — Student Support */}
        <StudentSupport />

        {/* 07 — Academic Journey */}
        <AcademicJourney />

        {/* 08 — Final CTA */}
        <AboutCTA />
      </main>
    </>
  );
};

export default About;
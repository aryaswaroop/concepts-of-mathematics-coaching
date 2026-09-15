import SEO from "../components/seo/SEO";

import CoursesHero from "../components/courses/CoursesHero";
import Class11Course from "../components/courses/Class11Course";
import Class12Course from "../components/courses/Class12Course";
import LearningOutcomes from "../components/courses/LearningOutcomes";
import CourseBenefits from "../components/courses/CourseBenefits";
import CoursesCTA from "../components/courses/CoursesCTA";

const Courses = () => {
  return (
    <>
      <SEO
        title="Courses | Concepts of Mathematics"
        description="Explore Class 11 and Class 12 Mathematics courses at Concepts of Mathematics, with concept-focused learning, regular practice, testing and personal guidance."
        keywords="Class 11 Mathematics course, Class 12 Mathematics course, Mathematics coaching, Concepts of Mathematics, Mathematics coaching Hazaribagh"
      />

      <main>
        {/* 01 — Course Introduction */}
        <CoursesHero />

        {/* 02 — Class 11 */}
        <Class11Course />

        {/* 03 — Class 12 */}
        <Class12Course />

        {/* 04 — Learning Outcomes */}
        <LearningOutcomes />

        {/* 05 — Course Benefits */}
        <CourseBenefits />

        {/* 06 — Final CTA */}
        <CoursesCTA />
      </main>
    </>
  );
};

export default Courses;
import SEO from "../components/seo/SEO";

import TestsHero from "../components/tests/TestsHero";
import TestCycle from "../components/tests/TestCycle";
import TestCard from "../components/tests/TestCard";
import PerformanceTracking from "../components/tests/PerformanceTracking";
import RankingResults from "../components/tests/RankingResults";
import RewardsRecognition from "../components/tests/RewardsRecognition";
import ImprovementSupport from "../components/tests/ImprovementSupport";
import TestsCTA from "../components/tests/TestsCTA";

const TestsResults = () => {
  return (
    <>
      <SEO
        title="Tests & Results | Concepts of Mathematics"
        description="Explore the test, result, ranking, reward and improvement system at Concepts of Mathematics for Class 11 and Class 12 Mathematics students."
        keywords="Mathematics tests, Class 11 tests, Class 12 tests, Mathematics results, test ranking, student performance, Concepts of Mathematics"
      />

      <main>
        {/* 01 — Introduction */}
        <TestsHero />

        {/* 02 — Assessment Workflow */}
        <TestCycle />

        {/* 03 — Test Information */}
        <section className="relative overflow-hidden bg-white py-16 sm:py-20">
          <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-7">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                Regular Tests
              </p>

              <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.045em] text-slate-950 sm:text-4xl">
                Tests are planned around the learning journey.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Test topics and scope are decided according to
                the teaching plan. Tests may focus on current
                topics or include previously covered concepts
                when required.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <TestCard
                title="Weekly Mathematics Test"
                date="Schedule managed by teacher"
                scope="Current or selected syllabus topics"
                status="Weekly"
                description="Regular assessment designed to check understanding, practice and application of mathematical concepts."
              />

              <TestCard
                title="Combined Topic Assessment"
                date="Schedule managed by teacher"
                scope="Current + previous topics when required"
                status="Assessment"
                description="Tests can combine previously taught concepts with current topics to strengthen retention and preparation."
              />
            </div>

            <p className="mt-5 text-xs leading-5 text-slate-500">
              The cards above represent the UI structure. Actual
              test names, dates, scope and status will be
              populated from the backend during API integration.
            </p>
          </div>
        </section>

        {/* 04 — Performance */}
        <PerformanceTracking />

        {/* 05 — Results & Ranking */}
        <RankingResults />

        {/* 06 — Rewards */}
        <RewardsRecognition />

        {/* 07 — Improvement */}
        <ImprovementSupport />

        {/* 08 — Final CTA */}
        <TestsCTA />
      </main>
    </>
  );
};

export default TestsResults;
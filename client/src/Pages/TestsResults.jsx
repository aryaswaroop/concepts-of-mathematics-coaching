import { useEffect, useMemo } from "react";

import SEO from "../components/seo/SEO";

import TestsHero from "../components/tests/TestsHero";
import TestCycle from "../components/tests/TestCycle";
import TestCard from "../components/tests/TestCard";
import PerformanceTracking from "../components/tests/PerformanceTracking";
import RankingResults from "../components/tests/RankingResults";
import RewardsRecognition from "../components/tests/RewardsRecognition";
import ImprovementSupport from "../components/tests/ImprovementSupport";
import TestsCTA from "../components/tests/TestsCTA";

import {
  getTests,
  getTestResults,
  getRewards,
  getSupportSessions,
} from "../services/api";
import useApi from "../hooks/useApi";

const TestsResults = () => {
  const {
    data,
    loading,
    error,
    execute,
  } = useApi(getTests);

  const {
    data: resultsData,
    loading: resultsLoading,
    error: resultsError,
    execute: executeResults,
  } = useApi(getTestResults);

  const {
    data: rewardsData,
    loading: rewardsLoading,
    error: rewardsError,
    execute: executeRewards,
  } = useApi(getRewards);

  const {
    data: supportData,
    loading: supportLoading,
    error: supportError,
    execute: executeSupportSessions,
  } = useApi(getSupportSessions);

  useEffect(() => {
    execute();
    executeResults();
    executeRewards();
    executeSupportSessions();
  }, [
    execute,
    executeResults,
    executeRewards,
    executeSupportSessions,
  ]);

  const tests = useMemo(() => {
    if (Array.isArray(data?.data)) {
      return data.data;
    }

    if (Array.isArray(data) && Array.isArray(data[0]?.data)) {
      return data[0].data;
    }

    if (Array.isArray(data?.tests)) {
      return data.tests;
    }

    if (Array.isArray(data)) {
      return data;
    }

    return [];
  }, [data]);

  const testResults = useMemo(() => {
    if (Array.isArray(resultsData?.data)) {
      return resultsData.data;
    }

    if (
      Array.isArray(resultsData) &&
      Array.isArray(resultsData[0]?.data)
    ) {
      return resultsData[0].data;
    }

    if (Array.isArray(resultsData?.results)) {
      return resultsData.results;
    }

    if (Array.isArray(resultsData)) {
      return resultsData;
    }

    return [];
  }, [resultsData]);

  const rewards = useMemo(() => {
    if (Array.isArray(rewardsData?.data)) {
      return rewardsData.data;
    }

    if (
      Array.isArray(rewardsData) &&
      Array.isArray(rewardsData[0]?.data)
    ) {
      return rewardsData[0].data;
    }

    if (Array.isArray(rewardsData?.rewards)) {
      return rewardsData.rewards;
    }

    if (Array.isArray(rewardsData)) {
      return rewardsData;
    }

    return [];
  }, [rewardsData]);

  const supportSessions = useMemo(() => {
    if (Array.isArray(supportData?.data)) {
      return supportData.data;
    }

    if (
      Array.isArray(supportData) &&
      Array.isArray(supportData[0]?.data)
    ) {
      return supportData[0].data;
    }

    if (Array.isArray(supportData?.supportSessions)) {
      return supportData.supportSessions;
    }

    if (Array.isArray(supportData)) {
      return supportData;
    }

    return [];
  }, [supportData]);
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
              {loading &&
                Array.from({ length: 2 }).map((_, index) => (
                  <div
                    key={`test-skeleton-${index}`}
                    className="h-[280px] animate-pulse rounded-2xl border border-slate-200 bg-slate-50"
                  />
                ))}

              {!loading &&
                tests.map((test) => (
                  <TestCard
                    key={test._id}
                    title={test.title}
                    date={
                      test.testDate
                        ? new Date(test.testDate).toLocaleDateString(
                          "en-IN",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }
                        )
                        : "Schedule managed by teacher"
                    }
                    scope={
                      Array.isArray(test.topics) &&
                        test.topics.length > 0
                        ? test.topics.join(", ")
                        : "Current or selected syllabus topics"
                    }
                    status={test.status || test.type || "Assessment"}
                    description={`Class ${test.class} Mathematics assessment${test.totalMarks
                      ? ` • ${test.totalMarks} marks`
                      : ""
                      }${test.duration
                        ? ` • ${test.duration} minutes`
                        : ""
                      }`}
                  />
                ))}

              {!loading && tests.length === 0 && !error && (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center lg:col-span-2">
                  <p className="text-sm font-semibold text-slate-600">
                    No tests are currently scheduled.
                  </p>
                </div>
              )}

              {!loading && error && (
                <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center lg:col-span-2">
                  <p className="text-sm font-semibold text-red-600">
                    {error}
                  </p>
                </div>
              )}
            </div>

            <p className="mt-5 text-xs leading-5 text-slate-500">
              Test information is displayed from the active assessment
              records managed by the coaching administration.
            </p>
          </div>
        </section>

        {/* 04 — Performance */}
        <PerformanceTracking
          results={testResults}
          loading={resultsLoading}
          error={resultsError}
        />

        {/* 05 — Results & Ranking */}
        <RankingResults
          results={testResults}
          loading={resultsLoading}
          error={resultsError}
        />

        {/* 06 — Rewards */}
        <RewardsRecognition
          rewards={rewards}
          loading={rewardsLoading}
          error={rewardsError}
        />

        {/* 07 — Improvement */}
        <ImprovementSupport
          supportSessions={supportSessions}
          loading={supportLoading}
          error={supportError}
        />

        {/* 08 — Final CTA */}
        <TestsCTA />
      </main>
    </>
  );
};

export default TestsResults;
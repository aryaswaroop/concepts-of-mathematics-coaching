import SEO from "../components/seo/SEO";

import BatchesHero from "../components/batches/BatchesHero";
import BatchSchedule from "../components/batches/BatchSchedule";
import BatchCard from "../components/batches/BatchCard";
import BatchStructure from "../components/batches/BatchStructure";
import BatchCapacity from "../components/batches/BatchCapacity";
import BatchesCTA from "../components/batches/BatchesCTA";

const Batches = () => {
  return (
    <>
      <SEO
        title="Batches | Concepts of Mathematics"
        description="Explore morning and evening Mathematics batches for Class 11 and Class 12 at Concepts of Mathematics, with teacher-managed schedules and capacity."
        keywords="Mathematics batches, Class 11 batches, Class 12 batches, morning Mathematics batch, evening Mathematics batch, Concepts of Mathematics"
      />

      <main>
        {/* 01 — Introduction */}
        <BatchesHero />

        {/* 02 — Morning / Evening */}
        <BatchSchedule />

        {/* 03 — Current Batch Structure */}
        <section className="relative overflow-hidden bg-white py-8 sm:py-10">
          <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-7">

            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                Batch Overview
              </p>

              <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-3xl">
                Course-specific batch planning.
              </h2>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <BatchCard
                name="Class 11 Mathematics Batch"
                course="Class 11 Mathematics"
                timing="Morning / Evening"
                schedule="Teacher managed"
                capacity="Defined per batch"
                status="Batch availability"
                description="Focused Class 11 learning with concept building, practice and regular evaluation."
              />

              <BatchCard
                name="Class 12 Mathematics Batch"
                course="Class 12 Mathematics"
                timing="Morning / Evening"
                schedule="Teacher managed"
                capacity="Defined per batch"
                status="Batch availability"
                description="Class 12 preparation with regular testing, revision and board-oriented practice."
              />
            </div>

            <p className="mt-5 text-xs leading-5 text-slate-500">
              The batch cards above represent the current UI
              structure. Actual batch names, timings, capacity
              and availability will be populated from the
              backend when API integration begins.
            </p>
          </div>
        </section>

        {/* 04 — Batch Structure */}
        <BatchStructure />

        {/* 05 — Capacity */}
        <BatchCapacity />

        {/* 06 — CTA */}
        <BatchesCTA />
      </main>
    </>
  );
};

export default Batches;
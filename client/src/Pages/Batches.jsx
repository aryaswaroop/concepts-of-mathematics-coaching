import { useEffect, useMemo } from "react";

import SEO from "../components/seo/SEO";

import BatchesHero from "../components/batches/BatchesHero";
import BatchSchedule from "../components/batches/BatchSchedule";
import BatchCard from "../components/batches/BatchCard";
import BatchStructure from "../components/batches/BatchStructure";
import BatchCapacity from "../components/batches/BatchCapacity";
import BatchesCTA from "../components/batches/BatchesCTA";

import { getBatches } from "../services/api";
import useApi from "../hooks/useApi";

const Batches = () => {
  const {
    data,
    loading,
    error,
    execute,
  } = useApi(getBatches);

  useEffect(() => {
    execute();
  }, [execute]);

  const batches = useMemo(() => {
    if (Array.isArray(data)) {
      return data;
    }

    if (Array.isArray(data?.data)) {
      return data.data;
    }

    if (Array.isArray(data?.batches)) {
      return data.batches;
    }

    return [];
  }, [data]);

  const activeBatches = useMemo(() => {
    return batches.filter(
      (batch) =>
        batch.status === "ACTIVE" &&
        !batch.name
          ?.toLowerCase()
          .includes("capacity test")
    );
  }, [batches]);

  const class11Batches = useMemo(() => {
    return activeBatches.filter(
      (batch) =>
        Number(batch.courseId?.class) === 11
    );
  }, [activeBatches]);

  const class12Batches = useMemo(() => {
    return activeBatches.filter(
      (batch) =>
        Number(batch.courseId?.class) === 12
    );
  }, [activeBatches]);

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
        <BatchSchedule batches={activeBatches} />

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

            {loading && (
              <div className="grid gap-5 lg:grid-cols-2">
                <div className="h-64 animate-pulse rounded-[2rem] bg-slate-100" />
                <div className="h-64 animate-pulse rounded-[2rem] bg-slate-100" />
              </div>
            )}

            {!loading && error && (
              <div className="rounded-2xl border border-red-100 bg-red-50 px-5 py-4 text-sm text-red-700">
                Unable to load batch information right now.
              </div>
            )}

            {!loading && !error && (
              <div className="grid gap-5 lg:grid-cols-2">

                <BatchCard
                  name={
                    class11Batches[0]?.name ||
                    "Class 11 Mathematics Batch"
                  }
                  course={
                    class11Batches[0]?.courseId?.name ||
                    "Class 11 Mathematics"
                  }
                  timing={
                    class11Batches.length > 0
                      ? class11Batches
                        .map(
                          (batch) =>
                            `${batch.startTime} - ${batch.endTime}`
                        )
                        .join(" / ")
                      : "Morning / Evening"
                  }
                  schedule="Teacher managed"
                  capacity={
                    class11Batches.length > 0
                      ? class11Batches
                        .map(
                          (batch) =>
                            `${batch.capacity} seats`
                        )
                        .join(" / ")
                      : "Defined per batch"
                  }
                  status={
                    class11Batches.length > 0
                      ? class11Batches
                        .map(
                          (batch) =>
                            `${batch.availableSeats} seats available`
                        )
                        .join(" / ")
                      : "Batch availability"
                  }
                  description={
                    class11Batches[0]?.courseId?.class === 11
                      ? "Focused Class 11 learning with concept building, practice and regular evaluation."
                      : "Focused Class 11 Mathematics learning with concept building, practice and regular evaluation."
                  }
                />

                <BatchCard
                  name={
                    class12Batches[0]?.name ||
                    "Class 12 Mathematics Batch"
                  }
                  course={
                    class12Batches[0]?.courseId?.name ||
                    "Class 12 Mathematics"
                  }
                  timing={
                    class12Batches.length > 0
                      ? class12Batches
                        .map(
                          (batch) =>
                            `${batch.startTime} - ${batch.endTime}`
                        )
                        .join(" / ")
                      : "Morning / Evening"
                  }
                  schedule="Teacher managed"
                  capacity={
                    class12Batches.length > 0
                      ? class12Batches
                        .map(
                          (batch) =>
                            `${batch.capacity} seats`
                        )
                        .join(" / ")
                      : "Defined per batch"
                  }
                  status={
                    class12Batches.length > 0
                      ? class12Batches
                        .map(
                          (batch) =>
                            `${batch.availableSeats} seats available`
                        )
                        .join(" / ")
                      : "Batch availability"
                  }
                  description={
                    class12Batches[0]?.courseId?.class === 12
                      ? "Class 12 preparation with regular testing, revision and board-oriented practice."
                      : "Class 12 Mathematics preparation with regular testing, revision and board-oriented practice."
                  }
                />

              </div>
            )}

            {!loading && !error && (
              <p className="mt-5 text-xs leading-5 text-slate-500">
                Batch names, timings, capacity and current
                availability are populated from the latest
                batch information.
              </p>
            )}
          </div>
        </section>

        {/* 04 — Batch Structure */}
        <BatchStructure />

        {/* 05 — Capacity */}
        {/* 05 — Capacity */}
        <BatchCapacity batches={activeBatches} />

        {/* 06 — CTA */}
        <BatchesCTA />
      </main>
    </>
  );
};

export default Batches;
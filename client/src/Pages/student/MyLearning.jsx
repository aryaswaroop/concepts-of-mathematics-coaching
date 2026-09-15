import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Library,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

const learningStages = [
  {
    number: "01",
    title: "Concept Clarity",
    description:
      "Build a strong understanding of mathematical concepts before moving into problem solving.",
    icon: Target,
  },
  {
    number: "02",
    title: "Practice",
    description:
      "Strengthen concepts through regular practice and structured problem solving.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Assessment",
    description:
      "Use regular tests to understand learning progress and identify improvement areas.",
    icon: CheckCircle2,
  },
  {
    number: "04",
    title: "Improvement",
    description:
      "Work on weak areas with additional guidance and focused practice.",
    icon: ArrowRight,
  },
];

const resources = [
  {
    title: "NCERT",
    description: "Core textbook and fundamental concepts.",
    icon: BookOpen,
  },
  {
    title: "R.D. Sharma",
    description: "Additional mathematical practice and problem solving.",
    icon: Library,
  },
  {
    title: "Other Resources",
    description: "Additional study material recommended by the teacher.",
    icon: Library,
  },
];

const MyLearning = () => {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-4 py-6 sm:px-6 lg:px-7 lg:py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
          <BookOpen className="h-3.5 w-3.5" />
          Academic journey
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
          My Learning
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Follow your mathematics learning journey, study resources
          and academic progress from one place.
        </p>
      </motion.div>

      {/* Current Course */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="relative mb-6 overflow-hidden rounded-[28px] bg-slate-950 p-6 text-white shadow-xl sm:p-8"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(96,165,250,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(96,165,250,0.35) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
              Current Course
            </p>

            <h2 className="mt-2 text-3xl font-extrabold">
              Mathematics
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
              Your learning space for Class 11 and Class 12
              Mathematics. Course and enrollment information will
              be connected with the backend later.
            </p>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-bold text-blue-200">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Active learning
          </div>
        </div>
      </motion.section>

      {/* Learning Journey */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6 rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
      >
        <div className="mb-6">
          <h2 className="font-extrabold text-slate-950">
            Learning Journey
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            A structured approach to developing stronger
            mathematical understanding.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {learningStages.map((stage, index) => {
            const Icon = stage.icon;

            return (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.12 + index * 0.05,
                }}
                className="group relative rounded-2xl border border-slate-200 p-5 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold tracking-[0.15em] text-blue-600">
                    {stage.number}
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>

                <h3 className="mt-5 font-extrabold text-slate-900">
                  {stage.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {stage.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Study Resources */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mb-6 rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
      >
        <div className="mb-6">
          <h2 className="font-extrabold text-slate-950">
            Study Resources
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Recommended resources used during your mathematics
            preparation.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {resources.map((resource, index) => {
            const Icon = resource.icon;

            return (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.18 + index * 0.05,
                }}
                className="group rounded-2xl border border-slate-200 p-5 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-4 font-extrabold text-slate-900">
                  {resource.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {resource.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Learning Activity */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="rounded-[24px] border border-dashed border-slate-300 bg-white/70 p-6 text-center"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
          <BookOpen className="h-5 w-5" />
        </div>

        <h2 className="mt-4 font-extrabold text-slate-900">
          Learning Activity
        </h2>

        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
          Your learning activity, completed topics and progress
          insights will appear here once the student APIs are
          connected.
        </p>

        <Link
          to="/student/tests"
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-600"
        >
          Explore Tests
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.section>
    </div>
  );
};

export default MyLearning;
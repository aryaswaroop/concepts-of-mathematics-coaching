import { useEffect, useMemo } from "react";

import SEO from "../components/seo/SEO";

import CoursesHero from "../components/courses/CoursesHero";
import Class11Course from "../components/courses/Class11Course";
import Class12Course from "../components/courses/Class12Course";
import LearningOutcomes from "../components/courses/LearningOutcomes";
import CourseBenefits from "../components/courses/CourseBenefits";
import CoursesCTA from "../components/courses/CoursesCTA";

import { getCourses } from "../services/api";
import useApi from "../hooks/useApi";

const Courses = () => {
    const {
        data,
        loading,
        error,
        execute,
    } = useApi(getCourses);

    useEffect(() => {
        execute();
    }, [execute]);

    const courses = useMemo(() => {
        if (Array.isArray(data)) {
            return data;
        }

        if (Array.isArray(data?.data)) {
            return data.data;
        }

        if (Array.isArray(data?.courses)) {
            return data.courses;
        }

        return [];
    }, [data]);

    const class11Course = useMemo(() => {
        return courses.find(
            (course) =>
                String(course.grade) === "11" ||
                String(course.class) === "11" ||
                String(course.name)
                    .toLowerCase()
                    .includes("11")
        );
    }, [courses]);

    const class12Course = useMemo(() => {
        return courses.find(
            (course) =>
                String(course.grade) === "12" ||
                String(course.class) === "12" ||
                String(course.name)
                    .toLowerCase()
                    .includes("12")
        );
    }, [courses]);

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
                <Class11Course
                    course={class11Course}
                    loading={loading}
                    error={error}
                />

                {/* 03 — Class 12 */}
                <Class12Course
                    course={class12Course}
                    loading={loading}
                    error={error}
                />

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
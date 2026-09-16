import { useEffect, useMemo } from "react";
import SEO from "../components/seo/SEO";

import AdmissionHero from "../components/admission/AdmissionHero";
import AdmissionProcess from "../components/admission/AdmissionProcess";
import FeeStructure from "../components/admission/FeeStructure";
import InstallmentPlan from "../components/admission/InstallmentPlan";
import PaymentGuidelines from "../components/admission/PaymentGuidelines";
import EnrollmentFlow from "../components/admission/EnrollmentFlow";
import AdmissionCTA from "../components/admission/AdmissionCTA";

import { getCourses } from "../services/api";
import useApi from "../hooks/useApi";

const AdmissionFees = () => {
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
    if (Array.isArray(data?.data)) {
      return data.data;
    }

    if (Array.isArray(data)) {
      return data;
    }

    if (Array.isArray(data?.courses)) {
      return data.courses;
    }

    return [];
  }, [data]);

  return (
    <>
      <SEO
        title="Admission & Fees | Concepts of Mathematics"
        description="Learn about admission, course fees, enrollment, installment payments and payment arrangements for Class 11 and Class 12 Mathematics at Concepts of Mathematics."
        keywords="Mathematics admission, Mathematics coaching fees, Class 11 fees, Class 12 fees, Mathematics admission Hazaribagh, installment fee"
      />

      <main>
        {/* 01 — Introduction */}
        <AdmissionHero />

        {/* 02 — Admission Process */}
        <AdmissionProcess />

        {/* 03 — Fee Structure */}
        <FeeStructure
          courses={courses}
          loading={loading}
          error={error}
        />

        {/* 04 — Installment Payments */}
        <InstallmentPlan />

        {/* 05 — Payment Guidelines */}
        <PaymentGuidelines />

        {/* 06 — Backend-aware Enrollment Flow */}
        <EnrollmentFlow />

        {/* 07 — Final CTA */}
        <AdmissionCTA />
      </main>
    </>
  );
};

export default AdmissionFees;
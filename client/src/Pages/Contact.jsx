import SEO from "../components/seo/SEO";

import ContactHero from "../components/contact/ContactHero";
import ContactInformation from "../components/contact/ContactInformation";
import EnquirySection from "../components/contact/EnquirySection";
import LocationSection from "../components/contact/LocationSection";
import ContactCTA from "../components/contact/ContactCTA";

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact | Concepts of Mathematics"
        description="Contact Concepts of Mathematics for Class 11 and Class 12 Mathematics course information, batch details, admission, fees and general enquiries."
        keywords="Contact Concepts of Mathematics, Mathematics coaching Hazaribagh, Mathematics admission enquiry, Class 11 coaching, Class 12 coaching"
      />

      <main>
        {/* 01 — Introduction */}
        <ContactHero />

        {/* 02 — Contact Information */}
        <ContactInformation />

        {/* 03 — Enquiry */}
        <EnquirySection />

        {/* 04 — Location */}
        <LocationSection />

        {/* 05 — Final CTA */}
        <ContactCTA />
      </main>
    </>
  );
};

export default Contact;
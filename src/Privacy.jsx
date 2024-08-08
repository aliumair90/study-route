import React from "react";

import TestimonialSlider from "./TestimonialSlider";

const Privacy = () => {
  return (
    <>
      <br />
      <div className="bg-white w-[80%] mx-auto text-gray-800 p-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            We at Study Route value your privacy and safeguarding your data. Our
            privacy statement describes the information we gather, use, and
            protect about you when you use our services for education
            consultancy. Your consent to the terms of this privacy statement by
            using our website. Our responsibility is to provide you with the
            best experience using our website.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Information we collect
          </h2>
          <p className="mb-4">
            When you browse or visit our website, we can ask for your personal
            information, like your name, email address, and phone number. When
            you agree to subscribe to our newsletters, we also collect
            information. We respect your right to privacy, and we assure you
            that we do not share data with companies.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            How we use your information
          </h2>
          <p className="mb-4">
            We use your personal information to improve our services and provide
            you with information about our services. Safeguard your data. We may
            use information about your browsing behavior to tailor the website
            content according to your preferences. We maintain, store, and
            compile demographic data about our user base.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Sharing your information
          </h2>
          <p className="mb-4">
            Your personal information is confidential and is not shared with
            third parties. To operate our website and offer you services, we
            might disclose your personal information to our partners, service
            providers, and our marketing platform with your consent. We will
            notify you and obtain your consent if we need to share your personal
            information for legal reasons.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Security of your information
          </h2>
          <p className="mb-4">
            We take appropriate measures to protect your personal information
            from data loss, and unauthorized access. We cannot accept full
            guarantees for the protection of your personal information because
            no security mechanism is impenetrable.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
          <p className="mb-4">
            Children under 13 are protected from using our website. We do not
            intentionally collect personal information. We will take action to
            remove the data as soon as we can when we find and collect
            information about children.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Changes to this privacy policy
          </h2>
          <p className="mb-4">
            We have the right to change or update this privacy statement.
            Suppose we make significant changes to our privacy statement. We'll
            inform you publicly by posting the updated information on our
            website. You are always given the choice to check the details.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Contact us</h2>
          <p>
            If you have any questions or concerns about our privacy policy or
            our handling of your personal information, please get in touch with
            us at: info@study-route.com.
          </p>
        </div>
      </div>
      <TestimonialSlider />
      <br />
      <br />
    </>
  );
};

export default Privacy;

import React from "react";
import { motion } from "framer-motion";
import TestimonialSlider from "./TestimonialSlider";

const Privacy = () => {
  return (
    <>
      <br />
      <motion.div
        className="bg-white w-[80%] mx-auto text-gray-800 p-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="container mx-auto">
          <motion.h1
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Privacy Policy
          </motion.h1>

          <motion.h2
            className="text-2xl font-semibold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            Introduction
          </motion.h2>
          <motion.p
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            We at Study Route value your privacy and safeguarding your data. Our
            privacy statement describes the information we gather, use, and
            protect about you when you use our services for education
            consultancy. Your consent to the terms of this privacy statement by
            using our website. Our responsibility is to provide you with the
            best experience using our website.
          </motion.p>

          <motion.h2
            className="text-2xl font-semibold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          >
            Information we collect
          </motion.h2>
          <motion.p
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.9 }}
          >
            When you browse or visit our website, we can ask for your personal
            information, like your name, email address, and phone number. When
            you agree to subscribe to our newsletters, we also collect
            information. We respect your right to privacy, and we assure you
            that we do not share data with companies.
          </motion.p>

          <motion.h2
            className="text-2xl font-semibold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.1 }}
          >
            How we use your information
          </motion.h2>
          <motion.p
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.3 }}
          >
            We use your personal information to improve our services and provide
            you with information about our services. Safeguard your data. We may
            use information about your browsing behavior to tailor the website
            content according to your preferences. We maintain, store, and
            compile demographic data about our user base.
          </motion.p>

          <motion.h2
            className="text-2xl font-semibold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.5 }}
          >
            Sharing your information
          </motion.h2>
          <motion.p
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.7 }}
          >
            Your personal information is confidential and is not shared with
            third parties. To operate our website and offer you services, we
            might disclose your personal information to our partners, service
            providers, and our marketing platform with your consent. We will
            notify you and obtain your consent if we need to share your personal
            information for legal reasons.
          </motion.p>

          <motion.h2
            className="text-2xl font-semibold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.9 }}
          >
            Security of your information
          </motion.h2>
          <motion.p
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2.1 }}
          >
            We take appropriate measures to protect your personal information
            from data loss, and unauthorized access. We cannot accept full
            guarantees for the protection of your personal information because
            no security mechanism is impenetrable.
          </motion.p>

          <motion.h2
            className="text-2xl font-semibold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2.3 }}
          >
            Children's Privacy
          </motion.h2>
          <motion.p
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2.5 }}
          >
            Children under 13 are protected from using our website. We do not
            intentionally collect personal information. We will take action to
            remove the data as soon as we can when we find and collect
            information about children.
          </motion.p>

          <motion.h2
            className="text-2xl font-semibold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2.7 }}
          >
            Changes to this privacy policy
          </motion.h2>
          <motion.p
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2.9 }}
          >
            We have the right to change or update this privacy statement.
            Suppose we make significant changes to our privacy statement. We'll
            inform you publicly by posting the updated information on our
            website. You are always given the choice to check the details.
          </motion.p>

          <motion.h2
            className="text-2xl font-semibold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 3.1 }}
          >
            Contact us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 3.3 }}
          >
            If you have any questions or concerns about our privacy policy or
            our handling of your personal information, please get in touch with
            us at: info@study-route.com.
          </motion.p>
        </div>
      </motion.div>
      <TestimonialSlider />
      <br />
      <br />
    </>
  );
};

export default Privacy;

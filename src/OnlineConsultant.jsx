import React from "react";
import { motion } from "framer-motion";
import Register from "./Register";

const OnlineConsultant = () => {
  return (
    <>
      <motion.div
        className="py-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Secure a Spot for Yourself with Our Online Consultation <br />
            for Overseas Educational Opportunities
          </h1>
        </div>
      </motion.div>

      <motion.div
        className="py-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <p className="text-center w-[70%] text-xl mx-auto">
          Feeling overwhelmed by endless overseas study searches? Take a deep
          breath and let Study Route be your guide! Connect with our expert
          counselors for a personalized online consultation via video call. We
          offer flexible scheduling to fit your busy life, and our consultations
          cover everything you need! Discuss with us your study options, find
          your perfect fit, and receive application assistance – all online!
        </p>
      </motion.div>

      <motion.div
        className="py-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
      ></motion.div>
      <Register />
    </>
  );
};

export default OnlineConsultant;

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Register from "./Register";
import TestimonialSlider from "./TestimonialSlider";

const InfoCards = () => {
  // Intersection Observer for triggering animations when cards come into view
  const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: true });
  const { ref: middleRef, inView: middleInView } = useInView({
    triggerOnce: true,
  });
  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <motion.div
        className="bg-fixed py-8 px-4 md:px-16 lg:px-32"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="flex flex-col md:flex-row md:space-x-4 lg:space-x-8">
          {/* Left Panel */}
          <motion.div
            ref={leftRef}
            className="bg-white p-6 rounded-lg flex-1 mb-4 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: leftInView ? 1 : 0, x: leftInView ? 0 : -50 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-grottoblue text-4xl font-bold">
              How Study Abroad Consultants <br />
            </h1>
            <h2 className="text-lg font-bold">Accommodate Students?</h2>
            <p className="text-gray-700">
              Study abroad consultants in Pakistan go above and beyond to
              provide services to our students. From finding accommodation to
              getting a job, the company helps them in every step. We believe
              that our students are not only our clients, they are the future of
              our nation and they deserve to get the best possible service.
            </p>
          </motion.div>

          {/* Middle Panel */}
          <motion.div
            ref={middleRef}
            className="bg-grottoblue h-80 mt-12 text-white p-6 rounded-lg shadow-md flex-1 mb-4 md:mb-0"
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: middleInView ? 1 : 0,
              y: middleInView ? 0 : -50,
            }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h2 className="text-xl font-bold mb-4">
              How do we help Students with <br />
              their Admission?
            </h2>
            <p>
              We help students secure admissions to top-ranked universities of
              the world and make their higher education easier by helping them
              gain partial scholarships and prepare them for their University
              and VISA interviews.
            </p>
          </motion.div>

          {/* Right Panel */}
          <motion.div
            ref={rightRef}
            className="bg-grottoblue text-white p-6 rounded-lg shadow-md flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: rightInView ? 1 : 0, x: rightInView ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h2 className="text-xl font-bold mb-4">
              Why is Guidance Mandatory for Studying Abroad?
            </h2>
            <p>
              Every student dreaming of studying across borders comes with a
              different educational background, which is why we consider
              full-fledged customized guidance. In this session, we asked about
              their dream university and preferred courses. After getting the
              required information, we thoroughly guide them regarding each, and
              every step afterward.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="pb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.8 }}
      >
        <TestimonialSlider />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <Register />
      </motion.div>
    </>
  );
};

export default InfoCards;

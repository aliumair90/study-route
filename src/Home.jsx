import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Step from "./Step";

const Home = () => {
  // Hooks for monitoring when components come into view
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <motion.div
        className="bg-grottoblue text-white py-16"
        ref={ref1}
        initial={{ opacity: 0 }}
        animate={inView1 ? { opacity: 1 } : {}}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="container w-[85%] mx-auto flex flex-col md:flex-row items-center justify-between"
          initial={{ x: "-100vw" }}
          animate={inView1 ? { x: 0 } : {}}
          transition={{ type: "spring", stiffness: 50, duration: 2 }}
        >
          <motion.div
            className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
            initial={{ x: "-100vw" }}
            animate={inView1 ? { x: 0 } : {}}
            transition={{
              type: "spring",
              stiffness: 50,
              duration: 2,
              delay: 0.2,
            }}
          >
            <p className="text-xl mb-4">Welcome to Study Route!</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              A Gateway to <span className="text-white">Excellence</span> in
              Global Education
            </h1>
            <p className="text-lg mb-8">
              Study Route is one of the best education consultants in Pakistan.
              Explore global opportunities with expert advice. Personalized
              support awaits. Consult today!
            </p>
            <motion.a
              href="/contact-us"
              className="bg-white text-grottoblue py-2 px-4 rounded-full font-semibold hover:bg-navyblue"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ x: "100vw" }}
            animate={inView1 ? { x: 0 } : {}}
            transition={{
              type: "spring",
              stiffness: 50,
              duration: 2,
              delay: 0.4,
            }}
          >
            <img
              src="/Main.jpg"
              alt="Student"
              className="w-full md:w-3/4 lg:w-2/3 sm:w-3/4 rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className=" py-16 w-[85%] mx-auto"
        ref={ref2}
        initial={{ opacity: 0 }}
        animate={inView2 ? { opacity: 1 } : {}}
        transition={{ duration: 2, delay: 0.3 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:text-start md:flex-row text-center">
            {/* Text Section */}
            <motion.div
              className="flex-1 mb-5 md:mb-0"
              initial={{ x: "-100vw" }}
              animate={inView2 ? { x: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 50,
                duration: 2,
                delay: 0.6,
              }}
            >
              <h1 className="text-grottoblue text-xl mb-2">Introduction</h1>
              <h2 className="text-4xl font-bold mb-4">Study Route</h2>
              <p className="text-gray-700 text-xl mb-6">
                At Study Route, we empower students to achieve their academic
                and professional goals by providing expert guidance and support.
                Our mission is to help you navigate the complex educational
                landscape and find the best path to success.
              </p>
              <motion.a
                href="/about-us"
                className="bg-grottoblue text-white px-4 py-2 rounded"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                About Us
              </motion.a>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="flex-1 flex flex-wrap justify-center"
              initial={{ x: "100vw" }}
              animate={inView2 ? { x: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 50,
                duration: 2,
                delay: 0.8,
              }}
            >
              <div className="flex flex-wrap justify-center items-center">
                <div className="flex justify-center">
                  <img
                    src="/Intro.jpg"
                    alt="Group Meeting"
                    className="rounded-lg w-full md:w-3/4 lg:w-2/3 sm:w-3/4 shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <br />
      <br />
      <motion.div
        ref={ref3}
        initial={{ opacity: 0 }}
        animate={inView3 ? { opacity: 1 } : {}}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <Step />
      </motion.div>
    </>
  );
};

export default Home;

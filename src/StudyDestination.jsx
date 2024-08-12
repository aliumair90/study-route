import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Test1 from "./Test1";

const StudyDestination = () => {
  // Hooks for monitoring when components come into view
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      {/* First Section */}
      <motion.div
        className="relative bg-gray-100 w-full py-10"
        ref={ref1}
        initial={{ opacity: 0 }}
        animate={inView1 ? { opacity: 1 } : {}}
        transition={{ duration: 2 }}
      >
        <div className="container w-[80%] mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-0">
          <motion.div
            className="lg:w-1/2"
            initial={{ x: "-100vw" }}
            animate={inView1 ? { x: 0 } : {}}
            transition={{ type: "spring", stiffness: 50, duration: 2 }}
          >
            <h1 className="md:text-6xl sm:text-4xl lg:text-8xl font-extrabold text-grottoblue mb-4">
              Study In UK From Pakistan
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Get your hands on one of the best consultants who guide you on how
              to study in the UK from Pakistan.
            </p>
          </motion.div>
          <motion.div
            className="lg:w-1/2 flex justify-center relative mt-10 lg:mt-0"
            initial={{ x: "100vw" }}
            animate={inView1 ? { x: 0 } : {}}
            transition={{ type: "spring", stiffness: 50, duration: 2 }}
          >
            <img
              src="./Jahaz.png"
              alt="Big Ben"
              className="rounded-full w-full"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Second Section */}
      <motion.div
        className="relative bg-grottoblue text-white py-6 px-4 sm:py-20 sm:px-6 lg:px-8"
        ref={ref2}
        initial={{ opacity: 0 }}
        animate={inView2 ? { opacity: 1 } : {}}
        transition={{ duration: 2, delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto w-[80%] flex flex-col lg:flex-row items-center">
          <motion.div
            className="lg:w-1/2 mb-8 lg:mb-0"
            initial={{ x: "-100vw" }}
            animate={inView2 ? { x: 0 } : {}}
            transition={{ type: "spring", stiffness: 50, duration: 2 }}
          >
            <h2 className="text-babyblue text-sm sm:text-base md:text-lg font-semibold mb-2">
              Study in UK
            </h2>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Why Study in UK From Pakistan?
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-4">
              If you are a Pakistani student interested in studying abroad,
              there are many reasons to study abroad as part of your degree.
              Studying in the UK from Pakistan is possible either as a part of
              your course or as an overseas student through an exchange program,
              or we can help.
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-4">
              Moreover, you will develop a network of international contacts and
              gain broad knowledge and skills.
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-4">
              Pakistani university students can also benefit from the dual
              degree program that UK universities for Pakistani students are
              offering. The dual degree (also known as a double degree or dual
              award degree) allows you to earn two bachelor's degrees or two
              master's degrees in a shorter amount of time than it would take to
              complete each separately.
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-4">
              So these benefits encourage studying in the UK for Pakistani
              students; they will have an extra degree, and they could get a
              better job.
            </p>
          </motion.div>
          <motion.div
            className="lg:w-1/2 flex justify-center relative"
            initial={{ x: "100vw" }}
            animate={inView2 ? { x: 0 } : {}}
            transition={{
              type: "spring",
              stiffness: 50,
              duration: 2,
              delay: 0.2,
            }}
          >
            <img
              src="./Studyinuk.png"
              alt="Student"
              className="left-1/2 w-full w-max-md mt-0"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Third Section */}
      <motion.div
        ref={ref3}
        initial={{ opacity: 0 }}
        animate={inView3 ? { opacity: 1 } : {}}
        transition={{ duration: 2, delay: 0.4 }}
      >
        <div className="w-[80%] mx-auto p-8">
          <section className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2"
              initial={{ x: "-100vw" }}
              animate={inView3 ? { x: 0 } : {}}
              transition={{ type: "spring", stiffness: 50, duration: 2 }}
            >
              <h1 className="text-4xl font-bold mb-4">
                What are the UK Study Visa Requirements?
              </h1>
              <p className="mb-4">
                Some basics need to be checked before applying for a study visa,
                especially if you want to study in the UK:
              </p>
              <ul className="list-disc list-inside text-lg">
                <li>Official academic documents</li>
                <li>Personal documents</li>
                <li>Letters of recommendation</li>
                <li>Statement</li>
                <li>Passport copy</li>
              </ul>
            </motion.div>
            <motion.div
              className="md:w-1/2 mt-6 md:mt-0 flex justify-center"
              initial={{ x: "100vw" }}
              animate={inView3 ? { x: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 50,
                duration: 2,
                delay: 0.2,
              }}
            >
              <img
                src="/Passport.png"
                alt="Visa Documents"
                className="max-w-full h-auto"
              />
            </motion.div>
          </section>
        </div>
      </motion.div>

      {/* Fourth Section */}
      <motion.div
        className="bg-grottoblue flex items-center justify-center p-6"
        ref={ref4}
        initial={{ opacity: 0 }}
        animate={inView4 ? { opacity: 1 } : {}}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <div className="bg-grottoblue p-8 w-full max-w-6xl">
          <section className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 p-4"
              initial={{ x: "-100vw" }}
              animate={inView4 ? { x: 0 } : {}}
              transition={{ type: "spring", stiffness: 50, duration: 2 }}
            >
              <h1 className="text-4xl font-bold text-white mb-4">
                What is the UK Study Visa Fee From Pakistan?
              </h1>
              <p className="text-white mb-4">
                The UK study visa cost in Pakistan depends upon many factors.
                Regrettably, it involves the issuance of the degree again and
                the university in which you are interested.
              </p>
              <p className="text-white mb-4">
                Let’s have a look at the maximum cost of student visas from
                this. It is mentioned for backspacing in the UK.
              </p>
              <ul className="list-disc list-inside text-white text-lg">
                <li>
                  Residents Fee: 150.00 to 300.00 (personal student fee in GBP)
                </li>
                <li>
                  National Fee: 150.00 to 300.00 (personal student fee in GBP)
                </li>
                <li>
                  Discounted Fee: 150.00 to 300.00 (personal student fee in GBP)
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="md:w-1/2 p-4 flex flex-wrap justify-center"
              initial={{ x: "100vw" }}
              animate={inView4 ? { x: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 50,
                duration: 2,
                delay: 0.2,
              }}
            >
              <img
                src="/Visafees.png"
                alt="Image 1"
                className="max-w-full h-auto"
              />
            </motion.div>
          </section>
        </div>
      </motion.div>

      {/* Test1 Component */}
      <motion.div
        ref={ref5}
        initial={{ opacity: 0 }}
        animate={inView5 ? { opacity: 1 } : {}}
        transition={{ duration: 2, delay: 0.6 }}
      >
        <Test1 />
      </motion.div>
    </>
  );
};

export default StudyDestination;

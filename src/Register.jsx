import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Register = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  if (inView) {
    controls.start("visible");
  }

  return (
    <>
      <br />
      <div
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage: "url('ireland.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <motion.div
          className="relative z-10 w-[80%] mx-auto bg-white p-8 rounded-lg shadow-lg top-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.h2
            className="text-center text-2xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            Register Now
          </motion.h2>
          <form className="space-y-4" ref={ref}>
            <motion.div
              className="flex space-x-4"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            >
              <input
                type="text"
                placeholder="First Name*"
                className="w-1/2 px-4 py-2 border rounded-md focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="w-1/2 px-4 py-2 border rounded-md focus:outline-none"
              />
            </motion.div>
            <motion.input
              type="email"
              placeholder="Email Address*"
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
            />
            <motion.input
              type="tel"
              placeholder="Mobile Number*"
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
            />
            <motion.div
              className="flex space-x-4"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
            >
              <input
                type="text"
                placeholder="Message*"
                className="w-full h-24 px-4 py-2 border rounded-md focus:outline-none"
              />
            </motion.div>
            <motion.div
              className="mx-auto w-1/4"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
            >
              <button className="bg-grottoblue text-white p-2 rounded-md font-bold hover:bg-babyblue transition">
                BOOK A FREE APPOINTMENT
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default Register;

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Benefits from "./Benefits";

const About = () => {
  // Hooks for monitoring when components come into view
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <br />
      <br />
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: -50 }}
        animate={inView1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 2 }}
      >
        <h1 className="text-center font-bold text-grottoblue text-4xl">
          About Us
        </h1>
        <br />
        <div className="w-[80%] mx-auto text-center font-semibold">
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={inView1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 2, delay: 0.3 }}
          >
            At Study Route, we empower students to achieve their academic and
            professional goals by providing expert guidance and support. Our
            mission is to help you navigate the complex educational landscape
            and find the best path to success.
          </motion.p>
          <br />
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={inView1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 2, delay: 0.5 }}
          >
            Our vision at Study Route is to set new benchmarks in the education
            consultancy field, upholding performance excellence. Drawing from
            real-world experiences in problem-solving and equipped with
            practical insights into the ever-changing landscape of admissions,
            visa processes, and the dynamic education and career industry, we
            empower our clients to navigate and overcome the challenges inherent
            in pursuing education abroad.
          </motion.p>
          <br />
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={inView1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 2, delay: 0.7 }}
          >
            Considering the idea of moving abroad? There's no need to
            second-guess. Let us guide you in turning your aspirations into
            reality through our expert immigration services. Our singular goal
            is clear: to offer completely unbiased and impartial advice and
            provide you with the pinnacle of service excellence. Your journey
            begins with Study Route – where expertise meets dreams.
          </motion.p>
        </div>
      </motion.div>
      <br />
      <br />
      <br />
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 50 }}
        animate={inView2 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 2 }}
      ></motion.div>
      <Benefits />
    </>
  );
};

export default About;

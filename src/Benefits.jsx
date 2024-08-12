import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TestimonialSlider from "./TestimonialSlider";

const benefits = [
  {
    title: "Our Mission",
    text: "To promote diversity and ensure equal opportunities, we aim to facilitate the uninhibited exchange of ideas, knowledge, and best career practices. We remain steadfast in our mission to recognize and honor competence and merit regardless of a person’s country, gender, age, or ethnicity.",
    icon: "/Mission.png",
  },
  {
    title: "Our Vision",
    text: "To become the leading educational consultancy firm, renowned for our personalized approach, expertise, and commitment to excellence.",
    icon: "/Vision.png",
  },
  {
    title: "Our Service",
    text: "University and course selection Application and admission guidance Scholarship and visa assistance Career counseling and mentorship Academic and exam preparation support",
    icon: "/Practice.png",
  },
  {
    title: "Our Principles",
    text: "In the realm of educational consultancy, Study Route is committed to: Striving to elevate the professional standards of an education consultancy. Endeavoring to enhance the overall quality of services. Upholding elevated standards of conduct.",
    icon: "/Principle.png",
  },
];

const Benefits = () => {
  // Hook for monitoring when the section comes into view
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <motion.div
        className="bg-gray-50 py-16"
        ref={ref1}
        initial={{ opacity: 0, y: 50 }}
        animate={inView1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            animate={inView1 ? { opacity: 1 } : {}}
            transition={{ duration: 2, delay: 0.2 }}
          >
            Benefits to Visit Study Route
          </motion.h2>
          <div className="grid grid-cols-1 bg-grottoblue w-[95%] py-9 mx-auto sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg w-[90%] mx-auto rounded-lg p-6 border border-gray-200"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={inView1 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 2, delay: 0.3 + index * 0.2 }}
              >
                <div className="flex justify-center mb-4">
                  <img
                    className="w-28 h-28"
                    src={benefit.icon}
                    alt={benefit.title}
                  />
                </div>
                <h1 className="text-2xl text-center font-semibold text-gray-800 mb-4">
                  {benefit.title}
                </h1>
                <p className="text-gray-600">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="pb-10"
        ref={ref2}
        initial={{ opacity: 0, y: 50 }}
        animate={inView2 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 2, delay: 0.4 }}
      >
        <TestimonialSlider />
      </motion.div>
    </>
  );
};

export default Benefits;

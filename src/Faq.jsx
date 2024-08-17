import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TestimonialSlider from "./TestimonialSlider";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question:
        "Do Study Route have an official liaison with universities on the panel?",
      answer:
        "Yes, Study Route is an official representative in Pakistan of all foreign universities on the panel.",
    },
    {
      question:
        "How can I book an appointment with a Study Route counsellor for admission?",
      answer:
        "One can book an appointment with Study Route’s Counselor for admission by phone, WhatsApp and email.",
    },
    {
      question:
        "How much does it cost for a counselling appointment at Study Route?",
      answer: "Counseling is free of cost for the students.",
    },
    {
      question:
        "Which documents do I need to bring with me at the time of appointment with a counsellor?",
      answer:
        "You need to bring copies of all educational documents, a copy of your resume, 2 recommendation letters from teachers, a copy of your passport (if available else apply for one) and a personal statement of more than 500 words.",
    },
    {
      question:
        "Does Study Route assist in education after placement and visa issuance?",
      answer:
        "Yes, Study Route assists in education after placement and visa issuance.",
    },
    {
      question: "When do I need to pay the consultancy fee?",
      answer: "One needs to pay the consultancy fee at the time of applying.",
    },
    {
      question: "Can I get assistance in writing my statement?",
      answer:
        "Yes, one can get assistance in writing a personal statement from the counsellor.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <motion.div
        className="space-y-6 w-[70%] mx-auto"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 2 }}
      >
        <br />
        <div className="text-center">
          <motion.h3
            className="text-xl font-bold text-grottoblue"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 2, delay: 0.2 }}
          >
            Need Help?
          </motion.h3>
          <motion.h2
            className="text-2xl font-bold mt-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 2, delay: 0.4 }}
          >
            Frequently Ask Questions
          </motion.h2>
          <motion.p
            className="mt-4 text-base"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 2, delay: 0.6 }}
          >
            Here, we’ve compiled some common questions along with their answers
            that often arise when preparing for education abroad.
          </motion.p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 2, delay: 0.8 + index * 0.2 }}
            >
              <div
                className="flex justify-between border rounded-2xl bg-grottoblue text-white pr-2 items-center py-4 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <div className="text-lg text-white px-4 font-semibold">
                  {faq.question}
                </div>
                <div className="ml-2">
                  {activeIndex === index ? (
                    <i className="fas fa-chevron-circle-up text-lg"></i>
                  ) : (
                    <i className="fas fa-chevron-circle-down text-lg"></i>
                  )}
                </div>
              </div>
              {activeIndex === index && (
                <motion.div
                  className="p-4 bg-gray-50 border rounded-2xl text-base"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 1 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="pb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 2, delay: 1 }}
      >
        <br />
        <TestimonialSlider />
      </motion.div>

      <br />
      <br />
    </>
  );
};

export default Faq;

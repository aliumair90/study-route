import React from "react";

import TestimonialSlider from "./TestimonialSlider";

const benefits = [
  {
    title: "Our Mission",
    text: "To promote diversity and ensure equal opportunities, we aim to facilitate the uninhibited exchange of ideas, knowledge, and best career practices. We remain steadfast in our mission to recognize and honor competence and merit regardless of a person’s country, gender, age, or ethnicity.",
    icon: "/Mission.png", // Replace with your actual image path
  },
  {
    title: "Our Vision",
    text: "We see a future in which technology absorbs large immigrant populations due to a growing global labor and skill gap. Our goal is to develop the greatest potential and support individuals as they aspire to immigrate and succeed in achieving their goals.",
    icon: "/Vision.png", // Replace with your actual image path
  },
  {
    title: "Our Practice",
    text: "When it comes to seeking or accepting professional interactions, we shall only look for or accept engagements that fit our appropriate expertise and knowledge. Ensure our resources are adequate to fulfill the engagement. Conduct negotiations for engagements conducive to their professional services ethically and properly. Exercise independent thought and action.",
    icon: "/Practice.png", // Replace with your actual image path
  },
  {
    title: "Our Principles",
    text: "In the realm of educational consultancy, Times is committed to: Striving to elevate the professional standards of an education consultancy. Endeavoring to enhance the overall quality of services. Upholding elevated standards of conduct.",
    icon: "/Principle.png", // Replace with your actual image path
  },
];

const Benefits = () => {
  return (
    <>
      <div className="bg-gray-50  py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center  mb-12">
            Benefits to Visit Times Consultant
          </h2>
          <div className="grid grid-cols-1 bg-grottoblue w-[95%] py-9 mx-auto sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white shadow-lg w-[90%] mx-auto rounded-lg p-6 border border-gray-200"
              >
                <div className="  ">
                  <div className="flex justify-center">
                    <img
                      className="w-28 h-28  "
                      src={benefit.icon}
                      alt={benefit.title}
                    />
                  </div>
                  <h1 className="text-2xl text-center font-semibold text-gray-800">
                    {benefit.title}
                  </h1>
                </div>
                <p className="text-gray-600 ">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pb-10">
        <TestimonialSlider />
      </div>
    </>
  );
};

export default Benefits;

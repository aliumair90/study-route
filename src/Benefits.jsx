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
    text: "To become the leading educational consultancy firm, renowned for our personalized approach, expertise, and commitment to excellence.",
    icon: "/Vision.png", // Replace with your actual image path
  },
  {
    title: "Our Service",
    text: "University and course selection  Application and admission guidance Scholarship and visa assistance Career counseling and mentorship Academic and exam preparation support",
    icon: "/Practice.png", // Replace with your actual image path
  },
  {
    title: "Our Principles",
    text: "In the realm of educational consultancy, Study Routr is committed to: Striving to elevate the professional standards of an education consultancy. Endeavoring to enhance the overall quality of services. Upholding elevated standards of conduct.",
    icon: "/Principle.png", // Replace with your actual image path
  },
];

const Benefits = () => {
  return (
    <>
      <div className="bg-gray-50  py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center  mb-12">
            Benefits to Visit Study Route
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

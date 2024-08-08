import React from "react";
import Register from "./Register";
import TestimonialSlider from "./TestimonialSlider";

const InfoCards = () => {
  return (
    <>
      <br />

      <div className="bg-fixed  py-8 px-4 md:px-16 lg:px-32">
        <div className="flex flex-col md:flex-row md:space-x-4 lg:space-x-8">
          {/* Left Panel */}
          <div className="bg-white p-6 rounded-lg  flex-1 mb-4 md:mb-0">
            <h1 className="text-grottoblue text-4xl font-bold ">
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
          </div>

          {/* Middle Panel */}
          <div className="bg-grottoblue h-80 mt-12 text-white p-6 rounded-lg shadow-md flex-1 mb-4 md:mb-0">
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
          </div>

          {/* Right Panel */}
          <div className="bg-grottoblue text-white p-6 rounded-lg shadow-md flex-1">
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
          </div>
        </div>
      </div>
      <TestimonialSlider />

      <Register />
    </>
  );
};

export default InfoCards;

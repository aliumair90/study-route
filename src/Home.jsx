import React from "react";
import Step from "./Step";

const Home = () => {
  return (
    <>
      <div className="bg-grottoblue text-white py-16">
        <div className="container w-[85%] mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <p className="text-xl mb-4">Welcome to Study Route!</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              A Gateway to <span className=" text-white ">Excellence</span> in
              Global Education
            </h1>
            <p className="text-lg mb-8">
              Study Route Overseas Education is one of the best education
              consultants in Pakistan. Explore global opportunities with expert
              advice. Personalized support awaits. Consult today!
            </p>
            <a
              href="/contact-us"
              className="bg-white text-teal-700 py-2 px-4 rounded-full font-semibold hover:bg-navyblue"
            >
              Get Started
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="Student.png"
              alt="Student"
              className="w-full md:w-3/4 lg:w-2/3 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Text Section */}
            <div className="flex-1 mb-8 md:mb-0">
              <h1 className="text-grottoblue text-xl mb-2">Introduction</h1>
              <h2 className="text-4xl font-bold mb-4">Study Route</h2>
              <h3 className="text-2xl mb-4">Overseas Education Pvt. Ltd.</h3>
              <p className="text-gray-700 mb-6">
                Study Route Overseas Education is one of the fastest-growing
                study abroad and education consultants in Pakistan. Established
                in December 2018, the company is working in several cities
                across the country with its head office based in Lahore. Study
                Route Overseas Education provides services to students regarding
                their admissions to foreign universities and helps them in
                interviews and the visa filing process.
              </p>
              <a
                href="/about-us"
                className="bg-grottoblue text-white px-4 py-2 rounded"
              >
                About Us
              </a>
            </div>

            {/* Image Section */}
            <div className="flex-1 flex flex-wrap justify-center">
              <div className="flex flex-wrap justify-center items-center">
                <div className="m-2">
                  <img
                    src="/Album.png"
                    alt="Group Meeting"
                    className="rounded-lg h-96 shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Step />
    </>
  );
};

export default Home;

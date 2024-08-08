import React from "react";
import University from "./University";
import Test1 from "./Test1";

const steps = [
  {
    number: 1,
    icon: "https://cdn.lordicon.com/wzwygmng.json",
    title: "Receive Personalized Program Recommendations",
  },
  {
    number: 2,
    icon: "https://cdn.lordicon.com/wzrwaorf.json",
    title: "Connect with Universities One-on-One",
  },
  {
    number: 3,
    icon: "https://cdn.lordicon.com/ghhwiltn.json",
    title: "Access Step-by-Step Application Support",
  },
  {
    number: 4,
    icon: "https://cdn.lordicon.com/ofklvwkr.json",
    title: "Discover Scholarships & Funding Opportunities",
  },
  {
    number: 5,
    icon: "https://cdn.lordicon.com/aycieyht.json",
    title: "Secure an Offer Letter from a Global University",
  },
  {
    number: 6,
    icon: "https://cdn.lordicon.com/drtyjchi.json",
    title: "Explore Student Health Cover Options",
  },
  {
    number: 7,
    icon: "https://cdn.lordicon.com/wwmtsdzm.json",
    title: "Build Solid Student Visa Applications",
  },
  {
    number: 8,
    icon: "https://cdn.lordicon.com/laqlvddb.json",
    title: "Book Accommodation at Your Study Abroad Destination",
  },
  {
    number: 9,
    icon: "https://cdn.lordicon.com/pbkjsbwk.json",
    title: "Hit the Ground Running with Our Pre-Departure Briefing",
  },
  {
    number: 10,
    icon: "https://cdn.lordicon.com/cilymyep.json",
    title: "Congratulations – You’re a Study Route Studying Abroad!",
  },
];

const StepProcess = () => {
  return (
    <>
      <div className="text-center pt-10 font-bold text-4xl">
        <h1 className="mx-auto">The Study Route Roadmap to Study Abroad</h1>
      </div>
      <div className="text-center pt-8">
        <p className="text-sm w-[75%] mx-auto">
          Our Student Success Consultants work closely with our Gradstars to
          co-design their roadmap to studying abroad. We prime your journey for
          success, aligning your dreams and ambitions to our expertise and
          connections with top global universities, diversifying your pathways
          to an excellent higher education abroad.
        </p>
      </div>
      <div className="roadmap bg-white py-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="point flex items-center">
              <div className="point-index flex items-center justify-center bg-blue-900 text-white border-4 border-yellow-500 rounded-full h-10 w-10 text-lg font-bold">
                {step.number}
              </div>
              <div className="point-label flex items-center ml-4 space-x-4">
                <lord-icon
                  src={step.icon}
                  trigger="loop"
                  delay="1000"
                  colors="primary:#000066,secondary:#ffd700"
                  stroke="bold"
                  style={{ width: "80px", height: "80px" }}
                />
                <h5 className="text-blue-900 font-medium text-lg">
                  {step.title}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mb-5 ">
        <a
          href="/contact-us"
          className="bg-grottoblue text-white px-4 py-2 rounded"
        >
          Enquire Now
        </a>
      </div>
      {/* <University /> */}
      <Test1 />
    </>
  );
};

export default StepProcess;

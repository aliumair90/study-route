import React from "react";

import Test1 from "./Test1";

const StudyDestination = () => {
  return (
    <>
      <div className="relative bg-gray-100 w-full py-10">
        <div className="container w-[80%] mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-0">
          <div className="lg:w-1/2">
            <h1 className="md:text-6xl sm:text-4xl lg:text-8xl font-extrabold text-grottoblue mb-4">
              Study In UK From Pakistan
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Get your hands on one of the best consultants who guide you on how
              to study in the UK from Pakistan.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center relative mt-10 lg:mt-0">
            <img
              src="./Jahaz.png"
              alt="Big Ben"
              className="rounded-full w-full  "
            />
          </div>
        </div>
      </div>
      <div className="relative bg-grottoblue text-white py-6 px-4 sm:py-20 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-[80%] flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
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
          </div>
          <div className="lg:w-1/2 flex justify-center relative">
            {/* <img
              src="path/to/big-ben-image.png"
              alt="Big Ben"
              className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-60 h-auto"
            /> */}
            <img
              src="./Studyinuk.png"
              alt="Student"
              className=" left-1/2  w-full w-max-md mt-0"
            />
            {/* <img
              src="path/to/other-building-image.png"
              alt="Building"
              className="absolute bottom-0 right-0 w-24 sm:w-32 md:w-40 lg:w-48 xl:w-60 h-auto"
            /> */}
          </div>
        </div>
      </div>
      <div>
        <div className=" w-[80%] mx-auto   p-8 ">
          <section className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold  mb-4">
                What are the UK Study Visa Requirements?
              </h1>
              <p className=" mb-4">
                Some basics need to be checked before applying for a study visa,
                especially if you want to study in the UK:
              </p>
              <ul className="list-disc list-inside  text-lg">
                <li>Official academic documents</li>
                <li>Personal documents</li>
                <li>Letters of recommendation</li>
                <li>Statement</li>
                <li>Passport copy</li>
              </ul>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
              <img
                src="/Passport.png"
                alt="Visa Documents"
                className="max-w-full h-auto"
              />
            </div>
          </section>
        </div>
      </div>
      <div className="bg-grottoblue  flex items-center justify-center p-6">
        <div className="bg-grottoblue  p-8 w-full max-w-6xl">
          <section className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-4">
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
            </div>
            <div className="md:w-1/2 p-4 flex flex-wrap justify-center">
              <img
                src="/Visafees.png"
                alt="Image 1"
                className="max-w-full h-auto"
              />
            </div>
          </section>
        </div>
      </div>
      <Test1 />
    </>
  );
};

export default StudyDestination;

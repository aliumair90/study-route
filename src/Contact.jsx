import React from "react";

import TestimonialSlider from "./TestimonialSlider";

const Contact = () => {
  return (
    <>
      <div className=" py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our Contacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get in touch with us
              </h3>
              <p className="text-gray-700 mb-6">
                Give us a call or drop by anytime, we endeavor to answer all
                enquiries within 24 hours on business days. We will be happy to
                answer your questions. Our dedicated team is always here to
                provide you with detailed information, support, and guidance
                tailored to your specific needs. Whether it’s a simple query or
                a complex issue, we’re committed to ensuring your satisfaction
                and understanding. Reach out to us for reliable, prompt, and
                friendly service every time.
              </p>
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-white rounded-lg shadow-lg">
                  <svg
                    className="w-6 h-6 text-grottoblue mr-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm1 7V8l4 3-4 3V11zm5-3l4 3-4 3V8z" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      Location
                    </h4>
                    <p className="text-gray-700">XYZ, Lahore</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white rounded-lg shadow-lg">
                  <svg
                    className="w-6 h-6 text-grottoblue mr-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9l7.997-3.116A1 1 0 0018 5H2a1 1 0 00-.997.884zM10 11L2.003 7.116A1 1 0 002 7v8a1 1 0 001 1h14a1 1 0 001-1V7a1 1 0 00-.003-.116L10 11z" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      Phone Number
                    </h4>
                    <p className="text-gray-700">+92 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white rounded-lg shadow-lg">
                  <svg
                    className="w-6 h-6 text-grottoblue mr-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9l7.997-3.116A1 1 0 0018 5H2a1 1 0 00-.997.884zM10 11L2.003 7.116A1 1 0 002 7v8a1 1 0 001 1h14a1 1 0 001-1V7a1 1 0 00-.003-.116L10 11z" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      Email Us
                    </h4>
                    <p className="text-gray-700">info@study-route.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-grottoblue p-8 lg:mt-[-66px] rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                Send Your Message
              </h3>
              <p className="text-white mb-6">
                Please feel free to get in touch with us using the contact form
                below. We’d love to hear from you.
              </p>
              <form className="space-y-4">
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <input
                    type="text"
                    className="w-full p-3 mb-4 md:mb-0 rounded bg-white text-gray-800"
                    placeholder="Full Name"
                  />
                  <input
                    type="email"
                    className="w-full p-3 mb-4 md:mb-0 rounded bg-white text-gray-800"
                    placeholder="Your Email"
                  />
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <input
                    type="text"
                    className="w-full p-3 mb-4 md:mb-0 rounded bg-white text-gray-800"
                    placeholder="City"
                  />
                  {/* <select className="w-full p-3 mb-4 md:mb-0 rounded bg-white text-gray-800">
                    <option>Select Country</option>
                    <option>Pakistan</option>
                    <option>India</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>Canada</option>
                  </select> */}
                </div>
                <input
                  type="text"
                  className="w-full p-3 mb-4 rounded bg-white text-gray-800"
                  placeholder="Phone Number"
                />
                <textarea
                  className="w-full p-3 mb-4 rounded bg-white text-gray-800"
                  placeholder="Message"
                  rows="4"
                ></textarea>
                <button
                  type="submit"
                  className="w-full p-3 bg-navyblue text-white font-semibold rounded"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <TestimonialSlider />
      <br />
      <br />
    </>
  );
};

export default Contact;

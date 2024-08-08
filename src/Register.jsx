import React from "react";

const Register = () => {
  return (
    <>
      <br />

      <div
        className="relative bg-cover bg-center h-screen "
        style={{
          backgroundImage: "url('ireland.jpg')",
        }}
      >
        <div className="absolute inset-0   bg-black opacity-30"></div>
        <div className="relative z-10 w-[80%] mx-auto bg-white p-8 rounded-lg shadow-lg  top-16">
          <h2 className="text-center text-2xl font-bold mb-4">Register Now</h2>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="First Name*"
                className="w-1/2 px-4 py-2 border rounded-md focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="w-1/2 px-4 py-2 border rounded-md focus:outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address*"
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Mobile Number*"
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            />
            <div className="flex space-x-4">
              {/* <select className="w-1/2 px-4 py-2 border rounded-md focus:outline-none">
                <option>Your preferred study destination*</option>
                <option>UK</option>
                <option>USA</option>
                <option>Australia</option>
                <option>Canada</option>
                {/* Add more options as needed */}
              {/* </select> */}
              <input
                type="text"
                placeholder="Message*"
                className="w-full h-24 px-4 py-2 border rounded-md focus:outline-none"
              />
            </div>
            {/* <div className="space-y-2">
              {/* <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                Please contact me by phone or email to assist my enquiry.
              </label> */}
            {/* <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                I’d love to get useful info through emails from you about study
                abroad, scholarships, and IELTS.
              </label> */}
            {/* </div>  */}
            <div className="mx-auto  w-1/4">
              <button className=" bg-grottoblue text-white p-2 rounded-md font-bold hover:bg-babyblue transition">
                BOOK A FREE APPOINTMENT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;

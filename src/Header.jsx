import React, { useState } from "react";

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className="bg-navyblue text-white py-2">
        <div className="container w-[80%] mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <i className="fas fa-phone-alt"></i>
              <span>+92 123 456 789</span>
            </div>
            <div className="flex items-center space-x-1">
              <i className="fas fa-envelope"></i>
              <span>info@study-route.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="/">
              <img src="Logo.png" alt="Logo" className="h-12" />
            </a>
          </div>
          <ul className="flex space-x-8 text-grottoblue font-medium">
            <li>
              <a href="/" className="hover:text-teal-500">
                Home
              </a>
            </li>
            <li>
              <a href="/about-us" className="hover:text-teal-500">
                About Us
              </a>
            </li>
            <li>
              <a href="/study-destination" className="hover:text-teal-500">
                Study Destination
              </a>
            </li>
            <li>
              <a href="/online-consultant" className="hover:text-teal-500">
                Online Consultant
              </a>
            </li>
          </ul>
          <button
            onClick={handlePopup}
            className="bg-grottoblue text-white py-2 px-6 rounded-full flex items-center"
          >
            Enquire Now <i className="ml-2 fas fa-paper-plane"></i>
          </button>
        </div>
      </nav>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white w-[70%] p-8 rounded-md relative">
            <button
              className="absolute top-4 right-4 text-gray-500"
              onClick={handlePopup}
            >
              &times;
            </button>
            <h2 className="text-4xl font-bold text-center mb-6">APPLY NOW</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className=" p-2 border border-gray-300 rounded "
                  required
                />
                <textarea
                  placeholder="Message"
                  className="w-full p-2 border border-gray-300 rounded col-span-2"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-grottoblue text-white p-2 rounded flex items-center justify-center"
              >
                SEND <i className="ml-2 fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

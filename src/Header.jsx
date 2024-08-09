import React, { useState } from "react";

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-navyblue text-white py-2">
        {/* <div className="container w-[80%] mx-auto flex justify-between items-center">
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
         */}
        <div className="container w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Flex container for phone and email */}
          <div className="flex flex-col md:flex-row md:space-x-4 items-center">
            <div className="flex items-center space-x-1">
              <i className="fas fa-phone-alt"></i>
              <span>+92 123 456 789</span>
            </div>
            <div className="flex items-center space-x-1 mt-2 md:mt-0">
              <i className="fas fa-envelope"></i>
              <span>info@study-route.com</span>
            </div>
          </div>

          {/* Social links in a separate line on mobile */}
          <div className="flex space-x-4 mt-2 md:mt-0">
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
          <div className="flex   items-center space-x-4">
            <a href="/">
              <img src="Logo.jpeg" alt="Logo" className="w-32" />
            </a>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              className="text-grottoblue focus:outline-none"
              onClick={toggleMenu}
            >
              <i
                className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-2xl`}
              ></i>
            </button>
          </div>

          {/* Navigation Links - Hidden on Mobile */}
          <ul className="space-x-8 text-grottoblue font-medium hidden md:flex">
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
            <li>
              <a href="/contact-us" className="hover:text-teal-500">
                Contact US
              </a>
            </li>
          </ul>

          {/* Enquire Now Button - Hidden on Mobile */}
          <button
            onClick={handlePopup}
            className="bg-grottoblue text-white py-2 px-6 rounded-full hidden md:flex items-center"
          >
            Enquire Now <i className="ml-2 fas fa-paper-plane"></i>
          </button>
        </div>

        {/* Dropdown Menu for Mobile */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md py-4">
            <ul className="space-y-4 text-grottoblue font-medium flex flex-col items-center">
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
              <li>
                <a href="/contact-us" className="hover:text-teal-500">
                  Contact Us
                </a>
              </li>
              <li>
                <button
                  onClick={handlePopup}
                  className="bg-grottoblue text-white py-2 px-6 rounded-full flex items-center"
                >
                  Enquire Now <i className="ml-2 fas fa-paper-plane"></i>
                </button>
              </li>
            </ul>
          </div>
        )}
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

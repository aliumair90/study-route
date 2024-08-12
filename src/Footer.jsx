import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-navyblue text-white opacity-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div>
              <img src="Logo-bgr.png" alt="Logo" className="w-24 mb-4" />
              <p>
                Study Route is one of the fastest growing education and career
                networks in Pakistan.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" aria-label="TikTok">
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact With Us</h3>
              <p className="mb-2">Email: info@study-route.com</p>
              <p className="mb-2">Phone: +92 309 8488442</p>
              <p className="mb-2">Address: Collabs Gulberg ,Lahore </p>
            </div>

            {/* Navigation Links */}
            <div className="md:hidden grid grid-cols-2">
              <div className="">
                <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/">
                      <span>
                        <i className="fas fa-chevron-right me-1"></i>
                      </span>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="about-us">
                      <span>
                        <i className="fas fa-chevron-right me-1"></i>
                      </span>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="study-destination">
                      <span>
                        <i className="fas fa-chevron-right me-1"></i>
                      </span>
                      Study Destination
                    </a>
                  </li>
                  <li>
                    <a href="online-consultant">
                      <span>
                        <i className="fas fa-chevron-right me-1"></i>
                      </span>
                      Online Consultant
                    </a>
                  </li>
                </ul>
              </div>

              {/* Useful Links */}
              <div className=" block">
                <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                <ul className="space-y-2">
                  <li>
                    <span>
                      <i className="fas fa-chevron-right me-1"></i>
                    </span>
                    <a href="/about-us">About Us</a>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-chevron-right me-1"></i>
                    </span>
                    <a href="/contact-us">Contact Us</a>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-chevron-right me-1"></i>
                    </span>
                    <a href="/privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-chevron-right me-1"></i>
                    </span>
                    <a href="/faq">FAQs</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Last Two Grid Items Displayed Side by Side on Mobile */}
            <div className="hidden md:grid md:col-span-2 grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/">
                      <span>
                        <i className="fas fa-chevron-right me-1"></i>
                      </span>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="about-us">
                      <span>
                        <i className="fas fa-chevron-right me-1"></i>
                      </span>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="study-destination">
                      <span>
                        <i className="fas fa-chevron-right me-1"></i>
                      </span>
                      Study Destination
                    </a>
                  </li>
                  <li>
                    <a href="online-consultant">
                      <span>
                        <i className="fas fa-chevron-right me-1"></i>
                      </span>
                      Online Consultant
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                <ul className="space-y-2">
                  <li>
                    <span>
                      <i className="fas fa-chevron-right me-1"></i>
                    </span>
                    <a href="/about-us">About Us</a>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-chevron-right me-1"></i>
                    </span>
                    <a href="/contact-us">Contact Us</a>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-chevron-right me-1"></i>
                    </span>
                    <a href="/privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-chevron-right me-1"></i>
                    </span>
                    <a href="/faq">FAQs</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-4 text-center">
            <p className="text-sm">
              Developed and Design by{" "}
              <a
                href="https://www.loftylogix.com/"
                className="text-white font-bold"
              >
                Lofty Logix
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

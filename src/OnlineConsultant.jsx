import React from "react";

import Register from "./Register";

const OnlineConsultant = () => {
  return (
    <>
      <br />
      <br />
      <div>
        <h1 className="text-3xl font-bold text-center">
          Secure a Spot for Yourself with Our Online Consultation <br />
          for Overseas Educational Opportunities
        </h1>
      </div>
      <br />
      <br />
      <div>
        <p className="text-center w-[70%] text-xl mx-auto">
          Feeling overwhelmed by endless overseas study searches? Take a deep
          breath and let Study Route be your guide! Connect with our expert
          counselors for a personalized online consultation via video call. We
          offer flexible scheduling to fit your busy life, and our consultations
          cover everything you need! Discuss with us your study options, find
          your perfect fit, and receive application assistance – all online!
        </p>
      </div>
      <br />
      <br />
      <Register />
    </>
  );
};

export default OnlineConsultant;

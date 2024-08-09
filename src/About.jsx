import React from "react";

import Benefits from "./Benefits";

const About = () => {
  return (
    <>
      <br />
      <br />
      <div>
        <h1 className="text-center font-bold text-grottoblue text-4xl">
          About Us
        </h1>
        <br />
        <div className="w-[80%] mx-auto text-center  font-semibold ">
          <p>
            At Study Route, we empower students to achieve their academic and
            professional goals by providing expert guidance and support. Our
            mission is to help you navigate the complex educational landscape
            and find the best path to success.
          </p>
          <br />
          <p>
            Our vision at Study Route is to set new benchmarks in the education
            consultancy field, upholding performance excellence. Drawing from
            real-world experiences in problem-solving and equipped with
            practical insights into the ever-changing landscape of admissions,
            visa processes, and the dynamic education and career industry, we
            empower our clients to navigate and overcome the challenges inherent
            in pursuing education abroad.
          </p>
          <br />
          <p>
            Considering the idea of moving abroad? There's no need to
            second-guess. Let us guide you in turning your aspirations into
            reality through our expert immigration services. Our singular goal
            is clear: to offer completely unbiased and impartial advice and
            provide you with the pinnacle of service excellence. Your journey
            begins with Study Route – where expertise meets dreams.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Benefits />
    </>
  );
};

export default About;

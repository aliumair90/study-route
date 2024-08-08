import React from "react";
const logos = [
  {
    src: "/U1.png",
    alt: "University of Northampton",
  },
  { src: "U4.png", alt: "The University of Law" },
  { src: "/assets/heriot-watt.png", alt: "Heriot Watt University" },
  {
    src: "U5.png",
    alt: "Queen's University Belfast",
  },
  { src: "U6.png", alt: "Aberystwyth University" },
  {
    src: "U2.png",
    alt: "University of South Wales",
  },
  {
    src: "/assets/university-of-gloucestershire.png",
    alt: "University of Gloucestershire",
  },
  {
    src: "/assets/sheffield-hallam-university.png",
    alt: "Sheffield Hallam University",
  },
  { src: "/assets/de-montfort-university.png", alt: "De Montfort University" },
  { src: "/assets/university-of-bradford.png", alt: "University of Bradford" },
  {
    src: "/assets/cardiff-metropolitan-university.png",
    alt: "Cardiff Metropolitan University",
  },
  { src: "/assets/university-of-chester.png", alt: "University of Chester" },
  {
    src: "/assets/canterbury-christ-church-university.png",
    alt: "Canterbury Christ Church University",
  },
  { src: "/assets/keele-university.png", alt: "Keele University" },
  {
    src: "U3.png",
    alt: "University of Roehampton London",
  },
  {
    src: "/assets/ravensbourne-university-london.png",
    alt: "Ravensbourne University London",
  },
  { src: "/assets/ulster-university.png", alt: "Ulster University" },
  {
    src: "/assets/ulster-university-london-birmingham.png",
    alt: "Ulster University London & Birmingham",
  },
];
const University = () => {
  return (
    <>
      <div className="bg-gray-50 ">
        <div className="text-6xl text-center font-bold pt-10">
          <h1>Universities</h1>
        </div>
        <div className="text-base pt-5 w-[70%] mx-auto text-center">
          <p>
            From providing counselling sessions to interview preparation, our
            education consultants in Pakistan offer promised services. We,
            actually, act as a bridge between the student and the university he
            wants to study. As we see our students, the nation builders, that is
            why we give them the best of our services.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6 p-6">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-4 bg-white shadow-md rounded-lg"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-24 object-contain"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default University;

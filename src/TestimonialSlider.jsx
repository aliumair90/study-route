import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css"; // Assuming you have Tailwind CSS setup

const testimonials = [
  {
    id: 1,
    name: "Shiza Shafiq",
    role: "Student",
    review:
      "Great Experience. Must visit this place because the staff is so cooperative and hardworking to fulfill the desire of students. Those who want to go abroad...",
    source: "Google",
    avatar: "S",
  },
  {
    id: 2,
    name: "Ali Nadeem",
    role: "Student",
    review:
      "The counsellors at Study Route respond promptly and well equipped with the knowledge of various foreign universities. They are best education consultants in...",
    source: "Google",
    avatar: "A",
  },
  {
    id: 3,
    name: "Rehman Butt",
    role: "Student",
    review:
      "Alhamdulilah I got my UK visa with the help of Study Route. I really recommend Paragon because they tell everything so clearly. The staff are very helpful and they help...",
    source: "Google",
    avatar: "R",
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="">
        <div className="bg-cover bg-center py-14 bg-navyblue ">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Testimonials
          </h2>
          <div className="max-w-screen-xl mx-auto ">
            <Slider {...settings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="px-4 ">
                  <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center mb-4">
                        <span className="text-4xl text-teal-600">“</span>
                      </div>
                      <p className="text-gray-600 mb-4">{testimonial.review}</p>
                      <a href="#" className="text-teal-500 block">
                        Read More
                      </a>
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 bg-teal-500 text-white rounded-full flex items-center justify-center">
                          {testimonial.avatar}
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-lg font-bold">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-500">{testimonial.role}</div>
                        <div className="text-gray-400 text-sm mt-1">
                          {testimonial.source}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;

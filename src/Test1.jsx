import React from "react";
import InfoCards from "./InfoCards";

const ImageComponent = ({ src, alt }) => (
  <div className="w-full">
    <img
      loading="lazy"
      decoding="async"
      src={src}
      alt={alt}
      className="w-full h-auto"
    />
  </div>
);

const Test1 = () => {
  return (
    <>
      <div className="bg-gray-50">
        <div className=" text-3xl md:text-6xl text-center font-bold pt-10 ">
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
        <div className="w-full md:w-auto  bg-white   my-2">
          <ImageComponent src="Universities.webp" alt="" />
        </div>
        {/* <div className="flex w-[80%] mx-auto mt-12">
          <div className="flex flex-wrap mt-14 mx-2">
            <div className="w-full md:w-auto border rounded-lg bg-white shadow-lg  my-2 ">
              <ImageComponent src="U1.png" alt="" />
            </div>
            <div className="w-full md:w-auto border rounded-lg bg-white shadow-lg  my-2">
              <ImageComponent src="U6.png" alt="" />
            </div>
            <div className="hidden md:block w-full md:w-auto border rounded-lg bg-white shadow-lg my-2">
              <ImageComponent src="U5.png" alt="" />
            </div>
          </div>
          <div className="flex flex-wrap mx-2 mb-14">
            <div className="w-full md:w-auto border rounded-lg bg-white shadow-lg  my-2">
              <ImageComponent src="U3.png" alt="" />
            </div>
            <div className="w-full md:w-auto border rounded-lg bg-white shadow-lg  my-2">
              <ImageComponent src="U4.png" alt="" />
            </div>
            <div className="hidden md:block w-full md:w-auto border rounded-lg bg-white shadow-lg  my-2">
              <ImageComponent src="U7.png" alt="" />
            </div>
          </div>
          <div className="flex flex-wrap mx-2 mt-14">
            <div className="w-full md:w-auto border rounded-lg bg-white shadow-lg  my-2">
              <ImageComponent src="U8.png" alt="" />
            </div>
            <div className="w-full md:w-auto border rounded-lg bg-white shadow-lg  my-2">
              <ImageComponent src="U9.png" alt="" />
            </div>
            <div className="hidden md:block w-full md:w-auto border rounded-lg bg-white shadow-lg  my-2">
              <ImageComponent src="U17.png" alt="" />
            </div>
          </div>
          <div className="flex flex-wrap mx-2 mb-14">
            <div className="w-full md:w-auto border rounded-lg bg-white shadow-lg  my-2">
              <ImageComponent src="U11.png" alt="" />
            </div>
            <div className="w-full md:w-auto border rounded-lg bg-white shadow-lg  my-2">
              <ImageComponent src="U12.png" alt="" />
            </div>
            <div className="hidden md:block w-full md:w-auto border rounded-lg bg-white shadow-lg  my-2">
              <ImageComponent src="U13.png" alt="" />
            </div>
          </div>
          <div className="flex flex-wrap mx-2 mt-14">
            <div className="w-full md:w-auto border rounded-lg bg-white shadow-lg  my-2">
              <ImageComponent src="U14.png" alt="" />
            </div>
            <div className="w-full md:w-auto border rounded-lg bg-white shadow-lg  my-2">
              <ImageComponent src="U15.png" alt="" />
            </div>
            <div className="hidden md:block w-full md:w-auto border rounded-lg bg-white shadow-lg  my-2">
              <ImageComponent src="U16.png" alt="" />
            </div>
          </div>
        </div> */}
      </div>
      <br />
      <br />
      <InfoCards />
    </>
  );
};

export default Test1;

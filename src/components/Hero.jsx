import React from "react";
import bgImage from "../assets/images.jpg";

const Hero = (props) => {
  return (
    <div className="relative h-[80vh]">
      <div
        className=" absolute inset-0 bg-cover bg-center bg-stone-800"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gray-800 bg-opacity-50 "></div>
      </div>
      <div className="relative flex justify-center items-center text-white h-full">
        <div className="mt-20 text-center">
          <h2 className="text-6xl font-semibold">FORTVIEW</h2>
          <h2 className="text-6xl font-semibold">SUITES</h2>
          <p className="mt-5 text-xl">Fort Road, Kasaragod, Kerala</p>
          <p className="mt-3 text-xl">+91 7400 337333 </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

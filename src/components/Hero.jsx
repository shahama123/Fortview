import React from "react";
import bgImage from "../assets/images.jpg";
import logo from "../assets/logo2.png";

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
        <div className=" mt-20 text-center">
          <img src={logo} alt="" className="w-24 " />
          <h2 className="title-font text-6xl font-extrabold">FORTVIEW</h2>
          <h2 className="title-font text-6xl font-extrabold">SUITES</h2>
          <p className="title-font mt-5 text-xl">
            Fort Road, Kasaragod, Kerala
          </p>
          <p className="title-font mt-3 text-xl">+91 7400 337333 </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

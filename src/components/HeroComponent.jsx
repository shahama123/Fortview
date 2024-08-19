import React from "react";

const HeroComponent = ({ title, imgLink }) => {
  return (
    <div>
      <div className="relative h-[54vh]">
        <div
          className=" absolute inset-0 bg-cover  bg-center bg-stone-800"
          style={{
            backgroundImage: `url(${imgLink})`,
          }}
        >
          <div className="absolute inset-0 bg-gray-800 bg-opacity-50 "></div>
        </div>
        <div className="relative flex justify-center items-center text-white h-full">
          <div className="mt-20 text-center">
            <h2 className="text-8xl font-semibold">{title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;

import React from "react";

const ExploreData = ({ img, text1, text2 }) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 mb-12   ">
      <div>
        <img className="min-w-[70vh] max-w-[70vh] " src={img} />
      </div>
      <div className="px-1 mt-3 lg:mt-3 sm:mt-10 justify-center">
        <p>{text1}</p>
        <p className="mt-5">{text2}</p>
      </div>
    </div>
  );
};

export default ExploreData;

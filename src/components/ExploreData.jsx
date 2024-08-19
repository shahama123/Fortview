import React from "react";

const ExploreData = ({ img, text1, text2 }) => {
  return (
    <div className="flex mb-12   ">
      <div>
        <img className="min-w-[70vh] max-w-[70vh] " src={img} />
      </div>
      <div className="px-10 mt-3 justify-center">
        <p>{text1}</p>
        <p className="mt-5">{text2}</p>
      </div>
    </div>
  );
};

export default ExploreData;

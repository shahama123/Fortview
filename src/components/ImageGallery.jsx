import React from "react";

const ImageGallery = ({ images }) => {
  return (
    <div className="grid px-28 mt-10 gap-5 grid-cols-2">
      {images.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-md">
          <img
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;

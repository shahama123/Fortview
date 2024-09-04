import React from "react";
import HeroComponent from "../components/HeroComponent";
import bgImage from "../assets/images.jpg";
const Location = () => {
  return (
    <div>
      <HeroComponent title="Location" imgLink={bgImage} />
      <div className="mt-10 lg:px-20 px-8 space-y-5 text-[#374151] text-base">
        <p>
          Fortview Suites is located on Fort Road in the heart of Kasaragod
          city, making it an ideal base for exploring this beautiful region. Our
          hotel is just a short distance from the railway station and bus stand.
        </p>
        <ul className="list-disc list-inside space-y-2 ">
          <li>Railway station - 900 meters</li>
          <li>KSRTC bus stand - 400 meters</li>
          <li>Old bus stand - 500 meters</li>
          <li>New bus stand - 1.2 km</li>
          <li>Bekal Fort - 14 km</li>
          <li>Malik Deenar - 2 km</li>
          <li>Madhur Temple - 6.3 km</li>
        </ul>
      </div>
      <div className="flex justify-center mt-14 mb-8">
        <iframe
          className="w-10/12  h-[60vh]"
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1947.6309355507224!2d74.987765!3d12.498794!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDI5JzU2LjAiTiA3NMKwNTknMTUuOSJF!5e0!3m2!1sen!2sus!4v1723672028125!5m2!1sen!2sus"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;

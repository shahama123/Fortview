import React from "react";
import Header from "../components/Header";
import HeroComponent from "../components/HeroComponent";
import bgImage from "../assets/deluxe4.jpeg";
import RoomData from "../components/RoomData";
import Button from "../components/Button";

const Rooms = () => {
  return (
    <div>
      <Header />
      <HeroComponent imgLink={bgImage} title="Rooms" />

      <div className="mt-10 lg:px-28 px-10 text-base text-blue-gray-800">
        <div>
          <p className="leading-8">
            Fortview Suites offers a variety of rooms to suit the needs of
            different guests.
            <span className="text-blue-gray-700">
              We offer a luxurious experience with amenities such as
              complimentary breakfast, free parking, free WiFi, pickup/drop-off
              service, concierge service, and more. Indulge in luxury bedding,
              enjoy 50" LED TV entertainment, and stay refreshed with a
              mini-fridge and premium toiletries.
            </span>{" "}
            We strive to provide our guests with the utmost comfort and
            convenience during their stay at Fortview Suites. Here are the
            descriptions of the different types of rooms we offer:
          </p>
        </div>
        <RoomData />
      </div>
      <div className="flex justify-center mt-10">
        <Button />
      </div>
    </div>
  );
};

export default Rooms;

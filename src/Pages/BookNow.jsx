import React from "react";
import HeroComponent from "../components/HeroComponent";
import image from "../assets/image1.jpg";
import Button from "../components/Button";

const BookNow = () => {
  return (
    <div>
      <HeroComponent title="Book Now" imgLink={image} />
      <div className="mt-16 lg:px-20 px-8 text-blue-gray-800 text-base">
        <div className="space-y-3">
          <p>
            Fortview Suites welcomes you to make your reservation and embark on
            an unforgettable journey in Kasaragod, Kerala.
          </p>{" "}
          <br />
          <ul className="space-y-3 list-item ml-6 list-disc">
            <li>
              <a
                className="text-blue-800 font-bold underline"
                href="https://77076.staygrid.com/webreservation/index/index/hidHotelIdWebOut/QV5TX0ZSczM0Xzc3MDc2X0Y1dGVyOTA4N3NfKWRoZl9kcnRlcjdfNzcwNzZfaGdmaF9nXmQ4NTQ=/hidLanguageId/1/"
              >
                Online Booking
              </a>
            </li>
            <li>
              Or call us at{" "}
              <a className="text-blue-400 underline" href="tele:+917400337333">
                +91 7400337333
              </a>
              .{" "}
            </li>
            <li>
              Or email us{" "}
              <a
                className="text-blue-400 underline"
                href="mailto:reservations@fortview.in"
              >
                reservations@fortview.in
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center mt-10 p-10">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default BookNow;

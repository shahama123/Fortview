import React from "react";
import bgImage from "../assets/images.jpg";
import HeroComponent from "../components/HeroComponent";
import Button from "../components/Button";

const AboutUs = () => {
  return (
    <div>
      <HeroComponent imgLink={bgImage} title="Fortview Suites" />
      <div className="px-28 py-8 space-y-5">
        <h2>About Us</h2>
        <p>
          Welcome to Fortview Suites, a premier luxury hotel located in the
          enchanting city of Kasaragod, Kerala. We offer a perfect blend of
          contemporary elegance and warm hospitality.
        </p>
        <p>
          Our Accommodation: Choose from our well-appointed rooms and suites
          designed for utmost comfort and style. We have a perfect accommodation
          option to suit every traveler's needs.
        </p>
        <p>
          Exploring Kasaragod: Discover the charm and beauty of Kasaragod, from
          the majestic Bekal Fort to the pristine beaches and backwaters. Our
          hotel's convenient location provides easy access to these must-visit
          destinations.
        </p>
        <p>
          Exceptional Service: Our attentive and friendly staff is dedicated to
          fulfilling your needs, ensuring that every moment of your stay is
          filled with utmost comfort and satisfaction.
        </p>
        <p>
          We look forward to welcoming you to Fortview Suites, where
          unforgettable experiences and warm hospitality await. For inquiries or
          reservations, please contact us at
        </p>
        <p>
          Email:
          <a className="underline " href="mailto:reservations@fortview.in">
            reservations@fortview.in.
          </a>
        </p>
        <p>Phone: +91 74003 37333</p>
        <p>
          Address: Fortview Suites, The Square, Fort Road, Kasaragod, Kerala,
          India - 671 121
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

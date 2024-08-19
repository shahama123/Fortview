import React from "react";
import img1 from "../assets/room1.jpeg";
import img2 from "../assets/room2.jpeg";
import img3 from "../assets/kettle.jpeg";
import img4 from "../assets/shampoo.jpeg";
import img5 from "../assets/reception.jpeg";
import Button from "./Button";

const Details = () => {
  return (
    <>
      <div className="flex mt-7 px-20">
        <div>
          <img className="w-[240vh]" src={img1} />
        </div>
        <div className="px-8 mt-4 ">
          <p className="leading-7">
            Welcome to Fortview Suites, a luxurious and family-friendly hotel
            located in the picturesque city of Kasaragod, Kerala. Our hotel
            offers a unique blend of traditional hospitality and modern
            amenities, making it an ideal choice for families seeking an
            unforgettable vacation.
          </p>
          <p className="leading-7">
            Our rooms and suites are spacious and elegantly designed. Each room
            is equipped with state-of-the-art amenities, including flat-screen
            TVs, free Wi-Fi, air conditioning, and luxurious bedding to ensure
            that you have a comfortable and memorable stay.
          </p>
        </div>
      </div>

      <div className="flex mt-14 px-20">
        <div>
          <img className="w-[240vh]" src={img2} />
        </div>
        <div className="px-8 mt-4">
          <p className="leading-7">
            In addition to being a family-friendly hotel, Fortview Suites is
            also an excellent choice for business travelers visiting Kasaragod,
            Kerala. Our rooms are designed to provide a comfortable and
            productive environment, with spacious work desks, ergonomic chairs,
            and ample lighting.
          </p>
          <p className="leading-7">
            At Fortview Suites, we pride ourselves on our exceptional service
            and our dedication to ensuring that our guests have a wonderful
            stay. Whether you're in town for business or leisure, we invite you
            to stay with us and experience the very best of Kerala hospitality.
          </p>
        </div>
      </div>

      <div className="flex mt-[0.5px] p-20">
        <div>
          <img className="min-w-500 " src={img3} />
          <img className="min-w-500 mt-8" src={img4} />
        </div>
        <div className="px-8 mt-4">
          <div className="border-t-4 border-b-4 ">
            <h1 className="text-blue-600 text-3xl mt-5 mb-5 font-extrabold">
              Amenities
            </h1>
          </div>
          <p className="mt-5 leading-7">
            Fortview Suites offers a wide range of amenities to ensure that our
            guests have a comfortable and enjoyable stay. Some of the amenities
            we offer include:
          </p>
          <ul className="space-y-3 list-item list-inside list-disc">
            <li>Complimentary breakfast</li>
            <li>
              Luxury bedding - 10-inch Euro Top Memory Foam spring mattress{" "}
            </li>
            <li> 50" Smart LED TV with cable TV</li>
            <li> Air conditioner</li>
            <li> Mini fridge</li>
            <li> Safety locker</li>
            <li> Google Home Nest Hub</li>
            <li> Premium toiletries</li>
            <li> Luxury towels and linens</li>
            <li> Dental kit, shaving kit, comb, and shower cap</li>
            <li> Tea/Coffee </li>
            <li> Hair Dryer</li>
            <li> Iron Box</li>
            <li> Mood lighting</li>
            <li>Sofa, computer desk and chair</li>
            <li>Pickup/Drop off from the railway station and bus stand</li>
            <li>Concierge service</li>
            <li>Free Parking</li>
            <li>Free WiFi</li>
            <li>EV Charger</li>
          </ul>
        </div>
      </div>

      <div className="flex mt-[0.1px] px-6">
        <div className="flex justify-center w-[240vh] px-8 mt-14 mb-8">
          <iframe
            className="w-11/12  h-[65vh]"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1947.6309355507224!2d74.987765!3d12.498794!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDI5JzU2LjAiTiA3NMKwNTknMTUuOSJF!5e0!3m2!1sen!2sus!4v1723672028125!5m2!1sen!2sus"
          ></iframe>
        </div>
        <div className="px-8 mt-4">
          <div className="border-t-4 border-b-4 ">
            <h1 className="text-blue-600 text-3xl mt-5 mb-5 font-extrabold">
              Location
            </h1>
          </div>
          <p className="mt-5 leading-7">
            Fortview Suites is located on Fort Road in the heart of Kasaragod
            city, making it an ideal base for exploring this beautiful region.
            Our hotel is just a short distance from the railway station and bus
            stand.
          </p>
          <ul className="space-y-3 list-item list-inside list-disc">
            <li>Railway station - 1 km</li>
            <li>KSRTC bus stand - 0.6 km</li>
            <li>Old bus stand - 0.5 km</li>
            <li> New bus stand - 1.3 km</li>
            <li> Bekal Fort - 15 km</li>
          </ul>
        </div>
      </div>

      <div className="flex mt-3 px-6">
        <div>
          <img className="w-[250vh] h-[80vh] px-14" src={img5} />
        </div>
        <div className="px-1 mt-4">
          <div className="border-t-4 border-b-4 ">
            <h1 className="text-blue-600 text-3xl mt-5 mb-5 font-extrabold">
              Contact Us
            </h1>
          </div>
          <p className="mt-5 leading-7">Fortview Suites</p>
          <p className="mt-5 leading-7">The Square, Fort Road</p>
          <p className="mt-5 leading-7">Kasaragod, Kerala - 671 121</p>
          <p className="mt-5 leading-7">+91 74003 37333</p>
          <p className="mt-5 leading-7">
            <a className="underline" href="mailto:reservations@fortview.in">
              reservations@fortview.in
            </a>
          </p>
          <p className="mt-5 leading-7">
            Our friendly staff will be happy to assist you with any questions
            you may have and help you make your reservation. You can also visit
            our website to book your stay directly online. Thank you for
            considering Fortview Suites, and we look forward to welcoming you
            soon!
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Button />
      </div>
    </>
  );
};

export default Details;

import React from "react";
import bgImage from "../assets/images.jpg";
import HeroComponent from "../components/HeroComponent";
import Button from "../components/Button";
import { CarouselDefault } from "../components/Carousal";
import image1 from "../assets/kettle.jpeg";
import image2 from "../assets/dental kit.jpeg";
// import image3 from "../assets/fridge.jpeg";
// import image4 from "../assets/google nest.jpeg";
// import image5 from "../assets/hairdryer.jpeg";
// import image6 from "../assets/hangers.jpeg";
import image7 from "../assets/iron board.jpeg";

// import image8 from "../assets/shampoo.jpeg";
import image9 from "../assets/shampoo2.jpeg";
// import image10 from "../assets/wadrobe.jpeg";

const Amenities = () => {
  const array7 = [
    image1,
    image2,
    // image3 ,
    // image4,
    // image5,
    // image6,
    image7,
    // image8,
    image9,
    // image10,
  ];

  return (
    <div>
      <HeroComponent imgLink={bgImage} title="Amenities" />

      <div className="py-10 lg:px-28 px-12  text-blue-gray-800 text-base ">
        <div className="space-y-5">
          <p>
            At Fortview Suites, we understand that the difference between a good
            stay and an exceptional one often lies in the details. That's why
            we've curated a collection of amenities designed to elevate your
            experience and leave you with lasting memories.
          </p>
          <ul className="list-disc ml-6  space-y-5">
            <li>
              <span className="font-bold text-blue-gray-900 ">
                Comfortable Accommodations :
              </span>{" "}
              Our well-appointed rooms offer a blend of modern design and
              classic elegance. Sink into luxury bedding, enjoy spacious
              interiors, and take in the serene ambiance of your home away from
              home.
            </li>
            <li>
              <span className="font-bold text-blue-gray-900">
                Modern Connectivity:
              </span>{" "}
              Stay connected with complimentary high-speed Wi-Fi available
              throughout the hotel. Whether you're catching up on work or
              sharing your travel adventures with loved ones, our connectivity
              keeps you in touch.
            </li>
            <li>
              <span className="font-bold text-blue-gray-900">
                Delightful Dining:
              </span>{" "}
              Start your day right with our complimentary breakfast. Savor the
              flavors of Kasaragod with a delicious spread of local dishes,
              prepared fresh each morning.
            </li>
            <li>
              <span className="font-bold text-blue-gray-900">
                Concierge Service:
              </span>{" "}
              Our concierge service is here to cater to your every need. Whether
              it's arranging transportation, or providing recommendations for
              dining and local attractions, our knowledgeable staff is at your
              service.
            </li>
            <li>
              <span className="font-bold text-blue-gray-900">
                Business-Friendly:
              </span>{" "}
              For our business travelers, we offer a dedicated workspace in each
              room. Stay productive in a comfortable environment, complete with
              all the amenities you need.
            </li>
            <li>
              <span className="font-bold text-blue-gray-900">
                Entertainment:
              </span>{" "}
              Unwind with a 50" LED TV that provides a range of entertainment
              options. Whether you're catching up on your favorite shows or
              enjoying a movie night, relaxation is just a remote click away.
            </li>
            <li>
              <span className="font-bold text-blue-gray-900">Convenience:</span>{" "}
              For your convenience, we provide a mini-fridge in every room. Keep
              your refreshments cool and accessible at all times.
            </li>
            <li>
              <span className="font-bold text-blue-gray-900">
                Safety and Security:
              </span>{" "}
              Your safety is our priority. Each room is equipped with a safety
              locker, ensuring your peace of mind throughout your stay.
            </li>
            <li>
              <span className="font-bold text-blue-gray-900">
                Smart Living:
              </span>{" "}
              Experience the future of hospitality with a Google Nest Hub in
              each room. Control room settings, request assistance, and access a
              world of information with just your voice.
            </li>
            <li>
              <span className="font-bold text-blue-gray-900">
                Refresh and Rejuvenate:
              </span>{" "}
              Our well-appointed bathrooms come with premium toiletries, dental
              kits, and shaving kits for your grooming needs. A hairdryer and
              iron are also provided for your convenience.
            </li>
            <li>
              <span className="font-bold text-blue-gray-900">
                Mood Lighting:
              </span>{" "}
              Set the perfect ambiance with mood lighting, allowing you to
              tailor your room's atmosphere to suit your mood.
            </li>
            <li>
              <span className="font-bold text-blue-gray-900">
                Complimentary Extras:
              </span>{" "}
              Enjoy a complimentary tea and coffee facilities in each room.
              Start your day with a fresh cup or enjoy a relaxing evening
              beverage.
            </li>
            <li>
              <span className="font-bold text-blue-gray-900">
                Notepad and Workspace:
              </span>{" "}
              Business travelers can stay organized and productive with the
              added convenience of a notepad and dedicated workspace.
            </li>
            <li>
              <span className="font-bold text-blue-gray-900">
                {" "}
                Free Parking:
              </span>{" "}
              Leave your vehicle worry-free with our complimentary parking
              facilities. Enjoy the convenience of on-site parking during your
              stay.
            </li>
            <li>
              <span className="font-bold text-blue-gray-900"> EV Charger:</span>{" "}
              For our environmentally-conscious guests, we offer an EV charger
              on-site. Charge your electric vehicle conveniently during your
              stay, knowing you're making a sustainable choice.
            </li>
          </ul>
          <p>
            At Fortview Suites, these amenities are more than just services -
            they're an integral part of your experience, designed to make your
            stay as comfortable, convenient, and enjoyable as possible. Your
            satisfaction is our utmost priority, and we look forward to
            exceeding your expectations with these thoughtful offerings.
          </p>
        </div>
        <div>
          <div className="mt-10">
            <CarouselDefault
              className=" max-w-96 min-w-96 h-40"
              autoPlay={3000}
              images={array7}
            />
          </div>

          <div className="flex justify-center mt-10">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;

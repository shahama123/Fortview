import React from "react";
import bgImage from "../assets/images.jpg";
import HeroComponent from "../components/HeroComponent";
import Button from "../components/Button";
import { CarouselDefault } from "../components/Carousal";

const Amenities = () => {
  const array7 = [
    "https://lh5.googleusercontent.com/kM1fdVHemb2gabb_tGd1JtDLvwvoFFVwnBhZvznxLV-P1YriDUkG8wBixfDx7o2CD_RqxJepJ5TKB2n8UYvGYD8YVqTedIAjPytsLIxPWjpE8aRgjHrJPb4qoYiq9OPnXw=w1280",
    "https://lh3.googleusercontent.com/qOXsBawnSCwoK9ye1XMTRbRP-vtHLRvlbTy-iGzJJlPiiCCTpzj5i_yfl50zmKdVt-bAQRPTYTtSyDhsJfXkIthZWiSkgJrDr5Phylq07w3xKTE2T-oEOP609rd15s6gQg=w1280",
    "https://lh5.googleusercontent.com/tbJPmndwzcUZ8AMBKj76nMfLvbW-Xzgr6aPQJ66loqnqxAD6tW25NhZEJGdN5mhpOV0wwMN8Epe92UVGAxhn6Ytg63s3H8-Kdz_jHTPnl5X_PTLgIuT19I2pisOD-wwfdQ=w1280",
    "https://lh5.googleusercontent.com/qXHKXDctqairugC-GWnE457IgoJ9iH74RS7vWlTDGAO7F5lcpkEseJHDX6Nx-kJjRaYR_-ANq6J9X4_BIn_fpJRQVa3QmXySiO_LuZvQcbQ-4wq6aBAhjg3UWKMwcSuFhw=w1280",
    "https://lh3.googleusercontent.com/Vc3pdIKoEAPHbIdCEW14GZ1BXmmEfEkk89-hCJNveIrv1I-ol3ih890MUAVET1J7L8NPDEA7RfkyaWbO7J2SbAuCj2ZE5KIfasza855GyKzaLTx4pq5HQ3oZPi-vim4BTg=w1280",
    "https://lh6.googleusercontent.com/AvKntFvTnun0blR5g6KFc1O0YieLoDlAyI1XrH8B1co43XwqHooe5RpEcpDL168MSyVMtLfHmHCUhOlx_a5YfJl3Aab__Mi80A951_1lbxvUCINdAkKntpse3xKqJ0w3Tg=w1280",
    "https://lh3.googleusercontent.com/RZB1h8qyMKsBJBYqpA1ab6Z7I-ip3-fTl87W8R8SZxzFp78JgsbPs-6zzzJBi1qU0Nu8FNlVrOiLcXTCyyd453zY42AZn1Ggr2h1_8f5BNzCZtC0T57q-QIGOJTUCiybNQ=w1280",
    "https://lh5.googleusercontent.com/4bKOikupH8dZ02OIhXh3MB6QT8hFJqZxHGGnh_2sDeDvp3cQgtkK0QbV23ZBB4OeHS5k62xfm1n-yrrK3DGsuepL9Uba8fUVcUehs7PfrD34gzYW3k-gyMEkWANGVOvtqw=w1280",
  ];

  return (
    <div>
      <HeroComponent imgLink={bgImage} title="Amenities" />

      <div className="py-10 px-28 ">
        <div className="space-y-5">
          <p>
            At Fortview Suites, we understand that the difference between a good
            stay and an exceptional one often lies in the details. That's why
            we've curated a collection of amenities designed to elevate your
            experience and leave you with lasting memories.
          </p>
          <ul className="list-disc  space-y-5">
            <li>
              <span className="font-bold ">Comfortable Accommodations :</span>{" "}
              Our well-appointed rooms offer a blend of modern design and
              classic elegance. Sink into luxury bedding, enjoy spacious
              interiors, and take in the serene ambiance of your home away from
              home.
            </li>
            <li>
              <span className="font-bold">Modern Connectivity:</span> Stay
              connected with complimentary high-speed Wi-Fi available throughout
              the hotel. Whether you're catching up on work or sharing your
              travel adventures with loved ones, our connectivity keeps you in
              touch.
            </li>
            <li>
              <span className="font-bold">Delightful Dining:</span> Start your
              day right with our complimentary breakfast. Savor the flavors of
              Kasaragod with a delicious spread of local dishes, prepared fresh
              each morning.
            </li>
            <li>
              <span className="font-bold">Concierge Service:</span> Our
              concierge service is here to cater to your every need. Whether
              it's arranging transportation, or providing recommendations for
              dining and local attractions, our knowledgeable staff is at your
              service.
            </li>
            <li>
              <span className="font-bold">Business-Friendly:</span> For our
              business travelers, we offer a dedicated workspace in each room.
              Stay productive in a comfortable environment, complete with all
              the amenities you need.
            </li>
            <li>
              <span className="font-bold">Entertainment:</span> Unwind with a
              50" LED TV that provides a range of entertainment options. Whether
              you're catching up on your favorite shows or enjoying a movie
              night, relaxation is just a remote click away.
            </li>
            <li>
              <span className="font-bold">Convenience:</span> For your
              convenience, we provide a mini-fridge in every room. Keep your
              refreshments cool and accessible at all times.
            </li>
            <li>
              <span className="font-bold">Safety and Security:</span> Your
              safety is our priority. Each room is equipped with a safety
              locker, ensuring your peace of mind throughout your stay.
            </li>
            <li>
              <span className="font-bold">Smart Living:</span> Experience the
              future of hospitality with a Google Nest Hub in each room. Control
              room settings, request assistance, and access a world of
              information with just your voice.
            </li>
            <li>
              <span className="font-bold">Refresh and Rejuvenate:</span> Our
              well-appointed bathrooms come with premium toiletries, dental
              kits, and shaving kits for your grooming needs. A hairdryer and
              iron are also provided for your convenience.
            </li>
            <li>
              <span className="font-bold">Mood Lighting:</span> Set the perfect
              ambiance with mood lighting, allowing you to tailor your room's
              atmosphere to suit your mood.
            </li>
            <li>
              <span className="font-bold">Complimentary Extras:</span> Enjoy a
              complimentary tea and coffee facilities in each room. Start your
              day with a fresh cup or enjoy a relaxing evening beverage.
            </li>
            <li>
              <span className="font-bold">Notepad and Workspace:</span> Business
              travelers can stay organized and productive with the added
              convenience of a notepad and dedicated workspace.
            </li>
            <li>
              <span className="font-bold"> Free Parking:</span> Leave your
              vehicle worry-free with our complimentary parking facilities.
              Enjoy the convenience of on-site parking during your stay.
            </li>
            <li>
              <span className="font-bold"> EV Charger:</span> For our
              environmentally-conscious guests, we offer an EV charger on-site.
              Charge your electric vehicle conveniently during your stay,
              knowing you're making a sustainable choice.
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

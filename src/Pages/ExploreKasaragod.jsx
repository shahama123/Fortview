import React from "react";
import bgImage from "../assets/images.jpg";
import ExploreData from "../components/ExploreData";
import Image1 from "../assets/Bekal.jpg";
import Image2 from "../assets/beach.jpg";
import Image3 from "../assets/cfort.jpg";
import Image4 from "../assets/backwater.jpg";
import Image5 from "../assets/malikdeenar.jpg";
import Image6 from "../assets/laketemple.jpg";
import Image7 from "../assets/ranipiram.jpg";
import Image8 from "../assets/kappil.jpeg";

import HeroComponent from "../components/HeroComponent";
import Button from "../components/Button";

const ExploreKasaragod = () => {
  return (
    <div>
      <HeroComponent title="Kasaragod" imgLink={bgImage} />
      <div className="mt-10 lg:px-28 px-10 space-y-4 text-blue-gray-700 text-base">
        <div className="space-y-4">
          <p>
            Kasaragod is a district in the northernmost part of Kerala, India.
            It is a lesser-known destination among tourists, but it has a lot of
            attractions to offer. The district also has a rich cultural
            heritage, and visitors can explore the local art, music, and
            cuisine.
          </p>
          <p>
            Kasaragod is known for its historic forts, beautiful beaches, and
            serene backwaters, all of which are within easy reach of our hotel.
            Guests can explore the city's cultural heritage by visiting the
            iconic Bekal Fort, or take a leisurely stroll along the scenic
            Kappil Beach.
          </p>
          <p>Some of the tourist attractions in Kasaragod are:</p>
        </div>
        <div className="flex flex-col py-8">
          <ExploreData
            img={Image1}
            text1="Bekal Fort is the most popular tourist attraction in Kasaragod. The fort is located on a hilltop overlooking the Arabian Sea and is one of the largest forts in Kerala. It was built by Shivappa Nayaka of the Ikkeri dynasty in the 17th century."
            text2="Distance: 15 km"
          />

          <ExploreData
            img={Image2}
            text1="Bekal Beach is a beautiful stretch of white sand that is located right next to Bekal Fort. It is an ideal spot for relaxing and enjoying the natural beauty of the region."
            text2="Distance: 16 km"
          />

          <ExploreData
            img={Image3}
            text1="Chandragiri Fort is a historic fort that was built in the 17th century. It is located on the banks of the Chandragiri River and offers stunning views of the surrounding landscape"
            text2="Distance: 6 km"
          />

          <ExploreData
            img={Image4}
            text1="Valiyaparamba Backwaters is a network of canals and lagoons that is located near the Arabian Sea. It is a great place to take a leisurely boat ride and admire the natural beauty of the region."
            text2="Distance: 49 km"
          />

          <ExploreData
            img={Image5}
            text1="Malik Dinar Mosque was founded by Malik Dinar, a Muslim preacher who came to India from the Middle East in the 7th century.The mosque is an important pilgrimage site for Muslims in the region and is also a popular tourist attraction. It is known for its unique architecture, which combines traditional Kerala style with Islamic influences."
            text2="Distance: 2 km"
          />

          <ExploreData
            img={Image6}
            text1="Ananthapura Lake Temple is a unique temple that is located on a small island in the middle of a lake. It is believed to be the original seat of Lord Anantha, the serpent god, and is a popular pilgrimage site."
            text2="Distance: 13 km"
          />

          <ExploreData
            img={Image7}
            text1="Ranipuram is a renowned tourist destination in the northern tip of Kerala. Located in Kasaragod, it is situated 750 m above sea level. It is a great place for trekking and offers stunning views of the surrounding hills and forests."
            text2="Distance: 55 km"
          />
          <ExploreData
            img={Image8}
            text1="Kappil Beach is a secluded beach that is located about 6 km from Bekal. It is a great place to relax and enjoy the natural beauty of the region"
            text2="Distance: 12 km"
          />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Button />
      </div>
    </div>
  );
};

export default ExploreKasaragod;

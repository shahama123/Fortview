import React from "react";
import Header from "../components/Header";
import HeroComponent from "../components/HeroComponent";
import bgImage from "../assets/images.jpg";
import image1 from "../assets/images/img1.jpeg";
import image2 from "../assets/images/img2.jpeg";
// import image3 from "../assets/imagesimg3.jpg";
import image4 from "../assets/images/img4.jpeg";
import image5 from "../assets/images/img5.jpeg";
import image6 from "../assets/images/img6.jpeg";
import image7 from "../assets/images/img7.jpeg";
import image8 from "../assets/images/img8.jpeg";
import image9 from "../assets/images/img9.jpeg";
import image10 from "../assets/images/img10.jpeg";
import image11 from "../assets/images/img11.jpeg";
import image12 from "../assets/images/img12.jpeg";
import image13 from "../assets/images/img13.jpeg";
import image14 from "../assets/images/img14.jpeg";
import image15 from "../assets/images/img15.jpeg";
import image16 from "../assets/images/img16.jpeg";
import image17 from "../assets/images/img17.jpeg";
import image18 from "../assets/images/img18.jpeg";
import image19 from "../assets/images/img19.jpeg";
import image20 from "../assets/images/img20.jpeg";
import image21 from "../assets/images/img21.jpeg";
import image22 from "../assets/images/img22.jpeg";
import image23 from "../assets/images/img23.jpeg";
import image24 from "../assets/images/img24.jpeg";
import image25 from "../assets/images/img25.jpeg";
import image26 from "../assets/images/img26.jpeg";
import image27 from "../assets/images/img27.jpeg";
import image28 from "../assets/images/img28.jpeg";
import image29 from "../assets/images/img29.jpeg";
import image30 from "../assets/images/img30.jpeg";
import image31 from "../assets/images/img31.jpeg";
import image32 from "../assets/images/img32.jpeg";
import image33 from "../assets/images/img33.jpeg";
import image34 from "../assets/images/img34.jpeg";
import image35 from "../assets/images/img35.jpeg";
import image36 from "../assets/dining-1.jpeg";
import image37 from "../assets/dining-2.jpeg";
import image38 from "../assets/dining-3.jpeg";
import image39 from "../assets/dining-4.jpeg";
import image40 from "../assets/dining-5.jpeg";
import image41 from "../assets/dining-6.jpeg";
import image42 from "../assets/dining-7.jpeg";
import image43 from "../assets/dining-8.jpeg";
import image44 from "../assets/dining-9.jpeg";
import image45 from "../assets/reception-1.jpeg";
import image46 from "../assets/reception-2.jpeg";
import image47 from "../assets/sitting-1.jpeg";
import image48 from "../assets/bathroom-1.jpeg";
import image49 from "../assets/bathroom-2.jpeg";
import image50 from "../assets/bathroom-3.jpeg";
import image51 from "../assets/dental kit.jpeg";
import image52 from "../assets/fridge.jpeg";
import image53 from "../assets/google nest.jpeg";
import image54 from "../assets/hairdryer.jpeg";
import image55 from "../assets/hangers.jpeg";
import image56 from "../assets/iron board.jpeg";
import image57 from "../assets/kettle.jpeg";
import image58 from "../assets/shampoo.jpeg";
import image59 from "../assets/shampoo2.jpeg";
import image60 from "../assets/wadrobe.jpeg";
import ImageGallery from "../components/ImageGallery";
import Button from "../components/Button";

const Gallery = () => {
  const images = [
    image1,
    image2,
    // image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
    image28,
    image29,
    image30,
    image31,
    image32,
    image33,
    image34,
    image35,
    image36,
    image37,
    image38,
    image39,
    image40,
    image41,
    image42,
    image43,
    image44,
    image45,
    image46,
    image47,
    image48,
    image49,
    image50,
    image51,
    image52,
    image53,
    image54,
    image55,
    image56,
    image57,
    image58,
    image59,
    image60,
  ];

  // const galleys = [];

  return (
    <div>
      <Header />
      <HeroComponent imgLink={bgImage} title="Gallery" />
      <div className="mt-6">
        <div className="lg:px-32 px-10">
          <iframe
            width="560"
            height="350"
            src="https://www.youtube.com/embed/HlfPUoUG61A?si=vs2OwLs0Px-9ZJdJ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <ImageGallery images={images} />
      </div>

      <div className="flex justify-center mt-10">
        <Button />
      </div>
    </div>
  );
};

export default Gallery;

import React from "react";
import { CarouselDefault } from "./Carousal";
import image1 from "../assets/images/img1.jpeg";
import image2 from "../assets/images/img2.jpeg";
import image3 from "../assets/images/image3.jpeg";
import image4 from "../assets/images/img4.jpeg";
import image5 from "../assets/images/img5.jpeg";
import image6 from "../assets/images/img6.jpeg";
import image7 from "../assets/images/img7.jpeg";
import image8 from "../assets/images/img8.jpeg";
import image9 from "../assets/images/deluxe2-4.jpeg";
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

const RoomData = () => {
  const array1 = [image19, image32, image34, image30];

  const array2 = [image35, image24, image27, image26];

  const array3 = [image16, image15, image11, image14];
  const array4 = [image12, image10, image8];
  const array5 = [image2, image9, image1, image3, image4, image13];
  const array6 = [image7, image6, image5];

  return (
    <div>
      <div className="grid justify-center lg:grid-cols-2 grid-cols-1 mt-7  ">
        <div>
          <CarouselDefault autoPlay={3000} images={array1} />
        </div>
        <div className=" mt-4">
          <p className="leading-7">
            <span className="font-bold">
              Family Suite with 2 Queen Beds and Kitchenette:
            </span>
            Our spacious Suite Room is perfect for families or groups traveling
            together. The room features two comfortable queen beds and a
            separate living area with a sofa and a dining table. The room also
            has a kitchenette perfect for preparing light meals or snacks. The
            suite also features a private bathroom with complimentary
            toiletries.
          </p>
          <p className="leading-6">
            <br />
            Pricing: Rs 5000 (Double Occupancy) + GST
          </p>
        </div>
      </div>
      <div className=" grid lg:grid-cols-2 grid-cols-1 mt-7 ">
        <div>
          <CarouselDefault autoPlay={5000} images={array2} />
        </div>
        <div className=" mt-4 ">
          <p className="leading-7">
            <span className="font-bold">
              Family Suite Room with 2 King Beds:
            </span>{" "}
            Our Suite Room with 2 King Beds is perfect for families or groups of
            friends. The room features two comfortable king beds and a separate
            living area with a sofa and a dining table. The room also has a
            private bathroom with complimentary toiletries.
          </p>
          <p className="leading-6">
            <br />
            Pricing: Rs 5000 (Double Occupancy) + GST
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-7 ">
        <div>
          <CarouselDefault autoPlay={4000} images={array3} />
        </div>
        <div className=" mt-4 ">
          <p className="leading-7">
            <span className="font-bold">Junior Suite with King Bed:</span> Our
            Junior Suite Room with a King Bed is perfect for guests looking for
            a bit more space and comfort. The room features a comfortable king
            bed, a sitting area with a sofa and chairs, a work area, and a
            private bathroom with complimentary toiletries. The room also has a
            work desk and chair, making it perfect for business travelers.
          </p>
          <p className="leading-6">
            <br />
            Pricing: Rs 4200 (Double Occupancy) + GST
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-7 ">
        <div>
          <CarouselDefault autoPlay={6000} images={array4} />
        </div>
        <div className=" mt-4 ">
          <p className="leading-7">
            <span className="font-bold">Deluxe Room with 2 Double Beds:</span>{" "}
            This room is perfect for families or groups of friends traveling
            together. The room features two comfortable double beds, a private
            bathroom with complimentary toiletries, and a sitting area with a
            sofa. The room also has a work desk and chair, making it perfect for
            business travelers.
          </p>
          <p className="leading-6">
            <br />
            Pricing: Rs 4000 (Double Occupancy) + GST
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-7 ">
        <div>
          <CarouselDefault autoPlay={4000} images={array5} />
        </div>
        <div className=" mt-4 ">
          <p className="leading-7">
            <span className="font-bold">Deluxe Room with King Bed:</span>
            Our Deluxe Room with a King Bed is perfect for guests who value
            comfort and convenience. The room features a comfortable king bed, a
            private bathroom with complimentary toiletries, and a sitting area
            with a sofa. The room also has a work desk and chair, making it
            perfect for business travelers.
          </p>
          <p className="leading-6">
            <br />
            Pricing: Rs 3800 (Double Occupancy) + GST <br />
            Rs 3300 (Single Occupancy) + GST
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-7 ">
        <div>
          <CarouselDefault autoPlay={5000} images={array6} />
        </div>
        <div className=" mt-4 ">
          <p className="leading-7">
            <span className="font-bold">Superior Room with King Bed: </span>
            Our Superior Room with a King Bed is perfect for guests who are
            looking for a comfortable and stylish room. The room features a
            comfortable king bed, a private bathroom with complimentary
            toiletries, and a sitting area with a sofa chair. The room also has
            a work desk and chair, making it perfect for business travelers.
          </p>
          <p className="leading-6">
            <br />
            Pricing: 3300 (Double Occupancy) + GST <br />
            2800 (Single Occupancy) + GST
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoomData;

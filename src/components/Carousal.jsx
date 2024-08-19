import { Carousel } from "@material-tailwind/react";

export function CarouselDefault({ images, autoPlay }) {
  console.log(images);
  return (
    <div className="max-w-96 min-w-96">
      <Carousel autoplay loop autoplayDelay={autoPlay}>
        {images?.map((item, index) => (
          <img key={index} src={item} className="" />
        ))}
      </Carousel>
    </div>
  );
}

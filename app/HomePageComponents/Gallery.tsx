import React from "react";
import Image from "next/image";
import Carousel from "./Carousel";
const sliders = [
  "/images/homeOne.jpg",
  "/images/secondHomeImage.jpg",
  "/images/quran.jpg",
];
const Gallery = () => {
  return (
    <div className="">
      <Carousel autoSlide={true}>
        {sliders.map((s, index) => (
          <Image
            key={index}
            src={s}
            alt="Logo"
            width={200}
            height={100}
            className="w-full h-80 md:h-[600px] lg:h-[600px]"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Gallery;

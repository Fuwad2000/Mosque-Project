import React from "react";
import { GallerySection } from "./Content";
import Image from "next/image";

const GalleryAbout = () => {
  return (
    <div className={`space-y-5 md:w-9/12 md:mx-auto`}>
      {GallerySection.map((item, index) => (
        <div key={index} className="flex justify-between">
          {item.map((imgs, index) => (
            <Image
              src={imgs}
              key={index}
              className="w-28 h-28 rounded-full md:w-40 md:h-40"
              alt="Description"
              width={160}
              height={160}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GalleryAbout;

import React from "react";
import { GallerySection } from "./Content";
const GalleryAbout = () => {
  return (
    <div className="space-y-5 md:w-9/12 md:mx-auto">
      {GallerySection.map((item, index) => (
        <div key={index} className="flex justify-between">
          {item.map((imgs, index) => (
            <img
              src={imgs}
              className="w-28 h-28 rounded-full md:w-40 md:h-40"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GalleryAbout;

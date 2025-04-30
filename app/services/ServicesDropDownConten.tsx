import React from "react";
import { ContentCardServices } from "./ContentCard";
import { Typography } from "@mui/material";
import Image from "next/image";

interface Props {
  index: number;
  dropDownState: boolean;
}
const ServicesDropDownContent = ({ index, dropDownState }: Props) => {
  return dropDownState ? (
    <div
      className="shadow-inner shadow-gray-300 grid md:h-80"
      data-aos="zoom-in-left"
      data-aos-duration="1000"
      data-aos-easing="linear"
    >
      <Image
        src={ContentCardServices[index].img}
        className="h-[200px] w-full"
        alt="Service Image"
        width={500}
        height={200}
      />
      <Typography className="px-2 py-5 text-gray-500">
        {ContentCardServices[index].content}
      </Typography>
    </div>
  ) : null;
};

export default ServicesDropDownContent;

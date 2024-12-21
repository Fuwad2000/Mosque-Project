import React from "react";
import { ContentCardServices } from "./ContentCard";
import { Typography } from "@mui/material";
interface Props {
  index: number;
  dropDownState: boolean;
}
const ServicesDropDownContent = ({ index, dropDownState }: Props) => {
  return dropDownState ? (
    <div className="shadow-inner shadow-gray-300 grid md:h-80">
      <img src={ContentCardServices[index].img} className="h-[180px] w-full" />
      <Typography className="px-2 py-5 text-gray-500">
        {ContentCardServices[index].content}
      </Typography>
    </div>
  ) : null;
};

export default ServicesDropDownContent;

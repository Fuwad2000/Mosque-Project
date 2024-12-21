import React from "react";
import { ServiceIntroContent } from "./ContentCard";
import { Typography } from "@mui/material";
const ServiceIntro = () => {
  return (
    <div className="space-y-2 leading-loose py-2  ">
      <Typography className="text-lg font-bold" color="success">
        {ServiceIntroContent.title}
      </Typography>
      <Typography className="leading-loose text-gray-500">
        {ServiceIntroContent.brief}
      </Typography>
      <Typography className="text-lg font-bold" color="success">
        {ServiceIntroContent.list}
      </Typography>
    </div>
  );
};

export default ServiceIntro;

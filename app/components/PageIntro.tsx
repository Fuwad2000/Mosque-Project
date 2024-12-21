import React from "react";

import { Typography } from "@mui/material";
interface Props {
  title: string;
  brief: React.ReactNode[];
  listTitle: string;
}
const PageIntro = ({ title, brief, listTitle }: Props) => {
  return (
    <div className="space-y-2 leading-loose py-3  ">
      <Typography
        className="text-lg xl:text-2xl 2xl:text-3xl font-bold"
        color="success"
      >
        {title}
      </Typography>
      <Typography className="leading-loose text-gray-500 ">{brief}</Typography>
      <Typography className="text-lg font-bold " color="success">
        {listTitle}
      </Typography>
    </div>
  );
};

export default PageIntro;

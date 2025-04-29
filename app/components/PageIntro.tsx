"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Typography } from "@mui/material";
interface Props {
  title: string;
  brief: React.ReactNode[];
  listTitle: string;
}
const PageIntro = ({ title, brief, listTitle }: Props) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="space-y-2 leading-loose py-3  "
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-easing="ease-in-sine"
    >
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

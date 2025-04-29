"use client";
import React, { useEffect } from "react";
import { Button } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
interface Props {
  getTitle: String;
  index: number;
  dropDownState: boolean;
  handleClickEvent: (index: number) => void;
}
const ServiceButton = ({
  getTitle,
  index,
  dropDownState,
  handleClickEvent,
}: Props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos-duration="1000" data-aos-easing="linear">
      <Button
        color="success"
        sx={{
          justifyContent: "space-between",
          fontWeight: "bold",
          width: "100%",
        }}
        onClick={() => handleClickEvent(index)}
      >
        <span className="text-sm">{getTitle}</span>{" "}
        <span className="font-bold">{dropDownState ? "-" : "+"}</span>
      </Button>
    </div>
  );
};

export default ServiceButton;

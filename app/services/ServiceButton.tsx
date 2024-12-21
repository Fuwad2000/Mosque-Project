"use client";
import { Button } from "@mui/material";
import React from "react";
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
  return (
    <div>
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

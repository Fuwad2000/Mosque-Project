import React from "react";
import { BoxContent } from "./NavBarBoxContent";
import { Button } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
const NavBarLarge = () => {
  return (
    <>
      <hr></hr>
      <div className="hidden lg:flex justify-center">
        <div className="hidden lg:flex justify-self-center w-9/12 justify-around p-3 lg:w-11/12">
          {BoxContent.map((content, index) => (
            <Button key={index} className="font-bold text-green-700 text-lg">
              {content.title}{" "}
              {content.DropDownContent ? <ArrowDropDownIcon /> : null}
            </Button>
          ))}
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default NavBarLarge;

import React from "react";
import { BoxContent } from "./NavBarBoxContent";
import { Button } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const NavBarLarge = () => {
  return (
    <>
      <div className="hidden lg:flex mx-auto justify-between py-3 2xl:gap-20 ">
        {BoxContent.map((content, index) => {
          const isLast = index === BoxContent.length - 1;
          return (
            <Button
              key={index}
              className={`font-bold text-xl ${isLast ? "px-5 py-3" : "text-green-700"}`}
              variant={isLast ? "contained" : "text"}
              color={isLast ? "success" : "inherit"}
              href={content.link}
            >
              {content.title}
            </Button>
          );
        })}
      </div>
    </>
  );
};

export default NavBarLarge;

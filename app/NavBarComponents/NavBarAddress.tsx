import React from "react";
import { Typography } from "@mui/material";
const addressvalue =
  "9715 James Potter Road Unit# 204 Brampton, ON, L6X 3B9, Canada";
const NavBarAddress = () => {
  return (
    <div className="pl-auto">
      <div className="h-full flex w-9/12    items-center justify-end justify-self-end gap-3 ">
        <span className="material-icons text-gray-500">my_location</span>
        <Typography className="text-gray-500 xl:uppercase ">
          {addressvalue}
        </Typography>
      </div>
    </div>
  );
};

export default NavBarAddress;

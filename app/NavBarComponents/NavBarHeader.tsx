import React from "react";

import { IconButton } from "@mui/material";
import { Menu, Close as CloseIcon } from "@mui/icons-material";

import NavBarName from "./NavBarName";
import NavBarAddress from "./NavBarAddress";
import NavBarIcon from "./NavBarIcon";
import NavBarLarge from "./NavBarLarge";
interface HeaderProps {
  isDrawerOpen: boolean;
  handleButtonClick: () => void;
}

const Header = ({ isDrawerOpen, handleButtonClick }: HeaderProps) => (
  <div className=" flex items-center justify-between p-5  w-full  md:px-5   xl:justify-start gap-0  2xl:w-10/12 2xl:mx-auto 3xl:w-9/12">
    <NavBarIcon />
    <IconButton className="xl:hidden" onClick={handleButtonClick}>
      {isDrawerOpen ? (
        <CloseIcon
          sx={{ fontSize: "2.5rem", fontWeight: "bold", color: "green" }}
        />
      ) : (
        <Menu sx={{ fontSize: "2.5rem", fontWeight: "bold", color: "green" }} />
      )}
    </IconButton>
    <div className="hidden xl:grid   2xl:ml-auto ">
      <NavBarLarge />
    </div>
  </div>
);

export default Header;

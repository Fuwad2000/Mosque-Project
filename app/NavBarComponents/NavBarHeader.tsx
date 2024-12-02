import React from "react";
import Image from "next/image";
import { IconButton } from "@mui/material";
import { Menu, Close as CloseIcon } from "@mui/icons-material";
interface HeaderProps {
  isDrawerOpen: boolean;
  handleButtonClick: () => void;
}

const Header = ({ isDrawerOpen, handleButtonClick }: HeaderProps) => (
  <div className="flex items-center justify-between p-5  w-full  xl:px-8">
    <Image
      src="/images/Ylogo.png"
      alt="Logo"
      width={200}
      height={100}
      className="w-12 h-12 xl:w-20 xl:h-20"
    />
    <IconButton onClick={handleButtonClick} className="lg:hidden">
      {isDrawerOpen ? (
        <CloseIcon
          sx={{ fontSize: "2.5rem", fontWeight: "bold", color: "green" }}
        />
      ) : (
        <Menu sx={{ fontSize: "2.5rem", fontWeight: "bold", color: "green" }} />
      )}
    </IconButton>
  </div>
);

export default Header;

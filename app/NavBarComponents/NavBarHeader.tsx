import React from "react";
import Image from "next/image";
import { IconButton } from "@mui/material";
import { Menu, Close as CloseIcon } from "@mui/icons-material";
import Link from "next/link";
interface HeaderProps {
  isDrawerOpen: boolean;
  handleButtonClick: () => void;
}

const Header = ({ isDrawerOpen, handleButtonClick }: HeaderProps) => (
  <div className="flex items-center justify-between p-5  w-full  md:px-10 xl:px-8">
    <Link href="/">
      <Image
        src="/images/Ylogo.png"
        alt="Logo"
        width={200}
        height={100}
        className="w-12 h-12 xl:w-20 xl:h-20"
      />
    </Link>

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

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@mui/material";
const addressvalue =
  "9715 James Potter Road Unit# 204 Brampton, ON, L6X 3B9, Canada";

const NavBarName = () => {
  return (
    <div className="flex justify-between w-11/12 border border-green-200 border-solid">
      <Link href="/">
        <Image
          src="/images/MasjidName.png"
          alt="Logo"
          width={200}
          height={100}
          className="w-96 h-20"
        />
      </Link>
      <div className="w-2/5 flex items-center gap-5">
        <span className="material-icons text-gray-500">my_location</span>
        <Typography className="text-gray-500">{addressvalue}</Typography>
      </div>
    </div>
  );
};

export default NavBarName;

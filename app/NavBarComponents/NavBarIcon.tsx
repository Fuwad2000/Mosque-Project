import React from "react";
import Image from "next/image";
import Link from "next/link";
const NavBarIcon = () => {
  return (
    <Link href="/">
      <Image
        src="/images/Ylogo.png"
        alt="Logo"
        width={200}
        height={100}
        className="w-12 h-12 lg:w-16 lg:h-16 "
      />
    </Link>
  );
};

export default NavBarIcon;

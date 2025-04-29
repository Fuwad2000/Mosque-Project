"use client";
import React, { useState } from "react";
import Header from "./NavBarHeader";
import NavBarDrawer from "./NavBarDrawer";
import NavBarLarge from "./NavBarLarge";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="shadow-sm shadow-gray-300">
      <Header
        isDrawerOpen={isDrawerOpen}
        handleButtonClick={handleButtonClick}
      />
      <NavBarDrawer
        isDrawerOpen={isDrawerOpen}
        handleButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default NavBar;

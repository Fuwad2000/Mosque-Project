"use client";
import React, { useState } from "react";
import Header from "./NavBarHeader";
import { Drawer, Box, Button } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Link from "next/link";
import { BoxContent } from "./NavBarBoxContent";

interface Props {
  isDrawerOpen: boolean;
  handleButtonClick: () => void;
}

const NavBarDrawer = ({ isDrawerOpen, handleButtonClick }: Props) => {
  const [isDropDownOpen, setisDropDownOpen] = useState<boolean[]>([]);
  const handleDropDownAction = (index: number) => {
    const newDropDownState = [...isDropDownOpen];
    newDropDownState[index] = !newDropDownState[index];
    setisDropDownOpen(newDropDownState);
  };
  return (
    <Drawer
      open={isDrawerOpen}
      anchor="right"
      sx={{ p: 2 }}
      className="xl:hidden"
    >
      <Box className="w-screen">
        <Header
          isDrawerOpen={isDrawerOpen}
          handleButtonClick={handleButtonClick}
        />
        <div className="grid mt-3">
          {BoxContent.map((content, index) => (
            <div key={index}>
              <Button
                sx={{
                  border: "1px solid whitesmoke",
                  padding: "10px 20px",
                  width: "100%",
                  borderRadius: "0px",
                  justifyContent: "space-between",
                  fontWeight: "bold",
                  color: "green",
                }}
                variant="text"
                href={content.link}
                onClick={() => handleDropDownAction(index)}
              >
                {content.title}
              </Button>

              <div>{/* Removed DropDownContent mapping logic */}</div>
            </div>
          ))}
        </div>
      </Box>
    </Drawer>
  );
};

export default NavBarDrawer;

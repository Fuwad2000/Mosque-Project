import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@mui/material";

const NavBarName = () => {
  return (
    <div className="pl-auto">
      <Typography
        sx={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <span
          className="uppercase text-green-main    font-bold text-3xl xl:text-4xl"
          style={{
            letterSpacing: "2px",
            textTransform: "uppercase",
            background: "linear-gradient(to right, #32CD32, #008000)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Yaseen Musallah
        </span>
      </Typography>
    </div>
  );
};

export default NavBarName;

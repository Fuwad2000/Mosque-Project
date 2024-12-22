import React from "react";
import Avatar from "@mui/material/Avatar";
import { MosqueGoalsContent } from "./Content";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./about.module.css";

const MosqueGoals = () => {
  return (
    <div className="my-16 space-y-16 md:grid grid-cols-2 gap-y-14 gap-x-5 md:space-y-0 xl:grid-cols-3">
      {MosqueGoalsContent.map((item, index) => (
        <div
          key={index}
          className={`text-center   h-full border border-green-main shadow-md shadow-green-main ${styles.appearBoxes} `}
        >
          <div className="bg-green-main grid items-center w-14 h-14 mx-auto -translate-y-1/2 z-10 rounded-full">
            <span className="material-icons text-white text-xl">
              {item.icon}
            </span>
          </div>
          <CardContent>
            <Typography className="text-center font-bold uppercase text-green-main">
              {item.heading}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              className="leading-loose"
            >
              {item.content}
            </Typography>
          </CardContent>
        </div>
      ))}
    </div>
  );
};

export default MosqueGoals;

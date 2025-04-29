"use client";
import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EventInfo from "./EventInfo";
import Aos from "aos";
import "aos/dist/aos.css";
interface Props {
  cardContent: {
    imgs: string;
    title: string;
    content: string;
    buttonContent: string[];
    values: string[];
  };
}
const events = ["Venue: ", "Date: ", "Attendies: "];
export default function CardStructure({ cardContent }: Props) {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <Card
      className="grid w-full relative shadow-md shadow-gray-500 h-full"
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="5"
      data-aos-easing="linear"
    >
      <CardMedia
        component="img"
        alt="green iguana"
        className="h-[140px]"
        image={cardContent.imgs}
      />
      <CardContent className="space-y-2">
        <Typography className="text-green-main font-bold">
          {cardContent.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {cardContent.content}
        </Typography>
        <EventInfo values={cardContent.values} />
      </CardContent>
      <CardActions className="items-end">
        {cardContent.buttonContent.map((btn, index) => (
          <Button size="small" key={index} sx={{ color: "green" }}>
            {btn}
          </Button>
        ))}
      </CardActions>
    </Card>
  );
}

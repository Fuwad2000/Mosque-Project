"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ContactCardContent } from "./Content";
interface Props {
  items: { heading: string; subHeadings: string[]; value: String[] };
  index: number;
}

export default function CardStructure({ items, index }: Props) {
  return (
    <Card>
      <CardContent key={index} className="">
        <Typography className="uppercase font-bold text-lg" gutterBottom>
          {items.heading}
        </Typography>

        {items.subHeadings.map((subhead, index) => (
          <div key={index}>
            <Typography gutterBottom>{subhead}</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {items.value[index]}
            </Typography>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

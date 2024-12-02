"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
interface Props {
  cardContent: {
    imgs: string;
    title: string;
    content: string;
    buttonContent: string[];
  };
}
export default function CardStructure({ cardContent }: Props) {
  return (
    <Card className="w-full">
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={cardContent.imgs}
      />
      <CardContent>
        <Typography gutterBottom>{cardContent.title}</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {cardContent.content}
        </Typography>
      </CardContent>
      <CardActions>
        {cardContent.buttonContent.map((btn, index) => (
          <Button size="small" key={index}>
            {btn}
          </Button>
        ))}
      </CardActions>
    </Card>
  );
}

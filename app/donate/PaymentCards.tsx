import React from "react";
import { DonationOptions } from "./Content";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
const PaymentCards = () => {
  return (
    <div className="grid gap-y-5 overflow-hidden">
      {DonationOptions.map((donationCard, index) => (
        <Paper
          key={index}
          className="bg-soft-green-gradient space-y-5 text-green-main p-5 grid 2xl:grid-cols-3"
        >
          <div className="2xl:col-span-2 space-y-3">
            <Typography className="font-bold 2xl:text-2xl ">
              {donationCard.title}
            </Typography>
            <Typography className="text-gray-500 font-medium">
              {donationCard.description}
            </Typography>
          </div>

          {donationCard.linkTo && (
            <Button
              className="justify-center justify-self-center  md:w-[70%] md:py-5 2xl:justify-self-end space-x-3
          "
              variant="contained"
              sx={{
                color: "green",
                background: "white",

                fontWeight: "bold",
                fontSize: "15px",
              }}
              href={donationCard.linkTo}
            >
              <span className="material-icons text-green-main text-xl">
                {donationCard.icon}
              </span>
              <span>{donationCard.button}</span>
            </Button>
          )}

          {donationCard.text && (
            <Paper className="text-center  font-bold p-3 text-green-main justify-self-center  md:w-[70%] md:py-5  2xl:justify-self-end">
              {donationCard.text}
            </Paper>
          )}
        </Paper>
      ))}
    </div>
  );
};

export default PaymentCards;

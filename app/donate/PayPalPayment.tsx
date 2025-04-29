import React from "react";
import { DonationMethods } from "./Content";
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
const PayPalPayment = () => {
  return (
    <div>
      <Paper className="p-5  grid gap-y-5  md:grid-cols-2  2xl:grid-cols-3 md:gap-x-3 bg-soft-green-gradient">
        {DonationMethods.map((donationsMethods, index) => (
          <Card
            key={index}
            className=" bg-soft-green-gradient border-r-2 shadow-lg overflow-hidden"
          >
            <CardActionArea className="">
              <CardMedia
                component="img"
                image={donationsMethods.img}
                alt=""
                className="h-36"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="body2"
                  component="div"
                  sx={{ textAlign: "center" }}
                >
                  {donationsMethods.type}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: "grid", pb: 3 }}>
              <Button
                size="large"
                variant="contained"
                className="felx space-x-3"
                sx={{
                  justifySelf: "center",
                  background: "white",
                  color: "green",
                  fontWeight: "bold",
                  width: "250px",
                  height: "60px",
                  fontSize: "17px",
                }}
              >
                <span>{donationsMethods.button}</span>
                <span className="material-icons text-sm text-green-main place-self-centerS">
                  volunteer_activisms
                </span>
              </Button>
            </CardActions>
          </Card>
        ))}
      </Paper>
    </div>
  );
};

export default PayPalPayment;

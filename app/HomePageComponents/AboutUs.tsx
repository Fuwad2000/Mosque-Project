import { Button, Typography } from "@mui/material";
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-about-bg">
      <div className="w-11/12 mx-auto py-10 text-white space-y-5">
        <Typography className="font-bold text-5xl">Who We Are! </Typography>
        <Typography className="font-bold leading-loose ">
          The Peel Islamic Cultural Center (PICC) is a non-profit organization
          dedicated to supporting the Muslim community in Brampton and
          Mississauga. Its branch, Yaseen Musalla, located at 9715 James Potter
          Road, Brampton, aims to serve the religious and community needs of
          Muslims in Spring Valley and the surrounding areas. Our ultimate
          vision is to create a welcoming and unique environment for everyone.
          Yaseen Musalla will function as a charitable, non-profit,
          non-political Islamic organization, committed to serving the
          communities of Brampton and nearby regions. All its objectives and
          activities will be carried out in accordance with the teachings of the
          Qur'an and the traditions of Prophet Muhammad (peace be upon him).
        </Typography>
        <Button variant="contained" color="success">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default AboutUs;

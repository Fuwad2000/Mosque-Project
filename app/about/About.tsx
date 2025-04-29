import { Typography } from "@mui/material";
import React from "react";
import { AboutIntroContent } from "./Content";
import PageIntro from "../components/PageIntro";
import GalleryAbout from "./GalleryAbout";
const About = () => {
  return (
    <div className="">
      <PageIntro
        title={AboutIntroContent.title}
        brief={AboutIntroContent.brief.map((brief, index) => (
          <React.Fragment key={index}>
            {brief}
            <br />
          </React.Fragment>
        ))}
        listTitle={""}
      />
    </div>
  );
};

export default About;

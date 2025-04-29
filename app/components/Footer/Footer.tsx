import { Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { content } from "./Content";
import FooterMini from "./FooterMini";
import FooterButtons from "./FooterButtons";
import FooterContactUs from "./FooterContactUs";
import FooterFollowUs from "./FooterFollowUs";

const Footer = () => {
  return (
    <div className="bg-sectionone-bg bg-cover bg-center text-neutral-100 ">
      <div className=" grid justify-center py-10 xl:flex  2xl:px-7">
        <div className="grid justify-self-center gap-y-5 w-11/12  md:grid-cols-2  xl:justify-around xl:gap-y-10 2xl:w-10/12 3xl:w-9/12">
          <FooterButtons />
          <FooterContactUs />
          <FooterFollowUs />
        </div>
      </div>
      <hr></hr>
      <FooterMini />
    </div>
  );
};

export default Footer;

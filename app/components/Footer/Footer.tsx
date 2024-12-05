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
    <div className="bg-sectionone-bg bg-cover bg-center text-neutral-100">
      <div className=" grid justify-center  py-10 ">
        <div className="grid justify-self-center  w-11/12  xl:w-10/12 md:grid-cols-2">
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

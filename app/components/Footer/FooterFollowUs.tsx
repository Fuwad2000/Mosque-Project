import React from "react";
import { content } from "./Content";
import Link from "next/link";
import { Typography } from "@mui/material";

const FooterFollowUs = () => {
  return (
    <div className="">
      <Typography variant="h6" className="py-3 font-bold">
        {content.followUs.heading}
      </Typography>
      <div className="grid gap-3">
        {content.followUs.items.map((item, index) => (
          <div key={index} className="">
            <Link
              className=" flex items-center gap-3 font-semibold  hover:text-green-300"
              href={item.link}
            >
              <span className="material-icons hover:text-green-300">
                {item.emoji}
              </span>
              <span className="underline">{item.content}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterFollowUs;

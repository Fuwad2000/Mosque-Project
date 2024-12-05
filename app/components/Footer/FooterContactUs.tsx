import React from "react";
import { content } from "./Content";
import Link from "next/link";
import { Typography } from "@mui/material";

const FooterContactUs = () => {
  return (
    <div className="">
      <Typography variant="h6" className="py-3 font-bold">
        {content.contact.heading}
      </Typography>
      <div>
        {content.contact.items.map((item, index) => (
          <div key={index} className="flex gap-3 w-11/12 ">
            <span className="material-icons hover:text-green-300">
              {item.emoji}
            </span>
            <div className="space-y-1">
              <h4 className="font-semibold text-md md:text-xl">{item.title}</h4>
              {item.link ? (
                <Link
                  className="font-semibold text-sm md:text-md underline hover:text-green-300"
                  href={item.link}
                >
                  {item.content}
                </Link>
              ) : (
                <p className="font-semibold text-sm md:text-md">
                  {item.content}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterContactUs;

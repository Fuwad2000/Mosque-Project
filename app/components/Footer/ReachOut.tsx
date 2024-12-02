import { Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { content } from "./Content";

const ReachOut = () => {
  return (
    <div className="bg-slate-100 text-green-800 grid justify-center mt-0 py-5 scroll-mt-44 ">
      <div className="justify-self-center w-11/12 md:w-10/12 lg:grid grid-cols-2 lg:w-11/12 gap-x-3 xl:w-10/12 xl:gap-3">
        {/* Donate Section */}
        <div>
          <Typography variant="h6" className="py-3 font-bold">
            {content.donate.heading}
          </Typography>
          <Button variant="contained" href={content.donate.buttonLink}>
            {content.donate.buttonLabel}
          </Button>
        </div>

        {/* Contact Section */}
        <div>
          <Typography variant="h6" className="py-3 font-bold">
            {content.contact.heading}
          </Typography>
          <div>
            {content.contact.items.map((item, index) => (
              <div key={index} className="flex gap-3 w-11/12 ">
                <span className="material-icons text-green-800">
                  {item.emoji}
                </span>
                <div className="space-y-1">
                  <h4 className="font-semibold text-md md:text-xl">
                    {item.title}
                  </h4>
                  {item.link ? (
                    <Link href={item.link}>{item.content}</Link>
                  ) : (
                    <p>{item.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Follow Us Section */}
        <div>
          <Typography variant="h6" className="py-3 font-bold">
            {content.followUs.heading}
          </Typography>
          <div>
            {content.followUs.items.map((item, index) => (
              <div key={index} className="space-y-1">
                <span className="material-icons pr-1 text-green-800">
                  {item.emoji}
                </span>
                <Link href={item.link}>{item.content}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachOut;

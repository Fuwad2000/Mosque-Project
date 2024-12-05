import React from "react";
import { content } from "./Content";
import Link from "next/link";
const FooterButtons = () => {
  return (
    <div className="grid  grid-cols-2  md:grid-cols-4 gap-y-5 md:justify-around md:col-span-2 ">
      {content.donate.buttonLabel.map((label, index) => (
        <div
          key={index}
          className="h-[60px] w-[150px]  text-center font-bold bg-neutral-900 shadow-md shadow-white flex items-center justify-center hover:shadow-green-300 md:w-[170px]"
        >
          <Link href={content.donate.buttonLink[index]}>{label}</Link>
          <span className="material-icons pr-1 text-black-800">
            arrow_right_alt
          </span>
        </div>
      ))}
    </div>
  );
};

export default FooterButtons;

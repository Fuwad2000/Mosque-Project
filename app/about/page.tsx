import React from "react";
import About from "./About";
import ManagementCommitee from "./ManagementCommitee";
import MosqueGoals from "./MosqueGoals";
import GalleryAbout from "./GalleryAbout";

const page = () => {
  return (
    <div className=" py-20 ">
      <div className="w-11/12 py-5 px-3 shadow-inner shadow-gray-400 mx-auto md:px-5 md:py-7 xl:w-9/12 xl:px-5 xl:py-5 2xl:w-8/12">
        <About />
        <MosqueGoals />
        <ManagementCommitee />
      </div>
    </div>
  );
};

export default page;

import React from "react";
import TimeTable from "./TabTimetable";
import TabTimetable from "./TabTimetable";

const page = () => {
  return (
    <div className=" py-10  2xl:px-5">
      <div
        className="w-11/12 py-5  shadow-inner shadow-gray-400 mx-auto md:px-5 md:py-7 xl:w-9/12 xl:px-5 xl:py-5 2xl:w-10/12 
    2xl:px-7 2xl:py-10 3xl:w-9/12"
      >
        <TabTimetable />
      </div>
    </div>
  );
};

export default page;

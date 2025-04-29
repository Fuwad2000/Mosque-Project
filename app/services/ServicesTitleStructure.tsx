"use client";
import React, { useEffect, useState } from "react";
import ServicesDropDownContent from "./ServicesDropDownConten";
import ServiceButton from "./ServiceButton";
import Aos from "aos";
import "aos/dist/aos.css";
interface Props {
  getTitle: String;
  index: number;
}
const ServicesTitleStructure = ({ getTitle, index }: Props) => {
  const [isDropDownOpen, setisDropDownOpen] = useState<boolean[]>([]);

  const handleClicked = (index: number) => {
    const newDropDownState = [...isDropDownOpen];
    newDropDownState[index] = !newDropDownState[index];
    setisDropDownOpen(newDropDownState);
  };
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div
      className="shadow-md shadow-gray-400 h-fit"
      key={index}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="linear"
    >
      <ServiceButton
        getTitle={getTitle}
        index={index}
        dropDownState={isDropDownOpen[index]}
        handleClickEvent={() => handleClicked(index)}
      />

      <ServicesDropDownContent
        dropDownState={isDropDownOpen[index]}
        index={index}
      />
    </div>
  );
};

export default ServicesTitleStructure;

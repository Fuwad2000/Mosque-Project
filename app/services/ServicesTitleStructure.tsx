"use client";
import React, { useState } from "react";
import ServicesDropDownContent from "./ServicesDropDownConten";
import ServiceButton from "./ServiceButton";
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
  return (
    <div className="shadow-md shadow-gray-400 h-fit" key={index}>
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

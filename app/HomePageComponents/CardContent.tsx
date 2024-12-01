import React from "react";
import CardStructure from "../components/LightCard";
import { contentCard } from "./ContentCard";

const CardContent = () => {
  return (
    <div className="grid justify-center mx-3 my-5 gap-y-3 lg:grid-cols-3 lg:gap-x-6 lg:mx-14">
      {contentCard.map((card, index) => (
        <CardStructure key={index} cardContent={card} />
      ))}
    </div>
  );
};

export default CardContent;

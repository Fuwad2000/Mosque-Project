import React from "react";
import CardStructure from "../components/LightCard";
import { contentCard } from "./ContentCard";

const CardContent = () => {
  return (
    <div className="xl:py-10">
      <div className="grid justify-center mx-auto w-11/12 my-5 gap-y-3 md:grid-cols-2 gap-x-3 lg:grid-cols-3 lg:gap-x-6 lg:mx-14 xl:gap-5 ">
        {contentCard.map((card, index) => (
          <CardStructure key={index} cardContent={card} />
        ))}
      </div>
    </div>
  );
};

export default CardContent;

import React from "react";
import CardStructure from "../components/LightCard";
import { contentCard } from "./ContentCard";

const CardContent = () => {
  return (
    <div className="xl:py-10 ">
      <div className="grid justify-center mx-auto  my-5 gap-y-3 md:grid-cols-2 md:mx-3 gap-x-3 lg:grid-cols-3 lg:mx-5 xl:gap-5 ">
        {contentCard.map((card, index) => (
          <CardStructure key={index} cardContent={card} />
        ))}
      </div>
    </div>
  );
};

export default CardContent;

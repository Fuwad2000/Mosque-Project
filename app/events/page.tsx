import React from "react";
import { contentCard } from "./ContentCard";
import LightCard from "../components/LightCard";
import PageIntro from "../components/PageIntro";
import TabComponent from "./TabComponent";
const page = () => {
  return (
    <div className="grid py-10  2xl:px-7">
      <div className="w-11/12 py-5 px-2 shadow-inner shadow-gray-400 mx-auto md:px-3 xl:w-9/12 xl:px-5 xl:py-10 2xl:w-10/12 3xl:w-9/12">
        <PageIntro
          title={contentCard.EventIntroContent.title}
          brief={contentCard.EventIntroContent.brief.map((briefs, index) => (
            <React.Fragment key={index}>
              {briefs} <br />
            </React.Fragment>
          ))}
          listTitle={contentCard.EventIntroContent.list}
        />

        <TabComponent></TabComponent>
      </div>
    </div>
  );
};

export default page;

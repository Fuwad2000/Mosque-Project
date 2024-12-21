import React from "react";
import { contentCard } from "./ContentCard";
import LightCard from "../components/LightCard";
import PageIntro from "../components/PageIntro";
import TabComponent from "./TabComponent";
const page = () => {
  return (
    <div className="grid py-10 ">
      <div className="w-11/12 py-5 px-2 shadow-inner shadow-gray-400 mx-auto md:px-3 xl:w-9/12 xl:px-5 xl:py-10 2xl:w-8/12">
        <PageIntro
          title={contentCard.EventIntroContent.title}
          brief={contentCard.EventIntroContent.brief.map((briefs) => (
            <React.Fragment>
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

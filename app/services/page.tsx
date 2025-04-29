import React from "react";
import { ContentCardServices } from "./ContentCard";
import { ServiceIntroContent } from "./ContentCard";
import ServicesTitleStructure from "./ServicesTitleStructure";

import PageIntro from "../components/PageIntro";
const page = () => {
  return (
    <div className="py-10 2xl:px-7">
      <div className="w-11/12 py-5 px-2 shadow-inner shadow-gray-400 mx-auto md:px-3 xl:w-9/12 xl:px-5 xl:pt-7 xl:pb-20 2xl:w-10/12">
        <PageIntro
          title={ServiceIntroContent.title}
          brief={[ServiceIntroContent.brief]}
          listTitle={ServiceIntroContent.list}
        />
        <div className="grid gap-y-3 md:grid-cols-2 md:gap-y-4 justify-normal gap-x-2  xl:grid-cols-3 xl:gap-x-3  ">
          {ContentCardServices.map((getInfo, index) => (
            <ServicesTitleStructure
              key={index}
              getTitle={getInfo.title}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;

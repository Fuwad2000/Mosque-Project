import { Typography } from "@mui/material";
import React from "react";
import { DonateIntroContent } from "./Content";

import PageIntro from "../components/PageIntro";
import PaymentCards from "./PaymentCards";
import PayPalPayment from "./PayPalPayment";

const Page = () => {
  return (
    <div className="grid py-10  2xl:px-7">
      <div className="w-11/12 py-5 px-2 shadow-inner shadow-gray-400 mx-auto md:px-3 xl:w-9/12 xl:px-5 xl:py-10 2xl:w-10/12 3xl:w-9/12">
        <PageIntro
          title={DonateIntroContent.title}
          brief={DonateIntroContent.brief.map((briefs, index) => (
            <React.Fragment key={index}>
              {briefs} <br />
            </React.Fragment>
          ))}
          listTitle={DonateIntroContent.list}
        />
        <PaymentCards />
        <PayPalPayment />
      </div>
    </div>
  );
};

export default Page;

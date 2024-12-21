import React from "react";
import GoogleMap from "./GoogleMap";
import { ContactCardContent } from "./Content";
import CardStructure from "./CardStructure";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <div className="bg-light-green-gradient py-10">
      <div className="w-11/12 shadow-inner shadow-gray-500 mx-auto py-12 xl:w-9/12  2xl:w-8/12">
        <div className="w-11/12 mx-auto space-y-5 md:grid grid-cols-2 md:space-y-0 gap-3 ">
          {ContactCardContent.map((items, index) => (
            <div key={index} className="grid gap-y-3  ">
              <CardStructure items={items} index={index} />
              {index === 0 ? <ContactForm /> : <GoogleMap />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

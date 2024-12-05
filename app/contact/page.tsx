import React from "react";
import GoogleMap from "./GoogleMap";
import { ContactCardContent } from "./Content";
import CardStructure from "./CardStructure";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <div className="w-11/12 mx-auto space-y-5 py-5 md:grid grid-cols-2 gap-x-3 md:space-y-0 ">
      {ContactCardContent.map((items, index) => (
        <div key={index} className="space-y-5 py-5 md:space-y-3 ">
          <CardStructure items={items} index={index} />
          {index === 0 ? <ContactForm /> : <GoogleMap />}
        </div>
      ))}
    </div>
  );
};

export default ContactPage;

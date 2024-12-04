import React from "react";
import GoogleMap from "./GoogleMap";
import { ContactCardContent } from "./Content";
import CardStructure from "./CardStructure";
import ContactForm from "./ContactForm";
const Nodes = [<ContactForm />, <GoogleMap />];

const ContactPage = () => {
  return (
    <div className="w-11/12 mx-auto space-y-5 py-5">
      {ContactCardContent.map((items, index) => (
        <div
          key={index}
          className="space-y-5 py-5 grid md:grid-cols-2 items-start gap-x-4 md:space-y-0"
        >
          <CardStructure items={items} index={index} />
          {Nodes[index]}
        </div>
      ))}
    </div>
  );
};

export default ContactPage;

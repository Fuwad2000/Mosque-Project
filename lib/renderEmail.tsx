import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import MosqueEmail from "@/emails/MosqueEmail"; // Update the path if necessary

export function renderEmailContent(props: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): string {
  return renderToStaticMarkup(
    <MosqueEmail
      name={props.name}
      email={props.email}
      subject={props.subject}
      message={props.message}
    />
  );
}

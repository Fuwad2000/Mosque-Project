import React from "react";
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";

interface Props {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const MosqueEmail = ({ name, email, subject, message }: Props) => {
  return (
    <Html>
      <Preview>Eagles Alert</Preview>
      <Tailwind>
        <Body>
          <Text>Message from: {name} </Text>
          <Text>{message} </Text>
          <Text>Email of Sender: {email}</Text>
          <Link href="https://www.youtube.com/">Youtube</Link>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default MosqueEmail;

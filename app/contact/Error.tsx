import { Alert } from "@mui/material";
import React from "react";

interface PropsInternal {
  errors: { [key: string]: string };
  id: string;
}

const Error: React.FC<PropsInternal> = ({ errors, id }) => {
  return (
    <div>{errors[id] && <Alert severity="error">{errors[id]}</Alert>}</div>
  );
};

export default Error;

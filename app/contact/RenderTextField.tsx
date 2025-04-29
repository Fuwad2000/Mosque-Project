import { Alert, TextField } from "@mui/material";
import React from "react";
import { Props } from "./RenderInterface";
import Error from "./Error";
const RenderTextField = ({
  id,
  label,
  type = "text",
  multiline = false,
  rows = 1,
  errors,
  formData,
  handleChange,
}: Props) => {
  return (
    <div>
      <TextField
        id={id}
        label={label}
        variant="standard"
        type={type}
        multiline={multiline}
        rows={rows}
        value={formData[id as keyof Props["formData"]]}
        onChange={handleChange}
        color="success"
        fullWidth
      />
      {errors[id] && (
        <Alert variant="filled" severity="warning" className="mt-2">
          {errors[id]}
        </Alert>
      )}
    </div>
  );
};

export default RenderTextField;

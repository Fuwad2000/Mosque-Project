import { Alert } from "@mui/material";
import React from "react";
interface Props {
  success: boolean;
}
const Success = ({ success }: Props) => {
  return (
    <div>
      {success && (
        <Alert variant="filled" severity="success" className="mt-2">
          Message Successfully Sent
        </Alert>
      )}
    </div>
  );
};

export default Success;

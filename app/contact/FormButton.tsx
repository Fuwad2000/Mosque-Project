import { Button } from "@mui/material";
import React from "react";

const FormButton = () => {
  return (
    <Button
      type="submit"
      variant="contained"
      color="success"
      sx={{
        height: { xs: "60px", sm: "75px", md: "90px" },
        width: { xs: "150px", sm: "180px", md: "220px" },
        borderRadius: "5px",
        color: "white",
        fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "22px" },
        fontWeight: 700,
        cursor: "pointer",
        transition: "background-color 0.4s ease",
        justifySelf: "center",
        "&:hover": { opacity: "0.7" },
      }}
    >
      SUBMIT
    </Button>
  );
};

export default FormButton;

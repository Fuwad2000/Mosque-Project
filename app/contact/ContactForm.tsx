"use client";
import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const ContactForm = () => {
  return (
    <form
      name="message-form"
      className="bg-white border border-solid shadow-md shadow-gray-400 grid gap-y-4 py-10 px-5 text-xl md:h-[600px] lg:gap-y-7 "
    >
      <h1 className="text-green-main font-bold lg:text-3xl">SEND A MESSAGE</h1>
      <TextField
        id="name"
        label="YOUR NAME"
        variant="standard"
        color="success"
        fullWidth
      />
      <TextField
        id="email"
        label="EMAIL"
        variant="standard"
        color="success"
        type="email"
        fullWidth
      />
      <TextField
        id="subject"
        label="SUBJECT"
        variant="standard"
        color="success"
        fullWidth
      />
      <TextField
        id="message"
        label="ENTER YOUR MESSAGE"
        variant="standard"
        color="success"
        multiline
        rows={5}
        fullWidth
      />
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
    </form>
  );
};

export default ContactForm;

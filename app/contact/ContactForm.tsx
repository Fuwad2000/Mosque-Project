"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validator = (): boolean => {
    const newErrors: Errors = {};
    if (!formData.name) newErrors.name = "Please enter your name";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.subject) newErrors.subject = "Please enter a valid subject";
    if (!formData.message) newErrors.message = "Please enter a short message";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validator()) {
      // Simulate form submission logic
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
      setErrors({});
    }
  };

  const renderTextField = (
    id: keyof FormData,
    label: string,
    type: string = "text",
    multiline: boolean = false,
    rows: number = 1
  ) => (
    <>
      <TextField
        id={id}
        label={label}
        variant="standard"
        color="success"
        type={type}
        multiline={multiline}
        rows={rows}
        value={formData[id]}
        onChange={handleChange}
        fullWidth
      />
      {errors[id] && (
        <Alert variant="filled" severity="warning" className="mt-2">
          {errors[id]}
        </Alert>
      )}
    </>
  );

  return (
    <form
      onSubmit={handleSubmit}
      name="message-form"
      className="bg-white border border-solid shadow-md shadow-gray-400  grid gap-y-4 py-10 px-5 text-xl lg:gap-y-7"
    >
      <h1 className="text-green-950 font-bold lg:text-3xl">SEND A MESSAGE</h1>
      {renderTextField("name", "YOUR NAME")}
      {renderTextField("email", "EMAIL", "email")}
      {renderTextField("subject", "Subject")}
      {renderTextField("message", "ENTER YOUR MESSAGE", "text", true, 5)}
      {success && (
        <Alert variant="filled" severity="success" className="mt-2">
          Message Successfully Sent
        </Alert>
      )}
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
          "&:hover": { backgroundColor: "rgba(221, 44, 0, 0.6)" },
        }}
      >
        SUBMIT
      </Button>
    </form>
  );
};

export default ContactForm;

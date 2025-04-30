"use client";
import React, { useEffect, useState } from "react";
import { FormContent } from "./Content";
import RenderTextField from "./RenderTextField";
import FormButton from "./FormButton";
import Success from "./Success";
import schema from "./schema";
const defaultForm = () => ({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const ContactForm = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(defaultForm());

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = schema.safeParse(formData);
    if (!result.success) {
      const newErrors = result.error.flatten().fieldErrors;
      setErrors(newErrors);
      return;
    }
    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }
      setSuccess(true); // Update success state
      setFormData(defaultForm()); // Reset form data if needed
    } catch (error) {
      alert(`Not sent:`);
    }
    setErrors({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="bg-white border border-solid shadow-md shadow-gray-400 grid gap-y-4 py-10 px-5 text-xl md:h-[600px] lg:gap-y-7 xl:h-[700px]">
        Loading....
      </div>
    );
  }
  return (
    <form
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="5"
      data-aos-easing="linear"
      name="message-form"
      onSubmit={handleSubmit}
      className="bg-white border border-solid shadow-md shadow-gray-400 grid gap-y-4 py-10 px-5 text-xl md:min-h-[600px] lg:gap-y-7 xl:min-h-[700px]"
    >
      <h1 className="text-green-main font-bold lg:text-3xl">SEND A MESSAGE</h1>

      {FormContent.map((stuc, index) => (
        <RenderTextField
          key={index}
          id={stuc.id}
          type={stuc.type ? stuc.type : "text"}
          label={stuc.label}
          multiline={stuc.multiline ? stuc.multiline : false}
          rows={stuc.rows ? stuc.rows : 1}
          handleChange={handleChange}
          errors={errors}
          formData={formData}
        ></RenderTextField>
      ))}
      <Success success={success} />
      <FormButton />
    </form>
  );
};

export default ContactForm;

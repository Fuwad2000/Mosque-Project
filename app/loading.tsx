"use client";
import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";

export default function Loading({ open = true }) {
  return (
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      open={open}
    >
      <CircularProgress color="success" size={100} />
    </Backdrop>
  );
}

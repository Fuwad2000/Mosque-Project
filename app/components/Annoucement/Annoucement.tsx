import { Typography } from "@mui/material";
import React from "react";
import { AnnoucementContent } from "./AnnoucemnetContent";
import styles from "./annoucement.module.css";

const Annoucement = () => {
  return (
    <div className="bg-slate-100 flex justify-start gap-3 overflow-hidden">
      {AnnoucementContent.map((annouce, index) => (
        <Typography variant="h1" key={index} className={styles.quotes}>
          {annouce} {" • "}
        </Typography>
      ))}
    </div>
  );
};

export default Annoucement;

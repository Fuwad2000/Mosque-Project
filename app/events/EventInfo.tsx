import React from "react";
import Typography from "@mui/material/Typography";
const events = ["📍Venue: ", "📅 Date: ", "👨‍👩‍👧‍👦Attendees: "];
interface Props {
  values: string[];
}
const EventInfo = ({ values }: Props) => {
  return (
    <div className="space-y-1">
      {events.map((eventDetail, index) => (
        <Typography
          key={index}
          variant="body2"
          sx={{ color: "text.secondary" }}
        >
          <span className="uppercase text-gray-500 font-semibold">
            {eventDetail}
          </span>{" "}
          <span>{values[index]}</span>
        </Typography>
      ))}
    </div>
  );
};

export default EventInfo;

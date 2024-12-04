import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface Props {
  items: { heading: string; subHeadings: string[]; value: String[] };
  index: number;
}

export default function CardStructure({ items, index }: Props) {
  return (
    <Card className="shadow-md shadow-gray-400 md:h-[25vh]">
      <CardContent key={index} className="">
        <Typography className="uppercase font-bold text-lg" gutterBottom>
          {items.heading}
        </Typography>

        {items.subHeadings.map((subhead, index) => (
          <div key={index} className="py-1">
            <Typography>{subhead}</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {items.value[index]}
            </Typography>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

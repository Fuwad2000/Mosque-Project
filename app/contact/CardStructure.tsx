import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface Props {
  items: { heading: string; subHeadings: string[]; value: string[] };
  index: number;
}

export default function CardStructure({ items, index }: Props) {
  return (
    <Card className="shadow-md shadow-gray-400 md:h-60">
      <CardContent>
        <Typography
          className="uppercase font-bold text-lg text-green-main "
          gutterBottom
        >
          {items.heading}
        </Typography>

        {items.subHeadings.map((subhead, index) => (
          <div key={index} className="py-1">
            <Typography className="text-green-main">{subhead}</Typography>
            <Typography variant="body2" className="text-gray-500">
              {items.value[index]}
            </Typography>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

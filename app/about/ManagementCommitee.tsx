"use client";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { ManagementComitte } from "./Content";

export default function ManagementCommitee() {
  return (
    <div
      className="space-y-5 "
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="linear"
    >
      <Typography className="font-bold text-green-main md:text-xl lg:2xl  text-center uppercase">
        Management Committee
      </Typography>

      <List
        sx={{ width: "100%" }}
        className="grid gap-3 md:grid-cols-2 md:gap-5 xl:grid-cols-3 "
      >
        {ManagementComitte.map((items, index) => (
          <div key={index}>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  alt={items.name}
                  src={items.img}
                  className="bg-green-main"
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography className="font-bold text-green-main">
                    {items.role}
                  </Typography>
                }
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    className="text-gray-500"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    {items.gender}
                    {items.name}
                  </Typography>
                }
              />
            </ListItem>
            <Divider variant="inset" className="bg-green-main" component="li" />
          </div>
        ))}
      </List>
    </div>
  );
}

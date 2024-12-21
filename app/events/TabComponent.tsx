"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { contentCard } from "./ContentCard";
import LightCard from "./LightCard";

const TabComponent = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            sx={{
              "& .MuiTabs-indicator": { backgroundColor: "green" },
              "& .MuiTab-root": { color: "green" },
              "& .Mui-selected": { color: "green" },
              "& .MuiTabs-text": { color: "green" },
              "& .MuiTab-root.Mui-selected": { color: "green" },
            }}
            centered
          >
            {contentCard.TabStructure.map((tabLabels, index) => (
              <Tab
                key={index}
                label={tabLabels}
                value={(index + 1).toString()}
              />
            ))}
          </TabList>
        </Box>

        {contentCard.contentInfo.map((items, index) => (
          <TabPanel key={index} value={(index + 1).toString()}>
            <div className="pt-5 grid gap-y-5 md:w-10/12 mx-auto lg:w-full lg:grid-cols-3 lg:gap-x-3 xl:gap-x-5">
              {items.content.map((item, index) => (
                <div key={index}>
                  <LightCard key={index} cardContent={item} />
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};

export default TabComponent;

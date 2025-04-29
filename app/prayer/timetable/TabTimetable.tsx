"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import DailyPrayerTables from "@/app/components/Prayer/DailyPrayer";
import { Typography } from "@mui/material";
import PrayerTimetable from "./YearlyPrayer";
import MonthlyPrayer from "./MonthlyPrayer";

const TabTimetable = () => {
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
              fontWeight: "bold",
            }}
            centered
          >
            <Tab label="Weekly" value="1" />
            <Tab label="Monthly" value="2" />
            <Tab label="Yearly" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <DailyPrayerTables />
        </TabPanel>
        <TabPanel value="2">
          <MonthlyPrayer />
        </TabPanel>
        <TabPanel value="3">
          <PrayerTimetable />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default TabTimetable;

"use client";
import React from "react";
import { useState, useEffect } from "react";
import { YearlyTimeTable } from "../PrayerContent";
import { Typography } from "@mui/material";

const getCurrentMonthIndex = () => {
  const currentDate = new Date();
  return currentDate.getMonth();
};

const MonthlyPrayer = () => {
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(
    getCurrentMonthIndex()
  );

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonthIndex(parseInt(event.target.value));
  };

  const currentMonthData = YearlyTimeTable[selectedMonthIndex];
  return (
    <div>
      <div className="flex justify-center mb-4 ">
        <select
          value={selectedMonthIndex}
          onChange={handleMonthChange}
          className="p-3 text-md border px-5 text-green-800 font-semibold border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 lg:text-lg"
        >
          {YearlyTimeTable.map((month, index) => (
            <option key={index} value={index} className="text-green-800">
              {month.month}
            </option>
          ))}
        </select>
      </div>

      <Typography className="text-sm text-gray-500 lg:text-lg 2xl:text-md font-bold mb-6 text-center">
        {currentMonthData.month} Prayer Timetable
      </Typography>

      <div className="space-y-8">
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-green-main text-white">
                <th className="p-3 text-left border-b-2 border-green-700">
                  Date Range
                </th>
                <th className="p-3 text-left border-b-2 border-green-700">
                  🌒 Fajr
                </th>
                <th className="p-3 text-left border-b-2 border-green-700">
                  ☀️ Zuhr
                </th>
                <th className="p-3 text-left border-b-2 border-green-700">
                  🌅 Asr
                </th>
                <th className="p-3 text-left border-b-2 border-green-700">
                  🌆 Maghrib
                </th>
                <th className="p-3 text-left border-b-2 border-green-700">
                  🌑 Isha
                </th>
              </tr>
            </thead>
            <tbody>
              {currentMonthData.times.map((time, index) => (
                <tr key={time.dateRange} className="border-b hover:bg-gray-100">
                  <td className="p-3  ">{time.dateRange}</td>
                  <td className="p-3">{time.fajr}</td>
                  <td className="p-3">{time.zuhr}</td>
                  <td className="p-3">{time.asr}</td>
                  <td className="p-3">{time.maghrib}</td>
                  <td className="p-3">{time.isha}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MonthlyPrayer;

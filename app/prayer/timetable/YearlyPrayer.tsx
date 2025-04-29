// types.ts
export interface PrayerTime {
  dateRange: string;
  fajr: string;
  zuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
}

export interface MonthSchedule {
  month: string;
  times: PrayerTime[];
}

export type YearlyTimeTableType = MonthSchedule[];

import { Typography } from "@mui/material";
// components/PrayerTimetable.tsx
import { YearlyTimeTable } from "../PrayerContent"; // Update import path

const PrayerTimetable = () => {
  return (
    <div className="">
      <Typography
        color="success"
        className="text-md lg:text-lg 2xl:text-2xl font-bold mb-6 text-center"
      >
        Annual Prayer Timetable
      </Typography>
      <div className="space-y-8">
        {YearlyTimeTable.map((monthSchedule: YearlyTimeTableType[number]) => (
          <div key={monthSchedule.month} className="mb-8">
            <Typography className="text-xl text-gray-500 text-center font-semibold mb-4">
              {monthSchedule.month}
            </Typography>
            <div className="overflow-x-auto shadow-sm shadow-gray-400">
              <table className="w-full border-collapse ">
                <thead>
                  <tr className="bg-green-main text-white">
                    <th className="p-3 text-left ">Date Range</th>
                    <th className="p-3 text-left border-l-white">🌒 Fajr</th>
                    <th className="p-3 text-left border-white">☀️ Zuhr</th>
                    <th className="p-3 text-left">🌅 Asr</th>
                    <th className="p-3 text-left">🌆 Maghrib</th>
                    <th className="p-3 text-left">🌑 Isha</th>
                  </tr>
                </thead>
                <tbody>
                  {monthSchedule.times.map((time: PrayerTime) => (
                    <tr
                      key={time.dateRange}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="p-3">{time.dateRange}</td>
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
        ))}
      </div>
    </div>
  );
};

export default PrayerTimetable;

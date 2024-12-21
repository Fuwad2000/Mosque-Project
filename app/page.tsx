import Image from "next/image";
import Gallery from "./HomePageComponents/Gallery";
import Annoucement from "./components/Annoucement/Annoucement";
import CardContent from "./HomePageComponents/CardContent";

import DailyPrayerTables from "./components/Prayer/DailyPrayer";
import AboutUs from "./HomePageComponents/AboutUs";
import Database from "./components/Database/Database";

export default function Home() {
  return (
    <div className="bg-soft-form-gradient xl:pb-10 2xl:pb-20">
      <div className="xl:shadow-inner xl:shadow-gray-500 xl:mx-auto  xl:w-9/12  2xl:w-8/12">
        <Gallery />
        <Annoucement />
        <DailyPrayerTables />
        <AboutUs />
        <CardContent />
      </div>
    </div>
  );
}

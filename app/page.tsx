import Image from "next/image";
import Gallery from "./HomePageComponents/Gallery";
import Annoucement from "./components/Annoucement/Annoucement";
import CardContent from "./HomePageComponents/CardContent";
import ReachOut from "./components/Footer/Footer";
import DailyPrayerTables from "./components/Prayer/DailyPrayer";
import AboutUs from "./HomePageComponents/AboutUs";

export default function Home() {
  return (
    <>
      <Gallery />
      <Annoucement />
      <DailyPrayerTables />
      <AboutUs />
      <CardContent />
    </>
  );
}

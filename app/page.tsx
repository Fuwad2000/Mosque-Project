import Image from "next/image";
import Gallery from "./HomePageComponents/Gallery";
import Annoucement from "./components/Annoucement/Annoucement";
import CardContent from "./HomePageComponents/CardContent";
import AOS from "axios";
import DailyPrayerTables from "./components/Prayer/DailyPrayer";
import AboutUs from "./HomePageComponents/AboutUs";
import BigGallery from "./HomePageComponents/BigGallery";

export default function Home() {
  return (
    <div className="pb-10 bg-white-islam-bg bg-cover">
      <div className="xl:hidden">
        <Gallery />
      </div>
      <div className="hidden xl:block ">
        <BigGallery></BigGallery>
      </div>
      <Annoucement />
      <div className="w-11/12 mx-auto py-5  md:w-full md:px-4  2xl:w-10/12 3xl:w-9/12">
        <DailyPrayerTables />
      </div>
      <AboutUs />

      <div className=" w-11/12 mx-auto py-5 md:w-full md:px-4  2xl:w-10/12 3xl:w-9/12">
        <CardContent />
      </div>
    </div>
  );
}

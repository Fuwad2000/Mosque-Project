import Image from "next/image";
import Gallery from "./HomePageComponents/Gallery";
import Annoucement from "./components/Annoucement/Annoucement";
import CardContent from "./HomePageComponents/CardContent";
import ReachOut from "./components/Footer/ReachOut";

export default function Home() {
  return (
    <>
      <Gallery />
      <Annoucement />
      <CardContent />
    </>
  );
}

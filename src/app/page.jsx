import Image from "next/image";
import Hero from "./Home/Hero";
import Propertytype from "./Home/Propertytypes";
import Banner from "./Home/Banner";
import Recentlylisted from "./Home/Recentlylisted";
import Properties from "./Home/Properties";
import Ourawards from "./Home/Ourawards";
import Agents from "./Home/Agents";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Propertytype/>
      <Banner/>
      <Recentlylisted/>
      <Properties/>
      <Ourawards/>
      <Agents/>
    </div>
  );
}

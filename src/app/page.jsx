"use client"
import Hero from "./Components/Home/Hero";
import Propertytype from "./Components/Home/Propertytypes";
import Banner from "./Components/Home/Banner";
import Recentlylisted from "./Components/Home/Recentlylisted";
import Properties from "./Components/Home/Properties";
import Ourawards from "./Components/Home/Ourawards";
import Agents from "./Components/Home/Agents";

export default function Home() {
  return (
    <div >
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

// Importing all the section components for the homepage layout
"use client"; // Ensures the component runs on the client side in Next.js
import Hero from "../Components/Home/Hero"; // Hero section (top banner, intro)
import Propertytype from "../Components/Home/Propertytypes"; // Section showing types of properties
import Banner from "../Components/Home/Banner"; // Promotional or featured banner section
import Recentlylisted from "../Components/Home/Recentlylisted"; // Recently listed properties
import Properties from "../Components/Home/Properties"; // General list or showcase of properties
import Ourawards from "../Components/Home/Ourawards"; // Awards or achievements section
import Agents from "../Components/Home/Agents"; // Meet the agents or team members
import Box from "../Components/Box"; // Wrapper layout component (likely provides layout or padding)

export default function Home() {
  return (
    <Box>
      {/* Main landing section */}
      <Hero />

      {/* Property categories (e.g., Apartment, Villa, etc.) */}
      <Propertytype />

      {/* Promotional or special offer banner */}
      <Banner />

      {/* Recently listed properties from database or API */}
      <Recentlylisted />

      {/* All available or featured properties */}
      <Properties />

      {/* Awards and recognitions */}
      <Ourawards />

      {/* Team/Agents introduction */}
      <Agents />
    </Box>
  );
}

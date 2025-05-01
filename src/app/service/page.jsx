"use client"; // Enables client-side rendering in Next.js App Router

// Importing components to structure the page
import Pageheading from "../../Components/Pageheading"; // For page header
import Banner from "../../Components/Home/Banner"; // Banner component to display promotional content or services
import Box from "../../Components/Box"; // Box component for layout

function Service() {
  return (
    <Box className='w-full'>
      {/* Page heading with main title and subheading */}
      <Pageheading 
        mainhead="Service" 
        subhead="Services - All Services" 
      />

      {/* Banner component to showcase service-related content */}
      <Banner />
    </Box>
  );
}

export default Service;

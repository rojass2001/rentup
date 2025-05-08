"use client"; // Required to mark this as a client-side component in Next.js

// Importing custom Box and Text components for layout and typography
import Box from "./Box";
import Text from "./Text";

// Functional component to render a page heading with a background image
function Pageheading({ mainhead, subhead }) {
  return (
    // Main container with fixed height and margin, positioned relatively
    <Box className="w-full h-[350px] mt-[60px] relative">

      {/* Background image that covers the full container */}
      <img
        className="w-full h-full"
        src="https://cdn.webhotelier.net/photos/w=1920/peninsula-fam/L586697.jpg"
        alt="Page Banner"
      />

      {/* Overlay box containing the heading texts, absolutely positioned */}
      <Box className="absolute top-32 left-10">

        {/* Main heading text, styled for responsiveness */}
        <Text className="text-white font-bold text-xl md:text-3xl">
          {mainhead}
        </Text>

        {/* Subheading text, larger and spaced slightly below the main heading */}
        <Text className="text-white mt-2 font-medium text-3xl md:text-5xl">
          {subhead}
        </Text>

      </Box>
    </Box>
  );
}

export default Pageheading;

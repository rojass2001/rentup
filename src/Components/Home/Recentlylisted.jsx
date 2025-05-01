"use client"; // Enables client-side rendering in Next.js (App Router)

import React from "react"; // Importing React
import Box from "../Box"; // Reusable Box component for layout
import Text from "../Text"; // Reusable Text component for rendering text

function RecentlyListed() {
  return (
    <Box className="w-full mb-10 text-center flex flex-col items-center justify-center pt-14">
      {/* Main Box container with width, margin, padding, and flex layout */}
      
      {/* Heading displaying "Recent Property Listed" */}
      <Text className="text-4xl font-bold text-slate-700 mb-4">
        Recent Property Listed
      </Text>

      {/* Description text for the section, with a max-width for readability */}
      <Text className="text-black max-w-[500px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </Text>
    </Box>
  );
}

export default RecentlyListed;

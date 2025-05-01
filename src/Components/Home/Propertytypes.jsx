"use client"; // Enables client-side rendering in Next.js (App Router)

import Box from "../Box"; // Reusable Box component for layout
import Text from "../Text"; // Reusable Text component for text rendering

function PropertyType() {
  return (
    <Box className="w-full py-16 text-center bg-slate-200"> 
      {/* Main container Box with padding and background color */}
      
      {/* Heading for Featured Property Types */}
      <Text className="text-4xl font-bold text-slate-700">
        Featured Property Types
      </Text>

      {/* Subheading with description */}
      <Text className="text-lg text-slate-500 mt-5">
        Find all types of property.
      </Text>
    </Box>
  );
}

export default PropertyType;

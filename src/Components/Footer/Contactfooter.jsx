"use client"; // Ensures the component runs on the client side in Next.js (App Router)

// Importing reusable components for layout and text display
import Box from "../Box"; // Container component for layout
import Text from "../Text"; // Component for displaying text content

function ContactFooter() {
  return (
    <footer className="w-full flex items-center justify-between py-8 text-white bg-green-500 md:px-3 px-1 lg:px-20">
      {/* Box containing the main text asking if the user has questions */}
      <Box>
        <Text className="font-bold text-2xl md:text-[35px] lg:text-[43px]">
          Do You Have Questions?
        </Text>
        <Text className="text-xl">
          We will help you to grow your career and growth.
        </Text>
      </Box>

      {/* Box containing the call-to-action (CTA) button to contact */}
      <Box className="bg-white flex items-center justify-center font-semibold text-[20px] text-green-500 text-center h-[70px] p-1 md:px-3 rounded-full">
        Contact Us Today
      </Box>
    </footer>
  );
}

export default ContactFooter;

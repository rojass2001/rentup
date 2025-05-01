"use client"; // Ensures this component runs on the client side (required for Next.js app directory)

// Import custom components
import Pageheading from "@/Components/Pageheading";
import Properties from "@/Components/Home/Properties"; // Assuming blog cards are reused from a "Properties" layout
import Box from "@/Components/Box";

function Blog() {
  return (
    <Box className="w-full">
      {/* Page heading section */}
      <Pageheading
        mainhead="Blog"
        subhead="Blog Grid - Our Blogs"
      />

      {/* Blog content section - likely listing blogs or articles */}
      <Properties />
    </Box>
  );
}

export default Blog;

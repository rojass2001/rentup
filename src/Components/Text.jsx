"use client" // Required for client components in Next.js App Router (enables hooks, events, etc.)

import { memo } from "react"; // Importing React's memo function to optimize performance

// Define a functional component named Text
// eslint-disable-next-line react/prop-types
function Text({ className, children }) {
  return (
    <p className={className}> {/* Renders a <p> tag with dynamic className */}
      {children} {/* Displays any children passed inside the component */}
    </p>
  );
}

// Export the component wrapped with React.memo to prevent unnecessary re-renders
export default memo(Text);

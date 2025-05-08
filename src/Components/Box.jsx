"use client"; // Required for client-side components in Next.js (enables interactivity)

import { memo } from "react"; // Importing React.memo to optimize performance by preventing unnecessary re-renders

// Reusable Box component that renders a div element with customizable props
function Box({ className, children, onClick, style }) {
  return (
    // A <div> element that accepts custom className, click handler, and inline styles
    <div className={className} onClick={onClick} style={style}>
      {children} {/* Renders all the child components or elements passed inside the Box */}
    </div>
  );
}

// Exporting the component wrapped in React.memo for better performance in large trees
export default memo(Box);

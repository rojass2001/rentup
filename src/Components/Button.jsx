"use client"; // Marks this file as a client component (required for interactivity in Next.js App Router)

import { memo } from "react"; // Importing memo to optimize performance by preventing unnecessary re-renders

// Reusable Button component
function Button({ className, onClick, children, type, style }) {
  return (
    // Renders a <button> with dynamic type, style, className, and click handler
    <button
      type={type} // e.g., "button", "submit", or "reset"
      className={className} // CSS classes passed from parent
      style={style} // Inline styles (optional)
      onClick={onClick} // Event handler for button click
    >
      {children} {/* Content inside the button, like text or icons */}
    </button>
  );
}

// Exporting the component wrapped with React.memo for performance optimization
export default memo(Button);

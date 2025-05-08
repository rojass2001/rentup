"use client"; // Required for client components in Next.js App Router (enables hooks, events, etc.)

// Functional component that renders a customizable <form> element
function Form({ className, children, onSubmit }) {
  return (
    // Applies dynamic styles via className and handles form submission via onSubmit
    <form className={className} onSubmit={onSubmit}>
      {children} {/* Renders all child elements inside the form */}
    </form>
  );
}

// Exporting the component for use in other parts of the app
export default Form;

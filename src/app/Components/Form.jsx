"use client"
function Form({ className, children, onsubmit }) {
  return (
    <form className={className} onSubmit={onsubmit}>
      {children}
    </form>
  )
}

export default Form

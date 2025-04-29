"use client"
import { memo } from "react"

function Box({className,children,onClick,style}) {
  return (
    <div className={className} onClick={onClick} style={style}>
      {children}
    </div>
  )
}

export default memo(Box)

import React from "react"

export default function Tutorial({ children }) {
  return (
    <div style={{ margin: "0 auto", maxWidth: 700, padding: `1rem` }}>
      {children}
    </div>
  )
}

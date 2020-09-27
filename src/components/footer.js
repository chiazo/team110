import React from "react"

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        © {new Date().getFullYear()}, Team110{" "}
        <a href="https://20f.comp110.com">(Fall 2020)</a>
      </footer>
    </div>
  )
}

export default Footer

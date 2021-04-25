import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        © {new Date().getFullYear()} - Team110 - Chapel Hill, NC —{" "}
        <Link to="/contribute">how to edit!</Link>
      </footer>
    </div>
  )
}

export default Footer

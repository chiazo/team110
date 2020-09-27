import React from "react"
import { Link } from "gatsby"
import "normalize.css"

const Button = ({ text, link }) => {
  const internalLink = () => link[0] === "/"
  if (internalLink) {
    return (
      <Link to={link}>
        <button className="button">{text}</button>
      </Link>
    )
  } else {
    return (
      <a href={link}>
        <button className="button">{text}</button>
      </a>
    )
  }
}

export default Button

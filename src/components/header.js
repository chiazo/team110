import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { slide as Menu } from "react-burger-menu"

import "normalize.css"
import "../styles/styles.scss"

const isMobile = () => {
  if (typeof window !== "undefined") {
    if (window.innerWidth <= 650) {
      return true
    }
  }
  return false
}

const header_links = menuLinks => {
  return (
    <ul>
      {menuLinks.map(link => (
        <li key={link.name} className="link">
          <Link to={link.link} activeClassName="active">
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

const Header = ({ siteTitle, menuLinks }) => (
  <header className="header">
    <title>{siteTitle}</title>
    <div>
      <div>
        <h1 className="site-title">
          <Link to="/">{siteTitle}</Link>
        </h1>
        <div>
          {isMobile() ? (
            <Menu>{header_links(menuLinks)}</Menu>
          ) : (
            header_links(menuLinks)
          )}
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import "normalize.css"
import "../styles/styles.scss"

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
        <div>{header_links(menuLinks)}</div>
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

import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import "normalize.css"
import "../styles/styles.scss"

const Header = ({ siteTitle, menuLinks }) => (
  <header className="header">
    <div>
      <div>
        <h1 className="site-title">
          <Link to="/">{siteTitle}</Link>
        </h1>
        <div>
          <nav>
            <ul>
              {menuLinks.map(link => (
                <li key={link.name} className="link">
                  <Link to={link.link} activeClassName="active">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
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

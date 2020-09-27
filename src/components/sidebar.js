import React from "react"
import PropTypes from "prop-types"

const Sidebar = ({ links }) => {
  return (
    <div className="sidebar">
      {/* <h3>Overview</h3> */}
      <div className="sidebar-links">
        {links.map((item, idx) => (
          <div>
            <a href={item.link} key={idx}>
              {item.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  links: PropTypes.array,
}

export default Sidebar

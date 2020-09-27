import React from "react"

const Sidebar = () => {
  const links = [
    { name: "Course Site", link: "https://20f.comp110.com/" },
    {
      name: "Virtual Sitterson",
      link:
        "https://unc.zoom.us/j/97191695899?pwd=cERyWklHbkhQKzJjRko0V2lCZmVzQT09",
    },
    {
      name: "Shift Lead Form",
      link: "https://forms.gle/aUGtnnx8AGHcGEuE7",
    },
  ]

  return (
    <div className="sidebar">
      <h3>Links</h3>
      <div className="sidebar-links">
        {links.map(item => (
          <div>
            <a href={item.link} target="_blank" rel="noreferrer">
              {item.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar

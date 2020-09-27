import React from "react"

import { Layout, Sidebar } from "../components/"

const Home = () => {
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
    <Layout>
      <div>
        <h1 className="highlight">Welcome to the Team110 Site!</h1>
        <p className="outline">
          This is a hub for all things at the intersection of COMP110, COMP211,
          and literally everything else we do as a part of Team110.
        </p>
      </div>
      <Sidebar links={links} />
    </Layout>
  )
}
export default Home

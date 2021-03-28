import React from "react"

import { Layout, Sidebar } from "../components/"

const Home = () => {
  const links = [
    { name: "Course Site", link: "https://21s.comp110.com/" },
    {
      name: "Virtual Sitterson",
      link:
        "https://unc.zoom.us/j/97191695899?pwd=cERyWklHbkhQKzJjRko0V2lCZmVzQT09",
    },
    {
      name: "Shift Lead Form",
      link: "https://forms.gle/KhTTH4ij8K9rna5y5",
    },
    {
      name: "Team Career Site",
      link: "https://intranet.comp110.com/",
    },
    {
      name: "Outreach Form",
      link: "https://forms.gle/eu5BrMcUcfwbcGzb7",
    },
    {
      name: "Extension Form",
      link: "https://forms.gle/QAyht4zDBYxAbjrv8",
    },
    {
      name: "Sprint Proposal Form",
      link: "https://airtable.com/shrjNbTyxrhTjVGet",
    },
    {
      name: "Sprint Reflection Form",
      link: "https://airtable.com/shrlP7a9gTxrCLqHP",
    },
    {
      name: "Website Suggestion Form",
      link: "https://forms.gle/k28syrfsSS9uuKkH6",
    },
  ]
  return (
    <Layout>
      <div>
        <h1 className="highlight">Welcome to the Team110 Site!</h1>
        <p className="outline">
          This is a hub for all things at the intersection of COMP110 and
          literally everything else we do as a part of Team110.
        </p>
      </div>
      <Sidebar links={links} />
    </Layout>
  )
}
export default Home

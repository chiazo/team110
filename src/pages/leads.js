import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/"

const semester = () => {
  const month = new Date().getMonth()
  const year = new Date().getFullYear()
  return month > 6 ? `Fall ${year}` : `Spring ${year}`
}

const leaders = [
  { team: "Operations", leads: ["Rebekah"], guide: "/operations" },
  { team: "Outreach", leads: ["Lizzie", "Margaret"], guide: "/outreach" },
  { team: "ShiftOverflow", leads: ["Maddie"], guide: "/scheduling" },
  { team: "Tutoring", leads: ["Izzy", "Iris"], guide: "/tutoring" },
  { team: "Course Site", leads: ["Ezri"], guide: "/course-site" },
  { team: "Worksheets", leads: ["Jasper", "Megan"], guide: "/worksheets" },
  { team: "Mentorship", leads: ["Andrew"], guide: "/mentorship" },
  { team: "Exercises", leads: ["Marc"], guide: "" },
  { team: "Grading", leads: ["Marlee"], guide: "" },
]

const Leads = () => {
  return (
    <Layout>
      <div className="page">
        <h1 className="leads-title">Team Leads: {semester()}</h1>
        <div className="guide-list leads">
          {leaders.map(({ team, leads, guide }) => (
            <div className="guide">
              <div>
                <h3 className="guide-content">{team}</h3>
                <Link to={guide}>Lead Guide to {team}</Link>
              </div>

              <div className="thumbnail">
                <ul>
                  {leads.map(p => (
                    <li>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
export default Leads

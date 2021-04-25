import React from "react"

import { Layout } from "../components/"

const potential_features = [
  "filtering the guides",
  "adding search capability",
  "tags for each markdown file",
  "adding a directory of TAs by year",
]

const About = () => {
  return (
    <Layout>
      <div className="page">
        <h1>About the Team!</h1>
        <div>
          How did we all end up here.... well for starters, we have all taken
          COMP110!
        </div>

        <div>
          <h2>
            <u>Potential Site Features:</u>
          </h2>
          <ul>
            {potential_features.map((idea, idx) => (
              <ol key={idx}> - {idea}</ol>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}
export default About

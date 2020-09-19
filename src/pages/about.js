import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const About = () => {
  return (
    <Layout>
      <div>
        <h1>About Page</h1>
        <p>
          <Link to="/">Home</Link>
        </p>
      </div>
    </Layout>
  )
}
export default About

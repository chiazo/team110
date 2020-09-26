import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Button from "../components/button"

const About = () => {
  return (
    <Layout>
      <div>
        <h1>About Page</h1>
        <p>
          <Link to="/">Home</Link>
          <Button text="hi" />
        </p>
      </div>
    </Layout>
  )
}
export default About

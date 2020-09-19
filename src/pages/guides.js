import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Guides = () => {
  return (
    <Layout>
      <div>
        <h1>Guides</h1>
        <p>
          <Link to="/about">About</Link>
        </p>
      </div>
    </Layout>
  )
}
export default Guides

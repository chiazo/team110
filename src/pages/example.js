import React from "react"
import { Link } from "gatsby"
import Layout from "../templates/markdown"

const Example = () => {
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
export default Example

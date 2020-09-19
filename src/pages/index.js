import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const Home = () => {
  return (
    <Layout>
      <div>
        <h1>Hello Chiazo!</h1>
        <p>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </p>
      </div>
    </Layout>
  )
}
export default Home

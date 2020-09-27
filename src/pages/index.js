import React from "react"

import { Layout, Sidebar } from "../components/"

const Home = () => {
  return (
    <Layout>
      <div>
        <h1 className="highlight">Welcome to the Team110 Site!</h1>
        <p className="outline">
          This is a hub for all things at the intersection of COMP110, COMP211,
          and literally everything else we do as a part of Team110.
        </p>
      </div>
      <Sidebar />
    </Layout>
  )
}
export default Home

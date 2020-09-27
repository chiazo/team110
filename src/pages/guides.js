import React from "react"
import { Link, graphql } from "gatsby"

import { Layout } from "../components/"

const Guides = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <div className="page">
        <h1>Guides</h1>
        <div className="guide-list">
          {posts.map(post => (
            <Link to={post.node.frontmatter.slug}>
              <div key={post.node.id} className="guide">
                <div className="thumbnail">
                  <img src="https://picsum.photos/300/130" alt="" />
                </div>
                <div className="guide-content">
                  <h2>{post.node.frontmatter.title}</h2>
                  <div className="excerpt"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}
export default Guides

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            slug
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`

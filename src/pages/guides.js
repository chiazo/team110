import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

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
                  <Img
                    fixed={
                      post.node.frontmatter.thumbnail.childImageSharp.fixed
                    }
                  />
                </div>
                <div className="guide-content">
                  <h2>{post.node.frontmatter.title}</h2>
                  <div className="excerpt"></div>
                  {/* <Link to={post.node.frontmatter.slug}>Read More</Link> */}
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
            thumbnail {
              childImageSharp {
                fixed(width: 100, height: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`

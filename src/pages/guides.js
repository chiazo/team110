import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const Guides = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <div>
        <h1>Guides</h1>
        <div className="guide-list">
          {posts.map(post => (
            <div key={post.node.id} className="post">
              <div className="thumbnail">
                <Link to={post.node.frontmatter.slug}>
                  <Img
                    fixed={
                      post.node.frontmatter.thumbnail.childImageSharp.fixed
                    }
                  />
                </Link>
              </div>
              <div className="post-content">
                <h2>{post.node.frontmatter.title}</h2>
                <p>{post.node.frontmatter.date}</p>
                <div className="excerpt">
                  <p>{post.node.excerpt}</p>
                </div>
                <Link to={post.node.frontmatter.slug}>Read More</Link>
              </div>
            </div>
          ))}
        </div>
        <p>
          <Link to="/about">About</Link>
        </p>
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
                fixed(width: 200, height: 200) {
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

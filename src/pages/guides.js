import React from "react"
import { Link, graphql } from "gatsby"

import { Layout } from "../components/"

const hsv_to_rgb = (h, s, v) => {
  const h_i = parseInt(h * 6)
  const f = h * 6 - h_i
  const p = v * (1 - s)
  const q = v * (1 - f * s)
  const t = v * (1 - (1 - f) * s)
  let result = []
  if (h_i === 0) {
    result = [v, t, p]
  } else if (h_i === 1) {
    result = [q, v, p]
  } else if (h_i === 2) {
    result = [p, v, t]
  } else if (h_i === 3) {
    result = [p, q, v]
  } else if (h_i === 4) {
    result = [t, p, v]
  } else {
    result = [v, p, q]
  }
  const [r, g, b] = result
  return [parseInt(r * 256), parseInt(g * 256), parseInt(b * 256)]
}

const randomColor = () => {
  const golden_ratio_conjugate = 0.618033988749895
  let h = Math.random()
  h += golden_ratio_conjugate
  h %= 1
  const [r, g, b] = hsv_to_rgb(h, 0.5, 0.95)
  return `${r}, ${g}, ${b}`
}

const style = color => {
  return {
    backgroundColor: `rgb(${color})`,
  }
}

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
                <div className="thumbnail" style={style(randomColor())}></div>
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

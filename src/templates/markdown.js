import React from "react"
import { graphql } from "gatsby"

import { Layout, Sidebar } from "../components/"

const preprocessHeading = h => {
  let word = h.value.replace(/[^\w\s]/gi, "")
  word = word.split(" ").join("-")
  return {
    depth: h.depth,
    value: h.value,
    id: `#${word}`,
  }
}

const formatName = name => {
  if (name.indexOf("?") !== -1) {
    return name.split("?")[0] + "?"
  }
  return name.split(":")[0]
}

export default function Markdown({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const headings = markdownRemark.headings.map(preprocessHeading)

  const links = headings.map(item => {
    return {
      name: formatName(item.value),
      link: item.id,
    }
  })
  return (
    <Layout>
      <div className="markdown">
        <section>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.date}</p>

          <div
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </section>
        {frontmatter.author.length > 0 && (
          <section className="contributors">
            <h4>Contributors:</h4>
            {frontmatter.author.map((author, idx) => (
              <li key={idx}>
                {author} {idx + 1 !== frontmatter.author.length ? "  |" : ""}
              </li>
            ))}
          </section>
        )}
      </div>
      <Sidebar links={links} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      headings {
        depth
        value
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        author
      }
    }
  }
`

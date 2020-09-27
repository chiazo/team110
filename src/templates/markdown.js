import React from "react"
import { graphql } from "gatsby"
import slugs from "github-slugger"

import { Layout, Sidebar } from "../components/"

const preprocessHeading = h => {
  const cleanValue = h.value
    .replace(/<(\/)?[^>]+>/g, "")
    .replace(/\s{2,}/g, " ")
  return {
    depth: h.depth,
    value: cleanValue,
    id: slugs.slug(cleanValue),
  }
}

export default function Markdown({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const headings = markdownRemark.headings.map(preprocessHeading)

  const links = headings.map(item => {
    return {
      name: item.value,
      link: `#${item.id}`,
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
              <li>
                {author} {idx + 1 !== frontmatter.author.length ? "  |" : ""}
              </li>
            ))}
          </section>
        )}
      </div>
      {/* <Sidebar links={links} /> */}
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

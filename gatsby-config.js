/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/team110",
  siteMetadata: {
    title: "Team110",
    menuLinks: [
      {
        name: "about",
        link: "/about",
      },
      {
        name: "guides",
        link: "/guides",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-emojis`,
            options: {
              active: true,
              class: `emoji`,
              escapeCharacter: ``, // (default: '')
              // Select the size (available size: 16, 24, 32, 64)
              size: 64,
              styles: {
                display: `inline`,
                margin: `0`,
                "margin-top": `1px`,
                position: `relative`,
                top: `5px`,
                width: `25px`,
              },
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              maintainCase: true,
              elements: [`h1`, `h2`, `h3`, `h4`],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/pages/markdown`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}

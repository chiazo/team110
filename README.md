# Welcome to the Team110 Site

## Directory Layout

On the top level, there are three important files / directories:

1. `src/` - this is where all the content of the site lives
2. `gatsby-config.js` - this has the config settings for gatsby. Most importantly, this determines the path at which the site will be deployed, all the important Gatsby plugins needed (such as turning Markdown into pages and parsing emojis), and it stores the **array of links that make up the navigation bar**.
3. `package.json` - this file defines the commands that allow the site to be run locally and deployed. To run the code and see live changes to the site, run the command `npm install` and then `npm run start`. To deploy the site to github pages & create a static version of all your files (in the public folder) run `npm run deploy`.

## Site Content

Within the `src` folder there exist 4 important folders:

1. `components` - this folder contains React/Gatsby components that will be shared across multiple pages or the entire site. A great example is `footer.js`; each page on the site shares the same footer! The most important file here is `layout.js`. It is wrapped around every page and imports in a `Header` and `Footer` component.

   If you make a new component, be sure to _import_ and _export_ it into `index.js`. This will be helpful later.

2. `pages` - this folder contains two types of pages. The first are the markdown pages stored in `pages/markdown/`. This is where you'll add new, easy to write guides or proposals. Make sure to add a `slug`, `title`, `date`, and `author` at the top of your markdown files. Feel free to make new folders in `pages/markdown`, everything will be rendered recursively. If you want to change the location of the markdown, be sure to update the path in `gatsby-config.js` in the `gatsby-source-filesystem` plugin.

   The second type of page here are those that contain components in React/Gatsby. An example would be `guides.js` which renders the preview of every markdown file as a div with a title. This is where you'd go to make new pages that aren't based in markdown. The name of the component will be the page on the website. For example `about.js` exports the `About` component and is found at the `/about` path of the website.

3. `styles` - this folder contains all the CSS/SASS the site uses. As a matter of good practice, create a new file for each page you create beginning with an `_` and ending in `.scss` (for example: `_gallery.scss`). Then, import this new file into `styles.scss` using an `@` symbol (for example: `import @gallery`). SASS is super cool because you can use global variables and math to expand the capabilities of CSS. Please try to define a new color variable in `styles.scss` and reference it using a `$` symbol in subsequent `scss` files. Try to avoid inline styling when possible so that we know the best place to easily change the look of the site. A couple colors to be aware of are: `$base-color`, `$highlight`, `$purple`.

4. `templates` - this folder contains templates for specific types of Gatsby queries. Currently, it only has a template for `markdown` files. If you want to get rid of the date requirement for all `.md` files, you'd simply remove the line in this `markdown.js` file referencing `frontmatter.date`. It also contains some code to create the table of contents on each `markdown` page!

## How does the deploy work?

We are using a custom GitHub action for the deploy so that we can keep the team site's content in the team110 monorepo. The workflow is in `/.github/workflows/publish-team-site.yml`

## Credits

- [This really good tutorial on setting up Gatsby](https://dennytek.com/blog/personal-site-with-gatsby-part-1)

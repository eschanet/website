const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)


exports.createPages = async ({ graphql, actions, reporter }) => {
  const blogPost = path.resolve(`./src/components/Blog/BlogPost.js`)
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create blog posts pages.
  const posts = result.data.allMdx.edges

  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: blogPost,
      context: { id: node.id },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      name: "slug",
      node,
      value: slug,
    })
  }
}

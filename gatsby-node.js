/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);

exports.createPages = async function createPages({ actions, graphql, responder }) {
  try {
    const { createPage } = actions;
    const blogPostTemplate = path.resolve(`src/templates/BlogPost/index.tsx`);
    const result = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              html
              frontmatter {
                path
                date
                title
              }
            }
          }
        }
      }
    `);


    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }


    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          title: node.frontmatter.title,
          createdAt: new Date(node.frontmatter.date),
          html: node.html,
        },
      });
    });
  } catch (err) {
    throw err;
  }
}

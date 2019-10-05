
import { graphql } from 'gatsby';

import BlogPage from './Blg';

export default BlogPage;

export const query = graphql`
  query BlogPageQuery {
    site {
      siteMetadata {
        description
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 15
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;


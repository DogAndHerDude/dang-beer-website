
import Home from '../page_templates/Home';
import { graphql } from 'gatsby';

export default Home;
export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

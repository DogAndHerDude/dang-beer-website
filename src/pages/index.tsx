
import Home from './Home';
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


import { graphql } from 'gatsby';

import AboutPage from './About';

export default AboutPage;
export const query = graphql`
  query {
    profileImage: file(relativePath: { eq: "dominykas_bartkus_profile.png" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

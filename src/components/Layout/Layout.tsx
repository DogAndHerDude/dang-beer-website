/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Link } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

// Fonts
import 'typeface-rubik';

import { ILayoutProps } from './ILayout';

import Navigation from '../Navigation';
import MobileNavigation from '../MobileNavigation';


import './Layout.css';
import Logo from '../Logo';



export function Layout(props: ILayoutProps): React.ReactElement<ILayoutProps> {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);


  return (
    <>
      <Link to="/" title="Dang Beer Home">
        <Logo />
      </Link>
      <Navigation initiated={props.initiated} />
      <MobileNavigation />

      <main>
        {props.children}
      </main>
    </>
  );
}


export default React.memo(Layout);

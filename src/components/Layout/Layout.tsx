/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Fonts
import 'typeface-rubik';

import { ILayoutProps } from './ILayout';

import Navigation from '../Navigation';

import './Layout.css';



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
      <Navigation initiated={props.initiated} />
      <main>
        {props.children}
      </main>
    </>
  );
}


export default React.memo(Layout);

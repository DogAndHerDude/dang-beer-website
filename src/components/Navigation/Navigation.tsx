
import React from 'react';
import { Link } from 'gatsby';

import { NAVIGATION_CONFIG } from './config';

import './Navigation.css';
import { INavigationProps } from './INavigation';

export const BASE_CLASS = 'navigation';
export const LIST_ITEM_CLASS = `${BASE_CLASS}__item`;
export const LISTE_ITEM_CURRENT_CLASS = `${LIST_ITEM_CLASS}--current`;


export function Navigation(props: INavigationProps): React.ReactElement<INavigationProps> {

  function isCurrentRoute(): boolean {
    return NAVIGATION_CONFIG.routes.find(item => item.path === window.location.pathname) !== void 0;
  }


  function getItemClassname(): string {
    switch (isCurrentRoute()) {
      case true:
        return `${LIST_ITEM_CLASS} ${LISTE_ITEM_CURRENT_CLASS}`;
      default:
        return LIST_ITEM_CLASS;
    }
  }


  function mapRoutes(): Array<React.ReactNode> {
    return NAVIGATION_CONFIG.routes.map((entry, index) => {
      return (
        <li key={index} className={getItemClassname()}>
          <Link to={entry.path}>{entry.label}</Link>
          <div />
        </li>
      );
    });
  }

  // TODO: Append initiated class and animate in after a set timeout
  //       Timeout should be defined for each perticular route
  //       Some routes should not have a timeout all together perhaps?
  return (
    <nav className={BASE_CLASS}>
      <ul>
        {mapRoutes()}
      </ul>
    </nav>
  );
}


export default React.memo(Navigation);

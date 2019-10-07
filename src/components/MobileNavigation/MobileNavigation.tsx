
import React, { useState } from 'react';
import { Link } from '@reach/router';

import { NAVIGATION_CONFIG } from '../Navigation/config';
import { MenuIcon } from './MenuIcon';

import './MobileNavigation.css';


export const BASE_CLASS = 'mobile-navigation';
export const NAVIGATION_ACTIVE_CLASS = `${BASE_CLASS}--active`;
export const LIST_ITEM_CLASS = `${BASE_CLASS}__item`;
export const LISTE_ITEM_CURRENT_CLASS = `${LIST_ITEM_CLASS}--current`;



export function MobileNavigation(): React.ReactElement | null {

  const [active, setActive] = useState(false);

  function isCurrentRoute(): boolean {
    return false;
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


  function resolveBaseClassName(): string {
    switch (active) {
      case true:
        return `${BASE_CLASS} ${NAVIGATION_ACTIVE_CLASS}`;
      default:
        return BASE_CLASS;
    }
  }


  function onClick(): void {
    setActive(!active);
  }


  return (
    <nav className={resolveBaseClassName()}>
      <MenuIcon active={active} onClick={onClick} />

      <ul>
        {mapRoutes()}
      </ul>
    </nav>
  );
}


export default React.memo(MobileNavigation);

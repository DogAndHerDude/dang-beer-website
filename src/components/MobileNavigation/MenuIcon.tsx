
import React from 'react';

import { IMenuIconProps } from './IMenuIcon';

import './MenuIcon.css';

export const BASE_CLASS = 'navigation-trigger';
export const ACTIVE_CLASS = `${BASE_CLASS}--active`;


export function MenuIcon(props: IMenuIconProps): React.ReactElement<IMenuIconProps> {

  function resolveClassName(): string {
    switch (props.active) {
      case true:
        return `${BASE_CLASS} ${ACTIVE_CLASS}`;
      default:
        return BASE_CLASS;
    }
  }

  return (
    <div className={resolveClassName()} onClick={props.onClick}>
      <div />
      <div />
      <div />
    </div>
  );
}


import React from 'react';

import './Logo.css';

export const BASE_CLASS = 'dang-beer-logo';
export const BORDER_CLASS = `${BASE_CLASS}__border`;


export function Logo(): React.ReactElement<{}> {
  return (
    <div className={BASE_CLASS}>
      DNG<span>BEER</span>
    </div>
  );
}

export default React.memo(Logo);

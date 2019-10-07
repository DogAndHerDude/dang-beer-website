
import React from 'react';
import { Link } from 'gatsby';
import { GitHub } from 'react-feather';

import './GithubProjectLink.css';


export const BASE_CLASS = 'project-url';



export function GithubProjectLink(): React.ReactElement<{}> {
  return (
    <Link className={BASE_CLASS} to="https://github.com/TheImpressionist/dang-beer-website">
      <GitHub />
    </Link>
  );
}


export default React.memo(GithubProjectLink);

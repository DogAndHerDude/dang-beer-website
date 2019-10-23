
import { FixedObject } from 'gatsby-image';
import { RouteComponentProps } from '@reach/router';


export interface IProfileImageQuery {
  childImageSharp: {
    fixed: FixedObject | Array<FixedObject> | undefined;
  };
}


export interface IAboutPageData {
  data: {
    profileImage: IProfileImageQuery;
  };
}


export type IAboutPageProps = RouteComponentProps & IAboutPageData;

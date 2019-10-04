
import {
  Location,
  NavigateFn,
} from '@reach/router';



export interface IPageContext {
  createdAt: string;
  html: string;
  isCreatedByStatefulCreatePages: boolean;
  title: string;
}



export type IPathContext = IPageContext;


// TODO: Define base interface under models
//       This should just extend the base interface
export interface IBlogPostProps {
  children?: React.ReactNode | Array<React.ReactNode>;
  location: Location;
  navigate: NavigateFn;
  pageContext: IPageContext;
  pathContext: IPathContext;
  path: string;
  uri: string;
}

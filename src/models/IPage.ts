
import { Location, NavigateFn } from '@reach/router';


// TODO: extend with Key of C
export interface IPageContext<C> {
  isCreatedByStatefulCreatePages: boolean;
}


export interface IPathContext<C>  {
  isCreatedByStatefulCreatePages: boolean;
}


export interface IPage<T, C = any, CC = C> {
  children?: Array<React.ReactNode> | React.ReactNode;
  data?: T;
  location: Location;
  navigate: NavigateFn;
  pageContext: IPageContext<C>;
  pathContext: IPathContext<CC>;
  path: string;
  uri: string;
}

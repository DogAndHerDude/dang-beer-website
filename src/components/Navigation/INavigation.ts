


export interface INavigationRoute {
  path: string;
  label: string;
}


export interface INavigationConfig {
  routes: Array<INavigationRoute>;
}


export interface INavigationProps {
  initiated: boolean;
}

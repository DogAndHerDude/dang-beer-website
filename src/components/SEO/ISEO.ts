

export interface IMeta {
  name?: string | undefined;
  property?: string | undefined;
  content: string;
}



export interface ISEOProps {
  description: string;
  lang: string;
  title: string;
  meta: Array<IMeta>;
}



export interface IFrontmatterData {
  title: string;
  path: string;
  date: Date;
}



export interface IBlogPostData {
  node: {
    frontmatter: IFrontmatterData;
    html: string; 
  };
}



export interface IMarkdownRemark {
  edges: Array<IBlogPostData>;
}



export interface IBlogPostResponse {
  allMarkdownRemark: IMarkdownRemark;
}

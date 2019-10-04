

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



export interface IBlogPostResponse {
  allMarkdownRemark: {
    edges: Array<IBlogPostData>;
  };
}

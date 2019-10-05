
import { IBlogPost } from '../models/IBlogPost';
import { BlogPost } from '../models/BlogPost';


export class BlogService {
  public normalizePostsFromQuery(response: any): Array<IBlogPost> {
    return response.allMarkdownRemark.edges.map((entry: any) => new BlogPost(
      entry.node.frontmatter.title,
      entry.node.frontmatter.path,
      new Date(entry.node.frontmatter.date),
      entry.node.html,
    ));
  }
}

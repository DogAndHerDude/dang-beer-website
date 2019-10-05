
import { IBlogPost } from '../models/IBlogPost';
import { BlogPost } from '../models/BlogPost';
import { IMarkdownRemark } from '../models/IBlogPostResponse';


export class BlogService {

  public normalizePostsFromQuery(data: IMarkdownRemark): Array<IBlogPost> {
    if (!data) {
      return [];
    }

    return data.edges.map(entry => new BlogPost(
      entry.node.frontmatter.title,
      entry.node.frontmatter.path,
      new Date(entry.node.frontmatter.date),
      entry.node.html,
    ));
  }
}

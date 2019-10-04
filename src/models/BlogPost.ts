
import { IBlogPost } from './IBlogPost';




export class BlogPost implements IBlogPost {

  constructor (
    public readonly title: string,
    public readonly path: string,
    public readonly createdAt: Date,
    public readonly html: string,
  ) {}
}

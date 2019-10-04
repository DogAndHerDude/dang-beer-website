
import { IBlogPost } from '../../models/IBlogPost';


export type IPostMap = Record<number, Array<IBlogPost>>;


export interface IArticleListProps {
  options?: Array<IBlogPost>;
  onItemMouseOver?: (item: IBlogPost, evt: React.MouseEvent<HTMLElement>) => void;
  onItemMouseOut?: (item: IBlogPost, evt: React.MouseEvent<HTMLElement>) => void;
}

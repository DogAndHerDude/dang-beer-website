
import React, { useState, useEffect } from 'react';

import { IArticleListProps, IPostMap } from './IArticleList';
import { IBlogPost } from '../../models/IBlogPost';

import './ArticleList.css';

export const BASE_CLASS = 'article-list';
export const YEAR_LABEL_CLASS = `${BASE_CLASS}__date-label`;



export function ArticleList(props: IArticleListProps): React.ReactElement<IArticleListProps> {
  const [postMap, setPostMap] = useState<IPostMap>({});


  function mapPostsByDate(posts: Array<IBlogPost>): IPostMap {
    return posts.reduce<IPostMap>((accumulator, post) => {
      switch (true) {
        case accumulator[post.createdAt.getFullYear()] !== void 0:
          accumulator[post.createdAt.getFullYear()] = [
            ...accumulator[post.createdAt.getFullYear()],
            post,
          ];
          return accumulator;
        default:
          accumulator[post.createdAt.getFullYear()] = [post];
          return accumulator;
      }
    }, {});
  }


  function componentDidMount(): void {
    setPostMap(mapPostsByDate(props.options || []));
  }


  function mapPostsToNodes(posts: IPostMap): Array<React.ReactNode> {
    return Object.keys(posts).sort((a, b) => a > b ? -1 : 1).map((entry: string) => {
      const items = postMap[Number(entry)].map((post, index) => (
        <li key={index + 1}>
          <a href={post.path} title={post.title}>
            <div />
            <h3>{post.title}</h3>
            <div />
            <time dateTime={post.createdAt.toDateString()}>
              {post.createdAt.getDate()}/{post.createdAt.getMonth() + 1}
            </time>
          </a>
        </li>
      ));

      return [
        <div className={YEAR_LABEL_CLASS} key={0}>{entry}</div>,
        ...items,
      ];
    }).flat();
  }

  useEffect(componentDidMount, [props.options]);

  return (
    <ul className={BASE_CLASS}>
      {mapPostsToNodes(postMap)}
    </ul>
  );
}


export default React.memo(ArticleList);

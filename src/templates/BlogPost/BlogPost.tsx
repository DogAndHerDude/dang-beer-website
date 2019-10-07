
import React, { useState } from 'react';

import { IBlogPostProps } from './IBlogPost';

import Layout from '../../components/Layout';
import BackToTop from '../../components/BackToTop';

import './BlogPost.css';


export const BASE_CLASS = 'blog-post';
export const TITLE_CLASS = `${BASE_CLASS}__title`;
export const POST_CONTENT_CLASS = `${BASE_CLASS}__content`;


export function BlogPostTemplate(props: IBlogPostProps): React.ReactElement<IBlogPostProps> {
  const [initiated, setInit] = useState(false);

  function formatDateToStr(date: string): string {
    const asDate = new Date(date);

    return `${asDate.getFullYear()}-${asDate.getMonth() + 1}-${asDate.getDate()}`;
  }


  function formatDateToNode(date: string): React.ReactNode {
    const asDate = new Date(date);

    return (
      <>
        <div>{asDate.getFullYear()}</div>
        <div>{asDate.getDate()}/{asDate.getMonth() + 1}</div>
      </>
    );
  }


  return (
    <Layout initiated={initiated}>
      <div className={BASE_CLASS}>
        <article>
          <div className={TITLE_CLASS}>
            <h1>{props.pageContext.title}</h1>
            <div />
            <time dateTime={formatDateToStr(props.pageContext.createdAt)}>
              {formatDateToNode(props.pageContext.createdAt)}
            </time>
          </div>

          <div
            className={POST_CONTENT_CLASS}
            dangerouslySetInnerHTML={{ __html: props.pageContext.html }}
          />
        </article>

        <BackToTop appearThreshold={150} />
      </div>
    </Layout>
  );
}


export default React.memo(BlogPostTemplate);


import React, { useState } from 'react';

import SEO from '../../components/SEO';
import Layout from '../../components/Layout';
import ArticleList from '../../components/ArticleList';

import { IPage } from '../../models/IPage';

import { BlogService } from '../../services/BlogService';

import './Blog.css';


export const BASE_CLASS = 'blog-page';
export const CONTENT_CLASS = `${BASE_CLASS}__content`;


const blogService = new BlogService();


export function BlogPage(props: IPage<any>): React.ReactElement<IPage<any>> {
  const [initiated, setInit] = useState(false);

  return (
    <Layout initiated={initiated} >
      <SEO
        title="Dang Beer | Blog"
        description="blog"
        lang="en"
        meta={[]}
      />
      <div className={BASE_CLASS}>
        <div className={CONTENT_CLASS}>
          <h1>Recent Thoughts</h1>
          <ArticleList
            options={blogService.normalizePostsFromQuery(props.data !== void 0 ? props.data.allMarkdownRemark : void 0)}
          />
        </div>
      </div>
    </Layout>
  );
}



export default React.memo(BlogPage);

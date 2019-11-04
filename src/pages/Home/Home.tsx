
import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ChevronDown } from 'react-feather';

import { IPage } from '../../models/IPage';
import { IBlogPost } from '../../models/IBlogPost';
import { IBlogPostResponse } from '../../models/IBlogPostResponse';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import ArticleList from '../../components/ArticleList';
import { BlogPost } from '../../models/BlogPost';

import './Home.css';

export const BASE_CLASS = 'page-home';
export const LEADING_CLASS = `${BASE_CLASS}__lead`;
export const SCROLL_CLASS = `${BASE_CLASS}__to-blog`;
export const BLOG_CLASS = `${BASE_CLASS}__recent-posts`;
export const BLOG_CONTENT_CLASS = `${BASE_CLASS}__recent-posts-content`;
export const MOCK_SHADOW_CLASS = `${BASE_CLASS}__mock-shadow`;


export function HomePage(props: IPage<never>): React.ReactElement<IPage<never>> {

  const [initiated, setInit] = useState(false);
  const [posts, assignPosts] = useState<Array<IBlogPost>>([]);
  const blogPostResponse: IBlogPostResponse = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 6
      ) {
        edges {
          node {
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
            }
          }
        }
      }
    }
  `);

  function normalizePosts(response: IBlogPostResponse): Array<IBlogPost> {
    return response.allMarkdownRemark.edges.map(entry => new BlogPost(
      entry.node.frontmatter.title,
      entry.node.frontmatter.path,
      new Date(entry.node.frontmatter.date),
      entry.node.html,
    ));
  }


  function componentDidMount(): void {
    assignPosts(normalizePosts(blogPostResponse));
  }


  function scrollDown(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth',
      });
    }
  }

  
  useEffect(componentDidMount, []);


  return (
    <Layout initiated={initiated}>
      <SEO
        title="Dang Beer"
        description="placeholder"
        lang="en"
        meta={[]}
      />

      <div className={BASE_CLASS}>
        <section className={LEADING_CLASS}>
          <h1>What can I<br /> <span>brew</span> you for?</h1>
          <p>Brewing <b>beer</b> and <b>code</b></p>

          <div className={SCROLL_CLASS} onClick={scrollDown}>
            <ChevronDown size={48} />
          </div>
        </section>

        <section className={BLOG_CLASS}>
          <ArticleList
            options={posts}
          />
        </section>
      </div>
    </Layout>
  );
}

export default React.memo(HomePage);

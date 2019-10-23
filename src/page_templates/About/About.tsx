
import React, { useState } from 'react';
import GatsbyImage from 'gatsby-image';
import { Twitter, Instagram } from 'react-feather';

import SEO from '../../components/SEO';
import Layout from '../../components/Layout';

import { IAboutPageProps } from './IAbout';

import './About.css';
import { Link } from 'gatsby';

export const BASE_CLASS = 'about-page';
export const CONTENT_CLASS = `${BASE_CLASS}__content`;
export const DESCRIPTION_CLASS = `${BASE_CLASS}__description`;
export const IMAGE_CLASS = `${BASE_CLASS}__image`;
export const IMAGE_WRAPPER_CLASS = `${IMAGE_CLASS}-wrapper`;
export const SOCIAL_ICONS_CLASS = `${BASE_CLASS}__social-icons`;



export function AboutPage(props: IAboutPageProps): React.ReactElement<IAboutPageProps> | null {
  const [initiated, setInit] = useState(false);

  function getProfileImage(profileImage: IAboutPageProps['data']['profileImage']): React.ReactNode | null {
    if (!profileImage) {
      return null;
    }

    return (
      <GatsbyImage
        fixed={profileImage.childImageSharp.fixed}
        alt="Dominykas Bartkus chilling in Bremen"
      />
    );
  }


  return (
    <Layout initiated={initiated}>
      <SEO
        title="Dang Beer"
        description="placeholder"
        lang="en"
        meta={[]}
      />
      <div className={BASE_CLASS}>
        <section className={IMAGE_CLASS}>
          <div className={IMAGE_WRAPPER_CLASS}>
            {getProfileImage(props.data.profileImage)}
          </div>
          <div className={SOCIAL_ICONS_CLASS}>
            <div>
              <a href="https://www.instagram.com/dangbeer/" title="Dang Beer's instagram profile" target="_blank">
                <Instagram />
              </a>

              <a href="https://twitter.com/DominykasBartk1" title="Dang Beer's twitter profile" target="_blank">
                <Twitter />
              </a>
            </div>
          </div>
        </section>

        <section className={DESCRIPTION_CLASS}>
          <h1>What is <span>this</span>? <br /> Who am <span>I</span>?</h1>

          <p>
            By accident or not, you've found my personal blog about my homebrewing and code related things.
          </p>
          <p>
            I love figuring things out, breaking them down, re-assembling them. I guess that's part of why 
            I love programming and brewing beer - figuring things out to the smallest detail. The purpose of my blog 
            is to document my personal research on my way to finding the favoured taste for each style of beer that I enjoy. 
            And share some of my code ideas.
          </p>
          <p>
            I don't claim to know what I'm doing. So take anything you find here with a mountainous pile of salt.
          </p>
        </section>
      </div>
    </Layout>
  );
}


export default React.memo(AboutPage);


import React, { useState } from 'react';
import { Twitter, Instagram } from 'react-feather';

import SEO from '../../components/SEO';
import Layout from '../../components/Layout';

import ContactPageSEO from './ContactPageSEO';

import './Contact.css';

export const BASE_CLASS = 'contact-page';
export const CONTACT_CLASS = `${BASE_CLASS}__contacts`;
export const DESCRIPTION_CLASS = `${BASE_CLASS}__description`;


export function ContactPage(): React.ReactElement<{}> | null {
  const [initiated, setInit] = useState(false);

  return (
    <Layout initiated={initiated}>
      <SEO
        title="Dang Beer | Contact"
        description={ContactPageSEO.getDescription()}
        lang="en"
        meta={[]}
      />

      <div className={BASE_CLASS}>
        <section className={CONTACT_CLASS}>
          <div>
            <div>
              <a href="https://www.instagram.com/dangbeer/" title="Dang Beer's instagram profile" target="_blank">
                Instagram <Instagram />
              </a>
            </div>

            <div>
              <a href="https://twitter.com/DominykasBartk1" title="Dang Beer's twitter profile" target="_blank">
                Twitter <Twitter />
              </a>
            </div>
          </div>
        </section>

        <section className={DESCRIPTION_CLASS}>
          <h1>Wanna whisper little sweet nothings in my ear?</h1>
          
          <p>
            Or perhaps you want to give me advice, correct me, start a discuession or just tell me I'm plaing wrong or stupid?
            Well, then you're in luck! You can hit me up on my instagram or twitter.
          </p>
        </section>
      </div>
    </Layout>
  );
}

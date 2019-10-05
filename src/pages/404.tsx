import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Layout initiated={false}>
    <SEO
      title="404: Not found"
      description="Placeholder"
      lang="en"
      meta={[]}
    />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <p>Also, github sucks dick.</p>
  </Layout>
);

export default NotFoundPage;


import React, { useState } from 'react';

import Layout from '../../components/Layout';


export const BASE_CLASS = 'about-page';



export function AboutPage(): React.ReactElement<{}> | null {
  const [initiated, setInit] = useState(false);
  return (
    <>
      <Layout initiated={initiated}>
        <div className={BASE_CLASS}>
          Things are  covered in sheets here right now. Come back a bit later once I've cleaned up!
        </div>
      </Layout>
    </>
  );
}


export default React.memo(AboutPage);

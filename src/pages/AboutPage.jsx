import React, { Fragment } from 'react';
import { Seo } from '../Seo';

export const AboutPage = () => {
  return (
    <Fragment>
      <Seo
        title="SEO | About Page"
        description="Professional Product Designer"
        image={require('../img/covers/default-image.jpg')}
        type="Webpage"
        name="Ali"
      />
      <h1>About Page</h1>
    </Fragment>
  );
};

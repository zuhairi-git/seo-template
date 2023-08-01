import React, { Fragment } from 'react';
import { Seo } from '../Seo';

export const HomePage = () => {
  return (
    <Fragment>
      <Seo
        title="SEO | Home Page"
        description="Professional Product Designer"
        type="Webpage"
        image="./logo512.png"
        name="Ali"
      />
      <h1>Home Page</h1>
    </Fragment>
  );
};


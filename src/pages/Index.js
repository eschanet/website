import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Eric Schanet's personal website. New York based Stanford ICME graduate, "
      + 'VP of Engineering at Smile Identity, co-founder of Arthena and Matroid, and YC Alumni.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Hi there</Link>
          </h2>
          <p>
            A simple ReactJS site deployed to AWS using Github actions.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my personal website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>.
      </p>
      <p>
        {' '}
        Source available{' '}
        <a href="https://github.com/eschanet/website">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;

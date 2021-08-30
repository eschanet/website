import React from 'react';
import { Link } from 'gatsby';

import Main from "../components/main";

const Index = () => (
  <Main
    description={"Eric Schanet's personal website. Munich based research fellow in High Energy Physics."}
  >
    <article className="project" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            A responsive, statically-generated,
            react application written with modern Javascript.
          </p>
        </div>
      </header>
      <p> Welcome to my personal website. Please feel free to read more <Link to="/about">about me</Link>.
        You can also check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        {/* view <Link to="/stats">site statistics</Link>, {' '} */}
        or just <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/eschanet/website.git">on my Github page</a>.</p>
    </article>
  </Main>
);

export default Index;

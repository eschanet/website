import React from 'react';
import { Link } from "gatsby";

import Main from "../components/main"
import Seo from "../components/seo"

import Personal from '../components/Stats/Personal';
import Site from '../components/Stats/Site';

const Stats = () => (
  <Main
    title="Stats"
    description="Some statistics about Eric Schanet"
  >
    <Seo title="Stats" />
    <article className="project" id="stats">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/stats">Stats</Link></h2>
        </div>
      </header>
      <Personal />
      <Site />
    </article>
  </Main>
);

export default Stats;

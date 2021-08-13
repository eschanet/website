import React from 'react';
import { Link } from "gatsby";

import Main from "../components/main"
import Seo from "../components/seo"

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main
    title="Projects"
    description="Learn about Eric Schanet's projects."
  >
    <Seo title="Projects" />
    <article className="project" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
          <p>
            A random selection of projects I have worked on{' '}
            outside of my main research and work.
          </p>
        </div>
      </header>
      <div className="projects">
        {data.map((project) => (
          <Cell
            data={project}
            key={project.title}
          />
        ))}
      </div>
    </article>
  </Main>
);

export default Projects;

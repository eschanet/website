import React from 'react';
import { Link, graphql } from "gatsby";
import Main from "../components/main"
import Seo from "../components/seo"

import ProjectCell from '../components/Projects/ProjectCell';

const ProjectsIndex = ({ data }) => {
  const { edges: projects } = data.allMdx
  return (
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
        {projects.map(({ node: project}) => (
          <ProjectCell
            data={project}
            key={project.frontmatter.title}
          />
        ))}
      </div>
    </article>
  </Main>
)}

export default ProjectsIndex;


export const pageQuery = graphql`
query {
  allMdx(
  filter: {
    fileAbsolutePath: { regex: "/projects/" }
    frontmatter: { visible: { eq: true } }
  }
  sort: { fields: [frontmatter___position], order: ASC }
  ) {
    edges {
      node {
        body
        frontmatter {
          title
          date
          link
          hero {
            childImageSharp {
              fluid(maxWidth: 750) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`


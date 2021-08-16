import React from 'react';
import PropTypes from 'prop-types';

import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { graphql, Link } from 'gatsby';
import Img from "gatsby-image";
import dayjs from 'dayjs';

const shortcodes = { Link } // Provide common components here

const ProjectCell = ({ data }) => {

  const { body, frontmatter } = data
  // const image = getImage(frontmatter.hero)

  return (
  <div className="project-container">
    <article className="mini-project">
      <header>
        <h3><a href={frontmatter.link}>{frontmatter.title}</a></h3>
        <time className="published">{dayjs(frontmatter.date).format('MMMM, YYYY')}</time>
      </header>
      {/* <a href={frontmatter.link} className="image"> */}
      <Img
        className="image"
        fluid={frontmatter.hero.childImageSharp.fluid}
      />
      {/* <Img fluid={frontmatter.hero.childImageSharp.fluid} /> */}
      {/* </a> */}
      <div className="description">
      <MDXRenderer>{body}</MDXRenderer>
      </div>
    </article>
  </div>
)};

ProjectCell.propTypes = {
  data: PropTypes.shape({
    body: PropTypes.string.isRequired,
    frontmatter: PropTypes.object.isRequired,
  }).isRequired,
};

export default ProjectCell;

// export const pageQuery = graphql`
//   query ProjectQuery($id: String) {
//     mdx(id: { eq: $id }) {
//       id
//       body
//       frontmatter {
//         title
//         date
//         link
//         hero {
//           childImageSharp {
//             gatsbyImageData(
//               width: 200
//               placeholder: BLURRED
//               formats: [AUTO, WEBP, AVIF]
//             )
//           }
//         }
//       }
//     }
//   }
// `

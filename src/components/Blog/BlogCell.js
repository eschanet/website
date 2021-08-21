import React from 'react';
import PropTypes from 'prop-types';

import { MDXRenderer } from "gatsby-plugin-mdx";

import { Link } from 'gatsby';
import Img from "gatsby-image";
import dayjs from 'dayjs';

const shortcodes = { Link } // Provide common components here

const BlogCell = ({ data }) => {

  const { frontmatter, excerpt, fields } = data
  // const image = getImage(frontmatter.hero)

  return (
  <div className="post-container">
    <article className="mini-post">
      <header>
        <h3><a href={frontmatter.link}>{frontmatter.title}</a></h3>
        <p>
          about {fields.readingTime.text} &#8226; {dayjs(frontmatter.date).format('MMMM, YYYY')}
        </p>
      </header>
      <div className="description">
        <p>{excerpt}</p>
      </div>
    </article>
  </div>
)};

BlogCell.propTypes = {
  data: PropTypes.shape({
    body: PropTypes.string.isRequired,
    frontmatter: PropTypes.object.isRequired,
  }).isRequired,
};

export default BlogCell;

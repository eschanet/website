import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MiniPost = ({ data }) => (
  <div className="card">
    <img src={data.cover_image} alt="" />
    <div className="post-date"> Posted on {data.date}</div>
    <h3>{data.title}</h3>
    <p>{data.excerpt}</p>
    <Link to={`/blog/${data.slug}`} key={data.slug}>
      <h3>Read More</h3>
    </Link>
  </div>
);

MiniPost.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    excerpt: PropTypes.string,
    slug: PropTypes.string,
    cover_image: PropTypes.string,
    date: PropTypes.number,
  })),
};

MiniPost.defaultProps = {
  data: [],
};

export default MiniPost;

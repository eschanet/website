import React from 'react';
import PropTypes from 'prop-types';

const Paper = ({ data }) => (
  <article className="paper-container">
    <header>
      <p className="paper">
        <span className="title">
          {data.author}
        </span>
        &nbsp;{data.title}
      </p>
      <p className="doi"><a href={data.doi_url}>{data.doi}</a>, <a href={data.arxiv_url}>{data.arxiv}</a></p>
    </header>
  </article>
);

Paper.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    arxiv: PropTypes.string.isRequired,
    arxiv_url: PropTypes.string.isRequired,
    doi: PropTypes.string.isRequired,
    doi_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Paper;

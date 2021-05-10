import React from 'react';
import PropTypes from 'prop-types';

const Talk = ({ data }) => (
  <article className="talk-container">
    <header>
      <p className="talk">
        <span className="conference">
          {data.year} &bull; {data.conference} &bull;
        </span>
        &nbsp;{data.title}
      </p>
      <p className="material"><a href={data.link}>{data.prettyLink}</a></p>
    </header>
  </article>
);

Talk.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    conference: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    prettyLink: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default Talk;

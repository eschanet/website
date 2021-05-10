import React from 'react';
import PropTypes from 'prop-types';

import Talk from './Conference/Talk';

const Conference = ({ data }) => (
  <div className="conference">
    <div className="link-to" id="conferences" />
    <div className="title">
      <h3>Relevant Talks and Conferences</h3>
    </div>
    {data.map((talk) => (
      <Talk
        data={talk}
        key={talk.title}
      />
    ))}
  </div>
);

Conference.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    conference: PropTypes.string,
    link: PropTypes.string,
    prettyLink: PropTypes.string,
    year: PropTypes.number,
  })),
};

Conference.defaultProps = {
  data: [],
};

export default Conference;

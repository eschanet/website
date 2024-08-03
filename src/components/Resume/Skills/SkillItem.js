import React from 'react';
import PropTypes from 'prop-types';

const SkillItem = ({ data }) => (
  <div className="skillitem">
    {data.title}
  </div>
);

SkillItem.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default SkillItem;

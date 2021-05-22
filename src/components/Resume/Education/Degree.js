import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => {
  if (data.second_school) {
    return (
      <article className="degree-container">
        <header>
          <h4 className="degree">{data.degree}</h4>
          <p className="school">
            <a href={data.link}>{data.school}</a>, {data.from_year}&ndash;{data.to_year}{'\n'}
            <a href={data.second_link}>{data.second_school}</a>,{' '}
            {data.second_from_year}&ndash;{data.second_to_year}
          </p>
        </header>
      </article>
    );
  }
  return (
    <article className="degree-container">
      <header>
        <h4 className="degree">{data.degree}</h4>
        <p className="school">
          <a href={data.link}>{data.school}</a>, {data.from_year}&ndash;{data.to_year}
        </p>
      </header>
    </article>
  );
};

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    from_year: PropTypes.number.isRequired,
    to_year: PropTypes.number.isRequired,
    second_link: PropTypes.string.isRequired,
    second_school: PropTypes.string.isRequired,
    second_from_year: PropTypes.number.isRequired,
    second_to_year: PropTypes.number.isRequired,
  }).isRequired,
};

export default Degree;

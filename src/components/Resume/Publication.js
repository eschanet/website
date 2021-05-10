import React from 'react';
import PropTypes from 'prop-types';

import Paper from './Publication/Paper';

const Publication = ({ data }) => (
  <div className="publication">
    <div className="link-to" id="publications" />
    <div className="title">
      <h3>Relevant publications</h3>
    </div>
    <div className="text">
      <p>
        A full list of publications is available through <a href="https://scholar.google.com/citations?user=2CTMLEoAAAAJ&hl=de&oi=ao">Google Scholar</a>,{' '}
        <a href="https://inspirehep.net/authors/1756187?ui-citation-summary=true">InspireHEP</a>{' '}
        or <a href="https://orcid.org/0000-0002-8719-4682">ORCID</a>.
      </p>
    </div>
    {data.map((paper) => (
      <Paper
        data={paper}
        key={paper.doi}
      />
    ))}
  </div>
);

Publication.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    title: PropTypes.string,
    arxiv: PropTypes.string,
    arxiv_url: PropTypes.string,
    doi: PropTypes.string,
    doi_url: PropTypes.string,
  })),
};

Publication.defaultProps = {
  data: [],
};

export default Publication;

import React from 'react';
import Table from './Table';
import data from '../../../content/stats/personal';

const PersonalStats = () => (
  <>
    <h3>Some stats about me</h3>
    <Table data={data} />
  </>
);

export default PersonalStats;

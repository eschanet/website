import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Conference from '../components/Resume/Conference';
import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Publication from '../components/Resume/Publication';
import References from '../components/Resume/References';
import Skills from '../components/Resume/Skills';

import degrees from '../data/resume/degrees';
import talks from '../data/resume/talks';
import papers from '../data/resume/papers';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';

const sections = [
  'Education',
  'Experience',
  'Publications',
  'Conferences',
  'Skills',
  'References',
];

const { PUBLIC_URL } = process.env;

const Resume = () => (
  <Main
    title="Resume"
    description="Eric Schanet's Resume."
  >
    <article className="project" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      <h6>
        A PDF version of the resume is available to <a href={`${PUBLIC_URL}/resume/Resume_EricSchanet.pdf`}>download</a>.
      </h6>
      <Education data={degrees} />
      <Experience data={positions} />
      <Publication data={papers} />
      <Conference data={talks} />
      <Skills skills={skills} categories={categories} />
      {/* <Courses data={courses} /> */}
      <References />

    </article>
  </Main>
);

export default Resume;

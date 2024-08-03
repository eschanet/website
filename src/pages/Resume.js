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

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={positions} />,
  Publication: () => <Publication data={papers} />,
  Conference: () => <Conference data={talks} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  References: () => <References />,
};

const { PUBLIC_URL } = process.env;

const Resume = () => (
  <Main
    title="Resume"
    description="Eric Schanet's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>
            <Link to="resume">Resume</Link>
          </h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      <h6>
        A PDF version of the resume is available to <a href={`${PUBLIC_URL}/resume/Resume_EricSchanet.pdf`}>download</a>.
      </h6>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;

import React from 'react';
import { Link, graphql } from "gatsby";

import Main from "../components/main"
import Seo from "../components/seo"

import Conference from '../components/Resume/Conference';
import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Publication from '../components/Resume/Publication';
import References from '../components/Resume/References';
import Skills from '../components/Resume/Skills';

import degrees from '../../content/resume/degrees';
import talks from '../../content/resume/talks';
import papers from '../../content/resume/papers';
import positions from '../../content/resume/positions';
import { skills, categories } from '../../content/resume/skills';

import resumeFile from '../../content/resume/Resume_EricSchanet_DS.pdf' 

const sections = [
  'Education',
  'Experience',
  'Publications',
  'Conferences',
  'Skills',
  'References',
];


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
        A PDF version of the resume is available to <a href={resumeFile}>download</a>.
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

import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env;

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Eric Schanet</h2>
        <p><a href="mailto:eric.schanet@gmail.com">eric.schanet@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Eric. I like science, data and tinkering with data in the name of science.
        I am a research fellow and Ph.D. candidate in particle physics at the <a href="https://www.uni-muenchen.de/index.html">Ludwig-Maximilians-University Munich</a>.
        I work at the <a href="https://atlas.cern/">ATLAS experiment</a> at the Large Hadron Collider at <a href="https://home.cern/">CERN</a>, where I perform
        large-scale statistical data analysis to search for new physics phenomena.
        I am also a co-founder of <a href="https://www.weabe.lu/">Weabe</a> where I worked as a developer and consultant as well as
        the co-founder of <a href="https://codelight.lu/">Codelight</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Eric Schanet <Link to="/">eschanet.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;

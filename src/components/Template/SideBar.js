import React from 'react';
import { Link } from "gatsby";

import ContactIcons from '../Contact/ContactIcons';

import profile from '../../images/me_icon.jpg';

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={profile} alt="Eric Schanet profile picture" />
      </Link>
      <header>
        <h2>Eric Schanet</h2>
        <p><a href="mailto:eric.schanet@gmail.com">eric.schanet@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Eric, a particle physicist with 3+ years of experience
        in applying data science techniques, machine learning algorithms and statistical
        methods to scientific data.
        I am a research fellow at the <a href="https://www.uni-muenchen.de/index.html">Ludwig-Maximilians-University Munich</a>{' '}
        and work at the <a href="https://atlas.cern/">ATLAS experiment</a> at the Large Hadron Collider at <a href="https://home.cern/">CERN</a>.
        I am also a co-founder of <a href="https://www.weabe.lu/">Weabe</a> where I worked as a software engineer and consultant.
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

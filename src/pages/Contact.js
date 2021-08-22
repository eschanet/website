import React from 'react';
import { Link, graphql } from 'gatsby';

import Main from '../components/main';
import Seo from '../components/seo';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Eric Schanet via email @ eric.schanet@gmail.com"
  >
    <Seo title="Contact" />
    <article className="project" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <EmailLink />
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;

import React from 'react';
import { Link } from 'gatsby';

import Hamburger from './Hamburger';
import routes from '../../../content/routes';

// Websites Navbar, displays routes defined in 'content/routes'
const Navigation = () => (
  <header id="header">
    <h1 className="index-link">
      {routes.filter((l) => l.index).map((l) => (
        <Link key={l.label} to={l.path}>{l.label}</Link>
      ))}
    </h1>
    <nav className="links">
      <ul>
        {routes.filter((l) => !l.index).map((l) => (
          <li key={l.label}>
            <Link to={l.path}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
    <Hamburger />
  </header>
);

export default Navigation;

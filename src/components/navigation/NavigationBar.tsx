import React from "react";
import { NavLink } from "react-router-dom";

export default function NavigationBar(): JSX.Element {
  return (
    <header>
      <nav className="react-nav">
        <ul>
          <li>
            <NavLink to="/about" activeClassName="activeNavSection">
              Hi, I&apos;m Darga.
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" activeClassName="activeNavSection">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName="activeNavSection">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" activeClassName="activeNavSection">
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="activeNavSection">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

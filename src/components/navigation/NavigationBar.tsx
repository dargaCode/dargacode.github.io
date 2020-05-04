import React from "react";
import { NavLink } from "react-router-dom";
import "../../_general.scss";
import "./_navigation.scss";

export default function NavigationBar(): JSX.Element {
  return (
    <nav className="portfolio-nav">
      <div className="container">
        <div className="nocontent">
          {/* ignored by google */}
          <h2 className="invisible-but-outline-readable">Navigation</h2>
        </div>

        <div className="nav-logo">
          <NavLink to="/about" activeClassName="activeNavSection">
            Hi, I&apos;m Darga.
          </NavLink>
        </div>

        <ul>
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
      </div>
    </nav>
  );
}

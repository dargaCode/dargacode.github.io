import React from "react";
import { NavLink } from "react-router-dom";
import "../../config/_general.scss";
import styles from "./NavigationBar.module.scss";

export default function NavigationBar(): JSX.Element {
  return (
    <nav className={styles.bar}>
      <div className="nocontent">
        {/* ignored by google */}
        <h2 className={styles.invisibleButOutlineReadable}>Navigation</h2>
      </div>
      <div className={styles.container}>
        <NavLink to="/about" activeClassName="activeNavSection">
          <div className={styles.about}>Hi, I&apos;m Darga.</div>
        </NavLink>

        <ul>
          <li className={styles.button}>
            <NavLink to="/skills" activeClassName="activeNavSection">
              Skills
            </NavLink>
          </li>

          <li className={styles.button}>
            <NavLink to="/projects" activeClassName="activeNavSection">
              Projects
            </NavLink>
          </li>

          <li className={styles.button}>
            <NavLink to="/resume" activeClassName="activeNavSection">
              Resume
            </NavLink>
          </li>

          <li className={styles.button}>
            <NavLink to="/contact" activeClassName="activeNavSection">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

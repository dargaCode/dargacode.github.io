import React from "react";
import { NavLink } from "react-router-dom";
import "../../base/_base.scss";
import styles from "./NavigationBar.module.scss";

export default function NavigationBar(): JSX.Element {
  return (
    <nav className={styles.navigationBar}>
      <div className={styles.container}>
        <div className="nocontent">
          {/* ignored by google */}
          <h2 className={styles.invisibleButOutlineReadable}>Navigation</h2>
        </div>

        <NavLink to="/about" activeClassName="activeNavSection">
          <div className={styles.navLogo}>Hi, I&apos;m Darga.</div>
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

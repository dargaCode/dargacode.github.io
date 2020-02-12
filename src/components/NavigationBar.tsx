import React from "react";
import { NavLink } from "react-router-dom";

export default function NavigationBar(): JSX.Element {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/home" activeClassName="activeNavSection">
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="activeNavSection">
              about
            </NavLink>
          </li>
          <li>
            <NavLink to="/other" activeClassName="activeNavSection">
              other?
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

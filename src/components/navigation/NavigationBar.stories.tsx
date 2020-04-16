import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./NavigationBar";

export default {
  title: "Navigation/Navigation Bar",
  component: NavigationBar
};

export const Basic = (): JSX.Element => (
  <Router>
    <NavigationBar />
  </Router>
);

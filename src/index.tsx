import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./main.scss";
import "./css/custom-icons.scss";
import "./css/font-awesome.min.scss";
import "./css/style.scss";
import icon from "./icon.png";
import NavigationBar from "./components/navigation/NavigationBar";
import HelloWorld from "./components/helloWorld/HelloWorld";

require("./js/study-duration.js");
require("./js/skills.js");
require("./js/projects.js");

function App(): JSX.Element {
  return (
    <Router>
      <div className="router-container">
        <header>
          <NavigationBar />
        </header>
        <Switch>
          <Route path="/about">
            <div>
              <h2>About Me</h2>
            </div>
          </Route>

          <Route path="/skills">
            <div>
              <h2>Skills</h2>
            </div>
          </Route>

          <Route path="/projects">
            <div>
              <h2>Projects</h2>
            </div>
          </Route>

          <Route path="/resume">
            <div>
              <h2>Resume</h2>
            </div>
          </Route>

          <Route path="/contact">
            <div>
              <h2>Contact</h2>
            </div>
          </Route>
        </Switch>

        <HelloWorld descriptor="Webpack" />
        <img src={icon} alt="a desert at night" />
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./fonts/custom-icons.scss";
import "../vendor/font-awesome.min.scss";
import NavigationBar from "./components/navigation/NavigationBar";
import AboutSection from "./components/about/AboutSection";
import SkillsSection from "./components/skills/SkillsSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import ResumeSection from "./components/resume/ResumeSection";
import ContactSection from "./components/contact/ContactSection";

function App(): JSX.Element {
  return (
    <Router>
      <div className="router-container">
        <div id="nocontent">
          {/* ignored by google */}
          <h1 className="invisible-but-outline-readable">
            dargaCode - Darga Darga Programmer Portfolio
          </h1>
        </div>
        <header>
          <NavigationBar />
        </header>

        <Switch>
          <Route path="/about" component={AboutSection} />
          <Route path="/skills" component={SkillsSection} />
          <Route path="/projects" component={ProjectsSection} />
          <Route path="/resume" component={ResumeSection} />
          <Route path="/contact" component={ContactSection} />

          <Redirect from="/" to="about" />
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

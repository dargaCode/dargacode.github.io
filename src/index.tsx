import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./main.scss";
import icon from "./icon.png";
import NavigationBar from "./components/NavigationBar";
import HelloWorld from "./components/HelloWorld";
import HelloTypeScript from "./components/HelloTypeScript";

function App(): JSX.Element {
  const projectPath =
    process.env.NODE_ENV === "production" ? "/webpack-react-template/" : "/";

  return (
    <Router basename={projectPath}>
      <div>
        <header>
          <NavigationBar />
        </header>
        <Switch>
          <Route path="/home">
            <div>
              <h1>Home</h1>
            </div>
          </Route>

          <Route path="/about">
            <div>
              <h1>About</h1>
            </div>
          </Route>

          <Route path="/">
            <div>
              <h1>Default Route</h1>
            </div>
          </Route>
        </Switch>
        <HelloWorld descriptor="Webpack" />
        <HelloTypeScript compiler="TypeScript" framework="React" />
        <img src={icon} alt="a desert at night" />
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

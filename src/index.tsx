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
    <div />
    // <Router>
    //   <div className="router-container">
    //     <header>
    //       <NavigationBar />
    //     </header>
    //     <Switch>
    //       <Route path="/home">
    //         <div>
    //           <h2>Home</h2>
    //         </div>
    //       </Route>
    //
    //       <Route path="/about">
    //         <div>
    //           <h2>About</h2>
    //         </div>
    //       </Route>
    //
    //       <Route path="/">
    //         <div>
    //           <h2>Default Route</h2>
    //         </div>
    //       </Route>
    //     </Switch>
    //     <HelloWorld descriptor="Webpack" />
    //     <HelloTypeScript compiler="TypeScript" framework="React" />
    //     <img src={icon} alt="a desert at night" />
    //   </div>
    // </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

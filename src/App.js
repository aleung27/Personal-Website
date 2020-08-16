import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route render={() => <Redirect to={{ pathname: "/" }} />} />
      </Switch>
    </main>
  );
};

export default App;

import React from "react";
import "./index.css";
import Home from "./Home";
import { Switch, Route, Redirect } from "react-router-dom";
import Algorithms from "./Algorithms";
import Contact from "./Contact";
import About from "./About";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/algo" component={Algorithms}></Route>
        <Route exact path="/algorithm" component={Algorithms}></Route>
        <Route exact path="/algorithms" component={Algorithms}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;

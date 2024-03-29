import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import Home from "./Home";
import { Switch, Route, Redirect } from "react-router-dom";
import Algorithms from "./Algorithms";
import Contact from "./Contact";
import About from "./About";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Bubble from "./algos/Bubble";
import Selection from "./algos/Selection";
import Insertion from "./algos/Insertion"
import MergeSort from "./algos/MergeSort"
import QuickSort from "./algos/QuickSort"

const App = () => {
  return (
    <>
    
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/algo" component={Algorithms}></Route>
        <Route exact path="/algorithm" component={Algorithms}></Route>
        <Route exact path="/algorithm/bubble" component={Bubble}></Route>
        <Route exact path="/algorithm/Selection" component={Selection}></Route>
        <Route exact path="/algorithm/Insertion" component={Insertion}></Route>
        <Route exact path="/algorithm/MergeSort" component={MergeSort}></Route>
        <Route exact path="/algorithm/QuickSort" component={QuickSort}></Route>
        <Route exact path="/algorithms" component={Algorithms}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Redirect to="/" />
      </Switch>
      <Footer/>

    </>
  );
};

export default App;
